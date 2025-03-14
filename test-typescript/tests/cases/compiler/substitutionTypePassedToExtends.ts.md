__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    215
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "range": [
          5,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
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
                  18,
                  19
                ],
                "loc": {
                  "end": {
                    "column": 19,
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
                19
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 1
                },
                "start": {
                  "column": 18,
                  "line": 1
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  21,
                  22
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 1
                  },
                  "start": {
                    "column": 21,
                    "line": 1
                  }
                }
              },
              "range": [
                21,
                22
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            17,
            23
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 1
            },
            "start": {
              "column": 17,
              "line": 1
            }
          }
        },
        "extendsType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSUnknownKeyword",
              "range": [
                32,
                39
              ],
              "loc": {
                "end": {
                  "column": 39,
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
              41
            ],
            "loc": {
              "end": {
                "column": 41,
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
            43
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 1
            },
            "start": {
              "column": 32,
              "line": 1
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "'else'",
            "value": "else",
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
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              50,
              58
            ],
            "params": [
              {
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
                        52,
                        53
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 1
                        },
                        "start": {
                          "column": 52,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      52,
                      53
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 1
                      },
                      "start": {
                        "column": 52,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        55,
                        56
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 1
                        },
                        "start": {
                          "column": 55,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      55,
                      56
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 1
                      },
                      "start": {
                        "column": 55,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  51,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 1
                  },
                  "start": {
                    "column": 51,
                    "line": 1
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 1
              },
              "start": {
                "column": 50,
                "line": 1
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar1",
            "optional": false,
            "range": [
              46,
              50
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 1
              },
              "start": {
                "column": 46,
                "line": 1
              }
            }
          },
          "range": [
            46,
            58
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 1
            },
            "start": {
              "column": 46,
              "line": 1
            }
          }
        },
        "range": [
          17,
          67
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        },
        "range": [
          9,
          14
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
                10,
                11
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 1
                },
                "start": {
                  "column": 10,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              10,
              11
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 1
              },
              "start": {
                "column": 10,
                "line": 1
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
              "name": "B",
              "optional": false,
              "range": [
                12,
                13
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 1
                },
                "start": {
                  "column": 12,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              12,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        67
      ],
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar1",
        "optional": false,
        "range": [
          73,
          77
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
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
              "column": 36,
              "line": 2
            },
            "start": {
              "column": 35,
              "line": 2
            }
          }
        },
        "range": [
          103,
          104
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 2
          },
          "start": {
            "column": 35,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 32,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        },
        "range": [
          77,
          100
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "range": [
                    88,
                    95
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 2
                    },
                    "start": {
                      "column": 20,
                      "line": 2
                    }
                  }
                },
                "range": [
                  88,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 2
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              },
              "range": [
                88,
                99
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 2
                },
                "start": {
                  "column": 20,
                  "line": 2
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
                78,
                79
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              78,
              99
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 2
              },
              "start": {
                "column": 10,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        68,
        104
      ],
      "loc": {
        "end": {
          "column": 36,
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
        "name": "Foo2",
        "optional": false,
        "range": [
          111,
          115
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              124,
              127
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
                    125,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 4
                    },
                    "start": {
                      "column": 19,
                      "line": 4
                    }
                  }
                },
                "range": [
                  125,
                  126
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 4
                  },
                  "start": {
                    "column": 19,
                    "line": 4
                  }
                }
              }
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
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Set",
            "optional": false,
            "range": [
              121,
              124
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 4
              },
              "start": {
                "column": 15,
                "line": 4
              }
            }
          },
          "range": [
            121,
            127
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 4
            },
            "start": {
              "column": 15,
              "line": 4
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              139,
              150
            ],
            "params": [
              {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "range": [
                    140,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 4
                    },
                    "start": {
                      "column": 34,
                      "line": 4
                    }
                  }
                },
                "range": [
                  140,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 4
                  },
                  "start": {
                    "column": 34,
                    "line": 4
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 4
              },
              "start": {
                "column": 33,
                "line": 4
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Set",
            "optional": false,
            "range": [
              136,
              139
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 4
              },
              "start": {
                "column": 30,
                "line": 4
              }
            }
          },
          "range": [
            136,
            150
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 4
            },
            "start": {
              "column": 30,
              "line": 4
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "'else'",
            "value": "else",
            "range": [
              168,
              174
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 4
              },
              "start": {
                "column": 62,
                "line": 4
              }
            }
          },
          "range": [
            168,
            174
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 4
            },
            "start": {
              "column": 62,
              "line": 4
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              157,
              165
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    161,
                    164
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
                          162,
                          163
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 4
                          },
                          "start": {
                            "column": 56,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        162,
                        163
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 4
                        },
                        "start": {
                          "column": 56,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 4
                    },
                    "start": {
                      "column": 55,
                      "line": 4
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "range": [
                    158,
                    161
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 4
                    },
                    "start": {
                      "column": 52,
                      "line": 4
                    }
                  }
                },
                "range": [
                  158,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 4
                  },
                  "start": {
                    "column": 52,
                    "line": 4
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 4
              },
              "start": {
                "column": 51,
                "line": 4
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar2",
            "optional": false,
            "range": [
              153,
              157
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 4
              },
              "start": {
                "column": 47,
                "line": 4
              }
            }
          },
          "range": [
            153,
            165
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 4
            },
            "start": {
              "column": 47,
              "line": 4
            }
          }
        },
        "range": [
          121,
          174
        ],
        "loc": {
          "end": {
            "column": 68,
            "line": 4
          },
          "start": {
            "column": 15,
            "line": 4
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        },
        "range": [
          115,
          118
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
                116,
                117
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 4
                },
                "start": {
                  "column": 10,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              116,
              117
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 4
              },
              "start": {
                "column": 10,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        106,
        174
      ],
      "loc": {
        "end": {
          "column": 68,
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
        "name": "Bar2",
        "optional": false,
        "range": [
          180,
          184
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
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "range": [
            213,
            214
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 5
            },
            "start": {
              "column": 38,
              "line": 5
            }
          }
        },
        "range": [
          213,
          214
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 5
          },
          "start": {
            "column": 38,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        },
        "range": [
          184,
          210
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
                  198,
                  209
                ],
                "params": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSUnknownKeyword",
                      "range": [
                        199,
                        206
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 5
                        },
                        "start": {
                          "column": 24,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      199,
                      208
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 5
                      },
                      "start": {
                        "column": 24,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 5
                  },
                  "start": {
                    "column": 23,
                    "line": 5
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Set",
                "optional": false,
                "range": [
                  195,
                  198
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 5
                  },
                  "start": {
                    "column": 20,
                    "line": 5
                  }
                }
              },
              "range": [
                195,
                209
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 5
                },
                "start": {
                  "column": 20,
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
                185,
                186
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              185,
              209
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 5
              },
              "start": {
                "column": 10,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        175,
        214
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 5
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
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
