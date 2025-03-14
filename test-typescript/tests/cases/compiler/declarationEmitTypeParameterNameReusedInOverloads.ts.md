__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    389
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        34
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            18,
            34
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
                "name": "foo",
                "optional": false,
                "range": [
                  20,
                  23
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 1
                  },
                  "start": {
                    "column": 20,
                    "line": 1
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
                    "column": 31,
                    "line": 1
                  },
                  "start": {
                    "column": 23,
                    "line": 1
                  }
                },
                "range": [
                  23,
                  31
                ],
                "typeAnnotation": {
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
                }
              },
              "value": null,
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
            }
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 1
            },
            "start": {
              "column": 18,
              "line": 1
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
            13,
            17
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          7,
          34
        ],
        "loc": {
          "end": {
            "column": 34,
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
          "column": 34,
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
        35,
        85
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            69,
            85
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
                "name": "bar",
                "optional": false,
                "range": [
                  71,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 2
                  },
                  "start": {
                    "column": 36,
                    "line": 2
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
                    "column": 47,
                    "line": 2
                  },
                  "start": {
                    "column": 39,
                    "line": 2
                  }
                },
                "range": [
                  74,
                  82
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    76,
                    82
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 2
                    },
                    "start": {
                      "column": 41,
                      "line": 2
                    }
                  }
                }
              },
              "value": null,
              "range": [
                71,
                83
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 2
                },
                "start": {
                  "column": 36,
                  "line": 2
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 2
            },
            "start": {
              "column": 34,
              "line": 2
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "range": [
            48,
            55
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 2
            },
            "start": {
              "column": 13,
              "line": 2
            }
          }
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "range": [
            64,
            68
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 2
            },
            "start": {
              "column": 29,
              "line": 2
            }
          }
        },
        "range": [
          42,
          85
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 50,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        86,
        140
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            124,
            140
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
                "name": "baz",
                "optional": false,
                "range": [
                  126,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 3
                  },
                  "start": {
                    "column": 40,
                    "line": 3
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
                    "column": 51,
                    "line": 3
                  },
                  "start": {
                    "column": 43,
                    "line": 3
                  }
                },
                "range": [
                  129,
                  137
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    131,
                    137
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
                }
              },
              "value": null,
              "range": [
                126,
                138
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 3
                },
                "start": {
                  "column": 40,
                  "line": 3
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 3
            },
            "start": {
              "column": 38,
              "line": 3
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived2",
          "optional": false,
          "range": [
            99,
            107
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 3
            },
            "start": {
              "column": 13,
              "line": 3
            }
          }
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "range": [
            116,
            123
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 3
            },
            "start": {
              "column": 30,
              "line": 3
            }
          }
        },
        "range": [
          93,
          140
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 54,
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
        142,
        388
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "range": [
            154,
            157
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 5
            },
            "start": {
              "column": 12,
              "line": 5
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSConstructSignatureDeclaration",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 9
                      },
                      "start": {
                        "column": 10,
                        "line": 6
                      }
                    },
                    "range": [
                      172,
                      262
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 7
                                  }
                                },
                                "range": [
                                  209,
                                  212
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      211,
                                      212
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 36,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 35,
                                        "line": 7
                                      }
                                    }
                                  },
                                  "range": [
                                    211,
                                    212
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 7
                                    }
                                  }
                                }
                              },
                              "range": [
                                208,
                                212
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 7
                                },
                                "start": {
                                  "column": 32,
                                  "line": 7
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 7
                              },
                              "start": {
                                "column": 37,
                                "line": 7
                              }
                            },
                            "range": [
                              213,
                              216
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  215,
                                  216
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                215,
                                216
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 7
                                },
                                "start": {
                                  "column": 39,
                                  "line": 7
                                }
                              }
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 7
                              },
                              "start": {
                                "column": 12,
                                "line": 7
                              }
                            },
                            "range": [
                              188,
                              207
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
                                    "name": "Derived",
                                    "optional": false,
                                    "range": [
                                      199,
                                      206
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 7
                                      }
                                    }
                                  },
                                  "range": [
                                    199,
                                    206
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 7
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
                                    189,
                                    190
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 14,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 7
                                    }
                                  }
                                },
                                "out": false,
                                "range": [
                                  189,
                                  206
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 7
                                  }
                                }
                              }
                            ]
                          },
                          "range": [
                            184,
                            217
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 7
                            },
                            "start": {
                              "column": 8,
                              "line": 7
                            }
                          }
                        },
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 8
                                  }
                                },
                                "range": [
                                  248,
                                  251
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      250,
                                      251
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "range": [
                                    250,
                                    251
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 8
                                    }
                                  }
                                }
                              },
                              "range": [
                                247,
                                251
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 8
                                },
                                "start": {
                                  "column": 29,
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
                                "column": 34,
                                "line": 8
                              }
                            },
                            "range": [
                              252,
                              255
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  254,
                                  255
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                254,
                                255
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 8
                                },
                                "start": {
                                  "column": 36,
                                  "line": 8
                                }
                              }
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 8
                              },
                              "start": {
                                "column": 12,
                                "line": 8
                              }
                            },
                            "range": [
                              230,
                              246
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
                                    "name": "Base",
                                    "optional": false,
                                    "range": [
                                      241,
                                      245
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "range": [
                                    241,
                                    245
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 23,
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
                                    231,
                                    232
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 14,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 8
                                    }
                                  }
                                },
                                "out": false,
                                "range": [
                                  231,
                                  245
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 8
                                  }
                                }
                              }
                            ]
                          },
                          "range": [
                            226,
                            256
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 8
                            },
                            "start": {
                              "column": 8,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "range": [
                        174,
                        262
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 9
                        },
                        "start": {
                          "column": 12,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    171,
                    262
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 9
                    },
                    "start": {
                      "column": 9,
                      "line": 6
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 9
                  },
                  "start": {
                    "column": 6,
                    "line": 9
                  }
                },
                "range": [
                  263,
                  270
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "range": [
                      265,
                      268
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
                  "range": [
                    265,
                    270
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                }
              },
              "range": [
                166,
                271
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            {
              "type": "TSConstructSignatureDeclaration",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 13
                      },
                      "start": {
                        "column": 10,
                        "line": 10
                      }
                    },
                    "range": [
                      282,
                      377
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 11
                                  }
                                },
                                "range": [
                                  320,
                                  323
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      322,
                                      323
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 37,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 36,
                                        "line": 11
                                      }
                                    }
                                  },
                                  "range": [
                                    322,
                                    323
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 36,
                                      "line": 11
                                    }
                                  }
                                }
                              },
                              "range": [
                                319,
                                323
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 11
                                },
                                "start": {
                                  "column": 33,
                                  "line": 11
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 11
                              },
                              "start": {
                                "column": 38,
                                "line": 11
                              }
                            },
                            "range": [
                              324,
                              327
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  326,
                                  327
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 40,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                326,
                                327
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 11
                                },
                                "start": {
                                  "column": 40,
                                  "line": 11
                                }
                              }
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 11
                              },
                              "start": {
                                "column": 12,
                                "line": 11
                              }
                            },
                            "range": [
                              298,
                              318
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
                                    "name": "Derived2",
                                    "optional": false,
                                    "range": [
                                      309,
                                      317
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 31,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 11
                                      }
                                    }
                                  },
                                  "range": [
                                    309,
                                    317
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 11
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
                                    299,
                                    300
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 14,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 11
                                    }
                                  }
                                },
                                "out": false,
                                "range": [
                                  299,
                                  317
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 11
                                  }
                                }
                              }
                            ]
                          },
                          "range": [
                            294,
                            328
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 11
                            },
                            "start": {
                              "column": 8,
                              "line": 11
                            }
                          }
                        },
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 12
                                  }
                                },
                                "range": [
                                  363,
                                  366
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      365,
                                      366
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 37,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 36,
                                        "line": 12
                                      }
                                    }
                                  },
                                  "range": [
                                    365,
                                    366
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 36,
                                      "line": 12
                                    }
                                  }
                                }
                              },
                              "range": [
                                362,
                                366
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 12
                                },
                                "start": {
                                  "column": 33,
                                  "line": 12
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 12
                              },
                              "start": {
                                "column": 38,
                                "line": 12
                              }
                            },
                            "range": [
                              367,
                              370
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  369,
                                  370
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 40,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                369,
                                370
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 12
                                },
                                "start": {
                                  "column": 40,
                                  "line": 12
                                }
                              }
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 12
                              },
                              "start": {
                                "column": 16,
                                "line": 12
                              }
                            },
                            "range": [
                              345,
                              361
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
                                    "name": "Base",
                                    "optional": false,
                                    "range": [
                                      356,
                                      360
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 31,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 12
                                      }
                                    }
                                  },
                                  "range": [
                                    356,
                                    360
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 12
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
                                    346,
                                    347
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 12
                                    }
                                  }
                                },
                                "out": false,
                                "range": [
                                  346,
                                  360
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 12
                                  }
                                }
                              }
                            ]
                          },
                          "range": [
                            341,
                            371
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 12
                            },
                            "start": {
                              "column": 12,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "range": [
                        284,
                        377
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 13
                        },
                        "start": {
                          "column": 12,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    281,
                    377
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 13
                    },
                    "start": {
                      "column": 9,
                      "line": 10
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 13
                  },
                  "start": {
                    "column": 6,
                    "line": 13
                  }
                },
                "range": [
                  378,
                  385
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "range": [
                      380,
                      383
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
                  "range": [
                    380,
                    385
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                }
              },
              "range": [
                276,
                386
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            }
          ],
          "range": [
            160,
            388
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 14
            },
            "start": {
              "column": 18,
              "line": 5
            }
          }
        },
        "range": [
          149,
          388
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
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
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
