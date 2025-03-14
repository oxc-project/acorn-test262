__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    320
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Funcs",
        "optional": false,
        "range": [
          27,
          32
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
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
              "name": "B",
              "optional": false,
              "range": [
                89,
                90
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 14,
                  "line": 4
                }
              }
            },
            "range": [
              89,
              90
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 4
              },
              "start": {
                "column": 14,
                "line": 4
              }
            }
          },
          "range": [
            83,
            90
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 4
            },
            "start": {
              "column": 8,
              "line": 4
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            78,
            79
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 4
            },
            "start": {
              "column": 3,
              "line": 4
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "range": [
                  99,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 6,
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
                    "column": 28,
                    "line": 5
                  },
                  "start": {
                    "column": 6,
                    "line": 5
                  }
                },
                "range": [
                  101,
                  123
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
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
                            "column": 13,
                            "line": 5
                          },
                          "start": {
                            "column": 10,
                            "line": 5
                          }
                        },
                        "range": [
                          105,
                          108
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "range": [
                              107,
                              108
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
                            107,
                            108
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
                        }
                      },
                      "range": [
                        104,
                        108
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 5
                        },
                        "start": {
                          "column": 9,
                          "line": 5
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 5
                          },
                          "start": {
                            "column": 16,
                            "line": 5
                          }
                        },
                        "range": [
                          111,
                          114
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "range": [
                              113,
                              114
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 5
                              },
                              "start": {
                                "column": 18,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            113,
                            114
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 5
                            },
                            "start": {
                              "column": 18,
                              "line": 5
                            }
                          }
                        }
                      },
                      "range": [
                        110,
                        114
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 5
                        },
                        "start": {
                          "column": 15,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 5
                      },
                      "start": {
                        "column": 21,
                        "line": 5
                      }
                    },
                    "range": [
                      116,
                      123
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        119,
                        123
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 5
                        },
                        "start": {
                          "column": 24,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    103,
                    123
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                }
              },
              "range": [
                99,
                124
              ],
              "loc": {
                "end": {
                  "column": 29,
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
                "name": "thing",
                "optional": false,
                "range": [
                  129,
                  134
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
                    "column": 15,
                    "line": 6
                  },
                  "start": {
                    "column": 9,
                    "line": 6
                  }
                },
                "range": [
                  134,
                  140
                ],
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        138,
                        139
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 6
                        },
                        "start": {
                          "column": 13,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      138,
                      139
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 6
                      },
                      "start": {
                        "column": 13,
                        "line": 6
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        136,
                        137
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 6
                        },
                        "start": {
                          "column": 11,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      136,
                      137
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 6
                      },
                      "start": {
                        "column": 11,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    136,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 6
                    },
                    "start": {
                      "column": 11,
                      "line": 6
                    }
                  }
                }
              },
              "range": [
                129,
                141
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            }
          ],
          "range": [
            93,
            145
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 7
            },
            "start": {
              "column": 18,
              "line": 4
            }
          }
        },
        "range": [
          73,
          148
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 51,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 48,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        },
        "range": [
          32,
          70
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
                33,
                34
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
            "out": false,
            "range": [
              33,
              34
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
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  52,
                  69
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      53,
                      59
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 3
                      },
                      "start": {
                        "column": 31,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "range": [
                      61,
                      68
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 3
                      },
                      "start": {
                        "column": 39,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 3
                  },
                  "start": {
                    "column": 30,
                    "line": 3
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  46,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 3
                  },
                  "start": {
                    "column": 24,
                    "line": 3
                  }
                }
              },
              "range": [
                46,
                69
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 3
                },
                "start": {
                  "column": 24,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                36,
                37
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              36,
              69
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        148
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 3
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
        "name": "foo",
        "optional": false,
        "range": [
          167,
          170
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 10
          },
          "start": {
            "column": 17,
            "line": 10
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fns",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 75,
                "line": 10
              },
              "start": {
                "column": 62,
                "line": 10
              }
            },
            "range": [
              212,
              225
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  219,
                  225
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
                        220,
                        221
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 10
                        },
                        "start": {
                          "column": 70,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      220,
                      221
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 10
                      },
                      "start": {
                        "column": 70,
                        "line": 10
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
                        223,
                        224
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 10
                        },
                        "start": {
                          "column": 73,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      223,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 10
                      },
                      "start": {
                        "column": 73,
                        "line": 10
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 10
                  },
                  "start": {
                    "column": 69,
                    "line": 10
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Funcs",
                "optional": false,
                "range": [
                  214,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 10
                  },
                  "start": {
                    "column": 64,
                    "line": 10
                  }
                }
              },
              "range": [
                214,
                225
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 10
                },
                "start": {
                  "column": 64,
                  "line": 10
                }
              }
            }
          },
          "range": [
            209,
            225
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 10
            },
            "start": {
              "column": 59,
              "line": 10
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 84,
            "line": 10
          },
          "start": {
            "column": 76,
            "line": 10
          }
        },
        "range": [
          226,
          234
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
                  229,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 10
                  },
                  "start": {
                    "column": 79,
                    "line": 10
                  }
                }
              },
              "range": [
                229,
                230
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 10
                },
                "start": {
                  "column": 79,
                  "line": 10
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
                  232,
                  233
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 10
                  },
                  "start": {
                    "column": 82,
                    "line": 10
                  }
                }
              },
              "range": [
                232,
                233
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 10
                },
                "start": {
                  "column": 82,
                  "line": 10
                }
              }
            }
          ],
          "range": [
            228,
            234
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 10
            },
            "start": {
              "column": 78,
              "line": 10
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 58,
            "line": 10
          },
          "start": {
            "column": 20,
            "line": 10
          }
        },
        "range": [
          170,
          208
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
                171,
                172
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 10
                },
                "start": {
                  "column": 21,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              171,
              172
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 10
              },
              "start": {
                "column": 21,
                "line": 10
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
                  190,
                  207
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      191,
                      197
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 10
                      },
                      "start": {
                        "column": 41,
                        "line": 10
                      }
                    }
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "range": [
                      199,
                      206
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 10
                      },
                      "start": {
                        "column": 49,
                        "line": 10
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 10
                  },
                  "start": {
                    "column": 40,
                    "line": 10
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  184,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 10
                  },
                  "start": {
                    "column": 34,
                    "line": 10
                  }
                }
              },
              "range": [
                184,
                207
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 10
                },
                "start": {
                  "column": 34,
                  "line": 10
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                174,
                175
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 10
                },
                "start": {
                  "column": 24,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              174,
              207
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 10
              },
              "start": {
                "column": 24,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        150,
        234
      ],
      "loc": {
        "end": {
          "column": 84,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
            "name": "result",
            "optional": false,
            "range": [
              242,
              248
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
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
                      "name": "bar",
                      "optional": false,
                      "range": [
                        259,
                        262
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 13
                        },
                        "start": {
                          "column": 2,
                          "line": 13
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fn",
                            "optional": false,
                            "range": [
                              270,
                              272
                            ],
                            "loc": {
                              "end": {
                                "column": 6,
                                "line": 14
                              },
                              "start": {
                                "column": 4,
                                "line": 14
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "range": [
                                289,
                                291
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 14
                                },
                                "start": {
                                  "column": 23,
                                  "line": 14
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 10,
                                      "line": 14
                                    }
                                  },
                                  "range": [
                                    276,
                                    284
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      278,
                                      284
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 14
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  275,
                                  284
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 9,
                                    "line": 14
                                  }
                                }
                              }
                            ],
                            "range": [
                              274,
                              291
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 14
                              },
                              "start": {
                                "column": 8,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            270,
                            291
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 14
                            },
                            "start": {
                              "column": 4,
                              "line": 14
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "thing",
                            "optional": false,
                            "range": [
                              297,
                              302
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 15
                              },
                              "start": {
                                "column": 4,
                                "line": 15
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "'asd'",
                            "value": "asd",
                            "range": [
                              304,
                              309
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 15
                              },
                              "start": {
                                "column": 11,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            297,
                            309
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
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
                        264,
                        314
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 16
                        },
                        "start": {
                          "column": 7,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      259,
                      314
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 16
                      },
                      "start": {
                        "column": 2,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  255,
                  317
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 17
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
              "name": "foo",
              "optional": false,
              "range": [
                251,
                254
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 12
                },
                "start": {
                  "column": 15,
                  "line": 12
                }
              }
            },
            "optional": false,
            "range": [
              251,
              318
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 17
              },
              "start": {
                "column": 15,
                "line": 12
              }
            }
          },
          "range": [
            242,
            318
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 17
            },
            "start": {
              "column": 6,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        236,
        319
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 18
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
