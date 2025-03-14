__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    239
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          19,
          54
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                25,
                28
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 17,
                      "line": 2
                    },
                    "start": {
                      "column": 9,
                      "line": 2
                    }
                  },
                  "range": [
                    30,
                    38
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      32,
                      38
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 2
                      },
                      "start": {
                        "column": 11,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  29,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              },
              "range": [
                39,
                51
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    46,
                    51
                  ],
                  "params": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            47,
                            48
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 2
                            },
                            "start": {
                              "column": 26,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          47,
                          48
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 2
                          },
                          "start": {
                            "column": 26,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        47,
                        50
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 2
                        },
                        "start": {
                          "column": 26,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 2
                    },
                    "start": {
                      "column": 25,
                      "line": 2
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Query",
                  "optional": false,
                  "range": [
                    41,
                    46
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 2
                    },
                    "start": {
                      "column": 20,
                      "line": 2
                    }
                  }
                },
                "range": [
                  41,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 2
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              }
            },
            "static": false,
            "range": [
              25,
              52
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Query",
        "optional": false,
        "range": [
          10,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        },
        "range": [
          15,
          18
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
                16,
                17
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              16,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        54
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "from",
        "optional": false,
        "range": [
          66,
          70
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
                "column": 29,
                "line": 5
              },
              "start": {
                "column": 20,
                "line": 5
              }
            },
            "range": [
              77,
              86
            ],
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "range": [
                79,
                86
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 5
                },
                "start": {
                  "column": 22,
                  "line": 5
                }
              }
            }
          },
          "range": [
            74,
            86
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 5
            },
            "start": {
              "column": 17,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 40,
            "line": 5
          },
          "start": {
            "column": 30,
            "line": 5
          }
        },
        "range": [
          87,
          97
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              94,
              97
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
                    95,
                    96
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
                  95,
                  96
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
              }
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 5
              },
              "start": {
                "column": 37,
                "line": 5
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Query",
            "optional": false,
            "range": [
              89,
              94
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 5
              },
              "start": {
                "column": 32,
                "line": 5
              }
            }
          },
          "range": [
            89,
            97
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 5
            },
            "start": {
              "column": 32,
              "line": 5
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 5
          },
          "start": {
            "column": 13,
            "line": 5
          }
        },
        "range": [
          70,
          73
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
                71,
                72
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              71,
              72
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 5
              },
              "start": {
                "column": 14,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        57,
        98
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 5
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "range": [
                226,
                235
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "range": [
              219,
              236
            ],
            "loc": {
              "end": {
                "column": 21,
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
          213,
          238
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 37,
            "line": 6
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "from",
        "optional": false,
        "range": [
          185,
          189
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
          }
        }
      },
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
                "column": 25,
                "line": 6
              },
              "start": {
                "column": 20,
                "line": 6
              }
            },
            "range": [
              196,
              201
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                198,
                201
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 6
                },
                "start": {
                  "column": 22,
                  "line": 6
                }
              }
            }
          },
          "range": [
            193,
            201
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 6
            },
            "start": {
              "column": 17,
              "line": 6
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 36,
            "line": 6
          },
          "start": {
            "column": 26,
            "line": 6
          }
        },
        "range": [
          202,
          212
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              209,
              212
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
                    210,
                    211
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 6
                    },
                    "start": {
                      "column": 34,
                      "line": 6
                    }
                  }
                },
                "range": [
                  210,
                  211
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 6
                  },
                  "start": {
                    "column": 34,
                    "line": 6
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 6
              },
              "start": {
                "column": 33,
                "line": 6
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Query",
            "optional": false,
            "range": [
              204,
              209
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 6
              },
              "start": {
                "column": 28,
                "line": 6
              }
            }
          },
          "range": [
            204,
            212
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 6
            },
            "start": {
              "column": 28,
              "line": 6
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 6
          },
          "start": {
            "column": 13,
            "line": 6
          }
        },
        "range": [
          189,
          192
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
                190,
                191
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 14,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              190,
              191
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 6
              },
              "start": {
                "column": 14,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        176,
        238
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
