__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    324
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjectIterator",
        "optional": false,
        "range": [
          5,
          19
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
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
                  "column": 70,
                  "line": 1
                },
                "start": {
                  "column": 46,
                  "line": 1
                }
              },
              "range": [
                46,
                70
              ],
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
                      "name": "TObject",
                      "optional": false,
                      "range": [
                        62,
                        69
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 1
                        },
                        "start": {
                          "column": 62,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      62,
                      69
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 1
                      },
                      "start": {
                        "column": 62,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    56,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 1
                    },
                    "start": {
                      "column": 56,
                      "line": 1
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TObject",
                    "optional": false,
                    "range": [
                      48,
                      55
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 1
                      },
                      "start": {
                        "column": 48,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    48,
                    55
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 1
                    },
                    "start": {
                      "column": 48,
                      "line": 1
                    }
                  }
                },
                "range": [
                  48,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 1
                  },
                  "start": {
                    "column": 48,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              41,
              70
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 1
              },
              "start": {
                "column": 41,
                "line": 1
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
                  "column": 83,
                  "line": 1
                },
                "start": {
                  "column": 75,
                  "line": 1
                }
              },
              "range": [
                75,
                83
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  77,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 1
                  },
                  "start": {
                    "column": 77,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              72,
              83
            ],
            "loc": {
              "end": {
                "column": 83,
                "line": 1
              },
              "start": {
                "column": 72,
                "line": 1
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "collection",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 104,
                  "line": 1
                },
                "start": {
                  "column": 95,
                  "line": 1
                }
              },
              "range": [
                95,
                104
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TObject",
                  "optional": false,
                  "range": [
                    97,
                    104
                  ],
                  "loc": {
                    "end": {
                      "column": 104,
                      "line": 1
                    },
                    "start": {
                      "column": 97,
                      "line": 1
                    }
                  }
                },
                "range": [
                  97,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 104,
                    "line": 1
                  },
                  "start": {
                    "column": 97,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              85,
              104
            ],
            "loc": {
              "end": {
                "column": 104,
                "line": 1
              },
              "start": {
                "column": 85,
                "line": 1
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 116,
              "line": 1
            },
            "start": {
              "column": 106,
              "line": 1
            }
          },
          "range": [
            106,
            116
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "range": [
                109,
                116
              ],
              "loc": {
                "end": {
                  "column": 116,
                  "line": 1
                },
                "start": {
                  "column": 109,
                  "line": 1
                }
              }
            },
            "range": [
              109,
              116
            ],
            "loc": {
              "end": {
                "column": 116,
                "line": 1
              },
              "start": {
                "column": 109,
                "line": 1
              }
            }
          }
        },
        "range": [
          40,
          116
        ],
        "loc": {
          "end": {
            "column": 116,
            "line": 1
          },
          "start": {
            "column": 40,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 37,
            "line": 1
          },
          "start": {
            "column": 19,
            "line": 1
          }
        },
        "range": [
          19,
          37
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TObject",
              "optional": false,
              "range": [
                20,
                27
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              20,
              27
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 20,
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
              "name": "TResult",
              "optional": false,
              "range": [
                29,
                36
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 1
                },
                "start": {
                  "column": 29,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              29,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 29,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        117
      ],
      "loc": {
        "end": {
          "column": 117,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          142,
          281
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mapValues",
              "optional": false,
              "range": [
                148,
                157
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 66,
                      "line": 4
                    },
                    "start": {
                      "column": 44,
                      "line": 4
                    }
                  },
                  "range": [
                    188,
                    210
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
                            190,
                            191
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 4
                            },
                            "start": {
                              "column": 46,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          190,
                          191
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 4
                          },
                          "start": {
                            "column": 46,
                            "line": 4
                          }
                        }
                      },
                      {
                        "type": "TSNullKeyword",
                        "range": [
                          194,
                          198
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 4
                          },
                          "start": {
                            "column": 50,
                            "line": 4
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          201,
                          210
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 4
                          },
                          "start": {
                            "column": 57,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "range": [
                      190,
                      210
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 4
                      },
                      "start": {
                        "column": 46,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  185,
                  210
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 4
                  },
                  "start": {
                    "column": 41,
                    "line": 4
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 104,
                      "line": 4
                    },
                    "start": {
                      "column": 76,
                      "line": 4
                    }
                  },
                  "range": [
                    220,
                    248
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        236,
                        248
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
                              237,
                              238
                            ],
                            "loc": {
                              "end": {
                                "column": 94,
                                "line": 4
                              },
                              "start": {
                                "column": 93,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            237,
                            238
                          ],
                          "loc": {
                            "end": {
                              "column": 94,
                              "line": 4
                            },
                            "start": {
                              "column": 93,
                              "line": 4
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TResult",
                            "optional": false,
                            "range": [
                              240,
                              247
                            ],
                            "loc": {
                              "end": {
                                "column": 103,
                                "line": 4
                              },
                              "start": {
                                "column": 96,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            240,
                            247
                          ],
                          "loc": {
                            "end": {
                              "column": 103,
                              "line": 4
                            },
                            "start": {
                              "column": 96,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 104,
                          "line": 4
                        },
                        "start": {
                          "column": 92,
                          "line": 4
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ObjectIterator",
                      "optional": false,
                      "range": [
                        222,
                        236
                      ],
                      "loc": {
                        "end": {
                          "column": 92,
                          "line": 4
                        },
                        "start": {
                          "column": 78,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      222,
                      248
                    ],
                    "loc": {
                      "end": {
                        "column": 104,
                        "line": 4
                      },
                      "start": {
                        "column": 78,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  212,
                  248
                ],
                "loc": {
                  "end": {
                    "column": 104,
                    "line": 4
                  },
                  "start": {
                    "column": 68,
                    "line": 4
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 134,
                  "line": 4
                },
                "start": {
                  "column": 105,
                  "line": 4
                }
              },
              "range": [
                249,
                278
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
                        265,
                        266
                      ],
                      "loc": {
                        "end": {
                          "column": 122,
                          "line": 4
                        },
                        "start": {
                          "column": 121,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      265,
                      266
                    ],
                    "loc": {
                      "end": {
                        "column": 122,
                        "line": 4
                      },
                      "start": {
                        "column": 121,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    259,
                    266
                  ],
                  "loc": {
                    "end": {
                      "column": 122,
                      "line": 4
                    },
                    "start": {
                      "column": 115,
                      "line": 4
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    254,
                    255
                  ],
                  "loc": {
                    "end": {
                      "column": 111,
                      "line": 4
                    },
                    "start": {
                      "column": 110,
                      "line": 4
                    }
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TResult",
                    "optional": false,
                    "range": [
                      269,
                      276
                    ],
                    "loc": {
                      "end": {
                        "column": 132,
                        "line": 4
                      },
                      "start": {
                        "column": 125,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    269,
                    276
                  ],
                  "loc": {
                    "end": {
                      "column": 132,
                      "line": 4
                    },
                    "start": {
                      "column": 125,
                      "line": 4
                    }
                  }
                },
                "range": [
                  251,
                  278
                ],
                "loc": {
                  "end": {
                    "column": 134,
                    "line": 4
                  },
                  "start": {
                    "column": 107,
                    "line": 4
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              },
              "range": [
                157,
                184
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSObjectKeyword",
                    "range": [
                      168,
                      174
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 4
                      },
                      "start": {
                        "column": 24,
                        "line": 4
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
                      158,
                      159
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
                  "out": false,
                  "range": [
                    158,
                    174
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 4
                    },
                    "start": {
                      "column": 14,
                      "line": 4
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
                    "name": "TResult",
                    "optional": false,
                    "range": [
                      176,
                      183
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 4
                      },
                      "start": {
                        "column": 32,
                        "line": 4
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    176,
                    183
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 4
                    },
                    "start": {
                      "column": 32,
                      "line": 4
                    }
                  }
                }
              ]
            },
            "range": [
              148,
              279
            ],
            "loc": {
              "end": {
                "column": 135,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 23,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LoDashStatic",
        "optional": false,
        "range": [
          129,
          141
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        119,
        281
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              },
              "range": [
                297,
                311
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LoDashStatic",
                  "optional": false,
                  "range": [
                    299,
                    311
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 6
                    },
                    "start": {
                      "column": 17,
                      "line": 6
                    }
                  }
                },
                "range": [
                  299,
                  311
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 6
                  },
                  "start": {
                    "column": 17,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              296,
              311
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 6
              },
              "start": {
                "column": 14,
                "line": 6
              }
            }
          },
          "init": null,
          "range": [
            296,
            311
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 6
            },
            "start": {
              "column": 14,
              "line": 6
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        282,
        312
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "_",
        "optional": false,
        "range": [
          322,
          323
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
          }
        }
      },
      "range": [
        313,
        324
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 11,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    37
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        37
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "INDEX_FIELD",
              "optional": false,
              "range": [
                13,
                24
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "'__INDEX'",
              "value": "__INDEX",
              "range": [
                27,
                36
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 1
                },
                "start": {
                  "column": 27,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          7,
          37
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 37,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 37,
      "line": 1
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
