__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    535
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wrapper",
        "optional": false,
        "range": [
          5,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
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
              "name": "_type",
              "optional": false,
              "range": [
                22,
                27
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 2
                },
                "start": {
                  "column": 2,
                  "line": 2
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
                  "column": 10,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              },
              "range": [
                27,
                30
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    29,
                    30
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 2
                    },
                    "start": {
                      "column": 9,
                      "line": 2
                    }
                  }
                },
                "range": [
                  29,
                  30
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              22,
              31
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          }
        ],
        "range": [
          18,
          33
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        },
        "range": [
          12,
          15
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
            "out": false,
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
          }
        ]
      },
      "range": [
        0,
        34
      ],
      "loc": {
        "end": {
          "column": 2,
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
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "stringWrapper",
        "optional": false,
        "range": [
          53,
          66
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 5
          },
          "start": {
            "column": 17,
            "line": 5
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 49,
            "line": 5
          },
          "start": {
            "column": 32,
            "line": 5
          }
        },
        "range": [
          68,
          85
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              77,
              85
            ],
            "params": [
              {
                "type": "TSStringKeyword",
                "range": [
                  78,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 5
                  },
                  "start": {
                    "column": 42,
                    "line": 5
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 5
              },
              "start": {
                "column": 41,
                "line": 5
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Wrapper",
            "optional": false,
            "range": [
              70,
              77
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 5
              },
              "start": {
                "column": 34,
                "line": 5
              }
            }
          },
          "range": [
            70,
            85
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 5
            },
            "start": {
              "column": 34,
              "line": 5
            }
          }
        }
      },
      "range": [
        36,
        86
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
        "name": "objWrapper",
        "optional": false,
        "range": [
          105,
          115
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 7
          },
          "start": {
            "column": 17,
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
                "column": 8,
                "line": 8
              },
              "start": {
                "column": 5,
                "line": 8
              }
            },
            "range": [
              162,
              165
            ],
            "typeAnnotation": {
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
                    "column": 8,
                    "line": 8
                  },
                  "start": {
                    "column": 7,
                    "line": 8
                  }
                }
              },
              "range": [
                164,
                165
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 8
                },
                "start": {
                  "column": 7,
                  "line": 8
                }
              }
            }
          },
          "range": [
            159,
            165
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 8
            },
            "start": {
              "column": 2,
              "line": 8
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 13,
            "line": 9
          },
          "start": {
            "column": 1,
            "line": 9
          }
        },
        "range": [
          168,
          180
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              177,
              180
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
                    178,
                    179
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 9
                    },
                    "start": {
                      "column": 11,
                      "line": 9
                    }
                  }
                },
                "range": [
                  178,
                  179
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 9
                  },
                  "start": {
                    "column": 11,
                    "line": 9
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 9
              },
              "start": {
                "column": 10,
                "line": 9
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Wrapper",
            "optional": false,
            "range": [
              170,
              177
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 9
              },
              "start": {
                "column": 3,
                "line": 9
              }
            }
          },
          "range": [
            170,
            180
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 9
            },
            "start": {
              "column": 3,
              "line": 9
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 67,
            "line": 7
          },
          "start": {
            "column": 27,
            "line": 7
          }
        },
        "range": [
          115,
          155
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  132,
                  154
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      133,
                      139
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 7
                      },
                      "start": {
                        "column": 45,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        148,
                        153
                      ],
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            149,
                            152
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 7
                            },
                            "start": {
                              "column": 61,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 7
                        },
                        "start": {
                          "column": 60,
                          "line": 7
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Wrapper",
                      "optional": false,
                      "range": [
                        141,
                        148
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 7
                        },
                        "start": {
                          "column": 53,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      141,
                      153
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 7
                      },
                      "start": {
                        "column": 53,
                        "line": 7
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 7
                  },
                  "start": {
                    "column": 44,
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
                  126,
                  132
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 7
                  },
                  "start": {
                    "column": 38,
                    "line": 7
                  }
                }
              },
              "range": [
                126,
                154
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 7
                },
                "start": {
                  "column": 38,
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
                116,
                117
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 7
                },
                "start": {
                  "column": 28,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              116,
              154
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 7
              },
              "start": {
                "column": 28,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        88,
        181
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "value",
            "optional": false,
            "range": [
              189,
              194
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 11
              }
            }
          },
          "init": {
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
                      "name": "prop1",
                      "optional": false,
                      "range": [
                        212,
                        217
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 12
                        },
                        "start": {
                          "column": 2,
                          "line": 12
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "stringWrapper",
                          "optional": false,
                          "range": [
                            219,
                            232
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 12
                            },
                            "start": {
                              "column": 9,
                              "line": 12
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          219,
                          234
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 12
                          },
                          "start": {
                            "column": 9,
                            "line": 12
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            245,
                            254
                          ],
                          "params": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "raw": "\"hello\"",
                                "value": "hello",
                                "range": [
                                  246,
                                  253
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                246,
                                253
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 12
                                },
                                "start": {
                                  "column": 36,
                                  "line": 12
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 12
                            },
                            "start": {
                              "column": 35,
                              "line": 12
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Wrapper",
                          "optional": false,
                          "range": [
                            238,
                            245
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 12
                            },
                            "start": {
                              "column": 28,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          238,
                          254
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 12
                          },
                          "start": {
                            "column": 28,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        219,
                        254
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 12
                        },
                        "start": {
                          "column": 9,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      212,
                      254
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 12
                      },
                      "start": {
                        "column": 2,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  208,
                  257
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 13
                  },
                  "start": {
                    "column": 25,
                    "line": 11
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "objWrapper",
              "optional": false,
              "range": [
                197,
                207
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
                }
              }
            },
            "optional": false,
            "range": [
              197,
              258
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 13
              },
              "start": {
                "column": 14,
                "line": 11
              }
            }
          },
          "range": [
            189,
            258
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 13
            },
            "start": {
              "column": 6,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        183,
        259
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unwrap",
        "optional": false,
        "range": [
          266,
          272
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 15
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              278,
              279
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 15
              },
              "start": {
                "column": 17,
                "line": 15
              }
            }
          },
          "range": [
            278,
            279
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 15
            },
            "start": {
              "column": 17,
              "line": 15
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              295,
              300
            ],
            "params": [
              {
                "type": "TSAnyKeyword",
                "range": [
                  296,
                  299
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 15
                  },
                  "start": {
                    "column": 35,
                    "line": 15
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 15
              },
              "start": {
                "column": 34,
                "line": 15
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Wrapper",
            "optional": false,
            "range": [
              288,
              295
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 15
              },
              "start": {
                "column": 27,
                "line": 15
              }
            }
          },
          "range": [
            288,
            300
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 15
            },
            "start": {
              "column": 27,
              "line": 15
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            435,
            440
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"_type\"",
                "value": "_type",
                "range": [
                  307,
                  314
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 16
                  },
                  "start": {
                    "column": 6,
                    "line": 16
                  }
                }
              },
              "range": [
                307,
                314
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 16
                },
                "start": {
                  "column": 6,
                  "line": 16
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
                  305,
                  306
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
                  }
                }
              },
              "range": [
                305,
                306
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              305,
              315
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                330,
                352
              ],
              "params": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    331,
                    337
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 16
                    },
                    "start": {
                      "column": 30,
                      "line": 16
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      346,
                      351
                    ],
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          347,
                          350
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 16
                          },
                          "start": {
                            "column": 46,
                            "line": 16
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 16
                      },
                      "start": {
                        "column": 45,
                        "line": 16
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Wrapper",
                    "optional": false,
                    "range": [
                      339,
                      346
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 16
                      },
                      "start": {
                        "column": 38,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    339,
                    351
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 16
                    },
                    "start": {
                      "column": 38,
                      "line": 16
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 16
                },
                "start": {
                  "column": 29,
                  "line": 16
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Record",
              "optional": false,
              "range": [
                324,
                330
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 16
                },
                "start": {
                  "column": 23,
                  "line": 16
                }
              }
            },
            "range": [
              324,
              352
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 16
              },
              "start": {
                "column": 23,
                "line": 16
              }
            }
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"_type\"",
                "value": "_type",
                "range": [
                  422,
                  429
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              },
              "range": [
                422,
                429
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 18
                },
                "start": {
                  "column": 8,
                  "line": 18
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
                  420,
                  421
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 18
                  },
                  "start": {
                    "column": 6,
                    "line": 18
                  }
                }
              },
              "range": [
                420,
                421
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 18
                },
                "start": {
                  "column": 6,
                  "line": 18
                }
              }
            },
            "range": [
              420,
              430
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 18
              },
              "start": {
                "column": 6,
                "line": 18
              }
            }
          },
          "trueType": {
            "type": "TSMappedType",
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"_type\"",
                    "value": "_type",
                    "range": [
                      377,
                      384
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 17
                      },
                      "start": {
                        "column": 24,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    377,
                    384
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 17
                    },
                    "start": {
                      "column": 24,
                      "line": 17
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
                      375,
                      376
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 17
                      },
                      "start": {
                        "column": 22,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    375,
                    376
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 17
                    },
                    "start": {
                      "column": 22,
                      "line": 17
                    }
                  }
                },
                "range": [
                  375,
                  385
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 17
                  },
                  "start": {
                    "column": 22,
                    "line": 17
                  }
                }
              },
              "range": [
                369,
                385
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 17
                },
                "start": {
                  "column": 16,
                  "line": 17
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "range": [
                362,
                365
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 17
                },
                "start": {
                  "column": 9,
                  "line": 17
                }
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  394,
                  411
                ],
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Key",
                        "optional": false,
                        "range": [
                          406,
                          409
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 17
                          },
                          "start": {
                            "column": 53,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        406,
                        409
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 17
                        },
                        "start": {
                          "column": 53,
                          "line": 17
                        }
                      }
                    },
                    "objectType": {
                      "type": "TSIndexedAccessType",
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "\"_type\"",
                          "value": "_type",
                          "range": [
                            397,
                            404
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 17
                            },
                            "start": {
                              "column": 44,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          397,
                          404
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 17
                          },
                          "start": {
                            "column": 44,
                            "line": 17
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
                            395,
                            396
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 17
                            },
                            "start": {
                              "column": 42,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          395,
                          396
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 17
                          },
                          "start": {
                            "column": 42,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        395,
                        405
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 17
                        },
                        "start": {
                          "column": 42,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      395,
                      410
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 17
                      },
                      "start": {
                        "column": 42,
                        "line": 17
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 17
                  },
                  "start": {
                    "column": 41,
                    "line": 17
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Unwrap",
                "optional": false,
                "range": [
                  388,
                  394
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 17
                  },
                  "start": {
                    "column": 35,
                    "line": 17
                  }
                }
              },
              "range": [
                388,
                411
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 17
                },
                "start": {
                  "column": 35,
                  "line": 17
                }
              }
            },
            "range": [
              359,
              413
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 17
              },
              "start": {
                "column": 6,
                "line": 17
              }
            }
          },
          "range": [
            305,
            430
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        },
        "range": [
          278,
          440
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 19
          },
          "start": {
            "column": 17,
            "line": 15
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 15
          },
          "start": {
            "column": 11,
            "line": 15
          }
        },
        "range": [
          272,
          275
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
                273,
                274
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 15
                },
                "start": {
                  "column": 12,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              273,
              274
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 15
              },
              "start": {
                "column": 12,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        261,
        441
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 15
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
        "name": "unwrap",
        "optional": false,
        "range": [
          460,
          466
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 21
          },
          "start": {
            "column": 17,
            "line": 21
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "wrapper",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 21
              },
              "start": {
                "column": 34,
                "line": 21
              }
            },
            "range": [
              477,
              480
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  479,
                  480
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 21
                  },
                  "start": {
                    "column": 36,
                    "line": 21
                  }
                }
              },
              "range": [
                479,
                480
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 21
                },
                "start": {
                  "column": 36,
                  "line": 21
                }
              }
            }
          },
          "range": [
            470,
            480
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 21
            },
            "start": {
              "column": 27,
              "line": 21
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 49,
            "line": 21
          },
          "start": {
            "column": 38,
            "line": 21
          }
        },
        "range": [
          481,
          492
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              489,
              492
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
                    490,
                    491
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 21
                    },
                    "start": {
                      "column": 47,
                      "line": 21
                    }
                  }
                },
                "range": [
                  490,
                  491
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 21
                  },
                  "start": {
                    "column": 47,
                    "line": 21
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 21
              },
              "start": {
                "column": 46,
                "line": 21
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Unwrap",
            "optional": false,
            "range": [
              483,
              489
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 21
              },
              "start": {
                "column": 40,
                "line": 21
              }
            }
          },
          "range": [
            483,
            492
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 21
            },
            "start": {
              "column": 40,
              "line": 21
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 21
          },
          "start": {
            "column": 23,
            "line": 21
          }
        },
        "range": [
          466,
          469
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
                467,
                468
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 21
                },
                "start": {
                  "column": 24,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              467,
              468
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 21
              },
              "start": {
                "column": 24,
                "line": 21
              }
            }
          }
        ]
      },
      "range": [
        443,
        493
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        495,
        534
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
              "name": "unwrapped",
              "optional": false,
              "range": [
                508,
                517
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 23
                },
                "start": {
                  "column": 13,
                  "line": 23
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    527,
                    532
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 23
                    },
                    "start": {
                      "column": 32,
                      "line": 23
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "unwrap",
                "optional": false,
                "range": [
                  520,
                  526
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 23
                  },
                  "start": {
                    "column": 25,
                    "line": 23
                  }
                }
              },
              "optional": false,
              "range": [
                520,
                533
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 23
                },
                "start": {
                  "column": 25,
                  "line": 23
                }
              }
            },
            "range": [
              508,
              533
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 23
              },
              "start": {
                "column": 13,
                "line": 23
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          502,
          534
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 23
          },
          "start": {
            "column": 7,
            "line": 23
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 39,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
