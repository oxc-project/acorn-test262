__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    10,
    482
  ],
  "body": [
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 3
                      },
                      "start": {
                        "column": 9,
                        "line": 3
                      }
                    },
                    "range": [
                      52,
                      55
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          54,
                          55
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 3
                          },
                          "start": {
                            "column": 11,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        54,
                        55
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
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
                    51,
                    55
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                },
                "init": null,
                "range": [
                  51,
                  55
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              47,
              56
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 3
              },
              "start": {
                "column": 4,
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    65,
                    66
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "range": [
                          80,
                          81
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 5
                          },
                          "start": {
                            "column": 9,
                            "line": 5
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          84,
                          85
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 5
                          },
                          "start": {
                            "column": 13,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        79,
                        85
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    69,
                    91
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 6
                    },
                    "start": {
                      "column": 12,
                      "line": 4
                    }
                  }
                },
                "range": [
                  65,
                  91
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              61,
              91
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "range": [
                  103,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 7
                  },
                  "start": {
                    "column": 11,
                    "line": 7
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "range": [
                  107,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 7
                  },
                  "start": {
                    "column": 15,
                    "line": 7
                  }
                }
              },
              "range": [
                103,
                108
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "range": [
              96,
              109
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          41,
          111
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 31,
            "line": 2
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
          19,
          20
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        },
        "range": [
          20,
          38
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                31,
                37
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 2
                },
                "start": {
                  "column": 21,
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
                21,
                22
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              21,
              37
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 2
              },
              "start": {
                "column": 11,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        10,
        111
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          135,
          148
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                137,
                138
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
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 11
                },
                "start": {
                  "column": 15,
                  "line": 11
                }
              },
              "range": [
                138,
                146
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  140,
                  146
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 11
                  },
                  "start": {
                    "column": 17,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              137,
              146
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 11
              },
              "start": {
                "column": 14,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 11
          },
          "start": {
            "column": 12,
            "line": 11
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          133,
          134
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 11
          },
          "start": {
            "column": 10,
            "line": 11
          }
        }
      },
      "range": [
        123,
        148
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IdMap",
        "optional": false,
        "range": [
          154,
          159
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 12
          },
          "start": {
            "column": 5,
            "line": 12
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
                179,
                180
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 12
                },
                "start": {
                  "column": 30,
                  "line": 12
                }
              }
            },
            "range": [
              179,
              180
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 12
              },
              "start": {
                "column": 30,
                "line": 12
              }
            }
          },
          "range": [
            173,
            180
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 12
            },
            "start": {
              "column": 24,
              "line": 12
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            168,
            169
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 12
            },
            "start": {
              "column": 19,
              "line": 12
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                185,
                186
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
              185,
              186
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
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                183,
                184
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 12
                },
                "start": {
                  "column": 34,
                  "line": 12
                }
              }
            },
            "range": [
              183,
              184
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 12
              },
              "start": {
                "column": 34,
                "line": 12
              }
            }
          },
          "range": [
            183,
            187
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 12
            },
            "start": {
              "column": 34,
              "line": 12
            }
          }
        },
        "range": [
          165,
          189
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 12
          },
          "start": {
            "column": 16,
            "line": 12
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 12
          },
          "start": {
            "column": 10,
            "line": 12
          }
        },
        "range": [
          159,
          162
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
                160,
                161
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              160,
              161
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 12
              },
              "start": {
                "column": 11,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        149,
        190
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 14
                      },
                      "start": {
                        "column": 11,
                        "line": 14
                      }
                    },
                    "range": [
                      241,
                      249
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        243,
                        249
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 14
                        },
                        "start": {
                          "column": 13,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    240,
                    249
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 14
                    },
                    "start": {
                      "column": 10,
                      "line": 14
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "range": [
                      252,
                      253
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 14
                      },
                      "start": {
                        "column": 22,
                        "line": 14
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      254,
                      255
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 14
                      },
                      "start": {
                        "column": 24,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    252,
                    255
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 14
                    },
                    "start": {
                      "column": 22,
                      "line": 14
                    }
                  }
                },
                "range": [
                  240,
                  255
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 14
                  },
                  "start": {
                    "column": 10,
                    "line": 14
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              234,
              256
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "*",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "range": [
                    268,
                    269
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 15
                    },
                    "start": {
                      "column": 11,
                      "line": 15
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    270,
                    271
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 15
                    },
                    "start": {
                      "column": 13,
                      "line": 15
                    }
                  }
                },
                "range": [
                  268,
                  271
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 15
                  },
                  "start": {
                    "column": 11,
                    "line": 15
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  274,
                  275
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 15
                  },
                  "start": {
                    "column": 17,
                    "line": 15
                  }
                }
              },
              "range": [
                268,
                275
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              }
            },
            "range": [
              261,
              276
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "range": [
          228,
          278
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 37,
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
        "name": "g",
        "optional": false,
        "range": [
          200,
          201
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 35,
                "line": 13
              },
              "start": {
                "column": 25,
                "line": 13
              }
            },
            "range": [
              216,
              226
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  223,
                  226
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
                        224,
                        225
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 13
                        },
                        "start": {
                          "column": 33,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      224,
                      225
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 13
                      },
                      "start": {
                        "column": 33,
                        "line": 13
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 13
                  },
                  "start": {
                    "column": 32,
                    "line": 13
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IdMap",
                "optional": false,
                "range": [
                  218,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 13
                  },
                  "start": {
                    "column": 27,
                    "line": 13
                  }
                }
              },
              "range": [
                218,
                226
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 13
                },
                "start": {
                  "column": 27,
                  "line": 13
                }
              }
            }
          },
          "range": [
            215,
            226
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 13
            },
            "start": {
              "column": 24,
              "line": 13
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 13
          },
          "start": {
            "column": 10,
            "line": 13
          }
        },
        "range": [
          201,
          214
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
                "name": "I",
                "optional": false,
                "range": [
                  212,
                  213
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 13
                  },
                  "start": {
                    "column": 21,
                    "line": 13
                  }
                }
              },
              "range": [
                212,
                213
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 13
                },
                "start": {
                  "column": 21,
                  "line": 13
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
                202,
                203
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              202,
              213
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 13
              },
              "start": {
                "column": 11,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        191,
        278
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 13
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
                  "name": "result",
                  "optional": false,
                  "range": [
                    387,
                    393
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    396,
                    397
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 20
                    },
                    "start": {
                      "column": 17,
                      "line": 20
                    }
                  }
                },
                "range": [
                  387,
                  397
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              383,
              398
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "range": [
                        436,
                        442
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 22
                        },
                        "start": {
                          "column": 8,
                          "line": 22
                        }
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          446,
                          447
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 22
                          },
                          "start": {
                            "column": 18,
                            "line": 22
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "range": [
                          448,
                          452
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 22
                          },
                          "start": {
                            "column": 20,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        446,
                        453
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 22
                        },
                        "start": {
                          "column": 18,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      436,
                      453
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    436,
                    454
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
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
                426,
                460
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 27,
                  "line": 21
                }
              }
            },
            "left": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      414,
                      415
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 21
                      },
                      "start": {
                        "column": 15,
                        "line": 21
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    414,
                    415
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 21
                    },
                    "start": {
                      "column": 15,
                      "line": 21
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                408,
                415
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 21
                },
                "start": {
                  "column": 9,
                  "line": 21
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "array",
              "optional": false,
              "range": [
                419,
                424
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 21
                },
                "start": {
                  "column": 20,
                  "line": 21
                }
              }
            },
            "range": [
              403,
              460
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "range": [
                472,
                478
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 24
                },
                "start": {
                  "column": 11,
                  "line": 24
                }
              }
            },
            "range": [
              465,
              479
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          377,
          481
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 87,
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
        "name": "h",
        "optional": false,
        "range": [
          299,
          300
        ],
        "loc": {
          "end": {
            "column": 10,
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
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 68,
                "line": 19
              },
              "start": {
                "column": 63,
                "line": 19
              }
            },
            "range": [
              353,
              358
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
                    355,
                    356
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 19
                    },
                    "start": {
                      "column": 65,
                      "line": 19
                    }
                  }
                },
                "range": [
                  355,
                  356
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 19
                  },
                  "start": {
                    "column": 65,
                    "line": 19
                  }
                }
              },
              "range": [
                355,
                358
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 19
                },
                "start": {
                  "column": 65,
                  "line": 19
                }
              }
            }
          },
          "range": [
            348,
            358
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 19
            },
            "start": {
              "column": 58,
              "line": 19
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 77,
                "line": 19
              },
              "start": {
                "column": 74,
                "line": 19
              }
            },
            "range": [
              364,
              367
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  366,
                  367
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 19
                  },
                  "start": {
                    "column": 76,
                    "line": 19
                  }
                }
              },
              "range": [
                366,
                367
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 19
                },
                "start": {
                  "column": 76,
                  "line": 19
                }
              }
            }
          },
          "range": [
            360,
            367
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 19
            },
            "start": {
              "column": 70,
              "line": 19
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 86,
            "line": 19
          },
          "start": {
            "column": 78,
            "line": 19
          }
        },
        "range": [
          368,
          376
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            370,
            376
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 19
            },
            "start": {
              "column": 80,
              "line": 19
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 57,
            "line": 19
          },
          "start": {
            "column": 10,
            "line": 19
          }
        },
        "range": [
          300,
          347
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
                  317,
                  328
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        318,
                        319
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 19
                        },
                        "start": {
                          "column": 28,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      318,
                      319
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 19
                      },
                      "start": {
                        "column": 28,
                        "line": 19
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      321,
                      327
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 19
                      },
                      "start": {
                        "column": 31,
                        "line": 19
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 19
                  },
                  "start": {
                    "column": 27,
                    "line": 19
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  311,
                  317
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 19
                  },
                  "start": {
                    "column": 21,
                    "line": 19
                  }
                }
              },
              "range": [
                311,
                328
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 19
                },
                "start": {
                  "column": 21,
                  "line": 19
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
                301,
                302
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 19
                },
                "start": {
                  "column": 11,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              301,
              328
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 19
              },
              "start": {
                "column": 11,
                "line": 19
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                340,
                346
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 19
                },
                "start": {
                  "column": 50,
                  "line": 19
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
                330,
                331
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 19
                },
                "start": {
                  "column": 40,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              330,
              346
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 19
              },
              "start": {
                "column": 40,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        290,
        481
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
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
      "line": 26
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
