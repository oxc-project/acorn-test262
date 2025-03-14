__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    560
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tags",
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
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              33,
              34
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 1
              },
              "start": {
                "column": 33,
                "line": 1
              }
            }
          },
          "range": [
            33,
            34
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 1
            },
            "start": {
              "column": 33,
              "line": 1
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              49,
              61
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "range": [
                    50,
                    51
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 1
                    },
                    "start": {
                      "column": 50,
                      "line": 1
                    }
                  }
                },
                "range": [
                  50,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 1
                  },
                  "start": {
                    "column": 50,
                    "line": 1
                  }
                }
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "range": [
                      59,
                      60
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 1
                      },
                      "start": {
                        "column": 59,
                        "line": 1
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    59,
                    60
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 1
                    },
                    "start": {
                      "column": 59,
                      "line": 1
                    }
                  }
                },
                "range": [
                  53,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 1
                  },
                  "start": {
                    "column": 53,
                    "line": 1
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 1
              },
              "start": {
                "column": 49,
                "line": 1
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "range": [
              43,
              49
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 1
              },
              "start": {
                "column": 43,
                "line": 1
              }
            }
          },
          "range": [
            43,
            61
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 1
            },
            "start": {
              "column": 43,
              "line": 1
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            68,
            73
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 1
            },
            "start": {
              "column": 68,
              "line": 1
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "X",
            "optional": false,
            "range": [
              64,
              65
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 1
              },
              "start": {
                "column": 64,
                "line": 1
              }
            }
          },
          "range": [
            64,
            65
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 1
            },
            "start": {
              "column": 64,
              "line": 1
            }
          }
        },
        "range": [
          33,
          73
        ],
        "loc": {
          "end": {
            "column": 73,
            "line": 1
          },
          "start": {
            "column": 33,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        },
        "range": [
          9,
          30
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                20,
                26
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
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
              26
            ],
            "loc": {
              "end": {
                "column": 26,
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
              "name": "P",
              "optional": false,
              "range": [
                28,
                29
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 1
                },
                "start": {
                  "column": 28,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              28,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 28,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        74
      ],
      "loc": {
        "end": {
          "column": 74,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "typeTags",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 11
                },
                "start": {
                  "column": 22,
                  "line": 3
                }
              },
              "range": [
                98,
                332
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 11
                    },
                    "start": {
                      "column": 30,
                      "line": 3
                    }
                  },
                  "range": [
                    106,
                    332
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
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
                              "column": 11,
                              "line": 10
                            },
                            "start": {
                              "column": 8,
                              "line": 10
                            }
                          },
                          "range": [
                            315,
                            318
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "range": [
                                317,
                                318
                              ],
                              "loc": {
                                "end": {
                                  "column": 11,
                                  "line": 10
                                },
                                "start": {
                                  "column": 10,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              317,
                              318
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 10
                              },
                              "start": {
                                "column": 10,
                                "line": 10
                              }
                            }
                          }
                        },
                        "range": [
                          309,
                          318
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 10
                          },
                          "start": {
                            "column": 2,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 11
                        },
                        "start": {
                          "column": 2,
                          "line": 11
                        }
                      },
                      "range": [
                        322,
                        332
                      ],
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "range": [
                          325,
                          332
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 11
                          },
                          "start": {
                            "column": 5,
                            "line": 11
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
                          "column": 33,
                          "line": 3
                        }
                      },
                      "range": [
                        109,
                        305
                      ],
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "const": false,
                          "constraint": {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSMappedType",
                                "constraint": {
                                  "type": "TSIntersectionType",
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "range": [
                                          150,
                                          161
                                        ],
                                        "params": [
                                          {
                                            "type": "TSLiteralType",
                                            "literal": {
                                              "type": "Literal",
                                              "raw": "\"_tag\"",
                                              "value": "_tag",
                                              "range": [
                                                151,
                                                157
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 32,
                                                  "line": 5
                                                },
                                                "start": {
                                                  "column": 26,
                                                  "line": 5
                                                }
                                              }
                                            },
                                            "range": [
                                              151,
                                              157
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 32,
                                                "line": 5
                                              },
                                              "start": {
                                                "column": 26,
                                                "line": 5
                                              }
                                            }
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "I",
                                              "optional": false,
                                              "range": [
                                                159,
                                                160
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 35,
                                                  "line": 5
                                                },
                                                "start": {
                                                  "column": 34,
                                                  "line": 5
                                                }
                                              }
                                            },
                                            "range": [
                                              159,
                                              160
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 35,
                                                "line": 5
                                              },
                                              "start": {
                                                "column": 34,
                                                "line": 5
                                              }
                                            }
                                          }
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 36,
                                            "line": 5
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 5
                                          }
                                        }
                                      },
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Tags",
                                        "optional": false,
                                        "range": [
                                          146,
                                          150
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 25,
                                            "line": 5
                                          },
                                          "start": {
                                            "column": 21,
                                            "line": 5
                                          }
                                        }
                                      },
                                      "range": [
                                        146,
                                        161
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 36,
                                          "line": 5
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 5
                                        }
                                      }
                                    },
                                    {
                                      "type": "TSStringKeyword",
                                      "range": [
                                        164,
                                        170
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 45,
                                          "line": 5
                                        },
                                        "start": {
                                          "column": 39,
                                          "line": 5
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    146,
                                    170
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 5
                                    }
                                  }
                                },
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Tag",
                                  "optional": false,
                                  "range": [
                                    139,
                                    142
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 5
                                    }
                                  }
                                },
                                "nameType": null,
                                "readonly": true,
                                "typeAnnotation": {
                                  "type": "TSFunctionType",
                                  "params": [
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
                                            "line": 6
                                          },
                                          "start": {
                                            "column": 7,
                                            "line": 6
                                          }
                                        },
                                        "range": [
                                          182,
                                          218
                                        ],
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "range": [
                                              191,
                                              218
                                            ],
                                            "params": [
                                              {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "I",
                                                  "optional": false,
                                                  "range": [
                                                    192,
                                                    193
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 18,
                                                      "line": 6
                                                    },
                                                    "start": {
                                                      "column": 17,
                                                      "line": 6
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  192,
                                                  193
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 18,
                                                    "line": 6
                                                  },
                                                  "start": {
                                                    "column": 17,
                                                    "line": 6
                                                  }
                                                }
                                              },
                                              {
                                                "type": "TSTypeLiteral",
                                                "members": [
                                                  {
                                                    "type": "TSPropertySignature",
                                                    "computed": false,
                                                    "key": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "_tag",
                                                      "optional": false,
                                                      "range": [
                                                        206,
                                                        210
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 35,
                                                          "line": 6
                                                        },
                                                        "start": {
                                                          "column": 31,
                                                          "line": 6
                                                        }
                                                      }
                                                    },
                                                    "optional": false,
                                                    "readonly": true,
                                                    "static": false,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "loc": {
                                                        "end": {
                                                          "column": 40,
                                                          "line": 6
                                                        },
                                                        "start": {
                                                          "column": 35,
                                                          "line": 6
                                                        }
                                                      },
                                                      "range": [
                                                        210,
                                                        215
                                                      ],
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "Tag",
                                                          "optional": false,
                                                          "range": [
                                                            212,
                                                            215
                                                          ],
                                                          "loc": {
                                                            "end": {
                                                              "column": 40,
                                                              "line": 6
                                                            },
                                                            "start": {
                                                              "column": 37,
                                                              "line": 6
                                                            }
                                                          }
                                                        },
                                                        "range": [
                                                          212,
                                                          215
                                                        ],
                                                        "loc": {
                                                          "end": {
                                                            "column": 40,
                                                            "line": 6
                                                          },
                                                          "start": {
                                                            "column": 37,
                                                            "line": 6
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "range": [
                                                      197,
                                                      215
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 40,
                                                        "line": 6
                                                      },
                                                      "start": {
                                                        "column": 22,
                                                        "line": 6
                                                      }
                                                    }
                                                  }
                                                ],
                                                "range": [
                                                  195,
                                                  217
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 42,
                                                    "line": 6
                                                  },
                                                  "start": {
                                                    "column": 20,
                                                    "line": 6
                                                  }
                                                }
                                              }
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 43,
                                                "line": 6
                                              },
                                              "start": {
                                                "column": 16,
                                                "line": 6
                                              }
                                            }
                                          },
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Extract",
                                            "optional": false,
                                            "range": [
                                              184,
                                              191
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 16,
                                                "line": 6
                                              },
                                              "start": {
                                                "column": 9,
                                                "line": 6
                                              }
                                            }
                                          },
                                          "range": [
                                            184,
                                            218
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 43,
                                              "line": 6
                                            },
                                            "start": {
                                              "column": 9,
                                              "line": 6
                                            }
                                          }
                                        }
                                      },
                                      "range": [
                                        181,
                                        218
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 6
                                        },
                                        "start": {
                                          "column": 6,
                                          "line": 6
                                        }
                                      }
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 12,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 6,
                                        "line": 7
                                      }
                                    },
                                    "range": [
                                      226,
                                      232
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "range": [
                                        229,
                                        232
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 12,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 9,
                                          "line": 7
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    173,
                                    232
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 12,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 48,
                                      "line": 5
                                    }
                                  }
                                },
                                "range": [
                                  123,
                                  237
                                ],
                                "loc": {
                                  "end": {
                                    "column": 3,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 4
                                  }
                                }
                              },
                              {
                                "type": "TSMappedType",
                                "constraint": {
                                  "type": "TSTypeReference",
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "range": [
                                      266,
                                      292
                                    ],
                                    "params": [
                                      {
                                        "type": "TSTypeOperator",
                                        "operator": "keyof",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "P",
                                            "optional": false,
                                            "range": [
                                              273,
                                              274
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 40,
                                                "line": 8
                                              },
                                              "start": {
                                                "column": 39,
                                                "line": 8
                                              }
                                            }
                                          },
                                          "range": [
                                            273,
                                            274
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 40,
                                              "line": 8
                                            },
                                            "start": {
                                              "column": 39,
                                              "line": 8
                                            }
                                          }
                                        },
                                        "range": [
                                          267,
                                          274
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 40,
                                            "line": 8
                                          },
                                          "start": {
                                            "column": 33,
                                            "line": 8
                                          }
                                        }
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "range": [
                                            280,
                                            291
                                          ],
                                          "params": [
                                            {
                                              "type": "TSLiteralType",
                                              "literal": {
                                                "type": "Literal",
                                                "raw": "\"_tag\"",
                                                "value": "_tag",
                                                "range": [
                                                  281,
                                                  287
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 53,
                                                    "line": 8
                                                  },
                                                  "start": {
                                                    "column": 47,
                                                    "line": 8
                                                  }
                                                }
                                              },
                                              "range": [
                                                281,
                                                287
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 53,
                                                  "line": 8
                                                },
                                                "start": {
                                                  "column": 47,
                                                  "line": 8
                                                }
                                              }
                                            },
                                            {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "I",
                                                "optional": false,
                                                "range": [
                                                  289,
                                                  290
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 56,
                                                    "line": 8
                                                  },
                                                  "start": {
                                                    "column": 55,
                                                    "line": 8
                                                  }
                                                }
                                              },
                                              "range": [
                                                289,
                                                290
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 56,
                                                  "line": 8
                                                },
                                                "start": {
                                                  "column": 55,
                                                  "line": 8
                                                }
                                              }
                                            }
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 57,
                                              "line": 8
                                            },
                                            "start": {
                                              "column": 46,
                                              "line": 8
                                            }
                                          }
                                        },
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Tags",
                                          "optional": false,
                                          "range": [
                                            276,
                                            280
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 46,
                                              "line": 8
                                            },
                                            "start": {
                                              "column": 42,
                                              "line": 8
                                            }
                                          }
                                        },
                                        "range": [
                                          276,
                                          291
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 57,
                                            "line": 8
                                          },
                                          "start": {
                                            "column": 42,
                                            "line": 8
                                          }
                                        }
                                      }
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 58,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Exclude",
                                    "optional": false,
                                    "range": [
                                      259,
                                      266
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 32,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 25,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "range": [
                                    259,
                                    292
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 58,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 8
                                    }
                                  }
                                },
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Tag",
                                  "optional": false,
                                  "range": [
                                    252,
                                    255
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 8
                                    }
                                  }
                                },
                                "nameType": null,
                                "readonly": true,
                                "typeAnnotation": {
                                  "type": "TSNeverKeyword",
                                  "range": [
                                    295,
                                    300
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 66,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 61,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  240,
                                  302
                                ],
                                "loc": {
                                  "end": {
                                    "column": 68,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 8
                                  }
                                }
                              }
                            ],
                            "range": [
                              123,
                              302
                            ],
                            "loc": {
                              "end": {
                                "column": 68,
                                "line": 8
                              },
                              "start": {
                                "column": 12,
                                "line": 4
                              }
                            }
                          },
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "range": [
                              113,
                              114
                            ],
                            "loc": {
                              "end": {
                                "column": 3,
                                "line": 4
                              },
                              "start": {
                                "column": 2,
                                "line": 4
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            113,
                            302
                          ],
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 8
                            },
                            "start": {
                              "column": 2,
                              "line": 4
                            }
                          }
                        }
                      ]
                    },
                    "range": [
                      109,
                      332
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 11
                      },
                      "start": {
                        "column": 33,
                        "line": 3
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 3
                    },
                    "start": {
                      "column": 24,
                      "line": 3
                    }
                  },
                  "range": [
                    100,
                    103
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "range": [
                          101,
                          102
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 3
                          },
                          "start": {
                            "column": 25,
                            "line": 3
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        101,
                        102
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 3
                        },
                        "start": {
                          "column": 25,
                          "line": 3
                        }
                      }
                    }
                  ]
                },
                "range": [
                  100,
                  332
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 11
                  },
                  "start": {
                    "column": 24,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              90,
              332
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 11
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            90,
            332
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 11
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        76,
        333
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 11
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
        "name": "Value",
        "optional": false,
        "range": [
          340,
          345
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 13
          },
          "start": {
            "column": 5,
            "line": 13
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_tag",
                  "optional": false,
                  "range": [
                    350,
                    354
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 13
                    },
                    "start": {
                      "column": 15,
                      "line": 13
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
                      "column": 24,
                      "line": 13
                    },
                    "start": {
                      "column": 19,
                      "line": 13
                    }
                  },
                  "range": [
                    354,
                    359
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"A\"",
                      "value": "A",
                      "range": [
                        356,
                        359
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 13
                        },
                        "start": {
                          "column": 21,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      356,
                      359
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 13
                      },
                      "start": {
                        "column": 21,
                        "line": 13
                      }
                    }
                  }
                },
                "range": [
                  350,
                  360
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 13
                  },
                  "start": {
                    "column": 15,
                    "line": 13
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    361,
                    362
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 13
                    },
                    "start": {
                      "column": 26,
                      "line": 13
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
                      "column": 35,
                      "line": 13
                    },
                    "start": {
                      "column": 27,
                      "line": 13
                    }
                  },
                  "range": [
                    362,
                    370
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      364,
                      370
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 13
                      },
                      "start": {
                        "column": 29,
                        "line": 13
                      }
                    }
                  }
                },
                "range": [
                  361,
                  370
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 13
                  },
                  "start": {
                    "column": 26,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              348,
              372
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 13
              },
              "start": {
                "column": 13,
                "line": 13
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_tag",
                  "optional": false,
                  "range": [
                    377,
                    381
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 13
                    },
                    "start": {
                      "column": 42,
                      "line": 13
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
                      "column": 51,
                      "line": 13
                    },
                    "start": {
                      "column": 46,
                      "line": 13
                    }
                  },
                  "range": [
                    381,
                    386
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"B\"",
                      "value": "B",
                      "range": [
                        383,
                        386
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 13
                        },
                        "start": {
                          "column": 48,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      383,
                      386
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 13
                      },
                      "start": {
                        "column": 48,
                        "line": 13
                      }
                    }
                  }
                },
                "range": [
                  377,
                  387
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 13
                  },
                  "start": {
                    "column": 42,
                    "line": 13
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
                    388,
                    389
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 13
                    },
                    "start": {
                      "column": 53,
                      "line": 13
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
                      "line": 13
                    },
                    "start": {
                      "column": 54,
                      "line": 13
                    }
                  },
                  "range": [
                    389,
                    397
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      391,
                      397
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 13
                      },
                      "start": {
                        "column": 56,
                        "line": 13
                      }
                    }
                  }
                },
                "range": [
                  388,
                  397
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 13
                  },
                  "start": {
                    "column": 53,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              375,
              399
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 13
              },
              "start": {
                "column": 40,
                "line": 13
              }
            }
          }
        ],
        "range": [
          348,
          399
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 13
          },
          "start": {
            "column": 13,
            "line": 13
          }
        }
      },
      "range": [
        335,
        400
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "matcher",
            "optional": false,
            "range": [
              407,
              414
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "typeTags",
              "optional": false,
              "range": [
                417,
                425
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 14
                },
                "start": {
                  "column": 16,
                  "line": 14
                }
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                425,
                432
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "range": [
                      426,
                      431
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 14
                      },
                      "start": {
                        "column": 25,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    426,
                    431
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 14
                    },
                    "start": {
                      "column": 25,
                      "line": 14
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 14
                },
                "start": {
                  "column": 24,
                  "line": 14
                }
              }
            },
            "range": [
              417,
              434
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 14
              },
              "start": {
                "column": 16,
                "line": 14
              }
            }
          },
          "range": [
            407,
            434
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        401,
        435
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
                  "name": "A",
                  "optional": false,
                  "range": [
                    449,
                    450
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 17
                    },
                    "start": {
                      "column": 2,
                      "line": 17
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
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "range": [
                        459,
                        460
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 17
                        },
                        "start": {
                          "column": 12,
                          "line": 17
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        461,
                        462
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 17
                        },
                        "start": {
                          "column": 14,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      459,
                      462
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 17
                      },
                      "start": {
                        "column": 12,
                        "line": 17
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "range": [
                        453,
                        454
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 17
                        },
                        "start": {
                          "column": 6,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "range": [
                    452,
                    462
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 17
                    },
                    "start": {
                      "column": 5,
                      "line": 17
                    }
                  }
                },
                "range": [
                  449,
                  462
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 17
                  },
                  "start": {
                    "column": 2,
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
                  "name": "B",
                  "optional": false,
                  "range": [
                    466,
                    467
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 18
                    },
                    "start": {
                      "column": 2,
                      "line": 18
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
                    "type": "Literal",
                    "raw": "\"fail\"",
                    "value": "fail",
                    "range": [
                      476,
                      482
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 18
                      },
                      "start": {
                        "column": 12,
                        "line": 18
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "range": [
                        470,
                        471
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 18
                        },
                        "start": {
                          "column": 6,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "range": [
                    469,
                    482
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 18
                    },
                    "start": {
                      "column": 5,
                      "line": 18
                    }
                  }
                },
                "range": [
                  466,
                  482
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 18
                  },
                  "start": {
                    "column": 2,
                    "line": 18
                  }
                }
              }
            ],
            "range": [
              445,
              485
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 19
              },
              "start": {
                "column": 8,
                "line": 16
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "matcher",
          "optional": false,
          "range": [
            437,
            444
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "optional": false,
        "range": [
          437,
          486
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        437,
        487
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
                  "name": "A",
                  "optional": false,
                  "range": [
                    501,
                    502
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 22
                    },
                    "start": {
                      "column": 2,
                      "line": 22
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
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "range": [
                        511,
                        512
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 22
                        },
                        "start": {
                          "column": 12,
                          "line": 22
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        513,
                        514
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 22
                        },
                        "start": {
                          "column": 14,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      511,
                      514
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 22
                      },
                      "start": {
                        "column": 12,
                        "line": 22
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "range": [
                        505,
                        506
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 22
                        },
                        "start": {
                          "column": 6,
                          "line": 22
                        }
                      }
                    }
                  ],
                  "range": [
                    504,
                    514
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 22
                    },
                    "start": {
                      "column": 5,
                      "line": 22
                    }
                  }
                },
                "range": [
                  501,
                  514
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 22
                  },
                  "start": {
                    "column": 2,
                    "line": 22
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "range": [
                    518,
                    519
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 23
                    },
                    "start": {
                      "column": 2,
                      "line": 23
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
                    "type": "Literal",
                    "raw": "\"fail\"",
                    "value": "fail",
                    "range": [
                      528,
                      534
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 23
                      },
                      "start": {
                        "column": 12,
                        "line": 23
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "range": [
                        522,
                        523
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 23
                        },
                        "start": {
                          "column": 6,
                          "line": 23
                        }
                      }
                    }
                  ],
                  "range": [
                    521,
                    534
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 23
                    },
                    "start": {
                      "column": 5,
                      "line": 23
                    }
                  }
                },
                "range": [
                  518,
                  534
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 23
                  },
                  "start": {
                    "column": 2,
                    "line": 23
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    538,
                    539
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 24
                    },
                    "start": {
                      "column": 2,
                      "line": 24
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
                    "type": "Literal",
                    "raw": "\"fail\"",
                    "value": "fail",
                    "range": [
                      548,
                      554
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 24
                      },
                      "start": {
                        "column": 12,
                        "line": 24
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "range": [
                        542,
                        543
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 24
                        },
                        "start": {
                          "column": 6,
                          "line": 24
                        }
                      }
                    }
                  ],
                  "range": [
                    541,
                    554
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 24
                    },
                    "start": {
                      "column": 5,
                      "line": 24
                    }
                  }
                },
                "range": [
                  538,
                  554
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 24
                  },
                  "start": {
                    "column": 2,
                    "line": 24
                  }
                }
              }
            ],
            "range": [
              497,
              557
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 25
              },
              "start": {
                "column": 8,
                "line": 21
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "matcher",
          "optional": false,
          "range": [
            489,
            496
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "optional": false,
        "range": [
          489,
          558
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        489,
        559
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 21
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
      "line": 1
    }
  },
  "hashbang": null
}
```
