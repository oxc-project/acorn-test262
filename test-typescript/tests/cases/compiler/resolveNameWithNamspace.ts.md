__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    167
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "require",
        "optional": false,
        "range": [
          17,
          24
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "moduleName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 1
              },
              "start": {
                "column": 35,
                "line": 1
              }
            },
            "range": [
              35,
              43
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                37,
                43
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 1
                },
                "start": {
                  "column": 37,
                  "line": 1
                }
              }
            }
          },
          "range": [
            25,
            43
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 1
            },
            "start": {
              "column": 25,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 49,
            "line": 1
          },
          "start": {
            "column": 44,
            "line": 1
          }
        },
        "range": [
          44,
          49
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            46,
            49
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 1
            },
            "start": {
              "column": 46,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        50
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              82,
              164
            ],
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "async": false,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "equal",
                "optional": false,
                "range": [
                  98,
                  103
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 4
                  },
                  "start": {
                    "column": 20,
                    "line": 4
                  }
                }
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "actual",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 4
                      },
                      "start": {
                        "column": 32,
                        "line": 4
                      }
                    },
                    "range": [
                      110,
                      115
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        112,
                        115
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 4
                        },
                        "start": {
                          "column": 34,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    104,
                    115
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 4
                    },
                    "start": {
                      "column": 26,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "expected",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 4
                      },
                      "start": {
                        "column": 47,
                        "line": 4
                      }
                    },
                    "range": [
                      125,
                      130
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        127,
                        130
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 4
                        },
                        "start": {
                          "column": 49,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    117,
                    130
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 4
                    },
                    "start": {
                      "column": 39,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 4
                      },
                      "start": {
                        "column": 62,
                        "line": 4
                      }
                    },
                    "range": [
                      140,
                      156
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            142,
                            148
                          ],
                          "loc": {
                            "end": {
                              "column": 70,
                              "line": 4
                            },
                            "start": {
                              "column": 64,
                              "line": 4
                            }
                          }
                        },
                        {
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
                                "column": 78,
                                "line": 4
                              },
                              "start": {
                                "column": 73,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            151,
                            156
                          ],
                          "loc": {
                            "end": {
                              "column": 78,
                              "line": 4
                            },
                            "start": {
                              "column": 73,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "range": [
                        142,
                        156
                      ],
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 4
                        },
                        "start": {
                          "column": 64,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    132,
                    156
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 4
                    },
                    "start": {
                      "column": 54,
                      "line": 4
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 4
                  },
                  "start": {
                    "column": 79,
                    "line": 4
                  }
                },
                "range": [
                  157,
                  163
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    159,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 4
                    },
                    "start": {
                      "column": 81,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                89,
                164
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 86,
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
          76,
          166
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 24,
            "line": 3
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"assert\"",
        "value": "assert",
        "range": [
          67,
          75
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "range": [
        52,
        166
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
    34,
    120
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              59,
              84
            ],
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "declare": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "cool",
                "optional": false,
                "range": [
                  71,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 3
                  },
                  "start": {
                    "column": 16,
                    "line": 3
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'cool'",
                  "value": "cool",
                  "range": [
                    78,
                    84
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 3
                    },
                    "start": {
                      "column": 23,
                      "line": 3
                    }
                  }
                },
                "range": [
                  78,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 3
                  },
                  "start": {
                    "column": 23,
                    "line": 3
                  }
                }
              },
              "range": [
                66,
                84
              ],
              "loc": {
                "end": {
                  "column": 29,
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
                "column": 29,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          53,
          86
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 19,
            "line": 2
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          44,
          52
        ],
        "decorators": [],
        "name": "myAssert",
        "optional": false,
        "loc": {
          "end": {
            "column": 18,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "kind": "namespace",
      "range": [
        34,
        86
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "myAssert",
            "optional": false,
            "range": [
              91,
              99
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "'assert'",
                "value": "assert",
                "range": [
                  110,
                  118
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 5
                  },
                  "start": {
                    "column": 23,
                    "line": 5
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "range": [
                102,
                109
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 5
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              }
            },
            "optional": false,
            "range": [
              102,
              119
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 5
              },
              "start": {
                "column": 15,
                "line": 5
              }
            }
          },
          "range": [
            91,
            119
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        87,
        119
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
      "line": 2
    }
  },
  "hashbang": null
}
```
