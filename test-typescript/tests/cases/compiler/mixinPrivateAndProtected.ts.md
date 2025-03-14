__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    1569
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "range": [
          27,
          38
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
        "type": "TSConstructorType",
        "abstract": false,
        "params": [
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "range": [
                51,
                55
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 3
                },
                "start": {
                  "column": 29,
                  "line": 3
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 3
                },
                "start": {
                  "column": 33,
                  "line": 3
                }
              },
              "range": [
                55,
                62
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    57,
                    60
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 3
                    },
                    "start": {
                      "column": 35,
                      "line": 3
                    }
                  }
                },
                "range": [
                  57,
                  62
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 3
                  },
                  "start": {
                    "column": 35,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              48,
              62
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 3
              },
              "start": {
                "column": 26,
                "line": 3
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 46,
              "line": 3
            },
            "start": {
              "column": 42,
              "line": 3
            }
          },
          "range": [
            64,
            68
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                67,
                68
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 3
                },
                "start": {
                  "column": 45,
                  "line": 3
                }
              }
            },
            "range": [
              67,
              68
            ],
            "loc": {
              "end": {
                "column": 46,
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
          44,
          68
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 3
          },
          "start": {
            "column": 22,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 3
          },
          "start": {
            "column": 16,
            "line": 3
          }
        },
        "range": [
          38,
          41
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
                39,
                40
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              39,
              40
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        69
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          79,
          169
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pb",
              "optional": false,
              "range": [
                92,
                94
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
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
                  "column": 21,
                  "line": 6
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              },
              "range": [
                94,
                102
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  96,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 6
                  },
                  "start": {
                    "column": 15,
                    "line": 6
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                105,
                106
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 6
                },
                "start": {
                  "column": 24,
                  "line": 6
                }
              }
            },
            "range": [
              85,
              107
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ptd",
              "optional": false,
              "range": [
                122,
                125
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 7
                },
                "start": {
                  "column": 14,
                  "line": 7
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
                  "column": 25,
                  "line": 7
                },
                "start": {
                  "column": 17,
                  "line": 7
                }
              },
              "range": [
                125,
                133
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  127,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 7
                  },
                  "start": {
                    "column": 19,
                    "line": 7
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                136,
                137
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
            "range": [
              112,
              138
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pvt",
              "optional": false,
              "range": [
                151,
                154
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 8
                },
                "start": {
                  "column": 12,
                  "line": 8
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
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              },
              "range": [
                154,
                162
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  156,
                  162
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 8
                  },
                  "start": {
                    "column": 17,
                    "line": 8
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                165,
                166
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 8
                },
                "start": {
                  "column": 26,
                  "line": 8
                }
              }
            },
            "range": [
              143,
              167
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 8
              },
              "start": {
                "column": 4,
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
            "column": 8,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          77,
          78
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        71,
        169
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 5
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
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  251,
                  327
                ],
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "protected",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ptd",
                      "optional": false,
                      "range": [
                        271,
                        274
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 13
                        },
                        "start": {
                          "column": 18,
                          "line": 13
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
                          "column": 29,
                          "line": 13
                        },
                        "start": {
                          "column": 21,
                          "line": 13
                        }
                      },
                      "range": [
                        274,
                        282
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          276,
                          282
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 13
                          },
                          "start": {
                            "column": 23,
                            "line": 13
                          }
                        }
                      }
                    },
                    "value": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        285,
                        287
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 13
                        },
                        "start": {
                          "column": 32,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      261,
                      288
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pvt",
                      "optional": false,
                      "range": [
                        305,
                        308
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 14
                        },
                        "start": {
                          "column": 16,
                          "line": 14
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
                          "column": 27,
                          "line": 14
                        },
                        "start": {
                          "column": 19,
                          "line": 14
                        }
                      },
                      "range": [
                        308,
                        316
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          310,
                          316
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 14
                          },
                          "start": {
                            "column": 21,
                            "line": 14
                          }
                        }
                      }
                    },
                    "value": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        319,
                        320
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 14
                        },
                        "start": {
                          "column": 30,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      297,
                      321
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 15
                  },
                  "start": {
                    "column": 29,
                    "line": 12
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cls",
                "optional": false,
                "range": [
                  247,
                  250
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 12
                  },
                  "start": {
                    "column": 25,
                    "line": 12
                  }
                }
              },
              "range": [
                233,
                327
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "range": [
              226,
              328
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          220,
          330
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 49,
            "line": 11
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixB",
        "optional": false,
        "range": [
          180,
          184
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 47,
                "line": 11
              },
              "start": {
                "column": 44,
                "line": 11
              }
            },
            "range": [
              215,
              218
            ],
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
                    "column": 47,
                    "line": 11
                  },
                  "start": {
                    "column": 46,
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
                  "column": 47,
                  "line": 11
                },
                "start": {
                  "column": 46,
                  "line": 11
                }
              }
            }
          },
          "range": [
            212,
            218
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 11
            },
            "start": {
              "column": 41,
              "line": 11
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 11
          },
          "start": {
            "column": 13,
            "line": 11
          }
        },
        "range": [
          184,
          211
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
                  206,
                  210
                ],
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "range": [
                      207,
                      209
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
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
                    "column": 39,
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
                "name": "Constructor",
                "optional": false,
                "range": [
                  195,
                  206
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 11
                  },
                  "start": {
                    "column": 24,
                    "line": 11
                  }
                }
              },
              "range": [
                195,
                210
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 11
                },
                "start": {
                  "column": 24,
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
                185,
                186
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
              185,
              210
            ],
            "loc": {
              "end": {
                "column": 39,
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
        171,
        330
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 11
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
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  412,
                  455
                ],
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "protected",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ptd",
                      "optional": false,
                      "range": [
                        432,
                        435
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 20
                        },
                        "start": {
                          "column": 18,
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
                          "column": 29,
                          "line": 20
                        },
                        "start": {
                          "column": 21,
                          "line": 20
                        }
                      },
                      "range": [
                        435,
                        443
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          437,
                          443
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 20
                          },
                          "start": {
                            "column": 23,
                            "line": 20
                          }
                        }
                      }
                    },
                    "value": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        446,
                        448
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 20
                        },
                        "start": {
                          "column": 32,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      422,
                      449
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 29,
                    "line": 19
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cls",
                "optional": false,
                "range": [
                  408,
                  411
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 19
                  },
                  "start": {
                    "column": 25,
                    "line": 19
                  }
                }
              },
              "range": [
                394,
                455
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 19
                }
              }
            },
            "range": [
              387,
              456
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "range": [
          381,
          458
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 49,
            "line": 18
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixB2",
        "optional": false,
        "range": [
          341,
          346
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 18
          },
          "start": {
            "column": 9,
            "line": 18
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 47,
                "line": 18
              },
              "start": {
                "column": 44,
                "line": 18
              }
            },
            "range": [
              376,
              379
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  378,
                  379
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 18
                  },
                  "start": {
                    "column": 46,
                    "line": 18
                  }
                }
              },
              "range": [
                378,
                379
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 18
                },
                "start": {
                  "column": 46,
                  "line": 18
                }
              }
            }
          },
          "range": [
            373,
            379
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 18
            },
            "start": {
              "column": 41,
              "line": 18
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 18
          },
          "start": {
            "column": 14,
            "line": 18
          }
        },
        "range": [
          346,
          372
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
                  368,
                  371
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        369,
                        370
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 18
                        },
                        "start": {
                          "column": 37,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      369,
                      370
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 18
                      },
                      "start": {
                        "column": 37,
                        "line": 18
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 18
                  },
                  "start": {
                    "column": 36,
                    "line": 18
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "range": [
                  357,
                  368
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 18
                  },
                  "start": {
                    "column": 25,
                    "line": 18
                  }
                }
              },
              "range": [
                357,
                371
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 18
                },
                "start": {
                  "column": 25,
                  "line": 18
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
                347,
                348
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 18
                },
                "start": {
                  "column": 15,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              347,
              371
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 18
              },
              "start": {
                "column": 15,
                "line": 18
              }
            }
          }
        ]
      },
      "range": [
        332,
        458
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 18
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
            "name": "AB",
            "optional": false,
            "range": [
              470,
              472
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  480,
                  481
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 25
                  },
                  "start": {
                    "column": 14,
                    "line": 25
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixB",
              "optional": false,
              "range": [
                475,
                479
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 25
                },
                "start": {
                  "column": 9,
                  "line": 25
                }
              }
            },
            "optional": false,
            "range": [
              475,
              482
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 25
              },
              "start": {
                "column": 9,
                "line": 25
              }
            }
          },
          "range": [
            470,
            482
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "AB2",
            "optional": false,
            "range": [
              488,
              491
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  500,
                  501
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 26
                  },
                  "start": {
                    "column": 16,
                    "line": 26
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixB2",
              "optional": false,
              "range": [
                494,
                499
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 26
                },
                "start": {
                  "column": 10,
                  "line": 26
                }
              }
            },
            "optional": false,
            "range": [
              494,
              502
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 26
              },
              "start": {
                "column": 10,
                "line": 26
              }
            }
          },
          "range": [
            488,
            502
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        460,
        503
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 24
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
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  585,
                  662
                ],
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "protected",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ptd",
                      "optional": false,
                      "range": [
                        605,
                        608
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 30
                        },
                        "start": {
                          "column": 18,
                          "line": 30
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
                          "column": 29,
                          "line": 30
                        },
                        "start": {
                          "column": 21,
                          "line": 30
                        }
                      },
                      "range": [
                        608,
                        616
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          610,
                          616
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 30
                          },
                          "start": {
                            "column": 23,
                            "line": 30
                          }
                        }
                      }
                    },
                    "value": {
                      "type": "Literal",
                      "raw": "100",
                      "value": 100,
                      "range": [
                        619,
                        622
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 30
                        },
                        "start": {
                          "column": 32,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      595,
                      623
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pvt",
                      "optional": false,
                      "range": [
                        640,
                        643
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 31
                        },
                        "start": {
                          "column": 16,
                          "line": 31
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
                          "column": 27,
                          "line": 31
                        },
                        "start": {
                          "column": 19,
                          "line": 31
                        }
                      },
                      "range": [
                        643,
                        651
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          645,
                          651
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 31
                          },
                          "start": {
                            "column": 21,
                            "line": 31
                          }
                        }
                      }
                    },
                    "value": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        654,
                        655
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 31
                        },
                        "start": {
                          "column": 30,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      632,
                      656
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 31
                      },
                      "start": {
                        "column": 8,
                        "line": 31
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 32
                  },
                  "start": {
                    "column": 29,
                    "line": 29
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cls",
                "optional": false,
                "range": [
                  581,
                  584
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 29
                  },
                  "start": {
                    "column": 25,
                    "line": 29
                  }
                }
              },
              "range": [
                567,
                662
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 32
                },
                "start": {
                  "column": 11,
                  "line": 29
                }
              }
            },
            "range": [
              560,
              663
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          }
        ],
        "range": [
          554,
          665
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 49,
            "line": 28
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixC",
        "optional": false,
        "range": [
          514,
          518
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 28
          },
          "start": {
            "column": 9,
            "line": 28
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 47,
                "line": 28
              },
              "start": {
                "column": 44,
                "line": 28
              }
            },
            "range": [
              549,
              552
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  551,
                  552
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 28
                  },
                  "start": {
                    "column": 46,
                    "line": 28
                  }
                }
              },
              "range": [
                551,
                552
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 28
                },
                "start": {
                  "column": 46,
                  "line": 28
                }
              }
            }
          },
          "range": [
            546,
            552
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 28
            },
            "start": {
              "column": 41,
              "line": 28
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 28
          },
          "start": {
            "column": 13,
            "line": 28
          }
        },
        "range": [
          518,
          545
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
                  540,
                  544
                ],
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "range": [
                      541,
                      543
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 28
                      },
                      "start": {
                        "column": 36,
                        "line": 28
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 28
                  },
                  "start": {
                    "column": 35,
                    "line": 28
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "range": [
                  529,
                  540
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 28
                  },
                  "start": {
                    "column": 24,
                    "line": 28
                  }
                }
              },
              "range": [
                529,
                544
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 28
                },
                "start": {
                  "column": 24,
                  "line": 28
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
                519,
                520
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 28
                },
                "start": {
                  "column": 14,
                  "line": 28
                }
              }
            },
            "out": false,
            "range": [
              519,
              544
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 28
              },
              "start": {
                "column": 14,
                "line": 28
              }
            }
          }
        ]
      },
      "range": [
        505,
        665
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 28
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
            "name": "AB2C",
            "optional": false,
            "range": [
              677,
              681
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "AB2",
                "optional": false,
                "range": [
                  689,
                  692
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 36
                  },
                  "start": {
                    "column": 16,
                    "line": 36
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixC",
              "optional": false,
              "range": [
                684,
                688
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 36
                },
                "start": {
                  "column": 11,
                  "line": 36
                }
              }
            },
            "optional": false,
            "range": [
              684,
              693
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 36
              },
              "start": {
                "column": 11,
                "line": 36
              }
            }
          },
          "range": [
            677,
            693
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 36
            },
            "start": {
              "column": 4,
              "line": 36
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ABC",
            "optional": false,
            "range": [
              699,
              702
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "AB",
                "optional": false,
                "range": [
                  710,
                  712
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 37
                  },
                  "start": {
                    "column": 15,
                    "line": 37
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixC",
              "optional": false,
              "range": [
                705,
                709
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 37
                },
                "start": {
                  "column": 10,
                  "line": 37
                }
              }
            },
            "optional": false,
            "range": [
              705,
              713
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 37
              },
              "start": {
                "column": 10,
                "line": 37
              }
            }
          },
          "range": [
            699,
            713
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 37
            },
            "start": {
              "column": 4,
              "line": 37
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        667,
        714
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 35
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
            "name": "a",
            "optional": false,
            "range": [
              726,
              727
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                734,
                735
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 40
                },
                "start": {
                  "column": 12,
                  "line": 40
                }
              }
            },
            "range": [
              730,
              737
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 40
              },
              "start": {
                "column": 8,
                "line": 40
              }
            }
          },
          "range": [
            726,
            737
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 40
            },
            "start": {
              "column": 4,
              "line": 40
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ab",
            "optional": false,
            "range": [
              743,
              745
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "AB",
              "optional": false,
              "range": [
                752,
                754
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 41
                },
                "start": {
                  "column": 13,
                  "line": 41
                }
              }
            },
            "range": [
              748,
              756
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 41
              },
              "start": {
                "column": 9,
                "line": 41
              }
            }
          },
          "range": [
            743,
            756
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 41
            },
            "start": {
              "column": 4,
              "line": 41
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "abc",
            "optional": false,
            "range": [
              762,
              765
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ABC",
              "optional": false,
              "range": [
                772,
                775
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 42
                },
                "start": {
                  "column": 14,
                  "line": 42
                }
              }
            },
            "range": [
              768,
              777
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 42
              },
              "start": {
                "column": 10,
                "line": 42
              }
            }
          },
          "range": [
            762,
            777
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 42
            },
            "start": {
              "column": 4,
              "line": 42
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ab2c",
            "optional": false,
            "range": [
              783,
              787
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
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "AB2C",
              "optional": false,
              "range": [
                794,
                798
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 43
                },
                "start": {
                  "column": 15,
                  "line": 43
                }
              }
            },
            "range": [
              790,
              800
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 43
              },
              "start": {
                "column": 11,
                "line": 43
              }
            }
          },
          "range": [
            783,
            800
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 43
            },
            "start": {
              "column": 4,
              "line": 43
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        716,
        801
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                803,
                804
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 45
                },
                "start": {
                  "column": 0,
                  "line": 45
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pb",
              "optional": false,
              "range": [
                805,
                807
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 45
                },
                "start": {
                  "column": 2,
                  "line": 45
                }
              }
            },
            "range": [
              803,
              807
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 45
              },
              "start": {
                "column": 0,
                "line": 45
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "range": [
              808,
              815
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 45
              },
              "start": {
                "column": 5,
                "line": 45
              }
            }
          },
          "range": [
            803,
            815
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 45
            },
            "start": {
              "column": 0,
              "line": 45
            }
          }
        },
        "optional": false,
        "range": [
          803,
          817
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 45
          },
          "start": {
            "column": 0,
            "line": 45
          }
        }
      },
      "range": [
        803,
        818
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                819,
                820
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 46
                },
                "start": {
                  "column": 0,
                  "line": 46
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ptd",
              "optional": false,
              "range": [
                821,
                824
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 46
                },
                "start": {
                  "column": 2,
                  "line": 46
                }
              }
            },
            "range": [
              819,
              824
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 46
              },
              "start": {
                "column": 0,
                "line": 46
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "range": [
              825,
              832
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 46
              },
              "start": {
                "column": 6,
                "line": 46
              }
            }
          },
          "range": [
            819,
            832
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 46
            },
            "start": {
              "column": 0,
              "line": 46
            }
          }
        },
        "optional": false,
        "range": [
          819,
          834
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 46
          },
          "start": {
            "column": 0,
            "line": 46
          }
        }
      },
      "range": [
        819,
        835
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                848,
                849
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 47
                },
                "start": {
                  "column": 0,
                  "line": 47
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pvt",
              "optional": false,
              "range": [
                850,
                853
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 47
                },
                "start": {
                  "column": 2,
                  "line": 47
                }
              }
            },
            "range": [
              848,
              853
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 47
              },
              "start": {
                "column": 0,
                "line": 47
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "range": [
              854,
              861
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 47
              },
              "start": {
                "column": 6,
                "line": 47
              }
            }
          },
          "range": [
            848,
            861
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 47
            },
            "start": {
              "column": 0,
              "line": 47
            }
          }
        },
        "optional": false,
        "range": [
          848,
          863
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 47
          },
          "start": {
            "column": 0,
            "line": 47
          }
        }
      },
      "range": [
        848,
        864
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab",
              "optional": false,
              "range": [
                878,
                880
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 49
                },
                "start": {
                  "column": 0,
                  "line": 49
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pb",
              "optional": false,
              "range": [
                881,
                883
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 49
                },
                "start": {
                  "column": 3,
                  "line": 49
                }
              }
            },
            "range": [
              878,
              883
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 49
              },
              "start": {
                "column": 0,
                "line": 49
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "range": [
              884,
              891
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 49
              },
              "start": {
                "column": 6,
                "line": 49
              }
            }
          },
          "range": [
            878,
            891
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 49
            },
            "start": {
              "column": 0,
              "line": 49
            }
          }
        },
        "optional": false,
        "range": [
          878,
          893
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 49
          },
          "start": {
            "column": 0,
            "line": 49
          }
        }
      },
      "range": [
        878,
        894
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab",
              "optional": false,
              "range": [
                895,
                897
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 50
                },
                "start": {
                  "column": 0,
                  "line": 50
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ptd",
              "optional": false,
              "range": [
                898,
                901
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 50
                },
                "start": {
                  "column": 3,
                  "line": 50
                }
              }
            },
            "range": [
              895,
              901
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 50
              },
              "start": {
                "column": 0,
                "line": 50
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "range": [
              902,
              909
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 50
              },
              "start": {
                "column": 7,
                "line": 50
              }
            }
          },
          "range": [
            895,
            909
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 50
            },
            "start": {
              "column": 0,
              "line": 50
            }
          }
        },
        "optional": false,
        "range": [
          895,
          911
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 50
          },
          "start": {
            "column": 0,
            "line": 50
          }
        }
      },
      "range": [
        895,
        912
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab",
              "optional": false,
              "range": [
                924,
                926
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 51
                },
                "start": {
                  "column": 0,
                  "line": 51
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pvt",
              "optional": false,
              "range": [
                927,
                930
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 51
                },
                "start": {
                  "column": 3,
                  "line": 51
                }
              }
            },
            "range": [
              924,
              930
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 51
              },
              "start": {
                "column": 0,
                "line": 51
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "range": [
              931,
              938
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 51
              },
              "start": {
                "column": 7,
                "line": 51
              }
            }
          },
          "range": [
            924,
            938
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 51
            },
            "start": {
              "column": 0,
              "line": 51
            }
          }
        },
        "optional": false,
        "range": [
          924,
          940
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 51
          },
          "start": {
            "column": 0,
            "line": 51
          }
        }
      },
      "range": [
        924,
        941
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "range": [
                954,
                957
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 53
                },
                "start": {
                  "column": 0,
                  "line": 53
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pb",
              "optional": false,
              "range": [
                958,
                960
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 53
                },
                "start": {
                  "column": 4,
                  "line": 53
                }
              }
            },
            "range": [
              954,
              960
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 53
              },
              "start": {
                "column": 0,
                "line": 53
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "range": [
              961,
              968
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 53
              },
              "start": {
                "column": 7,
                "line": 53
              }
            }
          },
          "range": [
            954,
            968
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 53
            },
            "start": {
              "column": 0,
              "line": 53
            }
          }
        },
        "optional": false,
        "range": [
          954,
          970
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 53
          },
          "start": {
            "column": 0,
            "line": 53
          }
        }
      },
      "range": [
        954,
        971
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "range": [
                972,
                975
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 54
                },
                "start": {
                  "column": 0,
                  "line": 54
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ptd",
              "optional": false,
              "range": [
                976,
                979
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 54
                },
                "start": {
                  "column": 4,
                  "line": 54
                }
              }
            },
            "range": [
              972,
              979
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 54
              },
              "start": {
                "column": 0,
                "line": 54
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "range": [
              980,
              987
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 54
              },
              "start": {
                "column": 8,
                "line": 54
              }
            }
          },
          "range": [
            972,
            987
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 54
            },
            "start": {
              "column": 0,
              "line": 54
            }
          }
        },
        "optional": false,
        "range": [
          972,
          989
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 54
          },
          "start": {
            "column": 0,
            "line": 54
          }
        }
      },
      "range": [
        972,
        990
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "range": [
                1001,
                1004
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 55
                },
                "start": {
                  "column": 0,
                  "line": 55
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pvt",
              "optional": false,
              "range": [
                1005,
                1008
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 55
                },
                "start": {
                  "column": 4,
                  "line": 55
                }
              }
            },
            "range": [
              1001,
              1008
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 55
              },
              "start": {
                "column": 0,
                "line": 55
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "range": [
              1009,
              1016
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 55
              },
              "start": {
                "column": 8,
                "line": 55
              }
            }
          },
          "range": [
            1001,
            1016
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 55
            },
            "start": {
              "column": 0,
              "line": 55
            }
          }
        },
        "optional": false,
        "range": [
          1001,
          1018
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 55
          },
          "start": {
            "column": 0,
            "line": 55
          }
        }
      },
      "range": [
        1001,
        1019
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab2c",
              "optional": false,
              "range": [
                1031,
                1035
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 57
                },
                "start": {
                  "column": 0,
                  "line": 57
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pb",
              "optional": false,
              "range": [
                1036,
                1038
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 57
                },
                "start": {
                  "column": 5,
                  "line": 57
                }
              }
            },
            "range": [
              1031,
              1038
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 57
              },
              "start": {
                "column": 0,
                "line": 57
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "range": [
              1039,
              1046
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 57
              },
              "start": {
                "column": 8,
                "line": 57
              }
            }
          },
          "range": [
            1031,
            1046
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 57
            },
            "start": {
              "column": 0,
              "line": 57
            }
          }
        },
        "optional": false,
        "range": [
          1031,
          1048
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 57
          },
          "start": {
            "column": 0,
            "line": 57
          }
        }
      },
      "range": [
        1031,
        1049
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab2c",
              "optional": false,
              "range": [
                1050,
                1054
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 58
                },
                "start": {
                  "column": 0,
                  "line": 58
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ptd",
              "optional": false,
              "range": [
                1055,
                1058
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 58
                },
                "start": {
                  "column": 5,
                  "line": 58
                }
              }
            },
            "range": [
              1050,
              1058
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 58
              },
              "start": {
                "column": 0,
                "line": 58
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "range": [
              1059,
              1066
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 58
              },
              "start": {
                "column": 9,
                "line": 58
              }
            }
          },
          "range": [
            1050,
            1066
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 58
            },
            "start": {
              "column": 0,
              "line": 58
            }
          }
        },
        "optional": false,
        "range": [
          1050,
          1068
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 58
          },
          "start": {
            "column": 0,
            "line": 58
          }
        }
      },
      "range": [
        1050,
        1069
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 58
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab2c",
              "optional": false,
              "range": [
                1079,
                1083
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 59
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
              "name": "pvt",
              "optional": false,
              "range": [
                1084,
                1087
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 59
                },
                "start": {
                  "column": 5,
                  "line": 59
                }
              }
            },
            "range": [
              1079,
              1087
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 59
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
            "name": "toFixed",
            "optional": false,
            "range": [
              1088,
              1095
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 59
              },
              "start": {
                "column": 9,
                "line": 59
              }
            }
          },
          "range": [
            1079,
            1095
          ],
          "loc": {
            "end": {
              "column": 16,
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
          1079,
          1097
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 59
          },
          "start": {
            "column": 0,
            "line": 59
          }
        }
      },
      "range": [
        1079,
        1098
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1144,
          1241
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                1147,
                1158
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 12,
                  "line": 64
                },
                "start": {
                  "column": 1,
                  "line": 64
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1158,
                1182
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1180,
                  1182
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 64
                  },
                  "start": {
                    "column": 34,
                    "line": 64
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 64
                        },
                        "start": {
                          "column": 24,
                          "line": 64
                        }
                      },
                      "range": [
                        1170,
                        1178
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1172,
                          1178
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 64
                          },
                          "start": {
                            "column": 26,
                            "line": 64
                          }
                        }
                      }
                    },
                    "range": [
                      1166,
                      1178
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 64
                      },
                      "start": {
                        "column": 20,
                        "line": 64
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    1159,
                    1178
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 64
                    },
                    "start": {
                      "column": 13,
                      "line": 64
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 64
                },
                "start": {
                  "column": 12,
                  "line": 64
                }
              }
            },
            "range": [
              1147,
              1182
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 64
              },
              "start": {
                "column": 1,
                "line": 64
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myProtectedFunction",
              "optional": false,
              "range": [
                1195,
                1214
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 66
                },
                "start": {
                  "column": 11,
                  "line": 66
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1214,
                1239
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1217,
                  1239
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 68
                  },
                  "start": {
                    "column": 33,
                    "line": 66
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 68
                },
                "start": {
                  "column": 30,
                  "line": 66
                }
              }
            },
            "range": [
              1185,
              1239
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 68
              },
              "start": {
                "column": 1,
                "line": 66
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 69
          },
          "start": {
            "column": 13,
            "line": 63
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "range": [
          1137,
          1143
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 63
          },
          "start": {
            "column": 6,
            "line": 63
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1131,
        1241
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 63
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
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  1333,
                  1476
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "range": [
                        1337,
                        1348
                      ],
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 73
                        },
                        "start": {
                          "column": 2,
                          "line": 73
                        }
                      }
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        1348,
                        1389
                      ],
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
                                  "type": "SpreadElement",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "range": [
                                      1379,
                                      1383
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 16,
                                        "line": 74
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 74
                                      }
                                    }
                                  },
                                  "range": [
                                    1376,
                                    1383
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 74
                                    },
                                    "start": {
                                      "column": 9,
                                      "line": 74
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Super",
                                "range": [
                                  1370,
                                  1375
                                ],
                                "loc": {
                                  "end": {
                                    "column": 8,
                                    "line": 74
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 74
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                1370,
                                1384
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 74
                                },
                                "start": {
                                  "column": 3,
                                  "line": 74
                                }
                              }
                            },
                            "range": [
                              1370,
                              1385
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 74
                              },
                              "start": {
                                "column": 3,
                                "line": 74
                              }
                            }
                          }
                        ],
                        "range": [
                          1365,
                          1389
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 75
                          },
                          "start": {
                            "column": 30,
                            "line": 73
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "range": [
                              1352,
                              1356
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 73
                              },
                              "start": {
                                "column": 17,
                                "line": 73
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 73
                              },
                              "start": {
                                "column": 21,
                                "line": 73
                              }
                            },
                            "range": [
                              1356,
                              1363
                            ],
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "range": [
                                  1358,
                                  1361
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 73
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 73
                                  }
                                }
                              },
                              "range": [
                                1358,
                                1363
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 73
                                },
                                "start": {
                                  "column": 23,
                                  "line": 73
                                }
                              }
                            }
                          },
                          "range": [
                            1349,
                            1363
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 73
                            },
                            "start": {
                              "column": 14,
                              "line": 73
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 75
                        },
                        "start": {
                          "column": 13,
                          "line": 73
                        }
                      }
                    },
                    "range": [
                      1337,
                      1389
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 75
                      },
                      "start": {
                        "column": 2,
                        "line": 73
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myProtectedFunction",
                      "optional": false,
                      "range": [
                        1393,
                        1412
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 77
                        },
                        "start": {
                          "column": 2,
                          "line": 77
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        1412,
                        1473
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Super",
                                  "range": [
                                    1420,
                                    1425
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 8,
                                      "line": 78
                                    },
                                    "start": {
                                      "column": 3,
                                      "line": 78
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "myProtectedFunction",
                                  "optional": false,
                                  "range": [
                                    1426,
                                    1445
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 78
                                    },
                                    "start": {
                                      "column": 9,
                                      "line": 78
                                    }
                                  }
                                },
                                "range": [
                                  1420,
                                  1445
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 78
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 78
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                1420,
                                1447
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 78
                                },
                                "start": {
                                  "column": 3,
                                  "line": 78
                                }
                              }
                            },
                            "range": [
                              1420,
                              1448
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 78
                              },
                              "start": {
                                "column": 3,
                                "line": 78
                              }
                            }
                          }
                        ],
                        "range": [
                          1415,
                          1473
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 80
                          },
                          "start": {
                            "column": 24,
                            "line": 77
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 80
                        },
                        "start": {
                          "column": 21,
                          "line": 77
                        }
                      }
                    },
                    "range": [
                      1393,
                      1473
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 80
                      },
                      "start": {
                        "column": 2,
                        "line": 77
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 81
                  },
                  "start": {
                    "column": 27,
                    "line": 72
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "range": [
                  1328,
                  1332
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 72
                  },
                  "start": {
                    "column": 22,
                    "line": 72
                  }
                }
              },
              "range": [
                1314,
                1476
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 81
                },
                "start": {
                  "column": 8,
                  "line": 72
                }
              }
            },
            "range": [
              1307,
              1477
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 81
              },
              "start": {
                "column": 1,
                "line": 72
              }
            }
          }
        ],
        "range": [
          1304,
          1479
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 82
          },
          "start": {
            "column": 61,
            "line": 71
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PersonMixin",
        "optional": false,
        "range": [
          1252,
          1263
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 71
          },
          "start": {
            "column": 9,
            "line": 71
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 59,
                "line": 71
              },
              "start": {
                "column": 56,
                "line": 71
              }
            },
            "range": [
              1299,
              1302
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1301,
                  1302
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 71
                  },
                  "start": {
                    "column": 58,
                    "line": 71
                  }
                }
              },
              "range": [
                1301,
                1302
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 71
                },
                "start": {
                  "column": 58,
                  "line": 71
                }
              }
            }
          },
          "range": [
            1295,
            1302
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 71
            },
            "start": {
              "column": 52,
              "line": 71
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 51,
            "line": 71
          },
          "start": {
            "column": 20,
            "line": 71
          }
        },
        "range": [
          1263,
          1294
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
                  1285,
                  1293
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Person",
                      "optional": false,
                      "range": [
                        1286,
                        1292
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 71
                        },
                        "start": {
                          "column": 43,
                          "line": 71
                        }
                      }
                    },
                    "range": [
                      1286,
                      1292
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 71
                      },
                      "start": {
                        "column": 43,
                        "line": 71
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 71
                  },
                  "start": {
                    "column": 42,
                    "line": 71
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "range": [
                  1274,
                  1285
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 71
                  },
                  "start": {
                    "column": 31,
                    "line": 71
                  }
                }
              },
              "range": [
                1274,
                1293
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 71
                },
                "start": {
                  "column": 31,
                  "line": 71
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
                1264,
                1265
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 71
                },
                "start": {
                  "column": 21,
                  "line": 71
                }
              }
            },
            "out": false,
            "range": [
              1264,
              1293
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 71
              },
              "start": {
                "column": 21,
                "line": 71
              }
            }
          }
        ]
      },
      "range": [
        1243,
        1479
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 82
        },
        "start": {
          "column": 0,
          "line": 71
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1524,
          1568
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
              "name": "accountBalance",
              "optional": false,
              "range": [
                1527,
                1541
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 85
                },
                "start": {
                  "column": 1,
                  "line": 85
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
                  "line": 85
                },
                "start": {
                  "column": 15,
                  "line": 85
                }
              },
              "range": [
                1541,
                1549
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1543,
                  1549
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 85
                  },
                  "start": {
                    "column": 17,
                    "line": 85
                  }
                }
              }
            },
            "value": null,
            "range": [
              1527,
              1550
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 85
              },
              "start": {
                "column": 1,
                "line": 85
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                1555,
                1556
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 86
                },
                "start": {
                  "column": 4,
                  "line": 86
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1556,
                1566
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1559,
                  1566
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 87
                  },
                  "start": {
                    "column": 8,
                    "line": 86
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 87
                },
                "start": {
                  "column": 5,
                  "line": 86
                }
              }
            },
            "range": [
              1555,
              1566
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 87
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
            "column": 1,
            "line": 88
          },
          "start": {
            "column": 43,
            "line": 84
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Customer",
        "optional": false,
        "range": [
          1487,
          1495
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 84
          },
          "start": {
            "column": 6,
            "line": 84
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Person",
            "optional": false,
            "range": [
              1516,
              1522
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 84
              },
              "start": {
                "column": 35,
                "line": 84
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "PersonMixin",
          "optional": false,
          "range": [
            1504,
            1515
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 84
            },
            "start": {
              "column": 23,
              "line": 84
            }
          }
        },
        "optional": false,
        "range": [
          1504,
          1523
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 84
          },
          "start": {
            "column": 23,
            "line": 84
          }
        }
      },
      "range": [
        1481,
        1568
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 84
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 89
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
