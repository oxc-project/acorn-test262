__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    171
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        170
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            60,
            170
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "concat",
                "optional": false,
                "range": [
                  98,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 2
                  },
                  "start": {
                    "column": 0,
                    "line": 2
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  104,
                  140
                ],
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "RestElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "items",
                      "optional": false,
                      "range": [
                        123,
                        128
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
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 2
                        },
                        "start": {
                          "column": 30,
                          "line": 2
                        }
                      },
                      "range": [
                        128,
                        133
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              130,
                              131
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 2
                              },
                              "start": {
                                "column": 32,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            130,
                            131
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 2
                            },
                            "start": {
                              "column": 32,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          130,
                          133
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 2
                          },
                          "start": {
                            "column": 32,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      120,
                      133
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 2
                      },
                      "start": {
                        "column": 22,
                        "line": 2
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 2
                    },
                    "start": {
                      "column": 36,
                      "line": 2
                    }
                  },
                  "range": [
                    134,
                    139
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
                          136,
                          137
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 2
                          },
                          "start": {
                            "column": 38,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        136,
                        137
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 2
                        },
                        "start": {
                          "column": 38,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      136,
                      139
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 2
                      },
                      "start": {
                        "column": 38,
                        "line": 2
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 2
                    },
                    "start": {
                      "column": 6,
                      "line": 2
                    }
                  },
                  "range": [
                    104,
                    119
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "constraint": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              115,
                              116
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 2
                              },
                              "start": {
                                "column": 17,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            115,
                            116
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 2
                            },
                            "start": {
                              "column": 17,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          115,
                          118
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 2
                          },
                          "start": {
                            "column": 17,
                            "line": 2
                          }
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          105,
                          106
                        ],
                        "loc": {
                          "end": {
                            "column": 8,
                            "line": 2
                          },
                          "start": {
                            "column": 7,
                            "line": 2
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        105,
                        118
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 2
                        },
                        "start": {
                          "column": 7,
                          "line": 2
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 2
                  },
                  "start": {
                    "column": 6,
                    "line": 2
                  }
                }
              },
              "range": [
                98,
                140
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 2
                },
                "start": {
                  "column": 0,
                  "line": 2
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
                "name": "concat",
                "optional": false,
                "range": [
                  141,
                  147
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 3
                  },
                  "start": {
                    "column": 0,
                    "line": 3
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  147,
                  168
                ],
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "RestElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "items",
                      "optional": false,
                      "range": [
                        151,
                        156
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 3
                        },
                        "start": {
                          "column": 10,
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
                          "column": 20,
                          "line": 3
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      },
                      "range": [
                        156,
                        161
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
                              158,
                              159
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
                            158,
                            159
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
                          158,
                          161
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 3
                          },
                          "start": {
                            "column": 17,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      148,
                      161
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 3
                      },
                      "start": {
                        "column": 7,
                        "line": 3
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 3
                    },
                    "start": {
                      "column": 21,
                      "line": 3
                    }
                  },
                  "range": [
                    162,
                    167
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
                          164,
                          165
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 3
                          },
                          "start": {
                            "column": 23,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        164,
                        165
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 3
                        },
                        "start": {
                          "column": 23,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      164,
                      167
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 3
                      },
                      "start": {
                        "column": 23,
                        "line": 3
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 3
                  },
                  "start": {
                    "column": 6,
                    "line": 3
                  }
                }
              },
              "range": [
                141,
                168
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 3
                },
                "start": {
                  "column": 0,
                  "line": 3
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 60,
              "line": 1
            }
          }
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObservableArray",
          "optional": false,
          "range": [
            21,
            36
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        },
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "range": [
                51,
                56
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 1
                },
                "start": {
                  "column": 51,
                  "line": 1
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                56,
                59
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
                      57,
                      58
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 1
                      },
                      "start": {
                        "column": 57,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    57,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 1
                    },
                    "start": {
                      "column": 57,
                      "line": 1
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 1
                },
                "start": {
                  "column": 56,
                  "line": 1
                }
              }
            },
            "range": [
              51,
              59
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 1
              },
              "start": {
                "column": 51,
                "line": 1
              }
            }
          }
        ],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 39,
              "line": 1
            },
            "start": {
              "column": 36,
              "line": 1
            }
          },
          "range": [
            36,
            39
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
                  37,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 1
                  },
                  "start": {
                    "column": 37,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                37,
                38
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 1
                },
                "start": {
                  "column": 37,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          170
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
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
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
