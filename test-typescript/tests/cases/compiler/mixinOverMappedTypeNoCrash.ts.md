__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    471
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        65
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ClassInterface",
          "optional": false,
          "range": [
            12,
            26
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
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
                "name": "C",
                "optional": false,
                "range": [
                  52,
                  53
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              },
              "range": [
                52,
                53
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              }
            },
            "range": [
              46,
              53
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "range": [
              39,
              42
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 2
              },
              "start": {
                "column": 5,
                "line": 2
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
                "name": "key",
                "optional": false,
                "range": [
                  58,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 2
                  },
                  "start": {
                    "column": 24,
                    "line": 2
                  }
                }
              },
              "range": [
                58,
                61
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 2
                },
                "start": {
                  "column": 24,
                  "line": 2
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  56,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 2
                  },
                  "start": {
                    "column": 22,
                    "line": 2
                  }
                }
              },
              "range": [
                56,
                57
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 22,
                  "line": 2
                }
              }
            },
            "range": [
              56,
              62
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 2
              },
              "start": {
                "column": 22,
                "line": 2
              }
            }
          },
          "range": [
            32,
            65
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 32,
              "line": 1
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 26,
              "line": 1
            }
          },
          "range": [
            26,
            29
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  27,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 1
                  },
                  "start": {
                    "column": 27,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                27,
                28
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 1
                },
                "start": {
                  "column": 27,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          65
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
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
          "line": 3
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
        "name": "InstanceInterface",
        "optional": false,
        "range": [
          72,
          89
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSConstructSignatureDeclaration",
            "params": [
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "range": [
                    108,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 6
                    },
                    "start": {
                      "column": 11,
                      "line": 6
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 6
                    },
                    "start": {
                      "column": 15,
                      "line": 6
                    }
                  },
                  "range": [
                    112,
                    119
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        114,
                        117
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 6
                        },
                        "start": {
                          "column": 17,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      114,
                      119
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 6
                      },
                      "start": {
                        "column": 17,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  105,
                  119
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 6
                },
                "start": {
                  "column": 23,
                  "line": 6
                }
              },
              "range": [
                120,
                123
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    122,
                    123
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 6
                    },
                    "start": {
                      "column": 25,
                      "line": 6
                    }
                  }
                },
                "range": [
                  122,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 6
                  },
                  "start": {
                    "column": 25,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              101,
              123
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "range": [
                128,
                137
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
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
                  "column": 16,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
                }
              },
              "range": [
                137,
                140
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    139,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 7
                    },
                    "start": {
                      "column": 15,
                      "line": 7
                    }
                  }
                },
                "range": [
                  139,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 7
                  },
                  "start": {
                    "column": 15,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              128,
              140
            ],
            "loc": {
              "end": {
                "column": 16,
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
          95,
          142
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 28,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 5
          },
          "start": {
            "column": 22,
            "line": 5
          }
        },
        "range": [
          89,
          92
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "range": [
                90,
                91
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 5
                },
                "start": {
                  "column": 23,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              90,
              91
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 5
              },
              "start": {
                "column": 23,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        67,
        142
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "range": [
          149,
          160
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 10
          },
          "start": {
            "column": 5,
            "line": 10
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                204,
                207
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      205,
                      206
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 10
                      },
                      "start": {
                        "column": 61,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    205,
                    206
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 10
                    },
                    "start": {
                      "column": 61,
                      "line": 10
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 10
                },
                "start": {
                  "column": 60,
                  "line": 10
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassInterface",
              "optional": false,
              "range": [
                190,
                204
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 10
                },
                "start": {
                  "column": 46,
                  "line": 10
                }
              }
            },
            "range": [
              190,
              207
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 10
              },
              "start": {
                "column": 46,
                "line": 10
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                227,
                230
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "range": [
                      228,
                      229
                    ],
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 10
                      },
                      "start": {
                        "column": 84,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    228,
                    229
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 10
                    },
                    "start": {
                      "column": 84,
                      "line": 10
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 10
                },
                "start": {
                  "column": 83,
                  "line": 10
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "InstanceInterface",
              "optional": false,
              "range": [
                210,
                227
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 10
                },
                "start": {
                  "column": 66,
                  "line": 10
                }
              }
            },
            "range": [
              210,
              230
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 10
              },
              "start": {
                "column": 66,
                "line": 10
              }
            }
          }
        ],
        "range": [
          190,
          230
        ],
        "loc": {
          "end": {
            "column": 86,
            "line": 10
          },
          "start": {
            "column": 46,
            "line": 10
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 43,
            "line": 10
          },
          "start": {
            "column": 16,
            "line": 10
          }
        },
        "range": [
          160,
          187
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
                "name": "Object",
                "optional": false,
                "range": [
                  171,
                  177
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 10
                  },
                  "start": {
                    "column": 27,
                    "line": 10
                  }
                }
              },
              "range": [
                171,
                177
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 10
                },
                "start": {
                  "column": 27,
                  "line": 10
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "range": [
                161,
                162
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 10
                },
                "start": {
                  "column": 17,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              161,
              177
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 10
              },
              "start": {
                "column": 17,
                "line": 10
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSAnyKeyword",
              "range": [
                183,
                186
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 10
                },
                "start": {
                  "column": 39,
                  "line": 10
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                179,
                180
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 10
                },
                "start": {
                  "column": 35,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              179,
              186
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 10
              },
              "start": {
                "column": 35,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        144,
        230
      ],
      "loc": {
        "end": {
          "column": 86,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                355,
                437
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "range": [
                      365,
                      376
                    ],
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
                      }
                    }
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "range": [
                      376,
                      431
                    ],
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
                                "type": "SpreadElement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "range": [
                                    416,
                                    420
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 15
                                    }
                                  }
                                },
                                "range": [
                                  413,
                                  420
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 15
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Super",
                              "range": [
                                407,
                                412
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 15
                                },
                                "start": {
                                  "column": 12,
                                  "line": 15
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              407,
                              421
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 15
                              },
                              "start": {
                                "column": 12,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            407,
                            421
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 15
                            },
                            "start": {
                              "column": 12,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "range": [
                        393,
                        431
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 16
                        },
                        "start": {
                          "column": 36,
                          "line": 14
                        }
                      }
                    },
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
                          "name": "args",
                          "optional": false,
                          "range": [
                            380,
                            384
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 14
                            },
                            "start": {
                              "column": 23,
                              "line": 14
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 14
                            },
                            "start": {
                              "column": 27,
                              "line": 14
                            }
                          },
                          "range": [
                            384,
                            391
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "range": [
                                386,
                                389
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 14
                                },
                                "start": {
                                  "column": 29,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              386,
                              391
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 14
                              },
                              "start": {
                                "column": 29,
                                "line": 14
                              }
                            }
                          }
                        },
                        "range": [
                          377,
                          391
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 14
                          },
                          "start": {
                            "column": 20,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 16
                      },
                      "start": {
                        "column": 19,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    365,
                    431
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 53,
                  "line": 13
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "AnotherOriginalClass",
              "optional": false,
              "range": [
                312,
                332
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 13
                },
                "start": {
                  "column": 10,
                  "line": 13
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "OriginalClass",
              "optional": false,
              "range": [
                341,
                354
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 13
                },
                "start": {
                  "column": 39,
                  "line": 13
                }
              }
            },
            "range": [
              306,
              437
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "AnotherOriginalClass",
              "optional": false,
              "range": [
                449,
                469
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 18
                }
              }
            },
            "range": [
              442,
              469
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "range": [
          300,
          471
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 68,
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
        "name": "cloneClass",
        "optional": false,
        "range": [
          241,
          251
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 12
          },
          "start": {
            "column": 9,
            "line": 12
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "OriginalClass",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 63,
                "line": 12
              },
              "start": {
                "column": 60,
                "line": 12
              }
            },
            "range": [
              292,
              295
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  294,
                  295
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 12
                  },
                  "start": {
                    "column": 62,
                    "line": 12
                  }
                }
              },
              "range": [
                294,
                295
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 12
                },
                "start": {
                  "column": 62,
                  "line": 12
                }
              }
            }
          },
          "range": [
            279,
            295
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 12
            },
            "start": {
              "column": 47,
              "line": 12
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 67,
            "line": 12
          },
          "start": {
            "column": 64,
            "line": 12
          }
        },
        "range": [
          296,
          299
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              298,
              299
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 12
              },
              "start": {
                "column": 66,
                "line": 12
              }
            }
          },
          "range": [
            298,
            299
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 12
            },
            "start": {
              "column": 66,
              "line": 12
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 46,
            "line": 12
          },
          "start": {
            "column": 19,
            "line": 12
          }
        },
        "range": [
          251,
          278
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
                  273,
                  277
                ],
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "range": [
                      274,
                      276
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 12
                      },
                      "start": {
                        "column": 42,
                        "line": 12
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 12
                  },
                  "start": {
                    "column": 41,
                    "line": 12
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "range": [
                  262,
                  273
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 12
                  },
                  "start": {
                    "column": 30,
                    "line": 12
                  }
                }
              },
              "range": [
                262,
                277
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 12
                },
                "start": {
                  "column": 30,
                  "line": 12
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
                252,
                253
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 12
                },
                "start": {
                  "column": 20,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              252,
              277
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 12
              },
              "start": {
                "column": 20,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        232,
        471
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
