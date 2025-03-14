__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    322
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          26,
          28
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 28,
            "line": 1
          },
          "start": {
            "column": 26,
            "line": 1
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EmberObject",
        "optional": false,
        "range": [
          14,
          25
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        28
      ],
      "loc": {
        "end": {
          "column": 28,
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
        "name": "PersonType",
        "optional": false,
        "range": [
          35,
          45
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                56,
                76
              ],
              "params": [
                {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EmberObject",
                    "optional": false,
                    "range": [
                      64,
                      75
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 3
                      },
                      "start": {
                        "column": 34,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    57,
                    75
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 3
                    },
                    "start": {
                      "column": 27,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 3
                },
                "start": {
                  "column": 26,
                  "line": 3
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Readonly",
              "optional": false,
              "range": [
                48,
                56
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              }
            },
            "range": [
              48,
              76
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 3
              },
              "start": {
                "column": 18,
                "line": 3
              }
            }
          },
          {
            "type": "TSConstructorType",
            "abstract": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "properties",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 4
                    },
                    "start": {
                      "column": 19,
                      "line": 4
                    }
                  },
                  "range": [
                    98,
                    106
                  ],
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "range": [
                      100,
                      106
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 4
                      },
                      "start": {
                        "column": 21,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  87,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 7
                },
                "start": {
                  "column": 29,
                  "line": 4
                }
              },
              "range": [
                108,
                175
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
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
                          "name": "firstName",
                          "optional": false,
                          "range": [
                            117,
                            126
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
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
                              "column": 21,
                              "line": 5
                            },
                            "start": {
                              "column": 13,
                              "line": 5
                            }
                          },
                          "range": [
                            126,
                            134
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              128,
                              134
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 5
                              },
                              "start": {
                                "column": 15,
                                "line": 5
                              }
                            }
                          }
                        },
                        "range": [
                          117,
                          135
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
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
                          "name": "lastName",
                          "optional": false,
                          "range": [
                            140,
                            148
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
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
                              "column": 20,
                              "line": 6
                            },
                            "start": {
                              "column": 12,
                              "line": 6
                            }
                          },
                          "range": [
                            148,
                            156
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              150,
                              156
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 6
                              },
                              "start": {
                                "column": 14,
                                "line": 6
                              }
                            }
                          }
                        },
                        "range": [
                          140,
                          157
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
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
                      111,
                      161
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 7
                      },
                      "start": {
                        "column": 32,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EmberObject",
                      "optional": false,
                      "range": [
                        164,
                        175
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 7
                        },
                        "start": {
                          "column": 6,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      164,
                      175
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 7
                      },
                      "start": {
                        "column": 6,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  111,
                  175
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 7
                  },
                  "start": {
                    "column": 32,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              82,
              175
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 7
              },
              "start": {
                "column": 3,
                "line": 4
              }
            }
          },
          {
            "type": "TSConstructorType",
            "abstract": false,
            "params": [
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "range": [
                    190,
                    194
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 8
                    },
                    "start": {
                      "column": 11,
                      "line": 8
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 8
                    },
                    "start": {
                      "column": 15,
                      "line": 8
                    }
                  },
                  "range": [
                    194,
                    201
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        196,
                        199
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 8
                        },
                        "start": {
                          "column": 17,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      196,
                      201
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 8
                      },
                      "start": {
                        "column": 17,
                        "line": 8
                      }
                    }
                  }
                },
                "range": [
                  187,
                  201
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 11
                },
                "start": {
                  "column": 24,
                  "line": 8
                }
              },
              "range": [
                203,
                270
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
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
                          "name": "firstName",
                          "optional": false,
                          "range": [
                            212,
                            221
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 9
                            },
                            "start": {
                              "column": 4,
                              "line": 9
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
                              "line": 9
                            },
                            "start": {
                              "column": 13,
                              "line": 9
                            }
                          },
                          "range": [
                            221,
                            229
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              223,
                              229
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 9
                              },
                              "start": {
                                "column": 15,
                                "line": 9
                              }
                            }
                          }
                        },
                        "range": [
                          212,
                          230
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 9
                          },
                          "start": {
                            "column": 4,
                            "line": 9
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "lastName",
                          "optional": false,
                          "range": [
                            235,
                            243
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 10
                            },
                            "start": {
                              "column": 4,
                              "line": 10
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
                              "column": 20,
                              "line": 10
                            },
                            "start": {
                              "column": 12,
                              "line": 10
                            }
                          },
                          "range": [
                            243,
                            251
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              245,
                              251
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 10
                              },
                              "start": {
                                "column": 14,
                                "line": 10
                              }
                            }
                          }
                        },
                        "range": [
                          235,
                          252
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 10
                          },
                          "start": {
                            "column": 4,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "range": [
                      206,
                      256
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 11
                      },
                      "start": {
                        "column": 27,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EmberObject",
                      "optional": false,
                      "range": [
                        259,
                        270
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 11
                        },
                        "start": {
                          "column": 6,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      259,
                      270
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 11
                      },
                      "start": {
                        "column": 6,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  206,
                  270
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 11
                  },
                  "start": {
                    "column": 27,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              182,
              270
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 11
              },
              "start": {
                "column": 3,
                "line": 8
              }
            }
          }
        ],
        "range": [
          48,
          271
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 11
          },
          "start": {
            "column": 18,
            "line": 3
          }
        }
      },
      "range": [
        30,
        272
      ],
      "loc": {
        "end": {
          "column": 19,
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
        "name": "PersonPrototype",
        "optional": false,
        "range": [
          279,
          294
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 13
          },
          "start": {
            "column": 5,
            "line": 13
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"prototype\"",
            "value": "prototype",
            "range": [
              308,
              319
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 13
              },
              "start": {
                "column": 34,
                "line": 13
              }
            }
          },
          "range": [
            308,
            319
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 13
            },
            "start": {
              "column": 34,
              "line": 13
            }
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PersonType",
            "optional": false,
            "range": [
              297,
              307
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 13
              },
              "start": {
                "column": 23,
                "line": 13
              }
            }
          },
          "range": [
            297,
            307
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 13
            },
            "start": {
              "column": 23,
              "line": 13
            }
          }
        },
        "range": [
          297,
          320
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 13
          },
          "start": {
            "column": 23,
            "line": 13
          }
        }
      },
      "range": [
        274,
        321
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 13
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
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
