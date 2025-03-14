__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    563
  ],
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "wat",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              },
              "range": [
                31,
                45
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    40,
                    45
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        41,
                        44
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
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 3
                    },
                    "start": {
                      "column": 18,
                      "line": 3
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Runtype",
                  "optional": false,
                  "range": [
                    33,
                    40
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 3
                    },
                    "start": {
                      "column": 11,
                      "line": 3
                    }
                  }
                },
                "range": [
                  33,
                  45
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 3
                  },
                  "start": {
                    "column": 11,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              28,
              45
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "Num",
            "optional": false,
            "range": [
              48,
              51
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 3
              },
              "start": {
                "column": 26,
                "line": 3
              }
            }
          },
          "range": [
            28,
            51
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        22,
        52
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "Foo",
            "optional": false,
            "range": [
              59,
              62
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 4
              },
              "start": {
                "column": 6,
                "line": 4
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        71,
                        74
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 4
                        },
                        "start": {
                          "column": 18,
                          "line": 4
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
                      "name": "Num",
                      "optional": false,
                      "range": [
                        76,
                        79
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 4
                        },
                        "start": {
                          "column": 23,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      71,
                      79
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 4
                      },
                      "start": {
                        "column": 18,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  69,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 4
                  },
                  "start": {
                    "column": 16,
                    "line": 4
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Obj",
              "optional": false,
              "range": [
                65,
                68
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 4
                }
              }
            },
            "optional": false,
            "range": [
              65,
              82
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 4
              },
              "start": {
                "column": 12,
                "line": 4
              }
            }
          },
          "range": [
            59,
            82
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 4
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        53,
        82
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          105,
          152
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constraint",
              "optional": false,
              "range": [
                109,
                119
              ],
              "loc": {
                "end": {
                  "column": 12,
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
                  "column": 30,
                  "line": 7
                },
                "start": {
                  "column": 12,
                  "line": 7
                }
              },
              "range": [
                119,
                137
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    131,
                    137
                  ],
                  "params": [
                    {
                      "type": "TSThisType",
                      "range": [
                        132,
                        136
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 7
                        },
                        "start": {
                          "column": 25,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 7
                    },
                    "start": {
                      "column": 24,
                      "line": 7
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Constraint",
                  "optional": false,
                  "range": [
                    121,
                    131
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 7
                    },
                    "start": {
                      "column": 14,
                      "line": 7
                    }
                  }
                },
                "range": [
                  121,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 7
                  },
                  "start": {
                    "column": 14,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              109,
              137
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 7
              },
              "start": {
                "column": 2,
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
              "name": "witness",
              "optional": false,
              "range": [
                140,
                147
              ],
              "loc": {
                "end": {
                  "column": 9,
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
                  "column": 12,
                  "line": 8
                },
                "start": {
                  "column": 9,
                  "line": 8
                }
              },
              "range": [
                147,
                150
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    149,
                    150
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 8
                    },
                    "start": {
                      "column": 11,
                      "line": 8
                    }
                  }
                },
                "range": [
                  149,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              140,
              150
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
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 21,
            "line": 6
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Runtype",
        "optional": false,
        "range": [
          94,
          101
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 6
          },
          "start": {
            "column": 10,
            "line": 6
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 6
          },
          "start": {
            "column": 17,
            "line": 6
          }
        },
        "range": [
          101,
          104
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                102,
                103
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 6
                },
                "start": {
                  "column": 18,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              102,
              103
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 6
              },
              "start": {
                "column": 18,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        84,
        152
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          192,
          211
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "tag",
              "optional": false,
              "range": [
                196,
                199
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 2,
                  "line": 12
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
                  "line": 12
                },
                "start": {
                  "column": 5,
                  "line": 12
                }
              },
              "range": [
                199,
                209
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'number'",
                  "value": "number",
                  "range": [
                    201,
                    209
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 12
                    },
                    "start": {
                      "column": 7,
                      "line": 12
                    }
                  }
                },
                "range": [
                  201,
                  209
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 12
                  },
                  "start": {
                    "column": 7,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              196,
              209
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 12
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 38,
            "line": 11
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
            "name": "Runtype",
            "optional": false,
            "range": [
              176,
              183
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 11
              },
              "start": {
                "column": 22,
                "line": 11
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              183,
              191
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  184,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 11
                  },
                  "start": {
                    "column": 30,
                    "line": 11
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 11
              },
              "start": {
                "column": 29,
                "line": 11
              }
            }
          },
          "range": [
            176,
            191
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 11
            },
            "start": {
              "column": 22,
              "line": 11
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Num",
        "optional": false,
        "range": [
          164,
          167
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 11
          },
          "start": {
            "column": 10,
            "line": 11
          }
        }
      },
      "range": [
        154,
        211
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "Num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 14
                },
                "start": {
                  "column": 17,
                  "line": 14
                }
              },
              "range": [
                229,
                234
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Num",
                  "optional": false,
                  "range": [
                    231,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 14
                    },
                    "start": {
                      "column": 19,
                      "line": 14
                    }
                  }
                },
                "range": [
                  231,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 14
                  },
                  "start": {
                    "column": 19,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              226,
              234
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 14
              },
              "start": {
                "column": 14,
                "line": 14
              }
            }
          },
          "init": null,
          "range": [
            226,
            234
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 14
            },
            "start": {
              "column": 14,
              "line": 14
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        212,
        234
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          345,
          347
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 111,
            "line": 16
          },
          "start": {
            "column": 109,
            "line": 16
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
            "name": "Runtype",
            "optional": false,
            "range": [
              301,
              308
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 16
              },
              "start": {
                "column": 65,
                "line": 16
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              308,
              344
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
                      "name": "O",
                      "optional": false,
                      "range": [
                        322,
                        323
                      ],
                      "loc": {
                        "end": {
                          "column": 87,
                          "line": 16
                        },
                        "start": {
                          "column": 86,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      322,
                      323
                    ],
                    "loc": {
                      "end": {
                        "column": 87,
                        "line": 16
                      },
                      "start": {
                        "column": 86,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    316,
                    323
                  ],
                  "loc": {
                    "end": {
                      "column": 87,
                      "line": 16
                    },
                    "start": {
                      "column": 80,
                      "line": 16
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    311,
                    312
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 16
                    },
                    "start": {
                      "column": 75,
                      "line": 16
                    }
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'witness'",
                      "value": "witness",
                      "range": [
                        331,
                        340
                      ],
                      "loc": {
                        "end": {
                          "column": 104,
                          "line": 16
                        },
                        "start": {
                          "column": 95,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      331,
                      340
                    ],
                    "loc": {
                      "end": {
                        "column": 104,
                        "line": 16
                      },
                      "start": {
                        "column": 95,
                        "line": 16
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSIndexedAccessType",
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "range": [
                          328,
                          329
                        ],
                        "loc": {
                          "end": {
                            "column": 93,
                            "line": 16
                          },
                          "start": {
                            "column": 92,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        328,
                        329
                      ],
                      "loc": {
                        "end": {
                          "column": 93,
                          "line": 16
                        },
                        "start": {
                          "column": 92,
                          "line": 16
                        }
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "range": [
                          326,
                          327
                        ],
                        "loc": {
                          "end": {
                            "column": 91,
                            "line": 16
                          },
                          "start": {
                            "column": 90,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        326,
                        327
                      ],
                      "loc": {
                        "end": {
                          "column": 91,
                          "line": 16
                        },
                        "start": {
                          "column": 90,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      326,
                      330
                    ],
                    "loc": {
                      "end": {
                        "column": 94,
                        "line": 16
                      },
                      "start": {
                        "column": 90,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    326,
                    341
                  ],
                  "loc": {
                    "end": {
                      "column": 105,
                      "line": 16
                    },
                    "start": {
                      "column": 90,
                      "line": 16
                    }
                  }
                },
                "range": [
                  309,
                  343
                ],
                "loc": {
                  "end": {
                    "column": 107,
                    "line": 16
                  },
                  "start": {
                    "column": 73,
                    "line": 16
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 108,
                "line": 16
              },
              "start": {
                "column": 72,
                "line": 16
              }
            }
          },
          "range": [
            301,
            344
          ],
          "loc": {
            "end": {
              "column": 108,
              "line": 16
            },
            "start": {
              "column": 65,
              "line": 16
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "range": [
          246,
          249
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 16
          },
          "start": {
            "column": 10,
            "line": 16
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 56,
            "line": 16
          },
          "start": {
            "column": 13,
            "line": 16
          }
        },
        "range": [
          249,
          292
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSStringKeyword",
                "range": [
                  268,
                  274
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 16
                  },
                  "start": {
                    "column": 32,
                    "line": 16
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "range": [
                  263,
                  264
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 16
                  },
                  "start": {
                    "column": 27,
                    "line": 16
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    284,
                    289
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        285,
                        288
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 16
                        },
                        "start": {
                          "column": 49,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 16
                    },
                    "start": {
                      "column": 48,
                      "line": 16
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Runtype",
                  "optional": false,
                  "range": [
                    277,
                    284
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 16
                    },
                    "start": {
                      "column": 41,
                      "line": 16
                    }
                  }
                },
                "range": [
                  277,
                  289
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 16
                  },
                  "start": {
                    "column": 41,
                    "line": 16
                  }
                }
              },
              "range": [
                260,
                291
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 16
                },
                "start": {
                  "column": 24,
                  "line": 16
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "range": [
                250,
                251
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
            "out": false,
            "range": [
              250,
              291
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 16
              },
              "start": {
                "column": 14,
                "line": 16
              }
            }
          }
        ]
      },
      "range": [
        236,
        347
      ],
      "loc": {
        "end": {
          "column": 111,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
        "name": "Obj",
        "optional": false,
        "range": [
          365,
          368
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 17
          },
          "start": {
            "column": 17,
            "line": 17
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fields",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 71,
                "line": 17
              },
              "start": {
                "column": 68,
                "line": 17
              }
            },
            "range": [
              416,
              419
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "range": [
                  418,
                  419
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 17
                  },
                  "start": {
                    "column": 70,
                    "line": 17
                  }
                }
              },
              "range": [
                418,
                419
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 17
                },
                "start": {
                  "column": 70,
                  "line": 17
                }
              }
            }
          },
          "range": [
            410,
            419
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 17
            },
            "start": {
              "column": 62,
              "line": 17
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 80,
            "line": 17
          },
          "start": {
            "column": 72,
            "line": 17
          }
        },
        "range": [
          420,
          428
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              425,
              428
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "range": [
                    426,
                    427
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 17
                    },
                    "start": {
                      "column": 78,
                      "line": 17
                    }
                  }
                },
                "range": [
                  426,
                  427
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 17
                  },
                  "start": {
                    "column": 78,
                    "line": 17
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 17
              },
              "start": {
                "column": 77,
                "line": 17
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Obj",
            "optional": false,
            "range": [
              422,
              425
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 17
              },
              "start": {
                "column": 74,
                "line": 17
              }
            }
          },
          "range": [
            422,
            428
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 17
            },
            "start": {
              "column": 74,
              "line": 17
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 61,
            "line": 17
          },
          "start": {
            "column": 20,
            "line": 17
          }
        },
        "range": [
          368,
          409
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
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 17
                          },
                          "start": {
                            "column": 35,
                            "line": 17
                          }
                        },
                        "range": [
                          383,
                          391
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            385,
                            391
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 17
                            },
                            "start": {
                              "column": 37,
                              "line": 17
                            }
                          }
                        }
                      },
                      "range": [
                        382,
                        391
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 17
                        },
                        "start": {
                          "column": 34,
                          "line": 17
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
                        "column": 58,
                        "line": 17
                      },
                      "start": {
                        "column": 44,
                        "line": 17
                      }
                    },
                    "range": [
                      392,
                      406
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          401,
                          406
                        ],
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "range": [
                              402,
                              405
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 17
                              },
                              "start": {
                                "column": 54,
                                "line": 17
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 17
                          },
                          "start": {
                            "column": 53,
                            "line": 17
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Runtype",
                        "optional": false,
                        "range": [
                          394,
                          401
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 17
                          },
                          "start": {
                            "column": 46,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        394,
                        406
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 17
                        },
                        "start": {
                          "column": 46,
                          "line": 17
                        }
                      }
                    }
                  },
                  "range": [
                    381,
                    406
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 17
                    },
                    "start": {
                      "column": 33,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                379,
                408
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 17
                },
                "start": {
                  "column": 31,
                  "line": 17
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "range": [
                369,
                370
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 17
                },
                "start": {
                  "column": 21,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              369,
              408
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 17
              },
              "start": {
                "column": 21,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        348,
        429
      ],
      "loc": {
        "end": {
          "column": 81,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          506,
          562
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "underlying",
              "optional": false,
              "range": [
                510,
                520
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 20
                },
                "start": {
                  "column": 2,
                  "line": 20
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
                  "line": 20
                },
                "start": {
                  "column": 12,
                  "line": 20
                }
              },
              "range": [
                520,
                523
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    522,
                    523
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 20
                    },
                    "start": {
                      "column": 14,
                      "line": 20
                    }
                  }
                },
                "range": [
                  522,
                  523
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 20
                  },
                  "start": {
                    "column": 14,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              510,
              524
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 20
              },
              "start": {
                "column": 2,
                "line": 20
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "check",
              "optional": false,
              "range": [
                527,
                532
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 21
                },
                "start": {
                  "column": 2,
                  "line": 21
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
                  "column": 34,
                  "line": 21
                },
                "start": {
                  "column": 7,
                  "line": 21
                }
              },
              "range": [
                532,
                559
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                          "column": 25,
                          "line": 21
                        },
                        "start": {
                          "column": 11,
                          "line": 21
                        }
                      },
                      "range": [
                        536,
                        550
                      ],
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'witness'",
                            "value": "witness",
                            "range": [
                              540,
                              549
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 21
                              },
                              "start": {
                                "column": 15,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            540,
                            549
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 21
                            },
                            "start": {
                              "column": 15,
                              "line": 21
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "range": [
                              538,
                              539
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 21
                              },
                              "start": {
                                "column": 13,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            538,
                            539
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 21
                            },
                            "start": {
                              "column": 13,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          538,
                          550
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 21
                          },
                          "start": {
                            "column": 13,
                            "line": 21
                          }
                        }
                      }
                    },
                    "range": [
                      535,
                      550
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 21
                      },
                      "start": {
                        "column": 10,
                        "line": 21
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 21
                    },
                    "start": {
                      "column": 27,
                      "line": 21
                    }
                  },
                  "range": [
                    552,
                    559
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      555,
                      559
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 21
                      },
                      "start": {
                        "column": 30,
                        "line": 21
                      }
                    }
                  }
                },
                "range": [
                  534,
                  559
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 21
                  },
                  "start": {
                    "column": 9,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              527,
              560
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 21
              },
              "start": {
                "column": 2,
                "line": 21
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 75,
            "line": 19
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
            "name": "Runtype",
            "optional": false,
            "range": [
              484,
              491
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 19
              },
              "start": {
                "column": 53,
                "line": 19
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              491,
              505
            ],
            "params": [
              {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'witness'",
                    "value": "witness",
                    "range": [
                      494,
                      503
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 19
                      },
                      "start": {
                        "column": 63,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    494,
                    503
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 19
                    },
                    "start": {
                      "column": 63,
                      "line": 19
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      492,
                      493
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 19
                      },
                      "start": {
                        "column": 61,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    492,
                    493
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 19
                    },
                    "start": {
                      "column": 61,
                      "line": 19
                    }
                  }
                },
                "range": [
                  492,
                  504
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 19
                  },
                  "start": {
                    "column": 61,
                    "line": 19
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 19
              },
              "start": {
                "column": 60,
                "line": 19
              }
            }
          },
          "range": [
            484,
            505
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 19
            },
            "start": {
              "column": 53,
              "line": 19
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constraint",
        "optional": false,
        "range": [
          441,
          451
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 44,
            "line": 19
          },
          "start": {
            "column": 20,
            "line": 19
          }
        },
        "range": [
          451,
          475
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
                  469,
                  474
                ],
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      470,
                      473
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 19
                      },
                      "start": {
                        "column": 39,
                        "line": 19
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 19
                  },
                  "start": {
                    "column": 38,
                    "line": 19
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Runtype",
                "optional": false,
                "range": [
                  462,
                  469
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 19
                  },
                  "start": {
                    "column": 31,
                    "line": 19
                  }
                }
              },
              "range": [
                462,
                474
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 19
                },
                "start": {
                  "column": 31,
                  "line": 19
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
                452,
                453
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
            "out": false,
            "range": [
              452,
              474
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 19
              },
              "start": {
                "column": 21,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        431,
        562
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 23
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
