__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    400
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        22,
        62
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "range": [
            34,
            35
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 3
            }
          }
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"number\"",
                "value": "number",
                "range": [
                  38,
                  46
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 3
                  },
                  "start": {
                    "column": 16,
                    "line": 3
                  }
                }
              },
              "range": [
                38,
                46
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              }
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"null\"",
                "value": "null",
                "range": [
                  49,
                  55
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 3
                  },
                  "start": {
                    "column": 27,
                    "line": 3
                  }
                }
              },
              "range": [
                49,
                55
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 3
                },
                "start": {
                  "column": 27,
                  "line": 3
                }
              }
            },
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    58,
                    59
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 3
                    },
                    "start": {
                      "column": 36,
                      "line": 3
                    }
                  }
                },
                "range": [
                  58,
                  59
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 3
                  },
                  "start": {
                    "column": 36,
                    "line": 3
                  }
                }
              },
              "range": [
                58,
                61
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 3
                },
                "start": {
                  "column": 36,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            38,
            61
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 3
            },
            "start": {
              "column": 16,
              "line": 3
            }
          }
        },
        "range": [
          29,
          62
        ],
        "loc": {
          "end": {
            "column": 40,
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
          "column": 40,
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
        64,
        182
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "F",
          "optional": false,
          "range": [
            76,
            77
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 5
            },
            "start": {
              "column": 12,
              "line": 5
            }
          }
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSNullKeyword",
            "range": [
              83,
              87
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 5
              },
              "start": {
                "column": 19,
                "line": 5
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
                96,
                97
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 5
                },
                "start": {
                  "column": 32,
                  "line": 5
                }
              }
            },
            "range": [
              96,
              97
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 5
              },
              "start": {
                "column": 32,
                "line": 5
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
                "name": "T",
                "optional": false,
                "range": [
                  138,
                  139
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 7
                  },
                  "start": {
                    "column": 6,
                    "line": 7
                  }
                }
              },
              "range": [
                138,
                139
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 7
                },
                "start": {
                  "column": 6,
                  "line": 7
                }
              }
            },
            "extendsType": {
              "type": "TSNumberKeyword",
              "range": [
                148,
                154
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 7
                },
                "start": {
                  "column": 16,
                  "line": 7
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "range": [
                176,
                181
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 9
                },
                "start": {
                  "column": 6,
                  "line": 9
                }
              }
            },
            "trueType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"number\"",
                "value": "number",
                "range": [
                  161,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 8
                  },
                  "start": {
                    "column": 6,
                    "line": 8
                  }
                }
              },
              "range": [
                161,
                169
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 8
                },
                "start": {
                  "column": 6,
                  "line": 8
                }
              }
            },
            "range": [
              138,
              181
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 7
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
                    106,
                    122
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          118,
                          121
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
                                119,
                                120
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 6
                                },
                                "start": {
                                  "column": 21,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              119,
                              120
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 6
                              },
                              "start": {
                                "column": 21,
                                "line": 6
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 6
                          },
                          "start": {
                            "column": 20,
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
                          107,
                          118
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 6
                          },
                          "start": {
                            "column": 9,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        107,
                        121
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 6
                        },
                        "start": {
                          "column": 9,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "range": [
                    105,
                    106
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 6
                    },
                    "start": {
                      "column": 7,
                      "line": 6
                    }
                  }
                },
                "range": [
                  105,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 6
                  },
                  "start": {
                    "column": 7,
                    "line": 6
                  }
                }
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"null\"",
                  "value": "null",
                  "range": [
                    124,
                    130
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 6
                    },
                    "start": {
                      "column": 26,
                      "line": 6
                    }
                  }
                },
                "range": [
                  124,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 6
                  },
                  "start": {
                    "column": 26,
                    "line": 6
                  }
                }
              }
            ],
            "range": [
              104,
              131
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "range": [
            83,
            181
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 9
            },
            "start": {
              "column": 19,
              "line": 5
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 16,
              "line": 5
            },
            "start": {
              "column": 13,
              "line": 5
            }
          },
          "range": [
            77,
            80
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
                  78,
                  79
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 5
                  },
                  "start": {
                    "column": 14,
                    "line": 5
                  }
                }
              },
              "out": false,
              "range": [
                78,
                79
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              }
            }
          ]
        },
        "range": [
          71,
          182
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 9
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
          "column": 12,
          "line": 9
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
        184,
        231
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "G",
          "optional": false,
          "range": [
            196,
            197
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 11
            },
            "start": {
              "column": 12,
              "line": 11
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
                  217,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 11
                  },
                  "start": {
                    "column": 33,
                    "line": 11
                  }
                }
              },
              "range": [
                217,
                218
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 11
                },
                "start": {
                  "column": 33,
                  "line": 11
                }
              }
            },
            "range": [
              211,
              218
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 11
              },
              "start": {
                "column": 27,
                "line": 11
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "range": [
              206,
              207
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 11
              },
              "start": {
                "column": 22,
                "line": 11
              }
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                222,
                228
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
                        225,
                        226
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 11
                        },
                        "start": {
                          "column": 41,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      225,
                      226
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 11
                      },
                      "start": {
                        "column": 41,
                        "line": 11
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
                        223,
                        224
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 11
                        },
                        "start": {
                          "column": 39,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      223,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 11
                      },
                      "start": {
                        "column": 39,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    223,
                    227
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 11
                    },
                    "start": {
                      "column": 39,
                      "line": 11
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 11
                },
                "start": {
                  "column": 38,
                  "line": 11
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "range": [
                221,
                222
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 11
                },
                "start": {
                  "column": 37,
                  "line": 11
                }
              }
            },
            "range": [
              221,
              228
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 11
              },
              "start": {
                "column": 37,
                "line": 11
              }
            }
          },
          "range": [
            203,
            230
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 11
            },
            "start": {
              "column": 19,
              "line": 11
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 16,
              "line": 11
            },
            "start": {
              "column": 13,
              "line": 11
            }
          },
          "range": [
            197,
            200
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
                  198,
                  199
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 11
                  },
                  "start": {
                    "column": 14,
                    "line": 11
                  }
                }
              },
              "out": false,
              "range": [
                198,
                199
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
                }
              }
            }
          ]
        },
        "range": [
          191,
          231
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 11
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 47,
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
          245,
          270
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                251,
                252
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 4,
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
                  "column": 20,
                  "line": 14
                },
                "start": {
                  "column": 5,
                  "line": 14
                }
              },
              "range": [
                252,
                267
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      254,
                      260
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
                  },
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      263,
                      267
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 14
                      },
                      "start": {
                        "column": 16,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  254,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 20,
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
              251,
              268
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
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
            "column": 12,
            "line": 13
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K",
        "optional": false,
        "range": [
          243,
          244
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 13
          },
          "start": {
            "column": 10,
            "line": 13
          }
        }
      },
      "range": [
        233,
        270
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
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
            "name": "gK",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 17
                },
                "start": {
                  "column": 8,
                  "line": 17
                }
              },
              "range": [
                280,
                305
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
                      "name": "K",
                      "optional": false,
                      "range": [
                        298,
                        299
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
                      298,
                      299
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
                    292,
                    299
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 17
                    },
                    "start": {
                      "column": 20,
                      "line": 17
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "range": [
                    285,
                    288
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 17
                    },
                    "start": {
                      "column": 13,
                      "line": 17
                    }
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      302,
                      303
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 17
                      },
                      "start": {
                        "column": 30,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    302,
                    303
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 17
                    },
                    "start": {
                      "column": 30,
                      "line": 17
                    }
                  }
                },
                "range": [
                  282,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 17
                  },
                  "start": {
                    "column": 10,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              278,
              305
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 17
              },
              "start": {
                "column": 6,
                "line": 17
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    310,
                    311
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 17
                    },
                    "start": {
                      "column": 38,
                      "line": 17
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
                      "raw": "\"number\"",
                      "value": "number",
                      "range": [
                        314,
                        322
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 17
                        },
                        "start": {
                          "column": 42,
                          "line": 17
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"null\"",
                      "value": "null",
                      "range": [
                        324,
                        330
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 17
                        },
                        "start": {
                          "column": 52,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "range": [
                    313,
                    331
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 17
                    },
                    "start": {
                      "column": 41,
                      "line": 17
                    }
                  }
                },
                "range": [
                  310,
                  331
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 17
                  },
                  "start": {
                    "column": 38,
                    "line": 17
                  }
                }
              }
            ],
            "range": [
              308,
              333
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 17
              },
              "start": {
                "column": 36,
                "line": 17
              }
            }
          },
          "range": [
            278,
            333
          ],
          "loc": {
            "end": {
              "column": 61,
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
        272,
        334
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
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
                    "column": 13,
                    "line": 20
                  },
                  "start": {
                    "column": 11,
                    "line": 20
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  383,
                  386
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 20
                  },
                  "start": {
                    "column": 17,
                    "line": 20
                  }
                }
              },
              "range": [
                377,
                386
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 20
                }
              }
            },
            "range": [
              370,
              387
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "range": [
          364,
          389
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 28,
            "line": 19
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          345,
          348
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 19
          },
          "start": {
            "column": 9,
            "line": 19
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 23,
                "line": 19
              },
              "start": {
                "column": 17,
                "line": 19
              }
            },
            "range": [
              353,
              359
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  356,
                  359
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
                        357,
                        358
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
                      357,
                      358
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
                "name": "G",
                "optional": false,
                "range": [
                  355,
                  356
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 19
                  },
                  "start": {
                    "column": 19,
                    "line": 19
                  }
                }
              },
              "range": [
                355,
                359
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 19
                },
                "start": {
                  "column": 19,
                  "line": 19
                }
              }
            }
          },
          "range": [
            352,
            359
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 19
            },
            "start": {
              "column": 16,
              "line": 19
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 27,
            "line": 19
          },
          "start": {
            "column": 24,
            "line": 19
          }
        },
        "range": [
          360,
          363
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              362,
              363
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 19
              },
              "start": {
                "column": 26,
                "line": 19
              }
            }
          },
          "range": [
            362,
            363
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 19
            },
            "start": {
              "column": 26,
              "line": 19
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 19
          },
          "start": {
            "column": 12,
            "line": 19
          }
        },
        "range": [
          348,
          351
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
                349,
                350
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 19
                },
                "start": {
                  "column": 13,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              349,
              350
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 19
              },
              "start": {
                "column": 13,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        336,
        389
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "gK",
            "optional": false,
            "range": [
              395,
              397
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            391,
            394
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "optional": false,
        "range": [
          391,
          398
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        391,
        399
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
      "line": 3
    }
  },
  "hashbang": null
}
```
