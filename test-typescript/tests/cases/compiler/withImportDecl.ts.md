__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    32
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        31
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            15,
            31
          ],
          "body": [
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  17,
                  20
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 1
                  },
                  "start": {
                    "column": 17,
                    "line": 1
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 1
                  },
                  "start": {
                    "column": 20,
                    "line": 1
                  }
                },
                "range": [
                  20,
                  28
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    22,
                    28
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 1
                    },
                    "start": {
                      "column": 22,
                      "line": 1
                    }
                  }
                }
              },
              "value": null,
              "range": [
                17,
                29
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 1
            },
            "start": {
              "column": 15,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "range": [
            13,
            14
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          7,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
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
          "column": 31,
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
      "column": 0,
      "line": 2
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
    43,
    638
  ],
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "simpleVar",
            "optional": false,
            "range": [
              47,
              56
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            47,
            56
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        43,
        57
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 2
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
            "name": "anotherVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 4
                },
                "start": {
                  "column": 14,
                  "line": 4
                }
              },
              "range": [
                73,
                78
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  75,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 4
                  },
                  "start": {
                    "column": 16,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              63,
              78
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": null,
          "range": [
            63,
            78
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        59,
        79
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "varWithSimpleType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              },
              "range": [
                101,
                109
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  103,
                  109
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 5
                  },
                  "start": {
                    "column": 23,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              84,
              109
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            84,
            109
          ],
          "loc": {
            "end": {
              "column": 29,
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
        80,
        110
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "varWithArrayType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 6
                },
                "start": {
                  "column": 20,
                  "line": 6
                }
              },
              "range": [
                131,
                141
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    133,
                    139
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 6
                    },
                    "start": {
                      "column": 22,
                      "line": 6
                    }
                  }
                },
                "range": [
                  133,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 30,
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
              115,
              141
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": null,
          "range": [
            115,
            141
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        111,
        142
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "varWithInitialValue",
            "optional": false,
            "range": [
              148,
              167
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "30",
            "value": 30,
            "range": [
              170,
              172
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 8
              },
              "start": {
                "column": 26,
                "line": 8
              }
            }
          },
          "range": [
            148,
            172
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        144,
        173
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
            "name": "withComplicatedValue",
            "optional": false,
            "range": [
              179,
              199
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    204,
                    205
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 10
                    },
                    "start": {
                      "column": 29,
                      "line": 10
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "30",
                  "value": 30,
                  "range": [
                    207,
                    209
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 10
                    },
                    "start": {
                      "column": 32,
                      "line": 10
                    }
                  }
                },
                "range": [
                  204,
                  209
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 10
                  },
                  "start": {
                    "column": 29,
                    "line": 10
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    211,
                    212
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 10
                    },
                    "start": {
                      "column": 36,
                      "line": 10
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "70",
                  "value": 70,
                  "range": [
                    214,
                    216
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 10
                    },
                    "start": {
                      "column": 39,
                      "line": 10
                    }
                  }
                },
                "range": [
                  211,
                  216
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 10
                  },
                  "start": {
                    "column": 36,
                    "line": 10
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "desc",
                  "optional": false,
                  "range": [
                    218,
                    222
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 10
                    },
                    "start": {
                      "column": 43,
                      "line": 10
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"position\"",
                  "value": "position",
                  "range": [
                    224,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 10
                    },
                    "start": {
                      "column": 49,
                      "line": 10
                    }
                  }
                },
                "range": [
                  218,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 10
                  },
                  "start": {
                    "column": 43,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              202,
              236
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 10
              },
              "start": {
                "column": 27,
                "line": 10
              }
            }
          },
          "range": [
            179,
            236
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        175,
        237
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
            "name": "declaredVar",
            "optional": false,
            "range": [
              251,
              262
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 12
              },
              "start": {
                "column": 12,
                "line": 12
              }
            }
          },
          "init": null,
          "range": [
            251,
            262
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 12
            },
            "start": {
              "column": 12,
              "line": 12
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        239,
        263
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "declareVar2",
            "optional": false,
            "range": [
              276,
              287
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 13
              },
              "start": {
                "column": 12,
                "line": 13
              }
            }
          },
          "init": null,
          "range": [
            276,
            287
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 13
            },
            "start": {
              "column": 12,
              "line": 13
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        264,
        287
      ],
      "loc": {
        "end": {
          "column": 23,
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
            "name": "declaredVar",
            "optional": false,
            "range": [
              301,
              312
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 15
              },
              "start": {
                "column": 12,
                "line": 15
              }
            }
          },
          "init": null,
          "range": [
            301,
            312
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 15
            },
            "start": {
              "column": 12,
              "line": 15
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        289,
        313
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "deckareVarWithType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 16
                },
                "start": {
                  "column": 30,
                  "line": 16
                }
              },
              "range": [
                344,
                352
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  346,
                  352
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 16
                  },
                  "start": {
                    "column": 32,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              326,
              352
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 16
              },
              "start": {
                "column": 12,
                "line": 16
              }
            }
          },
          "init": null,
          "range": [
            326,
            352
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 16
            },
            "start": {
              "column": 12,
              "line": 16
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        314,
        353
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "arrayVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 18
                },
                "start": {
                  "column": 12,
                  "line": 18
                }
              },
              "range": [
                367,
                377
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "range": [
                    369,
                    375
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 18
                    },
                    "start": {
                      "column": 14,
                      "line": 18
                    }
                  }
                },
                "range": [
                  369,
                  377
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 18
                  },
                  "start": {
                    "column": 14,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              359,
              377
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "'a'",
                "value": "a",
                "range": [
                  381,
                  384
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 18
                  },
                  "start": {
                    "column": 26,
                    "line": 18
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'b'",
                "value": "b",
                "range": [
                  386,
                  389
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 18
                  },
                  "start": {
                    "column": 31,
                    "line": 18
                  }
                }
              }
            ],
            "range": [
              380,
              390
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 18
              },
              "start": {
                "column": 25,
                "line": 18
              }
            }
          },
          "range": [
            359,
            390
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        355,
        391
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      443,
                      444
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"Hello\"",
                    "value": "Hello",
                    "range": [
                      446,
                      453
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 23
                      },
                      "start": {
                        "column": 11,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    443,
                    453
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
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
                    "name": "y",
                    "optional": false,
                    "range": [
                      463,
                      464
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"word\"",
                    "value": "word",
                    "range": [
                      466,
                      472
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 24
                      },
                      "start": {
                        "column": 11,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    463,
                    472
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "range": [
                      482,
                      483
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
                        "line": 25
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      485,
                      486
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 25
                      },
                      "start": {
                        "column": 11,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    482,
                    486
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                }
              ],
              "range": [
                433,
                492
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 11,
                  "line": 22
                }
              }
            },
            "range": [
              426,
              493
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "range": [
          420,
          495
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 26,
            "line": 21
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "simpleFunction",
        "optional": false,
        "range": [
          403,
          417
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 21
          },
          "start": {
            "column": 9,
            "line": 21
          }
        }
      },
      "params": [],
      "range": [
        394,
        495
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              513,
              566
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
                      "type": "Literal",
                      "raw": "\"Hello\"",
                      "value": "Hello",
                      "range": [
                        552,
                        559
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 31
                        },
                        "start": {
                          "column": 15,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      545,
                      560
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 31
                      },
                      "start": {
                        "column": 8,
                        "line": 31
                      }
                    }
                  }
                ],
                "range": [
                  535,
                  566
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 32
                  },
                  "start": {
                    "column": 26,
                    "line": 30
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  529,
                  532
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 30
                  },
                  "start": {
                    "column": 20,
                    "line": 30
                  }
                }
              },
              "params": [],
              "range": [
                520,
                566
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 32
                },
                "start": {
                  "column": 11,
                  "line": 30
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          }
        ],
        "range": [
          507,
          568
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 10,
            "line": 29
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          504,
          506
        ],
        "decorators": [],
        "name": "m1",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 29
          },
          "start": {
            "column": 7,
            "line": 29
          }
        }
      },
      "kind": "module",
      "range": [
        497,
        568
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3",
        "optional": false,
        "range": [
          577,
          579
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 35
          },
          "start": {
            "column": 7,
            "line": 35
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"withImportDecl_0\"",
          "value": "withImportDecl_0",
          "range": [
            590,
            608
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 35
            },
            "start": {
              "column": 20,
              "line": 35
            }
          }
        },
        "range": [
          582,
          609
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 35
          },
          "start": {
            "column": 12,
            "line": 35
          }
        }
      },
      "range": [
        570,
        610
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
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
            "name": "b",
            "optional": false,
            "range": [
              616,
              617
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3",
                "optional": false,
                "range": [
                  624,
                  626
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 37
                  },
                  "start": {
                    "column": 12,
                    "line": 37
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  627,
                  628
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 37
                  },
                  "start": {
                    "column": 15,
                    "line": 37
                  }
                }
              },
              "range": [
                624,
                628
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 37
                },
                "start": {
                  "column": 12,
                  "line": 37
                }
              }
            },
            "range": [
              620,
              630
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 37
              },
              "start": {
                "column": 8,
                "line": 37
              }
            }
          },
          "range": [
            616,
            630
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 37
            },
            "start": {
              "column": 4,
              "line": 37
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        612,
        631
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            632,
            633
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 38
            },
            "start": {
              "column": 0,
              "line": 38
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            634,
            637
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 38
            },
            "start": {
              "column": 2,
              "line": 38
            }
          }
        },
        "range": [
          632,
          637
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 38
          },
          "start": {
            "column": 0,
            "line": 38
          }
        }
      },
      "range": [
        632,
        638
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 6,
      "line": 38
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
