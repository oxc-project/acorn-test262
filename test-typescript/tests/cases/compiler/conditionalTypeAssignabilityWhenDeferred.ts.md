__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    3727
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        98
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FilterPropsByType",
          "optional": false,
          "range": [
            12,
            29
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
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
                "name": "T",
                "optional": false,
                "range": [
                  95,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                }
              },
              "range": [
                95,
                96
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "range": [
              89,
              96
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 3
              },
              "start": {
                "column": 2,
                "line": 3
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
                  "name": "T",
                  "optional": false,
                  "range": [
                    55,
                    56
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 2
                    },
                    "start": {
                      "column": 14,
                      "line": 2
                    }
                  }
                },
                "range": [
                  55,
                  56
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 2
                  },
                  "start": {
                    "column": 14,
                    "line": 2
                  }
                }
              },
              "range": [
                49,
                56
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                44,
                45
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 2
                },
                "start": {
                  "column": 3,
                  "line": 2
                }
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      61,
                      62
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 2
                      },
                      "start": {
                        "column": 20,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    61,
                    62
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 2
                    },
                    "start": {
                      "column": 20,
                      "line": 2
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
                      59,
                      60
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 2
                      },
                      "start": {
                        "column": 18,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    59,
                    60
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 2
                    },
                    "start": {
                      "column": 18,
                      "line": 2
                    }
                  }
                },
                "range": [
                  59,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TT",
                  "optional": false,
                  "range": [
                    72,
                    74
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 2
                    },
                    "start": {
                      "column": 31,
                      "line": 2
                    }
                  }
                },
                "range": [
                  72,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 2
                  },
                  "start": {
                    "column": 31,
                    "line": 2
                  }
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "range": [
                  81,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 2
                  },
                  "start": {
                    "column": 40,
                    "line": 2
                  }
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    77,
                    78
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 2
                    },
                    "start": {
                      "column": 36,
                      "line": 2
                    }
                  }
                },
                "range": [
                  77,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 2
                  },
                  "start": {
                    "column": 36,
                    "line": 2
                  }
                }
              },
              "range": [
                59,
                86
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              }
            },
            "range": [
              39,
              88
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 3
              },
              "start": {
                "column": 39,
                "line": 1
              }
            }
          },
          "range": [
            39,
            97
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 3
            },
            "start": {
              "column": 39,
              "line": 1
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 36,
              "line": 1
            },
            "start": {
              "column": 29,
              "line": 1
            }
          },
          "range": [
            29,
            36
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
                  30,
                  31
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 1
                  },
                  "start": {
                    "column": 30,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                30,
                31
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 1
                },
                "start": {
                  "column": 30,
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
                "name": "TT",
                "optional": false,
                "range": [
                  33,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 1
                  },
                  "start": {
                    "column": 33,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                33,
                35
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          98
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
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
          "column": 11,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          272,
          274
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 9
          },
          "start": {
            "column": 53,
            "line": 9
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "select",
        "optional": false,
        "range": [
          109,
          115
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "property",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 13,
                "line": 9
              },
              "start": {
                "column": 10,
                "line": 9
              }
            },
            "range": [
              229,
              232
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
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
                231,
                232
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
            }
          },
          "range": [
            221,
            232
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 9
            },
            "start": {
              "column": 2,
              "line": 9
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "list",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 28,
                "line": 9
              },
              "start": {
                "column": 19,
                "line": 9
              }
            },
            "range": [
              238,
              247
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TList",
                  "optional": false,
                  "range": [
                    240,
                    245
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 9
                    },
                    "start": {
                      "column": 21,
                      "line": 9
                    }
                  }
                },
                "range": [
                  240,
                  245
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 9
                  },
                  "start": {
                    "column": 21,
                    "line": 9
                  }
                }
              },
              "range": [
                240,
                247
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 9
                },
                "start": {
                  "column": 21,
                  "line": 9
                }
              }
            }
          },
          "range": [
            234,
            247
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 9
            },
            "start": {
              "column": 15,
              "line": 9
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "valueProp",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 51,
                "line": 9
              },
              "start": {
                "column": 39,
                "line": 9
              }
            },
            "range": [
              258,
              270
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValueProp",
                "optional": false,
                "range": [
                  260,
                  270
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 9
                  },
                  "start": {
                    "column": 41,
                    "line": 9
                  }
                }
              },
              "range": [
                260,
                270
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 9
                },
                "start": {
                  "column": 41,
                  "line": 9
                }
              }
            }
          },
          "range": [
            249,
            270
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 9
            },
            "start": {
              "column": 30,
              "line": 9
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 15,
            "line": 5
          }
        },
        "range": [
          115,
          220
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    129,
                    135
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 6
                    },
                    "start": {
                      "column": 12,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    138,
                    144
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 6
                    },
                    "start": {
                      "column": 21,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                129,
                144
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
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
                119,
                120
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 6
                },
                "start": {
                  "column": 2,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              119,
              144
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                162,
                168
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
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TList",
              "optional": false,
              "range": [
                148,
                153
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 7
                },
                "start": {
                  "column": 2,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              148,
              168
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 7
              },
              "start": {
                "column": 2,
                "line": 7
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  208,
                  218
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TList",
                      "optional": false,
                      "range": [
                        209,
                        214
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 8
                        },
                        "start": {
                          "column": 39,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      209,
                      214
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 8
                      },
                      "start": {
                        "column": 39,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        216,
                        217
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 8
                        },
                        "start": {
                          "column": 46,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      216,
                      217
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 8
                      },
                      "start": {
                        "column": 46,
                        "line": 8
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 8
                  },
                  "start": {
                    "column": 38,
                    "line": 8
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FilterPropsByType",
                "optional": false,
                "range": [
                  191,
                  208
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 8
                  },
                  "start": {
                    "column": 21,
                    "line": 8
                  }
                }
              },
              "range": [
                191,
                218
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 8
                },
                "start": {
                  "column": 21,
                  "line": 8
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValueProp",
              "optional": false,
              "range": [
                172,
                182
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
            },
            "out": false,
            "range": [
              172,
              218
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        100,
        274
      ],
      "loc": {
        "end": {
          "column": 55,
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
        276,
        379
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      358,
                      359
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 12
                      },
                      "start": {
                        "column": 9,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tipos",
                    "optional": false,
                    "range": [
                      361,
                      366
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 12
                      },
                      "start": {
                        "column": 12,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"value\"",
                    "value": "value",
                    "range": [
                      368,
                      375
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 12
                      },
                      "start": {
                        "column": 19,
                        "line": 12
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "select",
                  "optional": false,
                  "range": [
                    351,
                    357
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 12
                    },
                    "start": {
                      "column": 2,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "range": [
                  351,
                  376
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 12
                  },
                  "start": {
                    "column": 2,
                    "line": 12
                  }
                }
              },
              "range": [
                351,
                377
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 12
                },
                "start": {
                  "column": 2,
                  "line": 12
                }
              }
            }
          ],
          "range": [
            347,
            379
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
            },
            "start": {
              "column": 71,
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
          "name": "func",
          "optional": false,
          "range": [
            292,
            296
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 11
            },
            "start": {
              "column": 16,
              "line": 11
            }
          }
        },
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
                  "column": 45,
                  "line": 11
                },
                "start": {
                  "column": 41,
                  "line": 11
                }
              },
              "range": [
                317,
                321
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "XX",
                  "optional": false,
                  "range": [
                    319,
                    321
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 11
                    },
                    "start": {
                      "column": 43,
                      "line": 11
                    }
                  }
                },
                "range": [
                  319,
                  321
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 11
                  },
                  "start": {
                    "column": 43,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              316,
              321
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 11
              },
              "start": {
                "column": 40,
                "line": 11
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tipos",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 69,
                  "line": 11
                },
                "start": {
                  "column": 52,
                  "line": 11
                }
              },
              "range": [
                328,
                345
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          332,
                          337
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 11
                          },
                          "start": {
                            "column": 56,
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
                            "column": 65,
                            "line": 11
                          },
                          "start": {
                            "column": 61,
                            "line": 11
                          }
                        },
                        "range": [
                          337,
                          341
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "XX",
                            "optional": false,
                            "range": [
                              339,
                              341
                            ],
                            "loc": {
                              "end": {
                                "column": 65,
                                "line": 11
                              },
                              "start": {
                                "column": 63,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            339,
                            341
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 11
                            },
                            "start": {
                              "column": 63,
                              "line": 11
                            }
                          }
                        }
                      },
                      "range": [
                        332,
                        341
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 11
                        },
                        "start": {
                          "column": 56,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "range": [
                    330,
                    343
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 11
                    },
                    "start": {
                      "column": 54,
                      "line": 11
                    }
                  }
                },
                "range": [
                  330,
                  345
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 11
                  },
                  "start": {
                    "column": 54,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              323,
              345
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 11
              },
              "start": {
                "column": 47,
                "line": 11
              }
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 39,
              "line": 11
            },
            "start": {
              "column": 20,
              "line": 11
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
                "type": "TSStringKeyword",
                "range": [
                  308,
                  314
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 11
                  },
                  "start": {
                    "column": 32,
                    "line": 11
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "XX",
                "optional": false,
                "range": [
                  297,
                  299
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 11
                  },
                  "start": {
                    "column": 21,
                    "line": 11
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
                  "column": 38,
                  "line": 11
                },
                "start": {
                  "column": 21,
                  "line": 11
                }
              }
            }
          ]
        },
        "range": [
          283,
          379
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
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
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "onlyNullablePlease",
        "optional": false,
        "range": [
          398,
          416
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 15
          },
          "start": {
            "column": 17,
            "line": 15
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 10,
                "line": 16
              },
              "start": {
                "column": 7,
                "line": 16
              }
            },
            "range": [
              465,
              468
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  467,
                  468
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 16
                  },
                  "start": {
                    "column": 9,
                    "line": 16
                  }
                }
              },
              "range": [
                467,
                468
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 16
                },
                "start": {
                  "column": 9,
                  "line": 16
                }
              }
            }
          },
          "range": [
            460,
            468
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 16
            },
            "start": {
              "column": 2,
              "line": 16
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 7,
            "line": 17
          },
          "start": {
            "column": 1,
            "line": 17
          }
        },
        "range": [
          470,
          476
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            472,
            476
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 17
            },
            "start": {
              "column": 3,
              "line": 17
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 75,
            "line": 15
          },
          "start": {
            "column": 35,
            "line": 15
          }
        },
        "range": [
          416,
          456
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSNullKeyword",
                "range": [
                  427,
                  431
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 15
                  },
                  "start": {
                    "column": 46,
                    "line": 15
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
                    440,
                    441
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 15
                    },
                    "start": {
                      "column": 59,
                      "line": 15
                    }
                  }
                },
                "range": [
                  440,
                  441
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 15
                  },
                  "start": {
                    "column": 59,
                    "line": 15
                  }
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "range": [
                  450,
                  455
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 15
                  },
                  "start": {
                    "column": 69,
                    "line": 15
                  }
                }
              },
              "trueType": {
                "type": "TSAnyKeyword",
                "range": [
                  444,
                  447
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 15
                  },
                  "start": {
                    "column": 63,
                    "line": 15
                  }
                }
              },
              "range": [
                427,
                455
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 15
                },
                "start": {
                  "column": 46,
                  "line": 15
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
                417,
                418
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
            },
            "out": false,
            "range": [
              417,
              455
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 15
              },
              "start": {
                "column": 36,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        381,
        477
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 15
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
        "name": "onlyNullablePlease2",
        "optional": false,
        "range": [
          496,
          515
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 19
          },
          "start": {
            "column": 17,
            "line": 19
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 10,
                "line": 21
              },
              "start": {
                "column": 7,
                "line": 21
              }
            },
            "range": [
              569,
              572
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  571,
                  572
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 21
                  },
                  "start": {
                    "column": 9,
                    "line": 21
                  }
                }
              },
              "range": [
                571,
                572
              ],
              "loc": {
                "end": {
                  "column": 10,
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
            564,
            572
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 21
            },
            "start": {
              "column": 2,
              "line": 21
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 17,
            "line": 21
          },
          "start": {
            "column": 11,
            "line": 21
          }
        },
        "range": [
          573,
          579
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            575,
            579
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 21
            },
            "start": {
              "column": 13,
              "line": 21
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 36,
            "line": 19
          }
        },
        "range": [
          515,
          563
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      530,
                      534
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 20
                      },
                      "start": {
                        "column": 13,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  529,
                  535
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 20
                  },
                  "start": {
                    "column": 12,
                    "line": 20
                  }
                }
              },
              "extendsType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        545,
                        546
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 20
                        },
                        "start": {
                          "column": 28,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      545,
                      546
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 20
                      },
                      "start": {
                        "column": 28,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  544,
                  547
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 20
                  },
                  "start": {
                    "column": 27,
                    "line": 20
                  }
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "range": [
                  556,
                  561
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 20
                  },
                  "start": {
                    "column": 39,
                    "line": 20
                  }
                }
              },
              "trueType": {
                "type": "TSAnyKeyword",
                "range": [
                  550,
                  553
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 20
                  },
                  "start": {
                    "column": 33,
                    "line": 20
                  }
                }
              },
              "range": [
                529,
                561
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 20
                },
                "start": {
                  "column": 12,
                  "line": 20
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
                  "column": 3,
                  "line": 20
                },
                "start": {
                  "column": 2,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              519,
              561
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 20
              },
              "start": {
                "column": 2,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        479,
        580
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 21
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 23
                },
                "start": {
                  "column": 13,
                  "line": 23
                }
              },
              "range": [
                595,
                610
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      597,
                      603
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 23
                      },
                      "start": {
                        "column": 15,
                        "line": 23
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      606,
                      610
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 23
                      },
                      "start": {
                        "column": 24,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  597,
                  610
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 23
                  },
                  "start": {
                    "column": 15,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              594,
              610
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 23
              },
              "start": {
                "column": 12,
                "line": 23
              }
            }
          },
          "init": null,
          "range": [
            594,
            610
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 23
            },
            "start": {
              "column": 12,
              "line": 23
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        582,
        611
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "name": "z",
            "optional": false,
            "range": [
              631,
              632
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 24
              },
              "start": {
                "column": 19,
                "line": 24
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "onlyNullablePlease",
          "optional": false,
          "range": [
            612,
            630
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 24
            },
            "start": {
              "column": 0,
              "line": 24
            }
          }
        },
        "optional": false,
        "range": [
          612,
          633
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        612,
        634
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
            "name": "z",
            "optional": false,
            "range": [
              676,
              677
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 25
              },
              "start": {
                "column": 20,
                "line": 25
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "onlyNullablePlease2",
          "optional": false,
          "range": [
            656,
            675
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "optional": false,
        "range": [
          656,
          678
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        656,
        679
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 25
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 27
                },
                "start": {
                  "column": 13,
                  "line": 27
                }
              },
              "range": [
                715,
                723
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  717,
                  723
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 27
                  },
                  "start": {
                    "column": 15,
                    "line": 27
                  }
                }
              }
            },
            "range": [
              714,
              723
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 27
              },
              "start": {
                "column": 12,
                "line": 27
              }
            }
          },
          "init": null,
          "range": [
            714,
            723
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 27
            },
            "start": {
              "column": 12,
              "line": 27
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        702,
        724
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
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
            "name": "y",
            "optional": false,
            "range": [
              744,
              745
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 28
              },
              "start": {
                "column": 19,
                "line": 28
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "onlyNullablePlease",
          "optional": false,
          "range": [
            725,
            743
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 28
            },
            "start": {
              "column": 0,
              "line": 28
            }
          }
        },
        "optional": false,
        "range": [
          725,
          746
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        725,
        747
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
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "range": [
              789,
              790
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 29
              },
              "start": {
                "column": 20,
                "line": 29
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "onlyNullablePlease2",
          "optional": false,
          "range": [
            769,
            788
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 29
            },
            "start": {
              "column": 0,
              "line": 29
            }
          }
        },
        "optional": false,
        "range": [
          769,
          791
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 29
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "range": [
        769,
        792
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
                        "column": 17,
                        "line": 32
                      },
                      "start": {
                        "column": 7,
                        "line": 32
                      }
                    },
                    "range": [
                      844,
                      854
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              846,
                              847
                            ],
                            "loc": {
                              "end": {
                                "column": 10,
                                "line": 32
                              },
                              "start": {
                                "column": 9,
                                "line": 32
                              }
                            }
                          },
                          "range": [
                            846,
                            847
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 32
                            },
                            "start": {
                              "column": 9,
                              "line": 32
                            }
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "range": [
                            850,
                            854
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 32
                            },
                            "start": {
                              "column": 13,
                              "line": 32
                            }
                          }
                        }
                      ],
                      "range": [
                        846,
                        854
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 32
                        },
                        "start": {
                          "column": 9,
                          "line": 32
                        }
                      }
                    }
                  },
                  "range": [
                    843,
                    854
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 32
                    },
                    "start": {
                      "column": 6,
                      "line": 32
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      886,
                      887
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 32
                      },
                      "start": {
                        "column": 49,
                        "line": 32
                      }
                    }
                  },
                  "consequent": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      879,
                      883
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 32
                      },
                      "start": {
                        "column": 42,
                        "line": 32
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": ">",
                    "left": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "range": [
                            857,
                            861
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 32
                            },
                            "start": {
                              "column": 20,
                              "line": 32
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "range": [
                            862,
                            868
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 32
                            },
                            "start": {
                              "column": 25,
                              "line": 32
                            }
                          }
                        },
                        "range": [
                          857,
                          868
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 32
                          },
                          "start": {
                            "column": 20,
                            "line": 32
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        857,
                        870
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 32
                        },
                        "start": {
                          "column": 20,
                          "line": 32
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "0.5",
                      "value": 0.5,
                      "range": [
                        873,
                        876
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 32
                        },
                        "start": {
                          "column": 36,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      857,
                      876
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 32
                      },
                      "start": {
                        "column": 20,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    857,
                    887
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 32
                    },
                    "start": {
                      "column": 20,
                      "line": 32
                    }
                  }
                },
                "range": [
                  843,
                  887
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 32
                  },
                  "start": {
                    "column": 6,
                    "line": 32
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              839,
              888
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 32
              },
              "start": {
                "column": 2,
                "line": 32
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    910,
                    911
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 33
                    },
                    "start": {
                      "column": 21,
                      "line": 33
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "onlyNullablePlease",
                "optional": false,
                "range": [
                  891,
                  909
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 33
                  },
                  "start": {
                    "column": 2,
                    "line": 33
                  }
                }
              },
              "optional": false,
              "range": [
                891,
                912
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 33
                },
                "start": {
                  "column": 2,
                  "line": 33
                }
              }
            },
            "range": [
              891,
              913
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 33
              },
              "start": {
                "column": 2,
                "line": 33
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    951,
                    952
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 34
                    },
                    "start": {
                      "column": 22,
                      "line": 34
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "onlyNullablePlease2",
                "optional": false,
                "range": [
                  931,
                  950
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 34
                  },
                  "start": {
                    "column": 2,
                    "line": 34
                  }
                }
              },
              "optional": false,
              "range": [
                931,
                953
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 34
                },
                "start": {
                  "column": 2,
                  "line": 34
                }
              }
            },
            "range": [
              931,
              954
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 34
              },
              "start": {
                "column": 2,
                "line": 34
              }
            }
          }
        ],
        "range": [
          835,
          971
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 20,
            "line": 31
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          824,
          825
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 31
          },
          "start": {
            "column": 9,
            "line": 31
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 18,
                "line": 31
              },
              "start": {
                "column": 15,
                "line": 31
              }
            },
            "range": [
              830,
              833
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  832,
                  833
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 31
                  },
                  "start": {
                    "column": 17,
                    "line": 31
                  }
                }
              },
              "range": [
                832,
                833
              ],
              "loc": {
                "end": {
                  "column": 18,
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
            829,
            833
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 31
            },
            "start": {
              "column": 14,
              "line": 31
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 31
          },
          "start": {
            "column": 10,
            "line": 31
          }
        },
        "range": [
          825,
          828
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
                826,
                827
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 31
                },
                "start": {
                  "column": 11,
                  "line": 31
                }
              }
            },
            "out": false,
            "range": [
              826,
              827
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 31
              },
              "start": {
                "column": 11,
                "line": 31
              }
            }
          }
        ]
      },
      "range": [
        815,
        971
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 31
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  1054,
                  1056
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 38
                  },
                  "start": {
                    "column": 2,
                    "line": 38
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  1059,
                  1061
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 38
                  },
                  "start": {
                    "column": 7,
                    "line": 38
                  }
                }
              },
              "range": [
                1054,
                1061
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 38
                },
                "start": {
                  "column": 2,
                  "line": 38
                }
              }
            },
            "range": [
              1054,
              1062
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 38
              },
              "start": {
                "column": 2,
                "line": 38
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  1071,
                  1073
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 39
                  },
                  "start": {
                    "column": 2,
                    "line": 39
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  1076,
                  1078
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 39
                  },
                  "start": {
                    "column": 7,
                    "line": 39
                  }
                }
              },
              "range": [
                1071,
                1078
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 39
                },
                "start": {
                  "column": 2,
                  "line": 39
                }
              }
            },
            "range": [
              1071,
              1079
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 39
              },
              "start": {
                "column": 2,
                "line": 39
              }
            }
          }
        ],
        "range": [
          1050,
          1096
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 40
          },
          "start": {
            "column": 77,
            "line": 37
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          982,
          984
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 37
          },
          "start": {
            "column": 9,
            "line": 37
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 37
              },
              "start": {
                "column": 17,
                "line": 37
              }
            },
            "range": [
              990,
              1006
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      994,
                      995
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 37
                      },
                      "start": {
                        "column": 21,
                        "line": 37
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
                        "column": 25,
                        "line": 37
                      },
                      "start": {
                        "column": 22,
                        "line": 37
                      }
                    },
                    "range": [
                      995,
                      998
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          997,
                          998
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 37
                          },
                          "start": {
                            "column": 24,
                            "line": 37
                          }
                        }
                      },
                      "range": [
                        997,
                        998
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 37
                        },
                        "start": {
                          "column": 24,
                          "line": 37
                        }
                      }
                    }
                  },
                  "range": [
                    994,
                    999
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 37
                    },
                    "start": {
                      "column": 21,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      1000,
                      1001
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 37
                      },
                      "start": {
                        "column": 27,
                        "line": 37
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
                        "column": 31,
                        "line": 37
                      },
                      "start": {
                        "column": 28,
                        "line": 37
                      }
                    },
                    "range": [
                      1001,
                      1004
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1003,
                          1004
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 37
                          },
                          "start": {
                            "column": 30,
                            "line": 37
                          }
                        }
                      },
                      "range": [
                        1003,
                        1004
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 37
                        },
                        "start": {
                          "column": 30,
                          "line": 37
                        }
                      }
                    }
                  },
                  "range": [
                    1000,
                    1004
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 37
                    },
                    "start": {
                      "column": 27,
                      "line": 37
                    }
                  }
                }
              ],
              "range": [
                992,
                1006
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 37
                },
                "start": {
                  "column": 19,
                  "line": 37
                }
              }
            }
          },
          "range": [
            988,
            1006
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 37
            },
            "start": {
              "column": 15,
              "line": 37
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 75,
                "line": 37
              },
              "start": {
                "column": 37,
                "line": 37
              }
            },
            "range": [
              1010,
              1048
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
                    1012,
                    1013
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 37
                    },
                    "start": {
                      "column": 39,
                      "line": 37
                    }
                  }
                },
                "range": [
                  1012,
                  1013
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 37
                  },
                  "start": {
                    "column": 39,
                    "line": 37
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
                    1022,
                    1023
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 37
                    },
                    "start": {
                      "column": 49,
                      "line": 37
                    }
                  }
                },
                "range": [
                  1022,
                  1023
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 37
                  },
                  "start": {
                    "column": 49,
                    "line": 37
                  }
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "range": [
                  1043,
                  1048
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 37
                  },
                  "start": {
                    "column": 70,
                    "line": 37
                  }
                }
              },
              "trueType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1028,
                        1029
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 37
                        },
                        "start": {
                          "column": 55,
                          "line": 37
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
                          "column": 59,
                          "line": 37
                        },
                        "start": {
                          "column": 56,
                          "line": 37
                        }
                      },
                      "range": [
                        1029,
                        1032
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            1031,
                            1032
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 37
                            },
                            "start": {
                              "column": 58,
                              "line": 37
                            }
                          }
                        },
                        "range": [
                          1031,
                          1032
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 37
                          },
                          "start": {
                            "column": 58,
                            "line": 37
                          }
                        }
                      }
                    },
                    "range": [
                      1028,
                      1033
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 37
                      },
                      "start": {
                        "column": 55,
                        "line": 37
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        1034,
                        1035
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 37
                        },
                        "start": {
                          "column": 61,
                          "line": 37
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
                          "column": 65,
                          "line": 37
                        },
                        "start": {
                          "column": 62,
                          "line": 37
                        }
                      },
                      "range": [
                        1035,
                        1038
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            1037,
                            1038
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 37
                            },
                            "start": {
                              "column": 64,
                              "line": 37
                            }
                          }
                        },
                        "range": [
                          1037,
                          1038
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 37
                          },
                          "start": {
                            "column": 64,
                            "line": 37
                          }
                        }
                      }
                    },
                    "range": [
                      1034,
                      1038
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 37
                      },
                      "start": {
                        "column": 61,
                        "line": 37
                      }
                    }
                  }
                ],
                "range": [
                  1026,
                  1040
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 37
                  },
                  "start": {
                    "column": 53,
                    "line": 37
                  }
                }
              },
              "range": [
                1012,
                1048
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 37
                },
                "start": {
                  "column": 39,
                  "line": 37
                }
              }
            }
          },
          "range": [
            1008,
            1048
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 37
            },
            "start": {
              "column": 35,
              "line": 37
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 37
          },
          "start": {
            "column": 11,
            "line": 37
          }
        },
        "range": [
          984,
          987
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
                985,
                986
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 37
                },
                "start": {
                  "column": 12,
                  "line": 37
                }
              }
            },
            "out": false,
            "range": [
              985,
              986
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 37
              },
              "start": {
                "column": 12,
                "line": 37
              }
            }
          }
        ]
      },
      "range": [
        973,
        1096
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          1103,
          1106
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 42
          },
          "start": {
            "column": 5,
            "line": 42
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
              1112,
              1113
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 42
              },
              "start": {
                "column": 14,
                "line": 42
              }
            }
          },
          "range": [
            1112,
            1113
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 42
            },
            "start": {
              "column": 14,
              "line": 42
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
              1122,
              1126
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 42
              },
              "start": {
                "column": 24,
                "line": 42
              }
            }
          },
          "range": [
            1122,
            1126
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 42
            },
            "start": {
              "column": 24,
              "line": 42
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"a\"",
            "value": "a",
            "range": [
              1138,
              1141
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 42
              },
              "start": {
                "column": 40,
                "line": 42
              }
            }
          },
          "range": [
            1138,
            1141
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 42
            },
            "start": {
              "column": 40,
              "line": 42
            }
          }
        },
        "trueType": {
          "type": "TSStringKeyword",
          "range": [
            1129,
            1135
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 42
            },
            "start": {
              "column": 31,
              "line": 42
            }
          }
        },
        "range": [
          1112,
          1141
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 42
          },
          "start": {
            "column": 14,
            "line": 42
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 42
          },
          "start": {
            "column": 8,
            "line": 42
          }
        },
        "range": [
          1106,
          1109
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
                1107,
                1108
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 42
                },
                "start": {
                  "column": 9,
                  "line": 42
                }
              }
            },
            "out": false,
            "range": [
              1107,
              1108
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 42
              },
              "start": {
                "column": 9,
                "line": 42
              }
            }
          }
        ]
      },
      "range": [
        1098,
        1142
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1187,
                  1188
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 45
                  },
                  "start": {
                    "column": 2,
                    "line": 45
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"a\"",
                "value": "a",
                "range": [
                  1191,
                  1194
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 45
                  },
                  "start": {
                    "column": 6,
                    "line": 45
                  }
                }
              },
              "range": [
                1187,
                1194
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 45
                },
                "start": {
                  "column": 2,
                  "line": 45
                }
              }
            },
            "range": [
              1187,
              1195
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 45
              },
              "start": {
                "column": 2,
                "line": 45
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1234,
                  1235
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 46
                  },
                  "start": {
                    "column": 2,
                    "line": 46
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "range": [
                  1238,
                  1239
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 46
                  },
                  "start": {
                    "column": 6,
                    "line": 46
                  }
                }
              },
              "range": [
                1234,
                1239
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 46
                },
                "start": {
                  "column": 2,
                  "line": 46
                }
              }
            },
            "range": [
              1234,
              1240
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 46
              },
              "start": {
                "column": 2,
                "line": 46
              }
            }
          }
        ],
        "range": [
          1183,
          1251
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 39,
            "line": 44
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "range": [
          1153,
          1157
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 44
          },
          "start": {
            "column": 9,
            "line": 44
          }
        }
      },
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
                "column": 26,
                "line": 44
              },
              "start": {
                "column": 18,
                "line": 44
              }
            },
            "range": [
              1162,
              1170
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1167,
                  1170
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
                        1168,
                        1169
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 44
                        },
                        "start": {
                          "column": 24,
                          "line": 44
                        }
                      }
                    },
                    "range": [
                      1168,
                      1169
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 44
                      },
                      "start": {
                        "column": 24,
                        "line": 44
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 44
                  },
                  "start": {
                    "column": 23,
                    "line": 44
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  1164,
                  1167
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 44
                  },
                  "start": {
                    "column": 20,
                    "line": 44
                  }
                }
              },
              "range": [
                1164,
                1170
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 44
                },
                "start": {
                  "column": 20,
                  "line": 44
                }
              }
            }
          },
          "range": [
            1161,
            1170
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 44
            },
            "start": {
              "column": 17,
              "line": 44
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 44
              },
              "start": {
                "column": 29,
                "line": 44
              }
            },
            "range": [
              1173,
              1181
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                1175,
                1181
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 44
                },
                "start": {
                  "column": 31,
                  "line": 44
                }
              }
            }
          },
          "range": [
            1172,
            1181
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 44
            },
            "start": {
              "column": 28,
              "line": 44
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 44
          },
          "start": {
            "column": 13,
            "line": 44
          }
        },
        "range": [
          1157,
          1160
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
                1158,
                1159
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 44
                },
                "start": {
                  "column": 14,
                  "line": 44
                }
              }
            },
            "out": false,
            "range": [
              1158,
              1159
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 44
              },
              "start": {
                "column": 14,
                "line": 44
              }
            }
          }
        ]
      },
      "range": [
        1144,
        1251
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Distributive",
        "optional": false,
        "range": [
          1268,
          1280
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 50
          },
          "start": {
            "column": 5,
            "line": 50
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
              1286,
              1287
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 50
              },
              "start": {
                "column": 23,
                "line": 50
              }
            }
          },
          "range": [
            1286,
            1287
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 50
            },
            "start": {
              "column": 23,
              "line": 50
            }
          }
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1298,
                  1299
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 50
                  },
                  "start": {
                    "column": 35,
                    "line": 50
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
                    "column": 44,
                    "line": 50
                  },
                  "start": {
                    "column": 36,
                    "line": 50
                  }
                },
                "range": [
                  1299,
                  1307
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    1301,
                    1307
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 50
                    },
                    "start": {
                      "column": 38,
                      "line": 50
                    }
                  }
                }
              },
              "range": [
                1298,
                1307
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 50
                },
                "start": {
                  "column": 35,
                  "line": 50
                }
              }
            }
          ],
          "range": [
            1296,
            1309
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 50
            },
            "start": {
              "column": 33,
              "line": 50
            }
          }
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  1330,
                  1331
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 50
                  },
                  "start": {
                    "column": 67,
                    "line": 50
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
                    "column": 76,
                    "line": 50
                  },
                  "start": {
                    "column": 68,
                    "line": 50
                  }
                },
                "range": [
                  1331,
                  1339
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    1333,
                    1339
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 50
                    },
                    "start": {
                      "column": 70,
                      "line": 50
                    }
                  }
                }
              },
              "range": [
                1330,
                1339
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 50
                },
                "start": {
                  "column": 67,
                  "line": 50
                }
              }
            }
          ],
          "range": [
            1328,
            1341
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 50
            },
            "start": {
              "column": 65,
              "line": 50
            }
          }
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1314,
                  1315
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 50
                  },
                  "start": {
                    "column": 51,
                    "line": 50
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
                    "column": 60,
                    "line": 50
                  },
                  "start": {
                    "column": 52,
                    "line": 50
                  }
                },
                "range": [
                  1315,
                  1323
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    1317,
                    1323
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 50
                    },
                    "start": {
                      "column": 54,
                      "line": 50
                    }
                  }
                }
              },
              "range": [
                1314,
                1323
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 50
                },
                "start": {
                  "column": 51,
                  "line": 50
                }
              }
            }
          ],
          "range": [
            1312,
            1325
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 50
            },
            "start": {
              "column": 49,
              "line": 50
            }
          }
        },
        "range": [
          1286,
          1341
        ],
        "loc": {
          "end": {
            "column": 78,
            "line": 50
          },
          "start": {
            "column": 23,
            "line": 50
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 50
          },
          "start": {
            "column": 17,
            "line": 50
          }
        },
        "range": [
          1280,
          1283
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
                1281,
                1282
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 50
                },
                "start": {
                  "column": 18,
                  "line": 50
                }
              }
            },
            "out": false,
            "range": [
              1281,
              1282
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 50
              },
              "start": {
                "column": 18,
                "line": 50
              }
            }
          }
        ]
      },
      "range": [
        1263,
        1342
      ],
      "loc": {
        "end": {
          "column": 79,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "range": [
                    1402,
                    1403
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 52
                    },
                    "start": {
                      "column": 8,
                      "line": 52
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          1408,
                          1409
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 52
                          },
                          "start": {
                            "column": 14,
                            "line": 52
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1411,
                          1412
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 52
                          },
                          "start": {
                            "column": 17,
                            "line": 52
                          }
                        }
                      },
                      "range": [
                        1408,
                        1412
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 52
                        },
                        "start": {
                          "column": 14,
                          "line": 52
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          1414,
                          1415
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 52
                          },
                          "start": {
                            "column": 20,
                            "line": 52
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          1417,
                          1418
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 52
                          },
                          "start": {
                            "column": 23,
                            "line": 52
                          }
                        }
                      },
                      "range": [
                        1414,
                        1418
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 52
                        },
                        "start": {
                          "column": 20,
                          "line": 52
                        }
                      }
                    }
                  ],
                  "range": [
                    1406,
                    1420
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 52
                    },
                    "start": {
                      "column": 12,
                      "line": 52
                    }
                  }
                },
                "range": [
                  1402,
                  1420
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 52
                  },
                  "start": {
                    "column": 8,
                    "line": 52
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1396,
              1421
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 52
              },
              "start": {
                "column": 2,
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
                        "column": 30,
                        "line": 55
                      },
                      "start": {
                        "column": 9,
                        "line": 53
                      }
                    },
                    "range": [
                      1431,
                      1504
                    ],
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
                              "name": "T",
                              "optional": false,
                              "range": [
                                1434,
                                1435
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 53
                                },
                                "start": {
                                  "column": 12,
                                  "line": 53
                                }
                              }
                            },
                            "range": [
                              1434,
                              1435
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 53
                              },
                              "start": {
                                "column": 12,
                                "line": 53
                              }
                            }
                          }
                        ],
                        "range": [
                          1433,
                          1436
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 53
                          },
                          "start": {
                            "column": 11,
                            "line": 53
                          }
                        }
                      },
                      "extendsType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              1446,
                              1452
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 53
                              },
                              "start": {
                                "column": 24,
                                "line": 53
                              }
                            }
                          }
                        ],
                        "range": [
                          1445,
                          1453
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 53
                          },
                          "start": {
                            "column": 23,
                            "line": 53
                          }
                        }
                      },
                      "falseType": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "range": [
                                1482,
                                1483
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 55
                                },
                                "start": {
                                  "column": 8,
                                  "line": 55
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
                                  "line": 55
                                },
                                "start": {
                                  "column": 9,
                                  "line": 55
                                }
                              },
                              "range": [
                                1483,
                                1491
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  1485,
                                  1491
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 55
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 55
                                  }
                                }
                              }
                            },
                            "range": [
                              1482,
                              1492
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 55
                              },
                              "start": {
                                "column": 8,
                                "line": 55
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "range": [
                                1493,
                                1494
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 55
                                },
                                "start": {
                                  "column": 19,
                                  "line": 55
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
                                  "column": 28,
                                  "line": 55
                                },
                                "start": {
                                  "column": 20,
                                  "line": 55
                                }
                              },
                              "range": [
                                1494,
                                1502
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  1496,
                                  1502
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 55
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 55
                                  }
                                }
                              }
                            },
                            "range": [
                              1493,
                              1502
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 55
                              },
                              "start": {
                                "column": 19,
                                "line": 55
                              }
                            }
                          }
                        ],
                        "range": [
                          1480,
                          1504
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 55
                          },
                          "start": {
                            "column": 6,
                            "line": 55
                          }
                        }
                      },
                      "trueType": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                1462,
                                1463
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 54
                                },
                                "start": {
                                  "column": 8,
                                  "line": 54
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
                                  "line": 54
                                },
                                "start": {
                                  "column": 9,
                                  "line": 54
                                }
                              },
                              "range": [
                                1463,
                                1471
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  1465,
                                  1471
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 54
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 54
                                  }
                                }
                              }
                            },
                            "range": [
                              1462,
                              1471
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 54
                              },
                              "start": {
                                "column": 8,
                                "line": 54
                              }
                            }
                          }
                        ],
                        "range": [
                          1460,
                          1473
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 54
                          },
                          "start": {
                            "column": 6,
                            "line": 54
                          }
                        }
                      },
                      "range": [
                        1433,
                        1504
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 55
                        },
                        "start": {
                          "column": 11,
                          "line": 53
                        }
                      }
                    }
                  },
                  "range": [
                    1430,
                    1504
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 55
                    },
                    "start": {
                      "column": 8,
                      "line": 53
                    }
                  }
                },
                "init": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "range": [
                      1507,
                      1516
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 55
                      },
                      "start": {
                        "column": 33,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    1507,
                    1517
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 55
                    },
                    "start": {
                      "column": 33,
                      "line": 55
                    }
                  }
                },
                "range": [
                  1430,
                  1517
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 55
                  },
                  "start": {
                    "column": 8,
                    "line": 53
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1424,
              1518
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 55
              },
              "start": {
                "column": 2,
                "line": 53
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
                  "name": "o1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 57
                      },
                      "start": {
                        "column": 10,
                        "line": 57
                      }
                    },
                    "range": [
                      1550,
                      1604
                    ],
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
                              "name": "T",
                              "optional": false,
                              "range": [
                                1553,
                                1554
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 57
                                },
                                "start": {
                                  "column": 13,
                                  "line": 57
                                }
                              }
                            },
                            "range": [
                              1553,
                              1554
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 57
                              },
                              "start": {
                                "column": 13,
                                "line": 57
                              }
                            }
                          }
                        ],
                        "range": [
                          1552,
                          1555
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 57
                          },
                          "start": {
                            "column": 12,
                            "line": 57
                          }
                        }
                      },
                      "extendsType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              1565,
                              1571
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 57
                              },
                              "start": {
                                "column": 25,
                                "line": 57
                              }
                            }
                          }
                        ],
                        "range": [
                          1564,
                          1572
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 57
                          },
                          "start": {
                            "column": 24,
                            "line": 57
                          }
                        }
                      },
                      "falseType": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "range": [
                                1593,
                                1594
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 57
                                },
                                "start": {
                                  "column": 53,
                                  "line": 57
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
                                  "column": 62,
                                  "line": 57
                                },
                                "start": {
                                  "column": 54,
                                  "line": 57
                                }
                              },
                              "range": [
                                1594,
                                1602
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  1596,
                                  1602
                                ],
                                "loc": {
                                  "end": {
                                    "column": 62,
                                    "line": 57
                                  },
                                  "start": {
                                    "column": 56,
                                    "line": 57
                                  }
                                }
                              }
                            },
                            "range": [
                              1593,
                              1602
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 57
                              },
                              "start": {
                                "column": 53,
                                "line": 57
                              }
                            }
                          }
                        ],
                        "range": [
                          1591,
                          1604
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 57
                          },
                          "start": {
                            "column": 51,
                            "line": 57
                          }
                        }
                      },
                      "trueType": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "range": [
                                1577,
                                1578
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 57
                                },
                                "start": {
                                  "column": 37,
                                  "line": 57
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
                                  "column": 46,
                                  "line": 57
                                },
                                "start": {
                                  "column": 38,
                                  "line": 57
                                }
                              },
                              "range": [
                                1578,
                                1586
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  1580,
                                  1586
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 57
                                  },
                                  "start": {
                                    "column": 40,
                                    "line": 57
                                  }
                                }
                              }
                            },
                            "range": [
                              1577,
                              1586
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 57
                              },
                              "start": {
                                "column": 37,
                                "line": 57
                              }
                            }
                          }
                        ],
                        "range": [
                          1575,
                          1588
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 57
                          },
                          "start": {
                            "column": 35,
                            "line": 57
                          }
                        }
                      },
                      "range": [
                        1552,
                        1604
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 57
                        },
                        "start": {
                          "column": 12,
                          "line": 57
                        }
                      }
                    }
                  },
                  "range": [
                    1548,
                    1604
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 57
                    },
                    "start": {
                      "column": 8,
                      "line": 57
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "range": [
                    1607,
                    1608
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 57
                    },
                    "start": {
                      "column": 67,
                      "line": 57
                    }
                  }
                },
                "range": [
                  1548,
                  1608
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 57
                  },
                  "start": {
                    "column": 8,
                    "line": 57
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1542,
              1609
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 57
              },
              "start": {
                "column": 2,
                "line": 57
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 61
                      },
                      "start": {
                        "column": 10,
                        "line": 59
                      }
                    },
                    "range": [
                      1692,
                      1836
                    ],
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
                              "name": "T",
                              "optional": false,
                              "range": [
                                1695,
                                1696
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 59
                                },
                                "start": {
                                  "column": 13,
                                  "line": 59
                                }
                              }
                            },
                            "range": [
                              1695,
                              1696
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 59
                              },
                              "start": {
                                "column": 13,
                                "line": 59
                              }
                            }
                          }
                        ],
                        "range": [
                          1694,
                          1697
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 59
                          },
                          "start": {
                            "column": 12,
                            "line": 59
                          }
                        }
                      },
                      "extendsType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              1707,
                              1713
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 59
                              },
                              "start": {
                                "column": 25,
                                "line": 59
                              }
                            }
                          }
                        ],
                        "range": [
                          1706,
                          1714
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 59
                          },
                          "start": {
                            "column": 24,
                            "line": 59
                          }
                        }
                      },
                      "falseType": {
                        "type": "TSConditionalType",
                        "checkType": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  1784,
                                  1785
                                ],
                                "loc": {
                                  "end": {
                                    "column": 9,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 61
                                  }
                                }
                              },
                              "range": [
                                1784,
                                1785
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 61
                                },
                                "start": {
                                  "column": 8,
                                  "line": 61
                                }
                              }
                            }
                          ],
                          "range": [
                            1783,
                            1786
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 61
                            },
                            "start": {
                              "column": 7,
                              "line": 61
                            }
                          }
                        },
                        "extendsType": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSStringKeyword",
                              "range": [
                                1796,
                                1802
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 61
                                },
                                "start": {
                                  "column": 20,
                                  "line": 61
                                }
                              }
                            }
                          ],
                          "range": [
                            1795,
                            1803
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 61
                            },
                            "start": {
                              "column": 19,
                              "line": 61
                            }
                          }
                        },
                        "falseType": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "range": [
                                  1824,
                                  1825
                                ],
                                "loc": {
                                  "end": {
                                    "column": 49,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 48,
                                    "line": 61
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
                                    "column": 57,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 49,
                                    "line": 61
                                  }
                                },
                                "range": [
                                  1825,
                                  1833
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    1827,
                                    1833
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 57,
                                      "line": 61
                                    },
                                    "start": {
                                      "column": 51,
                                      "line": 61
                                    }
                                  }
                                }
                              },
                              "range": [
                                1824,
                                1833
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 61
                                },
                                "start": {
                                  "column": 48,
                                  "line": 61
                                }
                              }
                            }
                          ],
                          "range": [
                            1822,
                            1835
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 61
                            },
                            "start": {
                              "column": 46,
                              "line": 61
                            }
                          }
                        },
                        "trueType": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  1808,
                                  1809
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 61
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
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 61
                                  }
                                },
                                "range": [
                                  1809,
                                  1817
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    1811,
                                    1817
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 61
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 61
                                    }
                                  }
                                }
                              },
                              "range": [
                                1808,
                                1817
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 61
                                },
                                "start": {
                                  "column": 32,
                                  "line": 61
                                }
                              }
                            }
                          ],
                          "range": [
                            1806,
                            1819
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 61
                            },
                            "start": {
                              "column": 30,
                              "line": 61
                            }
                          }
                        },
                        "range": [
                          1783,
                          1835
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 61
                          },
                          "start": {
                            "column": 7,
                            "line": 61
                          }
                        }
                      },
                      "trueType": {
                        "type": "TSConditionalType",
                        "checkType": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  1723,
                                  1724
                                ],
                                "loc": {
                                  "end": {
                                    "column": 9,
                                    "line": 60
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 60
                                  }
                                }
                              },
                              "range": [
                                1723,
                                1724
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 60
                                },
                                "start": {
                                  "column": 8,
                                  "line": 60
                                }
                              }
                            }
                          ],
                          "range": [
                            1722,
                            1725
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 60
                            },
                            "start": {
                              "column": 7,
                              "line": 60
                            }
                          }
                        },
                        "extendsType": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSStringKeyword",
                              "range": [
                                1735,
                                1741
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 60
                                },
                                "start": {
                                  "column": 20,
                                  "line": 60
                                }
                              }
                            }
                          ],
                          "range": [
                            1734,
                            1742
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 60
                            },
                            "start": {
                              "column": 19,
                              "line": 60
                            }
                          }
                        },
                        "falseType": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "range": [
                                  1763,
                                  1764
                                ],
                                "loc": {
                                  "end": {
                                    "column": 49,
                                    "line": 60
                                  },
                                  "start": {
                                    "column": 48,
                                    "line": 60
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
                                    "column": 57,
                                    "line": 60
                                  },
                                  "start": {
                                    "column": 49,
                                    "line": 60
                                  }
                                },
                                "range": [
                                  1764,
                                  1772
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    1766,
                                    1772
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 57,
                                      "line": 60
                                    },
                                    "start": {
                                      "column": 51,
                                      "line": 60
                                    }
                                  }
                                }
                              },
                              "range": [
                                1763,
                                1772
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 60
                                },
                                "start": {
                                  "column": 48,
                                  "line": 60
                                }
                              }
                            }
                          ],
                          "range": [
                            1761,
                            1774
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 60
                            },
                            "start": {
                              "column": 46,
                              "line": 60
                            }
                          }
                        },
                        "trueType": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  1747,
                                  1748
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 60
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 60
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
                                    "line": 60
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 60
                                  }
                                },
                                "range": [
                                  1748,
                                  1756
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    1750,
                                    1756
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 60
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 60
                                    }
                                  }
                                }
                              },
                              "range": [
                                1747,
                                1756
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 60
                                },
                                "start": {
                                  "column": 32,
                                  "line": 60
                                }
                              }
                            }
                          ],
                          "range": [
                            1745,
                            1758
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 60
                            },
                            "start": {
                              "column": 30,
                              "line": 60
                            }
                          }
                        },
                        "range": [
                          1722,
                          1774
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 60
                          },
                          "start": {
                            "column": 7,
                            "line": 60
                          }
                        }
                      },
                      "range": [
                        1694,
                        1836
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 61
                        },
                        "start": {
                          "column": 12,
                          "line": 59
                        }
                      }
                    }
                  },
                  "range": [
                    1690,
                    1836
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 61
                    },
                    "start": {
                      "column": 8,
                      "line": 59
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1839,
                    1840
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 61
                    },
                    "start": {
                      "column": 63,
                      "line": 61
                    }
                  }
                },
                "range": [
                  1690,
                  1840
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 61
                  },
                  "start": {
                    "column": 8,
                    "line": 59
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1684,
              1841
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 61
              },
              "start": {
                "column": 2,
                "line": 59
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
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 63
                      },
                      "start": {
                        "column": 10,
                        "line": 63
                      }
                    },
                    "range": [
                      1888,
                      1933
                    ],
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
                              "name": "T",
                              "optional": false,
                              "range": [
                                1891,
                                1892
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 63
                                },
                                "start": {
                                  "column": 13,
                                  "line": 63
                                }
                              }
                            },
                            "range": [
                              1891,
                              1892
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 63
                              },
                              "start": {
                                "column": 13,
                                "line": 63
                              }
                            }
                          }
                        ],
                        "range": [
                          1890,
                          1893
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 63
                          },
                          "start": {
                            "column": 12,
                            "line": 63
                          }
                        }
                      },
                      "extendsType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSInferType",
                                "typeParameter": {
                                  "type": "TSTypeParameter",
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "range": [
                                      1910,
                                      1911
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 63
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 63
                                      }
                                    }
                                  },
                                  "out": false,
                                  "range": [
                                    1910,
                                    1911
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 63
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 63
                                    }
                                  }
                                },
                                "range": [
                                  1904,
                                  1911
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 63
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 63
                                  }
                                }
                              }
                            ],
                            "range": [
                              1903,
                              1912
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 63
                              },
                              "start": {
                                "column": 25,
                                "line": 63
                              }
                            }
                          }
                        ],
                        "range": [
                          1902,
                          1913
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 63
                          },
                          "start": {
                            "column": 24,
                            "line": 63
                          }
                        }
                      },
                      "falseType": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "range": [
                                1922,
                                1923
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 63
                                },
                                "start": {
                                  "column": 44,
                                  "line": 63
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
                                  "column": 53,
                                  "line": 63
                                },
                                "start": {
                                  "column": 45,
                                  "line": 63
                                }
                              },
                              "range": [
                                1923,
                                1931
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  1925,
                                  1931
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 63
                                  },
                                  "start": {
                                    "column": 47,
                                    "line": 63
                                  }
                                }
                              }
                            },
                            "range": [
                              1922,
                              1931
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 63
                              },
                              "start": {
                                "column": 44,
                                "line": 63
                              }
                            }
                          }
                        ],
                        "range": [
                          1920,
                          1933
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 63
                          },
                          "start": {
                            "column": 42,
                            "line": 63
                          }
                        }
                      },
                      "trueType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            1916,
                            1917
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 63
                            },
                            "start": {
                              "column": 38,
                              "line": 63
                            }
                          }
                        },
                        "range": [
                          1916,
                          1917
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 63
                          },
                          "start": {
                            "column": 38,
                            "line": 63
                          }
                        }
                      },
                      "range": [
                        1890,
                        1933
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 63
                        },
                        "start": {
                          "column": 12,
                          "line": 63
                        }
                      }
                    }
                  },
                  "range": [
                    1886,
                    1933
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 63
                    },
                    "start": {
                      "column": 8,
                      "line": 63
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "range": [
                    1936,
                    1937
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 63
                    },
                    "start": {
                      "column": 58,
                      "line": 63
                    }
                  }
                },
                "range": [
                  1886,
                  1937
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 63
                  },
                  "start": {
                    "column": 8,
                    "line": 63
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1880,
              1938
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 63
              },
              "start": {
                "column": 2,
                "line": 63
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
                  "name": "o3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 73
                      },
                      "start": {
                        "column": 10,
                        "line": 73
                      }
                    },
                    "range": [
                      2507,
                      2524
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          2521,
                          2524
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
                                2522,
                                2523
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 73
                                },
                                "start": {
                                  "column": 25,
                                  "line": 73
                                }
                              }
                            },
                            "range": [
                              2522,
                              2523
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 73
                              },
                              "start": {
                                "column": 25,
                                "line": 73
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 73
                          },
                          "start": {
                            "column": 24,
                            "line": 73
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Distributive",
                        "optional": false,
                        "range": [
                          2509,
                          2521
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 73
                          },
                          "start": {
                            "column": 12,
                            "line": 73
                          }
                        }
                      },
                      "range": [
                        2509,
                        2524
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 73
                        },
                        "start": {
                          "column": 12,
                          "line": 73
                        }
                      }
                    }
                  },
                  "range": [
                    2505,
                    2524
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 73
                    },
                    "start": {
                      "column": 8,
                      "line": 73
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "range": [
                    2527,
                    2528
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 73
                    },
                    "start": {
                      "column": 30,
                      "line": 73
                    }
                  }
                },
                "range": [
                  2505,
                  2528
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 73
                  },
                  "start": {
                    "column": 8,
                    "line": 73
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              2499,
              2529
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 73
              },
              "start": {
                "column": 2,
                "line": 73
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
                  "name": "o4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 75
                      },
                      "start": {
                        "column": 10,
                        "line": 75
                      }
                    },
                    "range": [
                      2616,
                      2642
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          2630,
                          2642
                        ],
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "range": [
                                    2631,
                                    2632
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 75
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 75
                                    }
                                  }
                                },
                                "range": [
                                  2631,
                                  2632
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 75
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 75
                                  }
                                }
                              },
                              {
                                "type": "TSStringKeyword",
                                "range": [
                                  2635,
                                  2641
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 75
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 75
                                  }
                                }
                              }
                            ],
                            "range": [
                              2631,
                              2641
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 75
                              },
                              "start": {
                                "column": 25,
                                "line": 75
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 75
                          },
                          "start": {
                            "column": 24,
                            "line": 75
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Distributive",
                        "optional": false,
                        "range": [
                          2618,
                          2630
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 75
                          },
                          "start": {
                            "column": 12,
                            "line": 75
                          }
                        }
                      },
                      "range": [
                        2618,
                        2642
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 75
                        },
                        "start": {
                          "column": 12,
                          "line": 75
                        }
                      }
                    }
                  },
                  "range": [
                    2614,
                    2642
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 75
                    },
                    "start": {
                      "column": 8,
                      "line": 75
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "range": [
                    2645,
                    2646
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 75
                    },
                    "start": {
                      "column": 39,
                      "line": 75
                    }
                  }
                },
                "range": [
                  2614,
                  2646
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 75
                  },
                  "start": {
                    "column": 8,
                    "line": 75
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              2608,
              2647
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 75
              },
              "start": {
                "column": 2,
                "line": 75
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
                  "name": "o5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 77
                      },
                      "start": {
                        "column": 10,
                        "line": 77
                      }
                    },
                    "range": [
                      2721,
                      2745
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          2735,
                          2745
                        ],
                        "params": [
                          {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "range": [
                                    2738,
                                    2739
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 77
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 77
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
                                      "column": 31,
                                      "line": 77
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 77
                                    }
                                  },
                                  "range": [
                                    2739,
                                    2742
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        2741,
                                        2742
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 77
                                        },
                                        "start": {
                                          "column": 30,
                                          "line": 77
                                        }
                                      }
                                    },
                                    "range": [
                                      2741,
                                      2742
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 31,
                                        "line": 77
                                      },
                                      "start": {
                                        "column": 30,
                                        "line": 77
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  2738,
                                  2742
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 77
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 77
                                  }
                                }
                              }
                            ],
                            "range": [
                              2736,
                              2744
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 77
                              },
                              "start": {
                                "column": 25,
                                "line": 77
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 77
                          },
                          "start": {
                            "column": 24,
                            "line": 77
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Distributive",
                        "optional": false,
                        "range": [
                          2723,
                          2735
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 77
                          },
                          "start": {
                            "column": 12,
                            "line": 77
                          }
                        }
                      },
                      "range": [
                        2723,
                        2745
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 77
                        },
                        "start": {
                          "column": 12,
                          "line": 77
                        }
                      }
                    }
                  },
                  "range": [
                    2719,
                    2745
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 77
                    },
                    "start": {
                      "column": 8,
                      "line": 77
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "range": [
                    2748,
                    2749
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 77
                    },
                    "start": {
                      "column": 37,
                      "line": 77
                    }
                  }
                },
                "range": [
                  2719,
                  2749
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 77
                  },
                  "start": {
                    "column": 8,
                    "line": 77
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              2713,
              2750
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 77
              },
              "start": {
                "column": 2,
                "line": 77
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
                  "name": "o6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 79
                      },
                      "start": {
                        "column": 10,
                        "line": 79
                      }
                    },
                    "range": [
                      2922,
                      2981
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          2936,
                          2981
                        ],
                        "params": [
                          {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSTupleType",
                              "elementTypes": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      2938,
                                      2939
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 79
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 79
                                      }
                                    }
                                  },
                                  "range": [
                                    2938,
                                    2939
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 79
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 79
                                    }
                                  }
                                }
                              ],
                              "range": [
                                2937,
                                2940
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 79
                                },
                                "start": {
                                  "column": 25,
                                  "line": 79
                                }
                              }
                            },
                            "extendsType": {
                              "type": "TSTupleType",
                              "elementTypes": [
                                {
                                  "type": "TSNeverKeyword",
                                  "range": [
                                    2950,
                                    2955
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 79
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 79
                                    }
                                  }
                                }
                              ],
                              "range": [
                                2949,
                                2956
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 79
                                },
                                "start": {
                                  "column": 37,
                                  "line": 79
                                }
                              }
                            },
                            "falseType": {
                              "type": "TSNeverKeyword",
                              "range": [
                                2975,
                                2980
                              ],
                              "loc": {
                                "end": {
                                  "column": 68,
                                  "line": 79
                                },
                                "start": {
                                  "column": 63,
                                  "line": 79
                                }
                              }
                            },
                            "trueType": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "range": [
                                      2961,
                                      2962
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 50,
                                        "line": 79
                                      },
                                      "start": {
                                        "column": 49,
                                        "line": 79
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
                                        "column": 58,
                                        "line": 79
                                      },
                                      "start": {
                                        "column": 50,
                                        "line": 79
                                      }
                                    },
                                    "range": [
                                      2962,
                                      2970
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "range": [
                                        2964,
                                        2970
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 58,
                                          "line": 79
                                        },
                                        "start": {
                                          "column": 52,
                                          "line": 79
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    2961,
                                    2970
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 58,
                                      "line": 79
                                    },
                                    "start": {
                                      "column": 49,
                                      "line": 79
                                    }
                                  }
                                }
                              ],
                              "range": [
                                2959,
                                2972
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 79
                                },
                                "start": {
                                  "column": 47,
                                  "line": 79
                                }
                              }
                            },
                            "range": [
                              2937,
                              2980
                            ],
                            "loc": {
                              "end": {
                                "column": 68,
                                "line": 79
                              },
                              "start": {
                                "column": 25,
                                "line": 79
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 79
                          },
                          "start": {
                            "column": 24,
                            "line": 79
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Distributive",
                        "optional": false,
                        "range": [
                          2924,
                          2936
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 79
                          },
                          "start": {
                            "column": 12,
                            "line": 79
                          }
                        }
                      },
                      "range": [
                        2924,
                        2981
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 79
                        },
                        "start": {
                          "column": 12,
                          "line": 79
                        }
                      }
                    }
                  },
                  "range": [
                    2920,
                    2981
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 79
                    },
                    "start": {
                      "column": 8,
                      "line": 79
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "range": [
                    2984,
                    2985
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 79
                    },
                    "start": {
                      "column": 72,
                      "line": 79
                    }
                  }
                },
                "range": [
                  2920,
                  2985
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 79
                  },
                  "start": {
                    "column": 8,
                    "line": 79
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              2914,
              2986
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 79
              },
              "start": {
                "column": 2,
                "line": 79
              }
            }
          }
        ],
        "range": [
          1392,
          2988
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 80
          },
          "start": {
            "column": 49,
            "line": 51
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testAssignabilityToConditionalType",
        "optional": false,
        "range": [
          1352,
          1386
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 51
          },
          "start": {
            "column": 9,
            "line": 51
          }
        }
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 46,
            "line": 51
          },
          "start": {
            "column": 43,
            "line": 51
          }
        },
        "range": [
          1386,
          1389
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
                1387,
                1388
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 51
                },
                "start": {
                  "column": 44,
                  "line": 51
                }
              }
            },
            "out": false,
            "range": [
              1387,
              1388
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 51
              },
              "start": {
                "column": 44,
                "line": 51
              }
            }
          }
        ]
      },
      "range": [
        1343,
        2988
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wrapped",
        "optional": false,
        "range": [
          2995,
          3002
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 82
          },
          "start": {
            "column": 5,
            "line": 82
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "___secret",
              "optional": false,
              "range": [
                3010,
                3019
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 82
                },
                "start": {
                  "column": 20,
                  "line": 82
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
                  "column": 32,
                  "line": 82
                },
                "start": {
                  "column": 29,
                  "line": 82
                }
              },
              "range": [
                3019,
                3022
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    3021,
                    3022
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 82
                    },
                    "start": {
                      "column": 31,
                      "line": 82
                    }
                  }
                },
                "range": [
                  3021,
                  3022
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 82
                  },
                  "start": {
                    "column": 31,
                    "line": 82
                  }
                }
              }
            },
            "range": [
              3010,
              3022
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 82
              },
              "start": {
                "column": 20,
                "line": 82
              }
            }
          }
        ],
        "range": [
          3008,
          3024
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 82
          },
          "start": {
            "column": 18,
            "line": 82
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 82
          },
          "start": {
            "column": 12,
            "line": 82
          }
        },
        "range": [
          3002,
          3005
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
                3003,
                3004
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 82
                },
                "start": {
                  "column": 13,
                  "line": 82
                }
              }
            },
            "out": false,
            "range": [
              3003,
              3004
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 82
              },
              "start": {
                "column": 13,
                "line": 82
              }
            }
          }
        ]
      },
      "range": [
        2990,
        3025
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 82
        },
        "start": {
          "column": 0,
          "line": 82
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unwrap",
        "optional": false,
        "range": [
          3031,
          3037
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 83
          },
          "start": {
            "column": 5,
            "line": 83
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
              3043,
              3044
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 83
              },
              "start": {
                "column": 17,
                "line": 83
              }
            }
          },
          "range": [
            3043,
            3044
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 83
            },
            "start": {
              "column": 17,
              "line": 83
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3060,
              3069
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
                    "name": "U",
                    "optional": false,
                    "range": [
                      3067,
                      3068
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 83
                      },
                      "start": {
                        "column": 41,
                        "line": 83
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3067,
                    3068
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 83
                    },
                    "start": {
                      "column": 41,
                      "line": 83
                    }
                  }
                },
                "range": [
                  3061,
                  3068
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 83
                  },
                  "start": {
                    "column": 35,
                    "line": 83
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 83
              },
              "start": {
                "column": 34,
                "line": 83
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Wrapped",
            "optional": false,
            "range": [
              3053,
              3060
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 83
              },
              "start": {
                "column": 27,
                "line": 83
              }
            }
          },
          "range": [
            3053,
            3069
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 83
            },
            "start": {
              "column": 27,
              "line": 83
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              3076,
              3077
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 83
              },
              "start": {
                "column": 50,
                "line": 83
              }
            }
          },
          "range": [
            3076,
            3077
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 83
            },
            "start": {
              "column": 50,
              "line": 83
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              3072,
              3073
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 83
              },
              "start": {
                "column": 46,
                "line": 83
              }
            }
          },
          "range": [
            3072,
            3073
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 83
            },
            "start": {
              "column": 46,
              "line": 83
            }
          }
        },
        "range": [
          3043,
          3077
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 83
          },
          "start": {
            "column": 17,
            "line": 83
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 83
          },
          "start": {
            "column": 11,
            "line": 83
          }
        },
        "range": [
          3037,
          3040
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
                3038,
                3039
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 83
                },
                "start": {
                  "column": 12,
                  "line": 83
                }
              }
            },
            "out": false,
            "range": [
              3038,
              3039
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 83
              },
              "start": {
                "column": 12,
                "line": 83
              }
            }
          }
        ]
      },
      "range": [
        3026,
        3078
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 83
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
        "name": "set",
        "optional": false,
        "range": [
          3097,
          3100
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 85
          },
          "start": {
            "column": 17,
            "line": 85
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 8,
                "line": 86
              },
              "start": {
                "column": 5,
                "line": 86
              }
            },
            "range": [
              3129,
              3132
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  3131,
                  3132
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 86
                  },
                  "start": {
                    "column": 7,
                    "line": 86
                  }
                }
              },
              "range": [
                3131,
                3132
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 86
                },
                "start": {
                  "column": 7,
                  "line": 86
                }
              }
            }
          },
          "range": [
            3126,
            3132
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 86
            },
            "start": {
              "column": 2,
              "line": 86
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 8,
                "line": 87
              },
              "start": {
                "column": 5,
                "line": 87
              }
            },
            "range": [
              3139,
              3142
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  3141,
                  3142
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 87
                  },
                  "start": {
                    "column": 7,
                    "line": 87
                  }
                }
              },
              "range": [
                3141,
                3142
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 87
                },
                "start": {
                  "column": 7,
                  "line": 87
                }
              }
            }
          },
          "range": [
            3136,
            3142
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 87
            },
            "start": {
              "column": 2,
              "line": 87
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 88
              },
              "start": {
                "column": 7,
                "line": 88
              }
            },
            "range": [
              3151,
              3165
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3159,
                  3165
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
                          3162,
                          3163
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 88
                          },
                          "start": {
                            "column": 18,
                            "line": 88
                          }
                        }
                      },
                      "range": [
                        3162,
                        3163
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 88
                        },
                        "start": {
                          "column": 18,
                          "line": 88
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
                          3160,
                          3161
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 88
                          },
                          "start": {
                            "column": 16,
                            "line": 88
                          }
                        }
                      },
                      "range": [
                        3160,
                        3161
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 88
                        },
                        "start": {
                          "column": 16,
                          "line": 88
                        }
                      }
                    },
                    "range": [
                      3160,
                      3164
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 88
                      },
                      "start": {
                        "column": 16,
                        "line": 88
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 88
                  },
                  "start": {
                    "column": 15,
                    "line": 88
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Unwrap",
                "optional": false,
                "range": [
                  3153,
                  3159
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 88
                  },
                  "start": {
                    "column": 9,
                    "line": 88
                  }
                }
              },
              "range": [
                3153,
                3165
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 88
                },
                "start": {
                  "column": 9,
                  "line": 88
                }
              }
            }
          },
          "range": [
            3146,
            3165
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 88
            },
            "start": {
              "column": 2,
              "line": 88
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 15,
            "line": 89
          },
          "start": {
            "column": 1,
            "line": 89
          }
        },
        "range": [
          3167,
          3181
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3175,
              3181
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
                      3178,
                      3179
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 89
                      },
                      "start": {
                        "column": 12,
                        "line": 89
                      }
                    }
                  },
                  "range": [
                    3178,
                    3179
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 89
                    },
                    "start": {
                      "column": 12,
                      "line": 89
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
                      3176,
                      3177
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 89
                      },
                      "start": {
                        "column": 10,
                        "line": 89
                      }
                    }
                  },
                  "range": [
                    3176,
                    3177
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 89
                    },
                    "start": {
                      "column": 10,
                      "line": 89
                    }
                  }
                },
                "range": [
                  3176,
                  3180
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 89
                  },
                  "start": {
                    "column": 10,
                    "line": 89
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 89
              },
              "start": {
                "column": 9,
                "line": 89
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Unwrap",
            "optional": false,
            "range": [
              3169,
              3175
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 89
              },
              "start": {
                "column": 3,
                "line": 89
              }
            }
          },
          "range": [
            3169,
            3181
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 89
            },
            "start": {
              "column": 3,
              "line": 89
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 85
          },
          "start": {
            "column": 20,
            "line": 85
          }
        },
        "range": [
          3100,
          3122
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
                3101,
                3102
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 85
                },
                "start": {
                  "column": 21,
                  "line": 85
                }
              }
            },
            "out": false,
            "range": [
              3101,
              3102
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 85
              },
              "start": {
                "column": 21,
                "line": 85
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
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
                    3120,
                    3121
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 85
                    },
                    "start": {
                      "column": 40,
                      "line": 85
                    }
                  }
                },
                "range": [
                  3120,
                  3121
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 85
                  },
                  "start": {
                    "column": 40,
                    "line": 85
                  }
                }
              },
              "range": [
                3114,
                3121
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 85
                },
                "start": {
                  "column": 34,
                  "line": 85
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                3104,
                3105
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 85
                },
                "start": {
                  "column": 24,
                  "line": 85
                }
              }
            },
            "out": false,
            "range": [
              3104,
              3121
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 85
              },
              "start": {
                "column": 24,
                "line": 85
              }
            }
          }
        ]
      },
      "range": [
        3080,
        3182
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 89
        },
        "start": {
          "column": 0,
          "line": 85
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          3195,
          3289
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "range": [
                3199,
                3203
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 92
                },
                "start": {
                  "column": 2,
                  "line": 92
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
                  "column": 24,
                  "line": 92
                },
                "start": {
                  "column": 7,
                  "line": 92
                }
              },
              "range": [
                3204,
                3221
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    3213,
                    3221
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        3214,
                        3220
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 92
                        },
                        "start": {
                          "column": 17,
                          "line": 92
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 92
                    },
                    "start": {
                      "column": 16,
                      "line": 92
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Wrapped",
                  "optional": false,
                  "range": [
                    3206,
                    3213
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 92
                    },
                    "start": {
                      "column": 9,
                      "line": 92
                    }
                  }
                },
                "range": [
                  3206,
                  3221
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 92
                  },
                  "start": {
                    "column": 9,
                    "line": 92
                  }
                }
              }
            },
            "value": null,
            "range": [
              3199,
              3222
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 92
              },
              "start": {
                "column": 2,
                "line": 92
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
              "name": "method",
              "optional": false,
              "range": [
                3226,
                3232
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 94
                },
                "start": {
                  "column": 2,
                  "line": 94
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
                3232,
                3287
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
                          "type": "ThisExpression",
                          "range": [
                            3245,
                            3249
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 95
                            },
                            "start": {
                              "column": 8,
                              "line": 95
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "\"prop\"",
                          "value": "prop",
                          "range": [
                            3251,
                            3257
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 95
                            },
                            "start": {
                              "column": 14,
                              "line": 95
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "\"hi\"",
                          "value": "hi",
                          "range": [
                            3259,
                            3263
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 95
                            },
                            "start": {
                              "column": 22,
                              "line": 95
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "set",
                        "optional": false,
                        "range": [
                          3241,
                          3244
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 95
                          },
                          "start": {
                            "column": 4,
                            "line": 95
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        3241,
                        3264
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 95
                        },
                        "start": {
                          "column": 4,
                          "line": 95
                        }
                      }
                    },
                    "range": [
                      3241,
                      3265
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 95
                      },
                      "start": {
                        "column": 4,
                        "line": 95
                      }
                    }
                  }
                ],
                "range": [
                  3235,
                  3287
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 96
                  },
                  "start": {
                    "column": 11,
                    "line": 94
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
                  "line": 96
                },
                "start": {
                  "column": 8,
                  "line": 94
                }
              }
            },
            "range": [
              3226,
              3287
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 96
              },
              "start": {
                "column": 2,
                "line": 94
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 97
          },
          "start": {
            "column": 11,
            "line": 91
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "range": [
          3190,
          3194
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 91
          },
          "start": {
            "column": 6,
            "line": 91
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        3184,
        3289
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 97
        },
        "start": {
          "column": 0,
          "line": 91
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo2",
              "optional": false,
              "range": [
                3299,
                3303
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 99
                },
                "start": {
                  "column": 8,
                  "line": 99
                }
              }
            },
            "range": [
              3295,
              3305
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 99
              },
              "start": {
                "column": 4,
                "line": 99
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"prop\"",
            "value": "prop",
            "range": [
              3307,
              3313
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 99
              },
              "start": {
                "column": 16,
                "line": 99
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"hi\"",
            "value": "hi",
            "range": [
              3315,
              3319
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 99
              },
              "start": {
                "column": 24,
                "line": 99
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "set",
          "optional": false,
          "range": [
            3291,
            3294
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 99
            },
            "start": {
              "column": 0,
              "line": 99
            }
          }
        },
        "optional": false,
        "range": [
          3291,
          3320
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 99
          },
          "start": {
            "column": 0,
            "line": 99
          }
        }
      },
      "range": [
        3291,
        3321
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 99
        },
        "start": {
          "column": 0,
          "line": 99
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferBecauseWhyNot",
        "optional": false,
        "range": [
          3346,
          3364
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 101
          },
          "start": {
            "column": 5,
            "line": 101
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
                "name": "T",
                "optional": false,
                "range": [
                  3371,
                  3372
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 101
                  },
                  "start": {
                    "column": 30,
                    "line": 101
                  }
                }
              },
              "range": [
                3371,
                3372
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 101
                },
                "start": {
                  "column": 30,
                  "line": 101
                }
              }
            }
          ],
          "range": [
            3370,
            3373
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 101
            },
            "start": {
              "column": 29,
              "line": 101
            }
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 101
                      },
                      "start": {
                        "column": 44,
                        "line": 101
                      }
                    },
                    "range": [
                      3385,
                      3395
                    ],
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P1",
                          "optional": false,
                          "range": [
                            3393,
                            3395
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 101
                            },
                            "start": {
                              "column": 52,
                              "line": 101
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          3393,
                          3395
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 101
                          },
                          "start": {
                            "column": 52,
                            "line": 101
                          }
                        }
                      },
                      "range": [
                        3387,
                        3395
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 101
                        },
                        "start": {
                          "column": 46,
                          "line": 101
                        }
                      }
                    }
                  },
                  "range": [
                    3384,
                    3395
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 101
                    },
                    "start": {
                      "column": 43,
                      "line": 101
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 101
                  },
                  "start": {
                    "column": 56,
                    "line": 101
                  }
                },
                "range": [
                  3397,
                  3403
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    3400,
                    3403
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 101
                    },
                    "start": {
                      "column": 59,
                      "line": 101
                    }
                  }
                }
              },
              "range": [
                3383,
                3403
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 101
                },
                "start": {
                  "column": 42,
                  "line": 101
                }
              }
            }
          ],
          "range": [
            3382,
            3404
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 101
            },
            "start": {
              "column": 41,
              "line": 101
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            3420,
            3425
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 103
            },
            "start": {
              "column": 4,
              "line": 103
            }
          }
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P1",
                "optional": false,
                "range": [
                  3409,
                  3411
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 102
                  },
                  "start": {
                    "column": 4,
                    "line": 102
                  }
                }
              },
              "range": [
                3409,
                3411
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 102
                },
                "start": {
                  "column": 4,
                  "line": 102
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  3414,
                  3415
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 102
                  },
                  "start": {
                    "column": 9,
                    "line": 102
                  }
                }
              },
              "range": [
                3414,
                3415
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 102
                },
                "start": {
                  "column": 9,
                  "line": 102
                }
              }
            }
          ],
          "range": [
            3409,
            3415
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 102
            },
            "start": {
              "column": 4,
              "line": 102
            }
          }
        },
        "range": [
          3370,
          3425
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 103
          },
          "start": {
            "column": 29,
            "line": 101
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 101
          },
          "start": {
            "column": 23,
            "line": 101
          }
        },
        "range": [
          3364,
          3367
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
                3365,
                3366
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 101
                },
                "start": {
                  "column": 24,
                  "line": 101
                }
              }
            },
            "out": false,
            "range": [
              3365,
              3366
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 101
              },
              "start": {
                "column": 24,
                "line": 101
              }
            }
          }
        ]
      },
      "range": [
        3341,
        3426
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 103
        },
        "start": {
          "column": 0,
          "line": 101
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                3509,
                3510
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 106
                },
                "start": {
                  "column": 9,
                  "line": 106
                }
              }
            },
            "range": [
              3502,
              3511
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 106
              },
              "start": {
                "column": 2,
                "line": 106
              }
            }
          }
        ],
        "range": [
          3498,
          3513
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 107
          },
          "start": {
            "column": 70,
            "line": 105
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          3437,
          3439
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 105
          },
          "start": {
            "column": 9,
            "line": 105
          }
        }
      },
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
                "column": 45,
                "line": 105
              },
              "start": {
                "column": 42,
                "line": 105
              }
            },
            "range": [
              3470,
              3473
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Q",
                "optional": false,
                "range": [
                  3472,
                  3473
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 105
                  },
                  "start": {
                    "column": 44,
                    "line": 105
                  }
                }
              },
              "range": [
                3472,
                3473
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 105
                },
                "start": {
                  "column": 44,
                  "line": 105
                }
              }
            }
          },
          "range": [
            3469,
            3473
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 105
            },
            "start": {
              "column": 41,
              "line": 105
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 69,
            "line": 105
          },
          "start": {
            "column": 46,
            "line": 105
          }
        },
        "range": [
          3474,
          3497
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3494,
              3497
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Q",
                  "optional": false,
                  "range": [
                    3495,
                    3496
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 105
                    },
                    "start": {
                      "column": 67,
                      "line": 105
                    }
                  }
                },
                "range": [
                  3495,
                  3496
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 105
                  },
                  "start": {
                    "column": 67,
                    "line": 105
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 105
              },
              "start": {
                "column": 66,
                "line": 105
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "InferBecauseWhyNot",
            "optional": false,
            "range": [
              3476,
              3494
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 105
              },
              "start": {
                "column": 48,
                "line": 105
              }
            }
          },
          "range": [
            3476,
            3497
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 105
            },
            "start": {
              "column": 48,
              "line": 105
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 105
          },
          "start": {
            "column": 11,
            "line": 105
          }
        },
        "range": [
          3439,
          3468
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 105
                      },
                      "start": {
                        "column": 26,
                        "line": 105
                      }
                    },
                    "range": [
                      3454,
                      3459
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        3456,
                        3459
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 105
                        },
                        "start": {
                          "column": 28,
                          "line": 105
                        }
                      }
                    }
                  },
                  "range": [
                    3451,
                    3459
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 105
                    },
                    "start": {
                      "column": 23,
                      "line": 105
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 105
                  },
                  "start": {
                    "column": 33,
                    "line": 105
                  }
                },
                "range": [
                  3461,
                  3467
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    3464,
                    3467
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 105
                    },
                    "start": {
                      "column": 36,
                      "line": 105
                    }
                  }
                }
              },
              "range": [
                3450,
                3467
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 105
                },
                "start": {
                  "column": 22,
                  "line": 105
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "range": [
                3440,
                3441
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 105
                },
                "start": {
                  "column": 12,
                  "line": 105
                }
              }
            },
            "out": false,
            "range": [
              3440,
              3467
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 105
              },
              "start": {
                "column": 12,
                "line": 105
              }
            }
          }
        ]
      },
      "range": [
        3428,
        3513
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 107
        },
        "start": {
          "column": 0,
          "line": 105
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferBecauseWhyNotDistributive",
        "optional": false,
        "range": [
          3520,
          3550
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 109
          },
          "start": {
            "column": 5,
            "line": 109
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
              3556,
              3557
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 109
              },
              "start": {
                "column": 41,
                "line": 109
              }
            }
          },
          "range": [
            3556,
            3557
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 109
            },
            "start": {
              "column": 41,
              "line": 109
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 109
                  },
                  "start": {
                    "column": 53,
                    "line": 109
                  }
                },
                "range": [
                  3568,
                  3578
                ],
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P1",
                      "optional": false,
                      "range": [
                        3576,
                        3578
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 109
                        },
                        "start": {
                          "column": 61,
                          "line": 109
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      3576,
                      3578
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 109
                      },
                      "start": {
                        "column": 61,
                        "line": 109
                      }
                    }
                  },
                  "range": [
                    3570,
                    3578
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 109
                    },
                    "start": {
                      "column": 55,
                      "line": 109
                    }
                  }
                }
              },
              "range": [
                3567,
                3578
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 109
                },
                "start": {
                  "column": 52,
                  "line": 109
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 71,
                "line": 109
              },
              "start": {
                "column": 65,
                "line": 109
              }
            },
            "range": [
              3580,
              3586
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                3583,
                3586
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 109
                },
                "start": {
                  "column": 68,
                  "line": 109
                }
              }
            }
          },
          "range": [
            3566,
            3586
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 109
            },
            "start": {
              "column": 51,
              "line": 109
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            3602,
            3607
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 111
            },
            "start": {
              "column": 4,
              "line": 111
            }
          }
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P1",
                "optional": false,
                "range": [
                  3591,
                  3593
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 110
                  },
                  "start": {
                    "column": 4,
                    "line": 110
                  }
                }
              },
              "range": [
                3591,
                3593
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 110
                },
                "start": {
                  "column": 4,
                  "line": 110
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  3596,
                  3597
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 110
                  },
                  "start": {
                    "column": 9,
                    "line": 110
                  }
                }
              },
              "range": [
                3596,
                3597
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 110
                },
                "start": {
                  "column": 9,
                  "line": 110
                }
              }
            }
          ],
          "range": [
            3591,
            3597
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 110
            },
            "start": {
              "column": 4,
              "line": 110
            }
          }
        },
        "range": [
          3556,
          3607
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 111
          },
          "start": {
            "column": 41,
            "line": 109
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 38,
            "line": 109
          },
          "start": {
            "column": 35,
            "line": 109
          }
        },
        "range": [
          3550,
          3553
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
                3551,
                3552
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 109
                },
                "start": {
                  "column": 36,
                  "line": 109
                }
              }
            },
            "out": false,
            "range": [
              3551,
              3552
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 109
              },
              "start": {
                "column": 36,
                "line": 109
              }
            }
          }
        ]
      },
      "range": [
        3515,
        3608
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 111
        },
        "start": {
          "column": 0,
          "line": 109
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                3707,
                3708
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 116
                },
                "start": {
                  "column": 9,
                  "line": 116
                }
              }
            },
            "range": [
              3700,
              3709
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 116
              },
              "start": {
                "column": 2,
                "line": 116
              }
            }
          }
        ],
        "range": [
          3696,
          3726
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 117
          },
          "start": {
            "column": 37,
            "line": 115
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          3619,
          3621
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 113
          },
          "start": {
            "column": 9,
            "line": 113
          }
        }
      },
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
                "column": 6,
                "line": 114
              },
              "start": {
                "column": 3,
                "line": 114
              }
            },
            "range": [
              3655,
              3658
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Q",
                "optional": false,
                "range": [
                  3657,
                  3658
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 114
                  },
                  "start": {
                    "column": 5,
                    "line": 114
                  }
                }
              },
              "range": [
                3657,
                3658
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 114
                },
                "start": {
                  "column": 5,
                  "line": 114
                }
              }
            }
          },
          "range": [
            3654,
            3658
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 114
            },
            "start": {
              "column": 2,
              "line": 114
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 36,
            "line": 115
          },
          "start": {
            "column": 1,
            "line": 115
          }
        },
        "range": [
          3660,
          3695
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3692,
              3695
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Q",
                  "optional": false,
                  "range": [
                    3693,
                    3694
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 115
                    },
                    "start": {
                      "column": 34,
                      "line": 115
                    }
                  }
                },
                "range": [
                  3693,
                  3694
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 115
                  },
                  "start": {
                    "column": 34,
                    "line": 115
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 115
              },
              "start": {
                "column": 33,
                "line": 115
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "InferBecauseWhyNotDistributive",
            "optional": false,
            "range": [
              3662,
              3692
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 115
              },
              "start": {
                "column": 3,
                "line": 115
              }
            }
          },
          "range": [
            3662,
            3695
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 115
            },
            "start": {
              "column": 3,
              "line": 115
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 113
          },
          "start": {
            "column": 11,
            "line": 113
          }
        },
        "range": [
          3621,
          3650
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 113
                      },
                      "start": {
                        "column": 26,
                        "line": 113
                      }
                    },
                    "range": [
                      3636,
                      3641
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        3638,
                        3641
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 113
                        },
                        "start": {
                          "column": 28,
                          "line": 113
                        }
                      }
                    }
                  },
                  "range": [
                    3633,
                    3641
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 113
                    },
                    "start": {
                      "column": 23,
                      "line": 113
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 113
                  },
                  "start": {
                    "column": 33,
                    "line": 113
                  }
                },
                "range": [
                  3643,
                  3649
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    3646,
                    3649
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 113
                    },
                    "start": {
                      "column": 36,
                      "line": 113
                    }
                  }
                }
              },
              "range": [
                3632,
                3649
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 113
                },
                "start": {
                  "column": 22,
                  "line": 113
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "range": [
                3622,
                3623
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 113
                },
                "start": {
                  "column": 12,
                  "line": 113
                }
              }
            },
            "out": false,
            "range": [
              3622,
              3649
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 113
              },
              "start": {
                "column": 12,
                "line": 113
              }
            }
          }
        ]
      },
      "range": [
        3610,
        3726
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 117
        },
        "start": {
          "column": 0,
          "line": 113
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 118
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
