__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    678
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HandleOptions",
        "optional": false,
        "range": [
          5,
          18
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
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
              "name": "O",
              "optional": false,
              "range": [
                42,
                43
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              }
            },
            "range": [
              42,
              43
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 16,
                "line": 2
              }
            }
          },
          "range": [
            36,
            43
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 2
            },
            "start": {
              "column": 10,
              "line": 2
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "range": [
            31,
            32
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 2
            },
            "start": {
              "column": 5,
              "line": 2
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
                "name": "value",
                "optional": false,
                "range": [
                  56,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 3
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
                    "line": 3
                  },
                  "start": {
                    "column": 13,
                    "line": 3
                  }
                },
                "range": [
                  61,
                  67
                ],
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "range": [
                        65,
                        66
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
                    "range": [
                      65,
                      66
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
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "range": [
                        63,
                        64
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 3
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      63,
                      64
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 3
                      },
                      "start": {
                        "column": 15,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    63,
                    67
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 3
                    },
                    "start": {
                      "column": 15,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                56,
                68
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            46,
            74
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 4
            },
            "start": {
              "column": 20,
              "line": 2
            }
          }
        },
        "range": [
          24,
          77
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 24,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        },
        "range": [
          18,
          21
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "range": [
                19,
                20
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              19,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 19,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        78
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 1
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
        "name": "func1",
        "optional": false,
        "range": [
          97,
          102
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 7
          },
          "start": {
            "column": 17,
            "line": 7
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
                "column": 1,
                "line": 14
              },
              "start": {
                "column": 8,
                "line": 9
              }
            },
            "range": [
              163,
              263
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
                    "name": "T",
                    "optional": false,
                    "range": [
                      183,
                      184
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 10
                      },
                      "start": {
                        "column": 16,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    183,
                    184
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 10
                    },
                    "start": {
                      "column": 16,
                      "line": 10
                    }
                  }
                },
                "range": [
                  177,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 10
                  },
                  "start": {
                    "column": 10,
                    "line": 10
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  172,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 10
                  },
                  "start": {
                    "column": 5,
                    "line": 10
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
                      "name": "label",
                      "optional": false,
                      "range": [
                        197,
                        202
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 11
                        },
                        "start": {
                          "column": 8,
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
                          "column": 21,
                          "line": 11
                        },
                        "start": {
                          "column": 13,
                          "line": 11
                        }
                      },
                      "range": [
                        202,
                        210
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          204,
                          210
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
                      }
                    },
                    "range": [
                      197,
                      211
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "range": [
                        220,
                        227
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 12
                        },
                        "start": {
                          "column": 8,
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
                          "column": 41,
                          "line": 12
                        },
                        "start": {
                          "column": 15,
                          "line": 12
                        }
                      },
                      "range": [
                        227,
                        253
                      ],
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSRestType",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  246,
                                  252
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
                                          249,
                                          250
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 38,
                                            "line": 12
                                          },
                                          "start": {
                                            "column": 37,
                                            "line": 12
                                          }
                                        }
                                      },
                                      "range": [
                                        249,
                                        250
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 38,
                                          "line": 12
                                        },
                                        "start": {
                                          "column": 37,
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
                                          247,
                                          248
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 36,
                                            "line": 12
                                          },
                                          "start": {
                                            "column": 35,
                                            "line": 12
                                          }
                                        }
                                      },
                                      "range": [
                                        247,
                                        248
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 36,
                                          "line": 12
                                        },
                                        "start": {
                                          "column": 35,
                                          "line": 12
                                        }
                                      }
                                    },
                                    "range": [
                                      247,
                                      251
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 35,
                                        "line": 12
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 12
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "HandleOptions",
                                "optional": false,
                                "range": [
                                  233,
                                  246
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                233,
                                252
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 12
                                },
                                "start": {
                                  "column": 21,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              230,
                              252
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 12
                              },
                              "start": {
                                "column": 18,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "range": [
                          229,
                          253
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 12
                          },
                          "start": {
                            "column": 17,
                            "line": 12
                          }
                        }
                      }
                    },
                    "range": [
                      220,
                      254
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  187,
                  260
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 20,
                    "line": 10
                  }
                }
              },
              "range": [
                165,
                263
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 14
                },
                "start": {
                  "column": 10,
                  "line": 9
                }
              }
            }
          },
          "range": [
            157,
            263
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 14
            },
            "start": {
              "column": 2,
              "line": 9
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 5,
            "line": 14
          },
          "start": {
            "column": 2,
            "line": 14
          }
        },
        "range": [
          264,
          267
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              266,
              267
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
          "range": [
            266,
            267
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
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 22,
            "line": 7
          }
        },
        "range": [
          102,
          156
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
                  124,
                  153
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "range": [
                        125,
                        136
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 8
                        },
                        "start": {
                          "column": 21,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      125,
                      136
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 8
                      },
                      "start": {
                        "column": 21,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "readonly",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          147,
                          150
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 8
                          },
                          "start": {
                            "column": 43,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        147,
                        152
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 8
                        },
                        "start": {
                          "column": 43,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      138,
                      152
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 8
                      },
                      "start": {
                        "column": 34,
                        "line": 8
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 8
                  },
                  "start": {
                    "column": 20,
                    "line": 8
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  118,
                  124
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 8
                  },
                  "start": {
                    "column": 14,
                    "line": 8
                  }
                }
              },
              "range": [
                118,
                153
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 8
                },
                "start": {
                  "column": 14,
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
                108,
                109
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              108,
              153
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        80,
        268
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 7
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
              276,
              282
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 16
              },
              "start": {
                "column": 6,
                "line": 16
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
                      "name": "prop",
                      "optional": false,
                      "range": [
                        297,
                        301
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 17
                        },
                        "start": {
                          "column": 4,
                          "line": 17
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
                            "name": "label",
                            "optional": false,
                            "range": [
                              313,
                              318
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 18
                              },
                              "start": {
                                "column": 8,
                                "line": 18
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "\"first\"",
                            "value": "first",
                            "range": [
                              320,
                              327
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 18
                              },
                              "start": {
                                "column": 15,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            313,
                            327
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 18
                            },
                            "start": {
                              "column": 8,
                              "line": 18
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "range": [
                              337,
                              344
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 19
                              },
                              "start": {
                                "column": 8,
                                "line": 19
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
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "range": [
                                        378,
                                        383
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 21
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 21
                                        }
                                      }
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "Literal",
                                      "raw": "123",
                                      "value": 123,
                                      "range": [
                                        385,
                                        388
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 26,
                                          "line": 21
                                        },
                                        "start": {
                                          "column": 23,
                                          "line": 21
                                        }
                                      }
                                    },
                                    "range": [
                                      378,
                                      388
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 21
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 21
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  360,
                                  403
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 20
                                  }
                                }
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "range": [
                                        435,
                                        440
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 24
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 24
                                        }
                                      }
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "Literal",
                                      "raw": "\"foo\"",
                                      "value": "foo",
                                      "range": [
                                        442,
                                        447
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 24
                                        },
                                        "start": {
                                          "column": 23,
                                          "line": 24
                                        }
                                      }
                                    },
                                    "range": [
                                      435,
                                      447
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 24
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 24
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  417,
                                  462
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 23
                                  }
                                }
                              }
                            ],
                            "range": [
                              346,
                              473
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 26
                              },
                              "start": {
                                "column": 17,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            337,
                            473
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 26
                            },
                            "start": {
                              "column": 8,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "range": [
                        303,
                        480
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 27
                        },
                        "start": {
                          "column": 10,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      297,
                      480
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 27
                      },
                      "start": {
                        "column": 4,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "range": [
                        486,
                        491
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 28
                        },
                        "start": {
                          "column": 4,
                          "line": 28
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
                            "name": "label",
                            "optional": false,
                            "range": [
                              503,
                              508
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 29
                              },
                              "start": {
                                "column": 8,
                                "line": 29
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "\"second\"",
                            "value": "second",
                            "range": [
                              510,
                              518
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 29
                              },
                              "start": {
                                "column": 15,
                                "line": 29
                              }
                            }
                          },
                          "range": [
                            503,
                            518
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 29
                            },
                            "start": {
                              "column": 8,
                              "line": 29
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "range": [
                              528,
                              535
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 30
                              },
                              "start": {
                                "column": 8,
                                "line": 30
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
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "range": [
                                        569,
                                        574
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 32
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 32
                                        }
                                      }
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "Literal",
                                      "raw": "\"bar\"",
                                      "value": "bar",
                                      "range": [
                                        576,
                                        581
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 32
                                        },
                                        "start": {
                                          "column": 23,
                                          "line": 32
                                        }
                                      }
                                    },
                                    "range": [
                                      569,
                                      581
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 32
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 32
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  551,
                                  596
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 31
                                  }
                                }
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "range": [
                                        628,
                                        633
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 35
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 35
                                        }
                                      }
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "Literal",
                                      "raw": "true",
                                      "value": true,
                                      "range": [
                                        635,
                                        639
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 27,
                                          "line": 35
                                        },
                                        "start": {
                                          "column": 23,
                                          "line": 35
                                        }
                                      }
                                    },
                                    "range": [
                                      628,
                                      639
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 35
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 35
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  610,
                                  654
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 34
                                  }
                                }
                              }
                            ],
                            "range": [
                              537,
                              665
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 37
                              },
                              "start": {
                                "column": 17,
                                "line": 30
                              }
                            }
                          },
                          "range": [
                            528,
                            665
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 37
                            },
                            "start": {
                              "column": 8,
                              "line": 30
                            }
                          }
                        }
                      ],
                      "range": [
                        493,
                        672
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 38
                        },
                        "start": {
                          "column": 11,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      486,
                      672
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 38
                      },
                      "start": {
                        "column": 4,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  291,
                  675
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 39
                  },
                  "start": {
                    "column": 21,
                    "line": 16
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "func1",
              "optional": false,
              "range": [
                285,
                290
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 16
                },
                "start": {
                  "column": 15,
                  "line": 16
                }
              }
            },
            "optional": false,
            "range": [
              285,
              676
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 39
              },
              "start": {
                "column": 15,
                "line": 16
              }
            }
          },
          "range": [
            276,
            676
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 39
            },
            "start": {
              "column": 6,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        270,
        677
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 40
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
