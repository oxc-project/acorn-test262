__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    151
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        95
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "usePrivateType",
          "optional": false,
          "range": [
            24,
            38
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 1
            },
            "start": {
              "column": 24,
              "line": 1
            }
          }
        },
        "params": [
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "range": [
                63,
                67
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 1
                },
                "start": {
                  "column": 63,
                  "line": 1
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 70,
                  "line": 1
                },
                "start": {
                  "column": 67,
                  "line": 1
                }
              },
              "range": [
                67,
                70
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    69,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 1
                    },
                    "start": {
                      "column": 69,
                      "line": 1
                    }
                  }
                },
                "range": [
                  69,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 1
                  },
                  "start": {
                    "column": 69,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              60,
              70
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 1
              },
              "start": {
                "column": 60,
                "line": 1
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 94,
              "line": 1
            },
            "start": {
              "column": 71,
              "line": 1
            }
          },
          "range": [
            71,
            94
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                86,
                94
              ],
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSAnyKeyword",
                    "range": [
                      89,
                      92
                    ],
                    "loc": {
                      "end": {
                        "column": 92,
                        "line": 1
                      },
                      "start": {
                        "column": 89,
                        "line": 1
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
                        87,
                        88
                      ],
                      "loc": {
                        "end": {
                          "column": 88,
                          "line": 1
                        },
                        "start": {
                          "column": 87,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      87,
                      88
                    ],
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 1
                      },
                      "start": {
                        "column": 87,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    87,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 93,
                      "line": 1
                    },
                    "start": {
                      "column": 87,
                      "line": 1
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 94,
                  "line": 1
                },
                "start": {
                  "column": 86,
                  "line": 1
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PrivateMapped",
              "optional": false,
              "range": [
                73,
                86
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 1
                },
                "start": {
                  "column": 73,
                  "line": 1
                }
              }
            },
            "range": [
              73,
              94
            ],
            "loc": {
              "end": {
                "column": 94,
                "line": 1
              },
              "start": {
                "column": 73,
                "line": 1
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 59,
              "line": 1
            },
            "start": {
              "column": 38,
              "line": 1
            }
          },
          "range": [
            38,
            59
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "range": [
                    49,
                    56
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 1
                    },
                    "start": {
                      "column": 49,
                      "line": 1
                    }
                  }
                },
                "range": [
                  49,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 1
                  },
                  "start": {
                    "column": 49,
                    "line": 1
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
                  39,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 1
                  },
                  "start": {
                    "column": 39,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                39,
                58
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 1
                },
                "start": {
                  "column": 39,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          95
        ],
        "loc": {
          "end": {
            "column": 95,
            "line": 1
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
          "column": 95,
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
        "name": "PrivateMapped",
        "optional": false,
        "range": [
          102,
          115
        ],
        "loc": {
          "end": {
            "column": 18,
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
              "name": "Obj",
              "optional": false,
              "range": [
                136,
                139
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 3
                },
                "start": {
                  "column": 39,
                  "line": 3
                }
              }
            },
            "range": [
              136,
              139
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 3
              },
              "start": {
                "column": 39,
                "line": 3
              }
            }
          },
          "range": [
            130,
            139
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 3
            },
            "start": {
              "column": 33,
              "line": 3
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            125,
            126
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 3
            },
            "start": {
              "column": 28,
              "line": 3
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
                146,
                147
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 3
                },
                "start": {
                  "column": 49,
                  "line": 3
                }
              }
            },
            "range": [
              146,
              147
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 3
              },
              "start": {
                "column": 49,
                "line": 3
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Obj",
              "optional": false,
              "range": [
                142,
                145
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 3
                },
                "start": {
                  "column": 45,
                  "line": 3
                }
              }
            },
            "range": [
              142,
              145
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 3
              },
              "start": {
                "column": 45,
                "line": 3
              }
            }
          },
          "range": [
            142,
            148
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 3
            },
            "start": {
              "column": 45,
              "line": 3
            }
          }
        },
        "range": [
          123,
          149
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 3
          },
          "start": {
            "column": 26,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 3
          }
        },
        "range": [
          115,
          120
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Obj",
              "optional": false,
              "range": [
                116,
                119
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              116,
              119
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 3
              },
              "start": {
                "column": 19,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        97,
        150
      ],
      "loc": {
        "end": {
          "column": 53,
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
    147
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./internal'",
        "value": "./internal",
        "range": [
          29,
          41
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 1
          },
          "start": {
            "column": 29,
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
            "name": "usePrivateType",
            "optional": false,
            "range": [
              8,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "usePrivateType",
            "optional": false,
            "range": [
              8,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            8,
            22
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 1
            },
            "start": {
              "column": 8,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        42
      ],
      "loc": {
        "end": {
          "column": 42,
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
        43,
        146
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
              "name": "mappedUnionWithPrivateType",
              "optional": false,
              "range": [
                56,
                82
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "range": [
                        140,
                        144
                      ],
                      "loc": {
                        "end": {
                          "column": 101,
                          "line": 2
                        },
                        "start": {
                          "column": 97,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      137,
                      144
                    ],
                    "loc": {
                      "end": {
                        "column": 101,
                        "line": 2
                      },
                      "start": {
                        "column": 94,
                        "line": 2
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "usePrivateType",
                  "optional": false,
                  "range": [
                    122,
                    136
                  ],
                  "loc": {
                    "end": {
                      "column": 93,
                      "line": 2
                    },
                    "start": {
                      "column": 79,
                      "line": 2
                    }
                  }
                },
                "optional": false,
                "range": [
                  122,
                  145
                ],
                "loc": {
                  "end": {
                    "column": 102,
                    "line": 2
                  },
                  "start": {
                    "column": 79,
                    "line": 2
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      110,
                      114
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 2
                      },
                      "start": {
                        "column": 67,
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
                        "column": 74,
                        "line": 2
                      },
                      "start": {
                        "column": 71,
                        "line": 2
                      }
                    },
                    "range": [
                      114,
                      117
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          116,
                          117
                        ],
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 2
                          },
                          "start": {
                            "column": 73,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        116,
                        117
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 2
                        },
                        "start": {
                          "column": 73,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    107,
                    117
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 2
                    },
                    "start": {
                      "column": 64,
                      "line": 2
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 2
                  },
                  "start": {
                    "column": 42,
                    "line": 2
                  }
                },
                "range": [
                  85,
                  106
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnknownKeyword",
                        "range": [
                          96,
                          103
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 2
                          },
                          "start": {
                            "column": 53,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        96,
                        105
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 2
                        },
                        "start": {
                          "column": 53,
                          "line": 2
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
                        86,
                        87
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 2
                        },
                        "start": {
                          "column": 43,
                          "line": 2
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      86,
                      105
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 2
                      },
                      "start": {
                        "column": 43,
                        "line": 2
                      }
                    }
                  }
                ]
              },
              "range": [
                85,
                145
              ],
              "loc": {
                "end": {
                  "column": 102,
                  "line": 2
                },
                "start": {
                  "column": 42,
                  "line": 2
                }
              }
            },
            "range": [
              56,
              145
            ],
            "loc": {
              "end": {
                "column": 102,
                "line": 2
              },
              "start": {
                "column": 13,
                "line": 2
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          50,
          146
        ],
        "loc": {
          "end": {
            "column": 103,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 103,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
