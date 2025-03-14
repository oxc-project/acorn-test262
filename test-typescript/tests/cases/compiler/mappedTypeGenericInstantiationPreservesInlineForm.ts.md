__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    229
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        22,
        125
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
              "name": "test1",
              "optional": false,
              "range": [
                35,
                40
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  123,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 5
                  },
                  "start": {
                    "column": 6,
                    "line": 5
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
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 5
                      },
                      "start": {
                        "column": 55,
                        "line": 3
                      }
                    },
                    "range": [
                      77,
                      118
                    ],
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "constraint": {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              105,
                              108
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
                                    106,
                                    107
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 4
                                    }
                                  }
                                },
                                "range": [
                                  106,
                                  107
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 4
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 4
                              },
                              "start": {
                                "column": 24,
                                "line": 4
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Required",
                            "optional": false,
                            "range": [
                              97,
                              105
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 4
                              },
                              "start": {
                                "column": 16,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            97,
                            108
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 4
                            },
                            "start": {
                              "column": 16,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          91,
                          108
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 4
                          },
                          "start": {
                            "column": 10,
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
                          86,
                          87
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 4
                          },
                          "start": {
                            "column": 5,
                            "line": 4
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
                            "name": "K",
                            "optional": false,
                            "range": [
                              113,
                              114
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 4
                              },
                              "start": {
                                "column": 32,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            113,
                            114
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 4
                            },
                            "start": {
                              "column": 32,
                              "line": 4
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
                              111,
                              112
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 4
                              },
                              "start": {
                                "column": 30,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            111,
                            112
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 4
                            },
                            "start": {
                              "column": 30,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          111,
                          115
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 4
                          },
                          "start": {
                            "column": 30,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        79,
                        118
                      ],
                      "loc": {
                        "end": {
                          "column": 1,
                          "line": 5
                        },
                        "start": {
                          "column": 57,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    71,
                    118
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 5
                    },
                    "start": {
                      "column": 49,
                      "line": 3
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 3
                  },
                  "start": {
                    "column": 21,
                    "line": 3
                  }
                },
                "range": [
                  43,
                  70
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "default": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          54,
                          69
                        ],
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              55,
                              61
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 3
                              },
                              "start": {
                                "column": 33,
                                "line": 3
                              }
                            }
                          },
                          {
                            "type": "TSNeverKeyword",
                            "range": [
                              63,
                              68
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 3
                              },
                              "start": {
                                "column": 41,
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
                            "column": 32,
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
                          48,
                          54
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 3
                          },
                          "start": {
                            "column": 26,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        48,
                        69
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 3
                        },
                        "start": {
                          "column": 26,
                          "line": 3
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
                        44,
                        45
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 3
                        },
                        "start": {
                          "column": 22,
                          "line": 3
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      44,
                      69
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 3
                      },
                      "start": {
                        "column": 22,
                        "line": 3
                      }
                    }
                  }
                ]
              },
              "range": [
                43,
                125
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 3
                }
              }
            },
            "range": [
              35,
              125
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 5
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          29,
          125
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 8,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        127,
        227
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            225,
            227
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 9
            },
            "start": {
              "column": 3,
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
          "name": "test2",
          "optional": false,
          "range": [
            143,
            148
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 7
            },
            "start": {
              "column": 16,
              "line": 7
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "schema",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 9
                },
                "start": {
                  "column": 55,
                  "line": 7
                }
              },
              "range": [
                182,
                223
              ],
              "typeAnnotation": {
                "type": "TSMappedType",
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        210,
                        213
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
                              211,
                              212
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 8
                              },
                              "start": {
                                "column": 25,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            211,
                            212
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 8
                            },
                            "start": {
                              "column": 25,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 8
                        },
                        "start": {
                          "column": 24,
                          "line": 8
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Required",
                      "optional": false,
                      "range": [
                        202,
                        210
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 8
                        },
                        "start": {
                          "column": 16,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      202,
                      213
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 8
                      },
                      "start": {
                        "column": 16,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    196,
                    213
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 8
                    },
                    "start": {
                      "column": 10,
                      "line": 8
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    191,
                    192
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 8
                    },
                    "start": {
                      "column": 5,
                      "line": 8
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
                      "name": "K",
                      "optional": false,
                      "range": [
                        218,
                        219
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 8
                        },
                        "start": {
                          "column": 32,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      218,
                      219
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 8
                      },
                      "start": {
                        "column": 32,
                        "line": 8
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
                        216,
                        217
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 8
                        },
                        "start": {
                          "column": 30,
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
                        "column": 31,
                        "line": 8
                      },
                      "start": {
                        "column": 30,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    216,
                    220
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 8
                    },
                    "start": {
                      "column": 30,
                      "line": 8
                    }
                  }
                },
                "range": [
                  184,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 9
                  },
                  "start": {
                    "column": 57,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              176,
              223
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 9
              },
              "start": {
                "column": 49,
                "line": 7
              }
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 48,
              "line": 7
            },
            "start": {
              "column": 21,
              "line": 7
            }
          },
          "range": [
            148,
            175
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    159,
                    174
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        160,
                        166
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 7
                        },
                        "start": {
                          "column": 33,
                          "line": 7
                        }
                      }
                    },
                    {
                      "type": "TSNeverKeyword",
                      "range": [
                        168,
                        173
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 7
                        },
                        "start": {
                          "column": 41,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 7
                    },
                    "start": {
                      "column": 32,
                      "line": 7
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "range": [
                    153,
                    159
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 7
                    },
                    "start": {
                      "column": 26,
                      "line": 7
                    }
                  }
                },
                "range": [
                  153,
                  174
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 7
                  },
                  "start": {
                    "column": 26,
                    "line": 7
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
                  149,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 7
                  },
                  "start": {
                    "column": 22,
                    "line": 7
                  }
                }
              },
              "out": false,
              "range": [
                149,
                174
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 7
                },
                "start": {
                  "column": 22,
                  "line": 7
                }
              }
            }
          ]
        },
        "range": [
          134,
          227
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 5,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "EmptyStatement",
      "range": [
        227,
        228
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 9
        },
        "start": {
          "column": 5,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
