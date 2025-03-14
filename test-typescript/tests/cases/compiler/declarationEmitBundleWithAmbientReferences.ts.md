__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    200
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              34,
              111
            ],
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "declare": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Result",
                "optional": false,
                "range": [
                  46,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 2
                  },
                  "start": {
                    "column": 16,
                    "line": 2
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "range": [
                            76,
                            77
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 2
                            },
                            "start": {
                              "column": 46,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          76,
                          77
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 2
                          },
                          "start": {
                            "column": 46,
                            "line": 2
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            87,
                            90
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "range": [
                                  88,
                                  89
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 58,
                                    "line": 2
                                  }
                                }
                              },
                              "range": [
                                88,
                                89
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 2
                                },
                                "start": {
                                  "column": 58,
                                  "line": 2
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 2
                            },
                            "start": {
                              "column": 57,
                              "line": 2
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Failure",
                          "optional": false,
                          "range": [
                            80,
                            87
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 2
                            },
                            "start": {
                              "column": 50,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          80,
                          90
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 2
                          },
                          "start": {
                            "column": 50,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "range": [
                      76,
                      90
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 2
                      },
                      "start": {
                        "column": 46,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSIntersectionType",
                    "types": [
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
                              "column": 66,
                              "line": 2
                            },
                            "start": {
                              "column": 65,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          95,
                          96
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 2
                          },
                          "start": {
                            "column": 65,
                            "line": 2
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            106,
                            109
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
                                  107,
                                  108
                                ],
                                "loc": {
                                  "end": {
                                    "column": 78,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 77,
                                    "line": 2
                                  }
                                }
                              },
                              "range": [
                                107,
                                108
                              ],
                              "loc": {
                                "end": {
                                  "column": 78,
                                  "line": 2
                                },
                                "start": {
                                  "column": 77,
                                  "line": 2
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 79,
                              "line": 2
                            },
                            "start": {
                              "column": 76,
                              "line": 2
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Success",
                          "optional": false,
                          "range": [
                            99,
                            106
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 2
                            },
                            "start": {
                              "column": 69,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          99,
                          109
                        ],
                        "loc": {
                          "end": {
                            "column": 79,
                            "line": 2
                          },
                          "start": {
                            "column": 69,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "range": [
                      95,
                      109
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 2
                      },
                      "start": {
                        "column": 65,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  75,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 2
                  },
                  "start": {
                    "column": 45,
                    "line": 2
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 2
                  },
                  "start": {
                    "column": 22,
                    "line": 2
                  }
                },
                "range": [
                  52,
                  72
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
                        "name": "Error",
                        "optional": false,
                        "range": [
                          63,
                          68
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 2
                          },
                          "start": {
                            "column": 33,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        63,
                        68
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 2
                        },
                        "start": {
                          "column": 33,
                          "line": 2
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "range": [
                        53,
                        54
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 2
                        },
                        "start": {
                          "column": 23,
                          "line": 2
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      53,
                      68
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 2
                      },
                      "start": {
                        "column": 23,
                        "line": 2
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
                      "name": "T",
                      "optional": false,
                      "range": [
                        70,
                        71
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 2
                        },
                        "start": {
                          "column": 40,
                          "line": 2
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      70,
                      71
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 2
                      },
                      "start": {
                        "column": 40,
                        "line": 2
                      }
                    }
                  }
                ]
              },
              "range": [
                41,
                111
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 81,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              116,
              161
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  158,
                  161
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 3
                  },
                  "start": {
                    "column": 46,
                    "line": 3
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Failure",
                "optional": false,
                "range": [
                  133,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 21,
                    "line": 3
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 3
                  },
                  "start": {
                    "column": 28,
                    "line": 3
                  }
                },
                "range": [
                  140,
                  157
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
                        "name": "Error",
                        "optional": false,
                        "range": [
                          151,
                          156
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 3
                          },
                          "start": {
                            "column": 39,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        151,
                        156
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 3
                        },
                        "start": {
                          "column": 39,
                          "line": 3
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "range": [
                        141,
                        142
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 3
                        },
                        "start": {
                          "column": 29,
                          "line": 3
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      141,
                      156
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 3
                      },
                      "start": {
                        "column": 29,
                        "line": 3
                      }
                    }
                  }
                ]
              },
              "range": [
                123,
                161
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 49,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              166,
              197
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  194,
                  197
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 4
                  },
                  "start": {
                    "column": 32,
                    "line": 4
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Success",
                "optional": false,
                "range": [
                  183,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 4
                  },
                  "start": {
                    "column": 21,
                    "line": 4
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 4
                  },
                  "start": {
                    "column": 28,
                    "line": 4
                  }
                },
                "range": [
                  190,
                  193
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
                        191,
                        192
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 4
                        },
                        "start": {
                          "column": 29,
                          "line": 4
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      191,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 4
                      },
                      "start": {
                        "column": 29,
                        "line": 4
                      }
                    }
                  }
                ]
              },
              "range": [
                173,
                197
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 35,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          28,
          199
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 28,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"lib/result\"",
        "value": "lib/result",
        "range": [
          15,
          27
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "range": [
        0,
        199
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
      "column": 0,
      "line": 6
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
    75
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"lib/result\"",
        "value": "lib/result",
        "range": [
          23,
          35
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 1
          },
          "start": {
            "column": 23,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Result",
            "optional": false,
            "range": [
              9,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Result",
            "optional": false,
            "range": [
              9,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "range": [
            9,
            15
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        36
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        38,
        74
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "range": [
            50,
            51
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 3
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              63,
              73
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "range": [
                    64,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 3
                    },
                    "start": {
                      "column": 26,
                      "line": 3
                    }
                  }
                },
                "range": [
                  64,
                  69
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 3
                  },
                  "start": {
                    "column": 26,
                    "line": 3
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
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
                      "column": 34,
                      "line": 3
                    },
                    "start": {
                      "column": 33,
                      "line": 3
                    }
                  }
                },
                "range": [
                  71,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 3
                  },
                  "start": {
                    "column": 33,
                    "line": 3
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
              },
              "start": {
                "column": 25,
                "line": 3
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Result",
            "optional": false,
            "range": [
              57,
              63
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 3
              },
              "start": {
                "column": 19,
                "line": 3
              }
            }
          },
          "range": [
            57,
            73
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 3
            },
            "start": {
              "column": 19,
              "line": 3
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 16,
              "line": 3
            },
            "start": {
              "column": 13,
              "line": 3
            }
          },
          "range": [
            51,
            54
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
                  52,
                  53
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
                52,
                53
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
            }
          ]
        },
        "range": [
          45,
          74
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 36,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 4
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
    131
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"src/datastore_result\"",
        "value": "src/datastore_result",
        "range": [
          33,
          55
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 1
          },
          "start": {
            "column": 33,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "DatastoreResult",
            "optional": false,
            "range": [
              12,
              27
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            7,
            27
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        56
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        58,
        130
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
              "name": "build",
              "optional": false,
              "range": [
                71,
                76
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
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        122,
                        126
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 4
                        },
                        "start": {
                          "column": 8,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      115,
                      127
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 4
                      },
                      "start": {
                        "column": 1,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  112,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 5
                  },
                  "start": {
                    "column": 54,
                    "line": 3
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 3
                  },
                  "start": {
                    "column": 23,
                    "line": 3
                  }
                },
                "range": [
                  81,
                  108
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      100,
                      108
                    ],
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          101,
                          107
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 3
                          },
                          "start": {
                            "column": 43,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 3
                      },
                      "start": {
                        "column": 42,
                        "line": 3
                      }
                    }
                  },
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DatastoreResult",
                      "optional": false,
                      "range": [
                        83,
                        98
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 3
                        },
                        "start": {
                          "column": 25,
                          "line": 3
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        99,
                        100
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 3
                        },
                        "start": {
                          "column": 41,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      83,
                      100
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 3
                      },
                      "start": {
                        "column": 25,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    83,
                    108
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 3
                    },
                    "start": {
                      "column": 25,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                79,
                129
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 3
                }
              }
            },
            "range": [
              71,
              129
            ],
            "loc": {
              "end": {
                "column": 1,
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
          65,
          130
        ],
        "loc": {
          "end": {
            "column": 2,
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
          "column": 2,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
