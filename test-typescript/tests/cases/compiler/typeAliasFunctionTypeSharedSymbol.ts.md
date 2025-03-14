__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    33,
    292
  ],
  "body": [
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
                  135,
                  142
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 30,
                    "line": 4
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
                  130,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 4
                  },
                  "start": {
                    "column": 25,
                    "line": 4
                  }
                }
              },
              "range": [
                116,
                142
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              109,
              143
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          103,
          145
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 70,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mixin",
        "optional": false,
        "range": [
          42,
          47
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
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
                "column": 68,
                "line": 3
              },
              "start": {
                "column": 61,
                "line": 3
              }
            },
            "range": [
              94,
              101
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TBase",
                "optional": false,
                "range": [
                  96,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 3
                  },
                  "start": {
                    "column": 63,
                    "line": 3
                  }
                }
              },
              "range": [
                96,
                101
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 3
                },
                "start": {
                  "column": 63,
                  "line": 3
                }
              }
            }
          },
          "range": [
            90,
            101
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 3
            },
            "start": {
              "column": 57,
              "line": 3
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 56,
            "line": 3
          },
          "start": {
            "column": 14,
            "line": 3
          }
        },
        "range": [
          47,
          89
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "params": [
                    {
                      "type": "RestElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "range": [
                          71,
                          75
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 3
                          },
                          "start": {
                            "column": 38,
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
                            "column": 49,
                            "line": 3
                          },
                          "start": {
                            "column": 42,
                            "line": 3
                          }
                        },
                        "range": [
                          75,
                          82
                        ],
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "range": [
                              77,
                              80
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 3
                              },
                              "start": {
                                "column": 44,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            77,
                            82
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 3
                            },
                            "start": {
                              "column": 44,
                              "line": 3
                            }
                          }
                        }
                      },
                      "range": [
                        68,
                        82
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 3
                        },
                        "start": {
                          "column": 35,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 3
                      },
                      "start": {
                        "column": 50,
                        "line": 3
                      }
                    },
                    "range": [
                      83,
                      87
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "range": [
                        85,
                        87
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 3
                        },
                        "start": {
                          "column": 52,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    63,
                    87
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 3
                    },
                    "start": {
                      "column": 30,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                62,
                88
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 3
                },
                "start": {
                  "column": 29,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TBase",
              "optional": false,
              "range": [
                48,
                53
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              48,
              88
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 3
              },
              "start": {
                "column": 15,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        33,
        145
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
        "name": "Mixin",
        "optional": false,
        "range": [
          152,
          157
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            172,
            186
          ],
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mixin",
                "optional": false,
                "range": [
                  180,
                  185
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 8
                  },
                  "start": {
                    "column": 33,
                    "line": 8
                  }
                }
              },
              "range": [
                173,
                185
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 8
                },
                "start": {
                  "column": 26,
                  "line": 8
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 8
            },
            "start": {
              "column": 25,
              "line": 8
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnTypeOf",
          "optional": false,
          "range": [
            160,
            172
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 8
            },
            "start": {
              "column": 13,
              "line": 8
            }
          }
        },
        "range": [
          160,
          186
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 8
          },
          "start": {
            "column": 13,
            "line": 8
          }
        }
      },
      "range": [
        147,
        186
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReturnTypeOf",
        "optional": false,
        "range": [
          193,
          205
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 10
          },
          "start": {
            "column": 5,
            "line": 10
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
            "name": "V",
            "optional": false,
            "range": [
              211,
              212
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 10
              },
              "start": {
                "column": 23,
                "line": 10
              }
            }
          },
          "range": [
            211,
            212
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 10
            },
            "start": {
              "column": 23,
              "line": 10
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "range": [
                  225,
                  229
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 10
                  },
                  "start": {
                    "column": 37,
                    "line": 10
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 10
                  },
                  "start": {
                    "column": 41,
                    "line": 10
                  }
                },
                "range": [
                  229,
                  236
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "range": [
                      231,
                      234
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 10
                      },
                      "start": {
                        "column": 43,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    231,
                    236
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 10
                    },
                    "start": {
                      "column": 43,
                      "line": 10
                    }
                  }
                }
              },
              "range": [
                222,
                236
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 10
                },
                "start": {
                  "column": 34,
                  "line": 10
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 58,
                "line": 10
              },
              "start": {
                "column": 49,
                "line": 10
              }
            },
            "range": [
              237,
              246
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
                  "name": "R",
                  "optional": false,
                  "range": [
                    245,
                    246
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 10
                    },
                    "start": {
                      "column": 57,
                      "line": 10
                    }
                  }
                },
                "out": false,
                "range": [
                  245,
                  246
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 10
                  },
                  "start": {
                    "column": 57,
                    "line": 10
                  }
                }
              },
              "range": [
                239,
                246
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 10
                },
                "start": {
                  "column": 51,
                  "line": 10
                }
              }
            }
          },
          "range": [
            221,
            246
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 10
            },
            "start": {
              "column": 33,
              "line": 10
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            253,
            258
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 10
            },
            "start": {
              "column": 65,
              "line": 10
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "range": [
              249,
              250
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 10
              },
              "start": {
                "column": 61,
                "line": 10
              }
            }
          },
          "range": [
            249,
            250
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 10
            },
            "start": {
              "column": 61,
              "line": 10
            }
          }
        },
        "range": [
          211,
          258
        ],
        "loc": {
          "end": {
            "column": 70,
            "line": 10
          },
          "start": {
            "column": 23,
            "line": 10
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 10
          },
          "start": {
            "column": 17,
            "line": 10
          }
        },
        "range": [
          205,
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
              "name": "V",
              "optional": false,
              "range": [
                206,
                207
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 10
                },
                "start": {
                  "column": 18,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              206,
              207
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 10
              },
              "start": {
                "column": 18,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        188,
        259
      ],
      "loc": {
        "end": {
          "column": 71,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Crashes",
        "optional": false,
        "range": [
          266,
          273
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 12
          },
          "start": {
            "column": 5,
            "line": 12
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSNumberKeyword",
            "range": [
              276,
              282
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 12
              },
              "start": {
                "column": 15,
                "line": 12
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Mixin",
              "optional": false,
              "range": [
                285,
                290
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 12
                },
                "start": {
                  "column": 24,
                  "line": 12
                }
              }
            },
            "range": [
              285,
              290
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 12
              },
              "start": {
                "column": 24,
                "line": 12
              }
            }
          }
        ],
        "range": [
          276,
          290
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 12
          },
          "start": {
            "column": 15,
            "line": 12
          }
        }
      },
      "range": [
        261,
        291
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 12
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
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
