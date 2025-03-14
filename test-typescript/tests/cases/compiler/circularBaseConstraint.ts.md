__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    225
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          27,
          28
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 9,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        },
        "range": [
          28,
          31
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
                29,
                30
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 3
                },
                "start": {
                  "column": 7,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              29,
              30
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 3
              },
              "start": {
                "column": 7,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        36
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 3
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
        "name": "B",
        "optional": false,
        "range": [
          43,
          44
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 5
          },
          "start": {
            "column": 5,
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
              50,
              51
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
          "range": [
            50,
            51
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
        "extendsType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSAnyKeyword",
            "range": [
              60,
              63
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 5
              },
              "start": {
                "column": 22,
                "line": 5
              }
            }
          },
          "range": [
            60,
            65
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 5
            },
            "start": {
              "column": 22,
              "line": 5
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                85,
                88
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
                      86,
                      87
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    86,
                    87
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 7
                },
                "start": {
                  "column": 7,
                  "line": 7
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                84,
                85
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
              84,
              88
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "extendsType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "range": [
                  103,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 7
                  },
                  "start": {
                    "column": 25,
                    "line": 7
                  }
                }
              },
              "out": false,
              "range": [
                103,
                106
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 7
                },
                "start": {
                  "column": 25,
                  "line": 7
                }
              }
            },
            "range": [
              97,
              106
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 7
              },
              "start": {
                "column": 19,
                "line": 7
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              175,
              180
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 11
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
                "name": "key",
                "optional": false,
                "range": [
                  113,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 8
                  },
                  "start": {
                    "column": 6,
                    "line": 8
                  }
                }
              },
              "range": [
                113,
                116
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 8
                },
                "start": {
                  "column": 6,
                  "line": 8
                }
              }
            },
            "extendsType": {
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
                    131,
                    132
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 8
                    },
                    "start": {
                      "column": 24,
                      "line": 8
                    }
                  }
                },
                "range": [
                  131,
                  132
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 8
                  },
                  "start": {
                    "column": 24,
                    "line": 8
                  }
                }
              },
              "range": [
                125,
                132
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 8
                },
                "start": {
                  "column": 18,
                  "line": 8
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "range": [
                163,
                168
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 10
                },
                "start": {
                  "column": 10,
                  "line": 10
                }
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  144,
                  152
                ],
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "range": [
                          147,
                          150
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
                      },
                      "range": [
                        147,
                        150
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
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          145,
                          146
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 9
                          },
                          "start": {
                            "column": 12,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        145,
                        146
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 9
                        },
                        "start": {
                          "column": 12,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      145,
                      151
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 9
                      },
                      "start": {
                        "column": 12,
                        "line": 9
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 9
                  },
                  "start": {
                    "column": 11,
                    "line": 9
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  143,
                  144
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 9
                  },
                  "start": {
                    "column": 10,
                    "line": 9
                  }
                }
              },
              "range": [
                143,
                152
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 9
                },
                "start": {
                  "column": 10,
                  "line": 9
                }
              }
            },
            "range": [
              113,
              168
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "range": [
            84,
            180
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 11
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "range": [
            72,
            77
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 6
            }
          }
        },
        "range": [
          50,
          180
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 11
          },
          "start": {
            "column": 12,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 9,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        },
        "range": [
          44,
          47
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
                45,
                46
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 5
                },
                "start": {
                  "column": 7,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              45,
              46
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 5
              },
              "start": {
                "column": 7,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        38,
        181
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 11
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TemplateLiteral",
                "expressions": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      210,
                      211
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 14
                      },
                      "start": {
                        "column": 7,
                        "line": 14
                      }
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "range": [
                      207,
                      210
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 14
                      },
                      "start": {
                        "column": 4,
                        "line": 14
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
                      211,
                      213
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  207,
                  213
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    218,
                    221
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
                          219,
                          220
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 14
                          },
                          "start": {
                            "column": 16,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        219,
                        220
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 14
                        },
                        "start": {
                          "column": 16,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 14
                    },
                    "start": {
                      "column": 15,
                      "line": 14
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "range": [
                    217,
                    218
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 14
                    },
                    "start": {
                      "column": 14,
                      "line": 14
                    }
                  }
                },
                "range": [
                  217,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 14
                  },
                  "start": {
                    "column": 14,
                    "line": 14
                  }
                }
              },
              "range": [
                207,
                221
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "range": [
              207,
              222
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          201,
          224
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 18,
            "line": 13
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
          192,
          195
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        }
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 13
          },
          "start": {
            "column": 12,
            "line": 13
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
              "name": "T",
              "optional": false,
              "range": [
                196,
                197
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 13
                },
                "start": {
                  "column": 13,
                  "line": 13
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
                "column": 14,
                "line": 13
              },
              "start": {
                "column": 13,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        183,
        224
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
      "line": 3
    }
  },
  "hashbang": null
}
```
