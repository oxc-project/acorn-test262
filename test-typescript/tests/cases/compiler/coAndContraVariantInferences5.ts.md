__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    468
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "range": [
          5,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'a'",
              "value": "a",
              "range": [
                13,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'b'",
              "value": "b",
              "range": [
                19,
                22
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              }
            },
            "range": [
              19,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 19,
                "line": 1
              }
            }
          }
        ],
        "range": [
          13,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
      "range": [
        0,
        23
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "range": [
                          149,
                          156
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 8
                          },
                          "start": {
                            "column": 8,
                            "line": 8
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "range": [
                          149,
                          156
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 8
                          },
                          "start": {
                            "column": 8,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        149,
                        156
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 8
                        },
                        "start": {
                          "column": 8,
                          "line": 8
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "onChange",
                        "optional": false,
                        "range": [
                          166,
                          174
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 9
                          },
                          "start": {
                            "column": 8,
                            "line": 9
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "onChange",
                        "optional": false,
                        "range": [
                          166,
                          174
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 9
                          },
                          "start": {
                            "column": 8,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        166,
                        174
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "range": [
                    139,
                    181
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 10
                    },
                    "start": {
                      "column": 11,
                      "line": 7
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "select",
                "optional": false,
                "range": [
                  132,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "range": [
                132,
                182
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "range": [
              132,
              183
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          126,
          185
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 8,
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
        "name": "f",
        "optional": false,
        "range": [
          34,
          35
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 4
              }
            },
            "range": [
              48,
              70
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  63,
                  70
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Thing",
                      "optional": false,
                      "range": [
                        64,
                        69
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 4
                        },
                        "start": {
                          "column": 27,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      64,
                      69
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 4
                      },
                      "start": {
                        "column": 27,
                        "line": 4
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 4
                  },
                  "start": {
                    "column": 26,
                    "line": 4
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SelectOptions",
                "optional": false,
                "range": [
                  50,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 4
                  },
                  "start": {
                    "column": 13,
                    "line": 4
                  }
                }
              },
              "range": [
                50,
                70
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
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
              "column": 33,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "onChange",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 44,
                "line": 5
              },
              "start": {
                "column": 12,
                "line": 5
              }
            },
            "range": [
              84,
              116
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "status",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 5
                      },
                      "start": {
                        "column": 21,
                        "line": 5
                      }
                    },
                    "range": [
                      93,
                      107
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thing",
                            "optional": false,
                            "range": [
                              95,
                              100
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 5
                              },
                              "start": {
                                "column": 23,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            95,
                            100
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 5
                            },
                            "start": {
                              "column": 23,
                              "line": 5
                            }
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "range": [
                            103,
                            107
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 5
                            },
                            "start": {
                              "column": 31,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "range": [
                        95,
                        107
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
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
                    87,
                    107
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 5
                    },
                    "start": {
                      "column": 15,
                      "line": 5
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 5
                  },
                  "start": {
                    "column": 37,
                    "line": 5
                  }
                },
                "range": [
                  109,
                  116
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    112,
                    116
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 5
                    },
                    "start": {
                      "column": 40,
                      "line": 5
                    }
                  }
                }
              },
              "range": [
                86,
                116
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 5
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              }
            }
          },
          "range": [
            76,
            116
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 7,
            "line": 6
          },
          "start": {
            "column": 1,
            "line": 6
          }
        },
        "range": [
          119,
          125
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            121,
            125
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 6
            },
            "start": {
              "column": 3,
              "line": 6
            }
          }
        }
      },
      "range": [
        25,
        185
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "select",
        "optional": false,
        "range": [
          204,
          210
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 13
          },
          "start": {
            "column": 17,
            "line": 13
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 69,
                "line": 13
              },
              "start": {
                "column": 50,
                "line": 13
              }
            },
            "range": [
              237,
              256
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  250,
                  256
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "KeyT",
                      "optional": false,
                      "range": [
                        251,
                        255
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 13
                        },
                        "start": {
                          "column": 64,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      251,
                      255
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 13
                      },
                      "start": {
                        "column": 64,
                        "line": 13
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 13
                  },
                  "start": {
                    "column": 63,
                    "line": 13
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SelectProps",
                "optional": false,
                "range": [
                  239,
                  250
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 13
                  },
                  "start": {
                    "column": 52,
                    "line": 13
                  }
                }
              },
              "range": [
                239,
                256
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 13
                },
                "start": {
                  "column": 52,
                  "line": 13
                }
              }
            }
          },
          "range": [
            232,
            256
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 13
            },
            "start": {
              "column": 45,
              "line": 13
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 76,
            "line": 13
          },
          "start": {
            "column": 70,
            "line": 13
          }
        },
        "range": [
          257,
          263
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            259,
            263
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 13
            },
            "start": {
              "column": 72,
              "line": 13
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 44,
            "line": 13
          },
          "start": {
            "column": 23,
            "line": 13
          }
        },
        "range": [
          210,
          231
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                224,
                230
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 13
                },
                "start": {
                  "column": 37,
                  "line": 13
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "KeyT",
              "optional": false,
              "range": [
                211,
                215
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 13
                },
                "start": {
                  "column": 24,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              211,
              230
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 13
              },
              "start": {
                "column": 24,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        187,
        264
      ],
      "loc": {
        "end": {
          "column": 77,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SelectProps",
        "optional": false,
        "range": [
          271,
          282
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 15
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
              "name": "options",
              "optional": false,
              "range": [
                312,
                319
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 16
                },
                "start": {
                  "column": 12,
                  "line": 16
                }
              },
              "range": [
                320,
                341
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    335,
                    341
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "KeyT",
                        "optional": false,
                        "range": [
                          336,
                          340
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 16
                          },
                          "start": {
                            "column": 28,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        336,
                        340
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 16
                        },
                        "start": {
                          "column": 28,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 16
                    },
                    "start": {
                      "column": 27,
                      "line": 16
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SelectOptions",
                  "optional": false,
                  "range": [
                    322,
                    335
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 16
                    },
                    "start": {
                      "column": 14,
                      "line": 16
                    }
                  }
                },
                "range": [
                  322,
                  341
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 16
                  },
                  "start": {
                    "column": 14,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              312,
              342
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onChange",
              "optional": false,
              "range": [
                347,
                355
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
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
                  "column": 33,
                  "line": 17
                },
                "start": {
                  "column": 12,
                  "line": 17
                }
              },
              "range": [
                355,
                376
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 17
                        },
                        "start": {
                          "column": 18,
                          "line": 17
                        }
                      },
                      "range": [
                        361,
                        367
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "KeyT",
                          "optional": false,
                          "range": [
                            363,
                            367
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 17
                            },
                            "start": {
                              "column": 20,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          363,
                          367
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 17
                          },
                          "start": {
                            "column": 20,
                            "line": 17
                          }
                        }
                      }
                    },
                    "range": [
                      358,
                      367
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 17
                      },
                      "start": {
                        "column": 15,
                        "line": 17
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 17
                    },
                    "start": {
                      "column": 26,
                      "line": 17
                    }
                  },
                  "range": [
                    369,
                    376
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      372,
                      376
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 17
                      },
                      "start": {
                        "column": 29,
                        "line": 17
                      }
                    }
                  }
                },
                "range": [
                  357,
                  376
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 17
                  },
                  "start": {
                    "column": 14,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              347,
              377
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "range": [
          306,
          379
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 40,
            "line": 15
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 37,
            "line": 15
          },
          "start": {
            "column": 16,
            "line": 15
          }
        },
        "range": [
          282,
          303
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                296,
                302
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 15
                },
                "start": {
                  "column": 30,
                  "line": 15
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "KeyT",
              "optional": false,
              "range": [
                283,
                287
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 15
                },
                "start": {
                  "column": 17,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              283,
              302
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 15
              },
              "start": {
                "column": 17,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        266,
        380
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SelectOptions",
        "optional": false,
        "range": [
          387,
          400
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 20
          },
          "start": {
            "column": 5,
            "line": 20
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                435,
                448
              ],
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "range": [
                          437,
                          440
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 21
                          },
                          "start": {
                            "column": 13,
                            "line": 21
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
                            "column": 22,
                            "line": 21
                          },
                          "start": {
                            "column": 16,
                            "line": 21
                          }
                        },
                        "range": [
                          440,
                          446
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "KeyT",
                            "optional": false,
                            "range": [
                              442,
                              446
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 21
                              },
                              "start": {
                                "column": 18,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            442,
                            446
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 21
                            },
                            "start": {
                              "column": 18,
                              "line": 21
                            }
                          }
                        }
                      },
                      "range": [
                        437,
                        446
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 21
                        },
                        "start": {
                          "column": 13,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "range": [
                    436,
                    447
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 21
                    },
                    "start": {
                      "column": 12,
                      "line": 21
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 21
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "range": [
                430,
                435
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 21
                },
                "start": {
                  "column": 6,
                  "line": 21
                }
              }
            },
            "range": [
              430,
              448
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 21
              },
              "start": {
                "column": 6,
                "line": 21
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                460,
                466
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "KeyT",
                    "optional": false,
                    "range": [
                      461,
                      465
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 22
                      },
                      "start": {
                        "column": 12,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    461,
                    465
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 22
                    },
                    "start": {
                      "column": 12,
                      "line": 22
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 22
                },
                "start": {
                  "column": 11,
                  "line": 22
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "range": [
                455,
                460
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 22
                },
                "start": {
                  "column": 6,
                  "line": 22
                }
              }
            },
            "range": [
              455,
              466
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 22
              },
              "start": {
                "column": 6,
                "line": 22
              }
            }
          }
        ],
        "range": [
          428,
          466
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 22
          },
          "start": {
            "column": 4,
            "line": 21
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 39,
            "line": 20
          },
          "start": {
            "column": 18,
            "line": 20
          }
        },
        "range": [
          400,
          421
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                414,
                420
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 20
                },
                "start": {
                  "column": 32,
                  "line": 20
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "KeyT",
              "optional": false,
              "range": [
                401,
                405
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 20
                },
                "start": {
                  "column": 19,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              401,
              420
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 20
              },
              "start": {
                "column": 19,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        382,
        467
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 23
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
