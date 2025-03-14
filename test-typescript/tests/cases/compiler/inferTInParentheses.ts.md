__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    659
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F1",
        "optional": false,
        "range": [
          5,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              },
              "range": [
                14,
                24
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      17,
                      23
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 1
                      },
                      "start": {
                        "column": 17,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  16,
                  24
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 1
                  },
                  "start": {
                    "column": 16,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              11,
              24
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 1
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 33,
              "line": 1
            },
            "start": {
              "column": 26,
              "line": 1
            }
          },
          "range": [
            26,
            33
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              29,
              33
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 1
              },
              "start": {
                "column": 29,
                "line": 1
              }
            }
          }
        },
        "range": [
          10,
          33
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        34
      ],
      "loc": {
        "end": {
          "column": 34,
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
        "name": "IsNumber",
        "optional": false,
        "range": [
          40,
          48
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
              "column": 35,
              "line": 2
            },
            "start": {
              "column": 34,
              "line": 2
            }
          }
        },
        "range": [
          69,
          70
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 2
          },
          "start": {
            "column": 34,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 2
          },
          "start": {
            "column": 13,
            "line": 2
          }
        },
        "range": [
          48,
          66
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                59,
                65
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 2
                },
                "start": {
                  "column": 24,
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
                49,
                50
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
              49,
              65
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 2
              },
              "start": {
                "column": 14,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        35,
        71
      ],
      "loc": {
        "end": {
          "column": 36,
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
        "name": "T1",
        "optional": false,
        "range": [
          78,
          80
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
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
            "name": "F1",
            "optional": false,
            "range": [
              83,
              85
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 4
              },
              "start": {
                "column": 10,
                "line": 4
              }
            }
          },
          "range": [
            83,
            85
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 4
            },
            "start": {
              "column": 10,
              "line": 4
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "range": [
                  98,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 4
                  },
                  "start": {
                    "column": 25,
                    "line": 4
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 4
                  },
                  "start": {
                    "column": 29,
                    "line": 4
                  }
                },
                "range": [
                  102,
                  113
                ],
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
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
                          "column": 39,
                          "line": 4
                        },
                        "start": {
                          "column": 38,
                          "line": 4
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      111,
                      112
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 4
                      },
                      "start": {
                        "column": 38,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    105,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 4
                    },
                    "start": {
                      "column": 32,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                95,
                113
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 4
                },
                "start": {
                  "column": 22,
                  "line": 4
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 49,
                "line": 4
              },
              "start": {
                "column": 42,
                "line": 4
              }
            },
            "range": [
              115,
              122
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                118,
                122
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 4
                },
                "start": {
                  "column": 45,
                  "line": 4
                }
              }
            }
          },
          "range": [
            94,
            122
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 4
            },
            "start": {
              "column": 21,
              "line": 4
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            129,
            134
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 4
            },
            "start": {
              "column": 56,
              "line": 4
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              125,
              126
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 4
              },
              "start": {
                "column": 52,
                "line": 4
              }
            }
          },
          "range": [
            125,
            126
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 4
            },
            "start": {
              "column": 52,
              "line": 4
            }
          }
        },
        "range": [
          83,
          134
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 4
          },
          "start": {
            "column": 10,
            "line": 4
          }
        }
      },
      "range": [
        73,
        135
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "range": [
          141,
          143
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
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
            "name": "F1",
            "optional": false,
            "range": [
              146,
              148
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 5
              },
              "start": {
                "column": 10,
                "line": 5
              }
            }
          },
          "range": [
            146,
            148
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 5
            },
            "start": {
              "column": 10,
              "line": 5
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 5
                  },
                  "start": {
                    "column": 26,
                    "line": 5
                  }
                },
                "range": [
                  162,
                  178
                ],
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSRestType",
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              175,
                              176
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 5
                              },
                              "start": {
                                "column": 39,
                                "line": 5
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            175,
                            176
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 5
                            },
                            "start": {
                              "column": 39,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          169,
                          176
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 5
                          },
                          "start": {
                            "column": 33,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        165,
                        177
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 5
                        },
                        "start": {
                          "column": 29,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    164,
                    178
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 5
                    },
                    "start": {
                      "column": 28,
                      "line": 5
                    }
                  }
                }
              },
              "range": [
                158,
                178
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 5
                },
                "start": {
                  "column": 22,
                  "line": 5
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 51,
                "line": 5
              },
              "start": {
                "column": 44,
                "line": 5
              }
            },
            "range": [
              180,
              187
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                183,
                187
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 5
                },
                "start": {
                  "column": 47,
                  "line": 5
                }
              }
            }
          },
          "range": [
            157,
            187
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 5
            },
            "start": {
              "column": 21,
              "line": 5
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            194,
            199
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 5
            },
            "start": {
              "column": 58,
              "line": 5
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              190,
              191
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 5
              },
              "start": {
                "column": 54,
                "line": 5
              }
            }
          },
          "range": [
            190,
            191
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 5
            },
            "start": {
              "column": 54,
              "line": 5
            }
          }
        },
        "range": [
          146,
          199
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "range": [
        136,
        200
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 5
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
        "name": "T3",
        "optional": false,
        "range": [
          206,
          208
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
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
              214,
              215
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 6
              },
              "start": {
                "column": 13,
                "line": 6
              }
            }
          },
          "range": [
            214,
            215
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 6
            },
            "start": {
              "column": 13,
              "line": 6
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              232,
              243
            ],
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "range": [
                      240,
                      241
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 6
                      },
                      "start": {
                        "column": 39,
                        "line": 6
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    240,
                    241
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 6
                    },
                    "start": {
                      "column": 39,
                      "line": 6
                    }
                  }
                },
                "range": [
                  234,
                  241
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 6
                  },
                  "start": {
                    "column": 33,
                    "line": 6
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 6
              },
              "start": {
                "column": 31,
                "line": 6
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IsNumber",
            "optional": false,
            "range": [
              224,
              232
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 6
              },
              "start": {
                "column": 23,
                "line": 6
              }
            }
          },
          "range": [
            224,
            243
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 6
            },
            "start": {
              "column": 23,
              "line": 6
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "false",
            "value": false,
            "range": [
              253,
              258
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 6
              },
              "start": {
                "column": 52,
                "line": 6
              }
            }
          },
          "range": [
            253,
            258
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 6
            },
            "start": {
              "column": 52,
              "line": 6
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              246,
              250
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 6
              },
              "start": {
                "column": 45,
                "line": 6
              }
            }
          },
          "range": [
            246,
            250
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 6
            },
            "start": {
              "column": 45,
              "line": 6
            }
          }
        },
        "range": [
          214,
          258
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 6
          },
          "start": {
            "column": 13,
            "line": 6
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 6
          }
        },
        "range": [
          208,
          211
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
                209,
                210
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              209,
              210
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 6
              },
              "start": {
                "column": 8,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        201,
        259
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "range": [
          266,
          268
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
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
            "name": "F1",
            "optional": false,
            "range": [
              271,
              273
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 8
              },
              "start": {
                "column": 10,
                "line": 8
              }
            }
          },
          "range": [
            271,
            273
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 8
            },
            "start": {
              "column": 10,
              "line": 8
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "range": [
                  286,
                  290
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 8
                  },
                  "start": {
                    "column": 25,
                    "line": 8
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 8
                  },
                  "start": {
                    "column": 29,
                    "line": 8
                  }
                },
                "range": [
                  290,
                  303
                ],
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        300,
                        301
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 8
                        },
                        "start": {
                          "column": 39,
                          "line": 8
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      300,
                      301
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 8
                      },
                      "start": {
                        "column": 39,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    294,
                    301
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 8
                    },
                    "start": {
                      "column": 33,
                      "line": 8
                    }
                  }
                }
              },
              "range": [
                283,
                303
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 8
                },
                "start": {
                  "column": 22,
                  "line": 8
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 51,
                "line": 8
              },
              "start": {
                "column": 44,
                "line": 8
              }
            },
            "range": [
              305,
              312
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                308,
                312
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 8
                },
                "start": {
                  "column": 47,
                  "line": 8
                }
              }
            }
          },
          "range": [
            282,
            312
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 8
            },
            "start": {
              "column": 21,
              "line": 8
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            319,
            324
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 8
            },
            "start": {
              "column": 58,
              "line": 8
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              315,
              316
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
            315,
            316
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
          271,
          324
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 8
          },
          "start": {
            "column": 10,
            "line": 8
          }
        }
      },
      "range": [
        261,
        325
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "range": [
          331,
          333
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 9
          },
          "start": {
            "column": 5,
            "line": 9
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
            "name": "F1",
            "optional": false,
            "range": [
              336,
              338
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 9
              },
              "start": {
                "column": 10,
                "line": 9
              }
            }
          },
          "range": [
            336,
            338
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 9
            },
            "start": {
              "column": 10,
              "line": 9
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 9
                  },
                  "start": {
                    "column": 26,
                    "line": 9
                  }
                },
                "range": [
                  352,
                  370
                ],
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSRestType",
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              366,
                              367
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 9
                              },
                              "start": {
                                "column": 40,
                                "line": 9
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            366,
                            367
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 9
                            },
                            "start": {
                              "column": 40,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          360,
                          367
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 9
                          },
                          "start": {
                            "column": 34,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        355,
                        369
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 9
                        },
                        "start": {
                          "column": 29,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "range": [
                    354,
                    370
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 9
                    },
                    "start": {
                      "column": 28,
                      "line": 9
                    }
                  }
                }
              },
              "range": [
                348,
                370
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 9
                },
                "start": {
                  "column": 22,
                  "line": 9
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 9
              },
              "start": {
                "column": 46,
                "line": 9
              }
            },
            "range": [
              372,
              379
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                375,
                379
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 9
                },
                "start": {
                  "column": 49,
                  "line": 9
                }
              }
            }
          },
          "range": [
            347,
            379
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 9
            },
            "start": {
              "column": 21,
              "line": 9
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            386,
            391
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 9
            },
            "start": {
              "column": 60,
              "line": 9
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              382,
              383
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 9
              },
              "start": {
                "column": 56,
                "line": 9
              }
            }
          },
          "range": [
            382,
            383
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 9
            },
            "start": {
              "column": 56,
              "line": 9
            }
          }
        },
        "range": [
          336,
          391
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 9
          },
          "start": {
            "column": 10,
            "line": 9
          }
        }
      },
      "range": [
        326,
        392
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T6",
        "optional": false,
        "range": [
          398,
          400
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 10
          },
          "start": {
            "column": 5,
            "line": 10
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
              406,
              407
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 10
              },
              "start": {
                "column": 13,
                "line": 10
              }
            }
          },
          "range": [
            406,
            407
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 10
            },
            "start": {
              "column": 13,
              "line": 10
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              424,
              437
            ],
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "range": [
                      433,
                      434
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 10
                      },
                      "start": {
                        "column": 40,
                        "line": 10
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    433,
                    434
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 10
                    },
                    "start": {
                      "column": 40,
                      "line": 10
                    }
                  }
                },
                "range": [
                  427,
                  434
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 10
                  },
                  "start": {
                    "column": 34,
                    "line": 10
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 10
              },
              "start": {
                "column": 31,
                "line": 10
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IsNumber",
            "optional": false,
            "range": [
              416,
              424
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 10
              },
              "start": {
                "column": 23,
                "line": 10
              }
            }
          },
          "range": [
            416,
            437
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 10
            },
            "start": {
              "column": 23,
              "line": 10
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "false",
            "value": false,
            "range": [
              447,
              452
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 10
              },
              "start": {
                "column": 54,
                "line": 10
              }
            }
          },
          "range": [
            447,
            452
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 10
            },
            "start": {
              "column": 54,
              "line": 10
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              440,
              444
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 10
              },
              "start": {
                "column": 47,
                "line": 10
              }
            }
          },
          "range": [
            440,
            444
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 10
            },
            "start": {
              "column": 47,
              "line": 10
            }
          }
        },
        "range": [
          406,
          452
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 10
          },
          "start": {
            "column": 13,
            "line": 10
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 10
          },
          "start": {
            "column": 7,
            "line": 10
          }
        },
        "range": [
          400,
          403
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
                401,
                402
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              401,
              402
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 10
              },
              "start": {
                "column": 8,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        393,
        453
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T7",
        "optional": false,
        "range": [
          460,
          462
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 12
          },
          "start": {
            "column": 5,
            "line": 12
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
            "name": "F1",
            "optional": false,
            "range": [
              465,
              467
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 12
              },
              "start": {
                "column": 10,
                "line": 12
              }
            }
          },
          "range": [
            465,
            467
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 12
            },
            "start": {
              "column": 10,
              "line": 12
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "range": [
                  480,
                  484
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 12
                  },
                  "start": {
                    "column": 25,
                    "line": 12
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 12
                  },
                  "start": {
                    "column": 29,
                    "line": 12
                  }
                },
                "range": [
                  484,
                  501
                ],
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        496,
                        497
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 12
                        },
                        "start": {
                          "column": 41,
                          "line": 12
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      496,
                      497
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 12
                      },
                      "start": {
                        "column": 41,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    490,
                    497
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 12
                    },
                    "start": {
                      "column": 35,
                      "line": 12
                    }
                  }
                }
              },
              "range": [
                477,
                501
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 12
                },
                "start": {
                  "column": 22,
                  "line": 12
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 55,
                "line": 12
              },
              "start": {
                "column": 48,
                "line": 12
              }
            },
            "range": [
              503,
              510
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                506,
                510
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
          },
          "range": [
            476,
            510
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 12
            },
            "start": {
              "column": 21,
              "line": 12
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            517,
            522
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 12
            },
            "start": {
              "column": 62,
              "line": 12
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              513,
              514
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 12
              },
              "start": {
                "column": 58,
                "line": 12
              }
            }
          },
          "range": [
            513,
            514
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 12
            },
            "start": {
              "column": 58,
              "line": 12
            }
          }
        },
        "range": [
          465,
          522
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 12
          },
          "start": {
            "column": 10,
            "line": 12
          }
        }
      },
      "range": [
        455,
        523
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T8",
        "optional": false,
        "range": [
          529,
          531
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 13
          },
          "start": {
            "column": 5,
            "line": 13
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
            "name": "F1",
            "optional": false,
            "range": [
              534,
              536
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 13
              },
              "start": {
                "column": 10,
                "line": 13
              }
            }
          },
          "range": [
            534,
            536
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 13
            },
            "start": {
              "column": 10,
              "line": 13
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 13
                  },
                  "start": {
                    "column": 26,
                    "line": 13
                  }
                },
                "range": [
                  550,
                  572
                ],
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSRestType",
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              566,
                              567
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 13
                              },
                              "start": {
                                "column": 42,
                                "line": 13
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            566,
                            567
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 13
                            },
                            "start": {
                              "column": 42,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          560,
                          567
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 13
                          },
                          "start": {
                            "column": 36,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        553,
                        571
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 13
                        },
                        "start": {
                          "column": 29,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "range": [
                    552,
                    572
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 13
                    },
                    "start": {
                      "column": 28,
                      "line": 13
                    }
                  }
                }
              },
              "range": [
                546,
                572
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 13
                },
                "start": {
                  "column": 22,
                  "line": 13
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 13
              },
              "start": {
                "column": 50,
                "line": 13
              }
            },
            "range": [
              574,
              581
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                577,
                581
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 13
                },
                "start": {
                  "column": 53,
                  "line": 13
                }
              }
            }
          },
          "range": [
            545,
            581
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 13
            },
            "start": {
              "column": 21,
              "line": 13
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            588,
            593
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 13
            },
            "start": {
              "column": 64,
              "line": 13
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              584,
              585
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 13
              },
              "start": {
                "column": 60,
                "line": 13
              }
            }
          },
          "range": [
            584,
            585
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 13
            },
            "start": {
              "column": 60,
              "line": 13
            }
          }
        },
        "range": [
          534,
          593
        ],
        "loc": {
          "end": {
            "column": 69,
            "line": 13
          },
          "start": {
            "column": 10,
            "line": 13
          }
        }
      },
      "range": [
        524,
        594
      ],
      "loc": {
        "end": {
          "column": 70,
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
        "name": "T9",
        "optional": false,
        "range": [
          600,
          602
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 14
          },
          "start": {
            "column": 5,
            "line": 14
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
              608,
              609
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 14
              },
              "start": {
                "column": 13,
                "line": 14
              }
            }
          },
          "range": [
            608,
            609
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 14
            },
            "start": {
              "column": 13,
              "line": 14
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              626,
              643
            ],
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "range": [
                      637,
                      638
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 14
                      },
                      "start": {
                        "column": 42,
                        "line": 14
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    637,
                    638
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 14
                    },
                    "start": {
                      "column": 42,
                      "line": 14
                    }
                  }
                },
                "range": [
                  631,
                  638
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 14
                  },
                  "start": {
                    "column": 36,
                    "line": 14
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 14
              },
              "start": {
                "column": 31,
                "line": 14
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IsNumber",
            "optional": false,
            "range": [
              618,
              626
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 14
              },
              "start": {
                "column": 23,
                "line": 14
              }
            }
          },
          "range": [
            618,
            643
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 14
            },
            "start": {
              "column": 23,
              "line": 14
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "false",
            "value": false,
            "range": [
              653,
              658
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 14
              },
              "start": {
                "column": 58,
                "line": 14
              }
            }
          },
          "range": [
            653,
            658
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 14
            },
            "start": {
              "column": 58,
              "line": 14
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              646,
              650
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 14
              },
              "start": {
                "column": 51,
                "line": 14
              }
            }
          },
          "range": [
            646,
            650
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 14
            },
            "start": {
              "column": 51,
              "line": 14
            }
          }
        },
        "range": [
          608,
          658
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 14
          },
          "start": {
            "column": 13,
            "line": 14
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 14
          },
          "start": {
            "column": 7,
            "line": 14
          }
        },
        "range": [
          602,
          605
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
                603,
                604
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              603,
              604
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 14
              },
              "start": {
                "column": 8,
                "line": 14
              }
            }
          }
        ]
      },
      "range": [
        595,
        659
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 64,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
