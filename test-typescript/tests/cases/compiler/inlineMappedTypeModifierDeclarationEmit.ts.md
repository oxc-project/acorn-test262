__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    419
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./other\"",
        "value": "./other",
        "range": [
          29,
          38
        ],
        "loc": {
          "end": {
            "column": 38,
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
            "name": "test1",
            "optional": false,
            "range": [
              9,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
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
            "name": "test1",
            "optional": false,
            "range": [
              9,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
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
            14
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "test2",
            "optional": false,
            "range": [
              16,
              21
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "test2",
            "optional": false,
            "range": [
              16,
              21
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          },
          "range": [
            16,
            21
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        39
      ],
      "loc": {
        "end": {
          "column": 39,
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
        41,
        132
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      122,
                      125
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 4
                      },
                      "start": {
                        "column": 15,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "range": [
                      127,
                      128
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 4
                      },
                      "start": {
                        "column": 20,
                        "line": 4
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "range": [
                    116,
                    121
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 4
                    },
                    "start": {
                      "column": 9,
                      "line": 4
                    }
                  }
                },
                "optional": false,
                "range": [
                  116,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 4
                  },
                  "start": {
                    "column": 9,
                    "line": 4
                  }
                }
              },
              "range": [
                109,
                130
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
                }
              }
            }
          ],
          "range": [
            105,
            132
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 64,
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
          "name": "wrappedTest1",
          "optional": false,
          "range": [
            57,
            69
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 3
            },
            "start": {
              "column": 16,
              "line": 3
            }
          }
        },
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
                  "column": 56,
                  "line": 3
                },
                "start": {
                  "column": 53,
                  "line": 3
                }
              },
              "range": [
                94,
                97
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    96,
                    97
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 3
                    },
                    "start": {
                      "column": 55,
                      "line": 3
                    }
                  }
                },
                "range": [
                  96,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 3
                  },
                  "start": {
                    "column": 55,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              91,
              97
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 3
              },
              "start": {
                "column": 50,
                "line": 3
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 62,
                  "line": 3
                },
                "start": {
                  "column": 59,
                  "line": 3
                }
              },
              "range": [
                100,
                103
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    102,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 3
                    },
                    "start": {
                      "column": 61,
                      "line": 3
                    }
                  }
                },
                "range": [
                  102,
                  103
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 3
                  },
                  "start": {
                    "column": 61,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              99,
              103
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 3
              },
              "start": {
                "column": 58,
                "line": 3
              }
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 49,
              "line": 3
            },
            "start": {
              "column": 28,
              "line": 3
            }
          },
          "range": [
            69,
            90
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
                  70,
                  71
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
                70,
                71
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
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSStringKeyword",
                "range": [
                  83,
                  89
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 3
                  },
                  "start": {
                    "column": 42,
                    "line": 3
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  73,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 3
                  },
                  "start": {
                    "column": 32,
                    "line": 3
                  }
                }
              },
              "out": false,
              "range": [
                73,
                89
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 3
                },
                "start": {
                  "column": 32,
                  "line": 3
                }
              }
            }
          ]
        },
        "range": [
          48,
          132
        ],
        "loc": {
          "end": {
            "column": 1,
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
      "type": "ExportNamedDeclaration",
      "range": [
        134,
        225
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      215,
                      218
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 8
                      },
                      "start": {
                        "column": 15,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "range": [
                      220,
                      221
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 8
                      },
                      "start": {
                        "column": 20,
                        "line": 8
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test2",
                  "optional": false,
                  "range": [
                    209,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 8
                    },
                    "start": {
                      "column": 9,
                      "line": 8
                    }
                  }
                },
                "optional": false,
                "range": [
                  209,
                  222
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 8
                  },
                  "start": {
                    "column": 9,
                    "line": 8
                  }
                }
              },
              "range": [
                202,
                223
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 8
                }
              }
            }
          ],
          "range": [
            198,
            225
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 64,
              "line": 7
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "wrappedTest2",
          "optional": false,
          "range": [
            150,
            162
          ],
          "loc": {
            "end": {
              "column": 28,
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 56,
                  "line": 7
                },
                "start": {
                  "column": 53,
                  "line": 7
                }
              },
              "range": [
                187,
                190
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    189,
                    190
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 7
                    },
                    "start": {
                      "column": 55,
                      "line": 7
                    }
                  }
                },
                "range": [
                  189,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 7
                  },
                  "start": {
                    "column": 55,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              184,
              190
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 7
              },
              "start": {
                "column": 50,
                "line": 7
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 62,
                  "line": 7
                },
                "start": {
                  "column": 59,
                  "line": 7
                }
              },
              "range": [
                193,
                196
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    195,
                    196
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 7
                    },
                    "start": {
                      "column": 61,
                      "line": 7
                    }
                  }
                },
                "range": [
                  195,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 7
                  },
                  "start": {
                    "column": 61,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              192,
              196
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 7
              },
              "start": {
                "column": 58,
                "line": 7
              }
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 49,
              "line": 7
            },
            "start": {
              "column": 28,
              "line": 7
            }
          },
          "range": [
            162,
            183
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
                  163,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 7
                  },
                  "start": {
                    "column": 29,
                    "line": 7
                  }
                }
              },
              "out": false,
              "range": [
                163,
                164
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 7
                },
                "start": {
                  "column": 29,
                  "line": 7
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSStringKeyword",
                "range": [
                  176,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 7
                  },
                  "start": {
                    "column": 42,
                    "line": 7
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  166,
                  167
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 7
                  },
                  "start": {
                    "column": 32,
                    "line": 7
                  }
                }
              },
              "out": false,
              "range": [
                166,
                182
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 7
                },
                "start": {
                  "column": 32,
                  "line": 7
                }
              }
            }
          ]
        },
        "range": [
          141,
          225
        ],
        "loc": {
          "end": {
            "column": 1,
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
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        227,
        286
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Obj",
          "optional": false,
          "range": [
            239,
            242
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 11
            },
            "start": {
              "column": 12,
              "line": 11
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  249,
                  250
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 12
                  },
                  "start": {
                    "column": 2,
                    "line": 12
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
                    "column": 11,
                    "line": 12
                  },
                  "start": {
                    "column": 3,
                    "line": 12
                  }
                },
                "range": [
                  250,
                  258
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    252,
                    258
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 12
                    },
                    "start": {
                      "column": 5,
                      "line": 12
                    }
                  }
                }
              },
              "range": [
                249,
                259
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 12
                },
                "start": {
                  "column": 2,
                  "line": 12
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  271,
                  274
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 13
                  },
                  "start": {
                    "column": 11,
                    "line": 13
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
                    "column": 22,
                    "line": 13
                  },
                  "start": {
                    "column": 14,
                    "line": 13
                  }
                },
                "range": [
                  274,
                  282
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    276,
                    282
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 13
                    },
                    "start": {
                      "column": 16,
                      "line": 13
                    }
                  }
                }
              },
              "range": [
                262,
                283
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 13
                },
                "start": {
                  "column": 2,
                  "line": 13
                }
              }
            }
          ],
          "range": [
            245,
            285
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 14
            },
            "start": {
              "column": 18,
              "line": 11
            }
          }
        },
        "range": [
          234,
          286
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 14
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        288,
        353
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
              "name": "processedInternally1",
              "optional": false,
              "range": [
                301,
                321
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 16
                },
                "start": {
                  "column": 13,
                  "line": 16
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "range": [
                      337,
                      339
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 16
                      },
                      "start": {
                        "column": 49,
                        "line": 16
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "range": [
                        343,
                        346
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 16
                        },
                        "start": {
                          "column": 55,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      343,
                      346
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 16
                      },
                      "start": {
                        "column": 55,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    337,
                    346
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 16
                    },
                    "start": {
                      "column": 49,
                      "line": 16
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"a\"",
                  "value": "a",
                  "range": [
                    348,
                    351
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 16
                    },
                    "start": {
                      "column": 60,
                      "line": 16
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrappedTest1",
                "optional": false,
                "range": [
                  324,
                  336
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 16
                  },
                  "start": {
                    "column": 36,
                    "line": 16
                  }
                }
              },
              "optional": false,
              "range": [
                324,
                352
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 16
                },
                "start": {
                  "column": 36,
                  "line": 16
                }
              }
            },
            "range": [
              301,
              352
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 16
              },
              "start": {
                "column": 13,
                "line": 16
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          295,
          353
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 16
          },
          "start": {
            "column": 7,
            "line": 16
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 65,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        354,
        419
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
              "name": "processedInternally2",
              "optional": false,
              "range": [
                367,
                387
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 17
                },
                "start": {
                  "column": 13,
                  "line": 17
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "range": [
                      403,
                      405
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 17
                      },
                      "start": {
                        "column": 49,
                        "line": 17
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "range": [
                        409,
                        412
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 17
                        },
                        "start": {
                          "column": 55,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      409,
                      412
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 17
                      },
                      "start": {
                        "column": 55,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    403,
                    412
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 17
                    },
                    "start": {
                      "column": 49,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"a\"",
                  "value": "a",
                  "range": [
                    414,
                    417
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 17
                    },
                    "start": {
                      "column": 60,
                      "line": 17
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrappedTest2",
                "optional": false,
                "range": [
                  390,
                  402
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 17
                  },
                  "start": {
                    "column": 36,
                    "line": 17
                  }
                }
              },
              "optional": false,
              "range": [
                390,
                418
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 17
                },
                "start": {
                  "column": 36,
                  "line": 17
                }
              }
            },
            "range": [
              367,
              418
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 17
              },
              "start": {
                "column": 13,
                "line": 17
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          361,
          419
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 17
          },
          "start": {
            "column": 7,
            "line": 17
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 65,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 65,
      "line": 17
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
    32,
    433
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OmitReal",
        "optional": false,
        "range": [
          37,
          45
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            76,
            100
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
                  77,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 2
                  },
                  "start": {
                    "column": 45,
                    "line": 2
                  }
                }
              },
              "range": [
                77,
                78
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 2
                },
                "start": {
                  "column": 45,
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
                  99
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
                        "name": "T",
                        "optional": false,
                        "range": [
                          94,
                          95
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 2
                          },
                          "start": {
                            "column": 62,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        94,
                        95
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 2
                        },
                        "start": {
                          "column": 62,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      88,
                      95
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 2
                      },
                      "start": {
                        "column": 56,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        97,
                        98
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
                      97,
                      98
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
                  }
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 2
                  },
                  "start": {
                    "column": 55,
                    "line": 2
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Exclude",
                "optional": false,
                "range": [
                  80,
                  87
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 2
                  },
                  "start": {
                    "column": 48,
                    "line": 2
                  }
                }
              },
              "range": [
                80,
                99
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 2
                },
                "start": {
                  "column": 48,
                  "line": 2
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 2
            },
            "start": {
              "column": 44,
              "line": 2
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "range": [
            72,
            76
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 2
            },
            "start": {
              "column": 40,
              "line": 2
            }
          }
        },
        "range": [
          72,
          100
        ],
        "loc": {
          "end": {
            "column": 68,
            "line": 2
          },
          "start": {
            "column": 40,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 37,
            "line": 2
          },
          "start": {
            "column": 13,
            "line": 2
          }
        },
        "range": [
          45,
          69
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
                46,
                47
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              46,
              47
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 2
              },
              "start": {
                "column": 14,
                "line": 2
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  65,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 2
                  },
                  "start": {
                    "column": 33,
                    "line": 2
                  }
                }
              },
              "range": [
                59,
                68
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 2
                },
                "start": {
                  "column": 27,
                  "line": 2
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                49,
                50
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
            "out": false,
            "range": [
              49,
              68
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 2
              },
              "start": {
                "column": 17,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        32,
        101
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OmitUnveiled",
        "optional": false,
        "range": [
          139,
          151
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              210,
              222
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
                    "name": "T",
                    "optional": false,
                    "range": [
                      217,
                      218
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 5
                      },
                      "start": {
                        "column": 22,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    217,
                    218
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 5
                    },
                    "start": {
                      "column": 22,
                      "line": 5
                    }
                  }
                },
                "range": [
                  211,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 5
                  },
                  "start": {
                    "column": 16,
                    "line": 5
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    220,
                    221
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 5
                    },
                    "start": {
                      "column": 25,
                      "line": 5
                    }
                  }
                },
                "range": [
                  220,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 5
                  },
                  "start": {
                    "column": 25,
                    "line": 5
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 5
              },
              "start": {
                "column": 15,
                "line": 5
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Exclude",
            "optional": false,
            "range": [
              203,
              210
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 5
              },
              "start": {
                "column": 8,
                "line": 5
              }
            }
          },
          "range": [
            203,
            222
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 5
            },
            "start": {
              "column": 8,
              "line": 5
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            198,
            199
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 5
            },
            "start": {
              "column": 3,
              "line": 5
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
              "name": "P",
              "optional": false,
              "range": [
                227,
                228
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 5
                },
                "start": {
                  "column": 32,
                  "line": 5
                }
              }
            },
            "range": [
              227,
              228
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 5
              },
              "start": {
                "column": 32,
                "line": 5
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
                225,
                226
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 5
                },
                "start": {
                  "column": 30,
                  "line": 5
                }
              }
            },
            "range": [
              225,
              226
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 5
              },
              "start": {
                "column": 30,
                "line": 5
              }
            }
          },
          "range": [
            225,
            229
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 5
            },
            "start": {
              "column": 30,
              "line": 5
            }
          }
        },
        "range": [
          193,
          232
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 59,
            "line": 4
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 56,
            "line": 4
          },
          "start": {
            "column": 17,
            "line": 4
          }
        },
        "range": [
          151,
          190
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
                152,
                153
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 4
                },
                "start": {
                  "column": 18,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              152,
              153
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 4
              },
              "start": {
                "column": 18,
                "line": 4
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    165,
                    171
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 4
                    },
                    "start": {
                      "column": 31,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    174,
                    180
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 4
                    },
                    "start": {
                      "column": 40,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "TSSymbolKeyword",
                  "range": [
                    183,
                    189
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 4
                    },
                    "start": {
                      "column": 49,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                165,
                189
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 4
                },
                "start": {
                  "column": 31,
                  "line": 4
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                155,
                156
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 4
                },
                "start": {
                  "column": 21,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              155,
              189
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 4
              },
              "start": {
                "column": 21,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        134,
        233
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        235,
        331
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "range": [
                    319,
                    321
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 9
                    },
                    "start": {
                      "column": 9,
                      "line": 9
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    325,
                    328
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 9
                    },
                    "start": {
                      "column": 15,
                      "line": 9
                    }
                  }
                },
                "range": [
                  319,
                  328
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 9
                  },
                  "start": {
                    "column": 9,
                    "line": 9
                  }
                }
              },
              "range": [
                312,
                329
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 9
                },
                "start": {
                  "column": 2,
                  "line": 9
                }
              }
            }
          ],
          "range": [
            308,
            331
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 10
            },
            "start": {
              "column": 73,
              "line": 8
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "test1",
          "optional": false,
          "range": [
            251,
            256
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 8
            },
            "start": {
              "column": 16,
              "line": 8
            }
          }
        },
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
                  "column": 49,
                  "line": 8
                },
                "start": {
                  "column": 46,
                  "line": 8
                }
              },
              "range": [
                281,
                284
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    283,
                    284
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 8
                    },
                    "start": {
                      "column": 48,
                      "line": 8
                    }
                  }
                },
                "range": [
                  283,
                  284
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 8
                  },
                  "start": {
                    "column": 48,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              278,
              284
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 8
              },
              "start": {
                "column": 43,
                "line": 8
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 55,
                  "line": 8
                },
                "start": {
                  "column": 52,
                  "line": 8
                }
              },
              "range": [
                287,
                290
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    289,
                    290
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 8
                    },
                    "start": {
                      "column": 54,
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
                    "column": 55,
                    "line": 8
                  },
                  "start": {
                    "column": 54,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              286,
              290
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 8
              },
              "start": {
                "column": 51,
                "line": 8
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 72,
              "line": 8
            },
            "start": {
              "column": 56,
              "line": 8
            }
          },
          "range": [
            291,
            307
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                301,
                307
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
                      302,
                      303
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 8
                      },
                      "start": {
                        "column": 67,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    302,
                    303
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 8
                    },
                    "start": {
                      "column": 67,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      305,
                      306
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 8
                      },
                      "start": {
                        "column": 70,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    305,
                    306
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 8
                    },
                    "start": {
                      "column": 70,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 8
                },
                "start": {
                  "column": 66,
                  "line": 8
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "OmitReal",
              "optional": false,
              "range": [
                293,
                301
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 8
                },
                "start": {
                  "column": 58,
                  "line": 8
                }
              }
            },
            "range": [
              293,
              307
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 8
              },
              "start": {
                "column": 58,
                "line": 8
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 42,
              "line": 8
            },
            "start": {
              "column": 21,
              "line": 8
            }
          },
          "range": [
            256,
            277
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
                  257,
                  258
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 8
                  },
                  "start": {
                    "column": 22,
                    "line": 8
                  }
                }
              },
              "out": false,
              "range": [
                257,
                258
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 8
                },
                "start": {
                  "column": 22,
                  "line": 8
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSStringKeyword",
                "range": [
                  270,
                  276
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 8
                  },
                  "start": {
                    "column": 35,
                    "line": 8
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  260,
                  261
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
              "out": false,
              "range": [
                260,
                276
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 8
                },
                "start": {
                  "column": 25,
                  "line": 8
                }
              }
            }
          ]
        },
        "range": [
          242,
          331
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        333,
        433
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "range": [
                    421,
                    423
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 13
                    },
                    "start": {
                      "column": 9,
                      "line": 13
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    427,
                    430
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 13
                    },
                    "start": {
                      "column": 15,
                      "line": 13
                    }
                  }
                },
                "range": [
                  421,
                  430
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 13
                  },
                  "start": {
                    "column": 9,
                    "line": 13
                  }
                }
              },
              "range": [
                414,
                431
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 13
                },
                "start": {
                  "column": 2,
                  "line": 13
                }
              }
            }
          ],
          "range": [
            410,
            433
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 14
            },
            "start": {
              "column": 77,
              "line": 12
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
            349,
            354
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 12
            },
            "start": {
              "column": 16,
              "line": 12
            }
          }
        },
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
                  "column": 49,
                  "line": 12
                },
                "start": {
                  "column": 46,
                  "line": 12
                }
              },
              "range": [
                379,
                382
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    381,
                    382
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 12
                    },
                    "start": {
                      "column": 48,
                      "line": 12
                    }
                  }
                },
                "range": [
                  381,
                  382
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 12
                  },
                  "start": {
                    "column": 48,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              376,
              382
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 12
              },
              "start": {
                "column": 43,
                "line": 12
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 55,
                  "line": 12
                },
                "start": {
                  "column": 52,
                  "line": 12
                }
              },
              "range": [
                385,
                388
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    387,
                    388
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 12
                    },
                    "start": {
                      "column": 54,
                      "line": 12
                    }
                  }
                },
                "range": [
                  387,
                  388
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 12
                  },
                  "start": {
                    "column": 54,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              384,
              388
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 12
              },
              "start": {
                "column": 51,
                "line": 12
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 76,
              "line": 12
            },
            "start": {
              "column": 56,
              "line": 12
            }
          },
          "range": [
            389,
            409
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                403,
                409
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
                      404,
                      405
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 12
                      },
                      "start": {
                        "column": 71,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    404,
                    405
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 12
                    },
                    "start": {
                      "column": 71,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      407,
                      408
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 12
                      },
                      "start": {
                        "column": 74,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    407,
                    408
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 12
                    },
                    "start": {
                      "column": 74,
                      "line": 12
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 12
                },
                "start": {
                  "column": 70,
                  "line": 12
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "OmitUnveiled",
              "optional": false,
              "range": [
                391,
                403
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 12
                },
                "start": {
                  "column": 58,
                  "line": 12
                }
              }
            },
            "range": [
              391,
              409
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 12
              },
              "start": {
                "column": 58,
                "line": 12
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 42,
              "line": 12
            },
            "start": {
              "column": 21,
              "line": 12
            }
          },
          "range": [
            354,
            375
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
                  355,
                  356
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 12
                  },
                  "start": {
                    "column": 22,
                    "line": 12
                  }
                }
              },
              "out": false,
              "range": [
                355,
                356
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 12
                },
                "start": {
                  "column": 22,
                  "line": 12
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSStringKeyword",
                "range": [
                  368,
                  374
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 12
                  },
                  "start": {
                    "column": 35,
                    "line": 12
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  358,
                  359
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 12
                  },
                  "start": {
                    "column": 25,
                    "line": 12
                  }
                }
              },
              "out": false,
              "range": [
                358,
                374
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 12
                },
                "start": {
                  "column": 25,
                  "line": 12
                }
              }
            }
          ]
        },
        "range": [
          340,
          433
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 7,
            "line": 12
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
