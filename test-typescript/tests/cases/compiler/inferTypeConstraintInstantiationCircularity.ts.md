__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1702
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AMappedType",
        "optional": false,
        "range": [
          5,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 5,
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
              "name": "T",
              "optional": false,
              "range": [
                42,
                43
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 1
                },
                "start": {
                  "column": 42,
                  "line": 1
                }
              }
            },
            "range": [
              42,
              43
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 1
              },
              "start": {
                "column": 42,
                "line": 1
              }
            }
          },
          "range": [
            36,
            43
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 1
            },
            "start": {
              "column": 36,
              "line": 1
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "KeyType",
          "optional": false,
          "range": [
            25,
            32
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 1
            },
            "start": {
              "column": 25,
              "line": 1
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            46,
            52
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 1
            },
            "start": {
              "column": 46,
              "line": 1
            }
          }
        },
        "range": [
          22,
          54
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 1
          },
          "start": {
            "column": 22,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 16,
            "line": 1
          }
        },
        "range": [
          16,
          19
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
                17,
                18
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              17,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        55
      ],
      "loc": {
        "end": {
          "column": 55,
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
        "name": "HasM",
        "optional": false,
        "range": [
          62,
          66
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
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
              "name": "m",
              "optional": false,
              "range": [
                73,
                74
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
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
                  "line": 4
                },
                "start": {
                  "column": 3,
                  "line": 4
                }
              },
              "range": [
                74,
                82
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  76,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 4
                  },
                  "start": {
                    "column": 5,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              73,
              83
            ],
            "loc": {
              "end": {
                "column": 12,
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
          69,
          85
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 12,
            "line": 3
          }
        }
      },
      "range": [
        57,
        86
      ],
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
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          224,
          255
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "tee",
              "optional": false,
              "range": [
                228,
                231
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 2,
                  "line": 13
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
                  "column": 8,
                  "line": 13
                },
                "start": {
                  "column": 5,
                  "line": 13
                }
              },
              "range": [
                231,
                234
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    233,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 13
                    },
                    "start": {
                      "column": 7,
                      "line": 13
                    }
                  }
                },
                "range": [
                  233,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 13
                  },
                  "start": {
                    "column": 7,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              228,
              235
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 13
              },
              "start": {
                "column": 2,
                "line": 13
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "output",
              "optional": false,
              "range": [
                238,
                244
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 14
                },
                "start": {
                  "column": 2,
                  "line": 14
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
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              },
              "range": [
                244,
                252
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Output",
                  "optional": false,
                  "range": [
                    246,
                    252
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 14
                    },
                    "start": {
                      "column": 10,
                      "line": 14
                    }
                  }
                },
                "range": [
                  246,
                  252
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 14
                  },
                  "start": {
                    "column": 10,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              238,
              253
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 14
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 2,
            "line": 12
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X1",
        "optional": false,
        "range": [
          131,
          133
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 12,
            "line": 9
          }
        },
        "range": [
          133,
          223
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
                "name": "HasM",
                "optional": false,
                "range": [
                  147,
                  151
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 10
                  },
                  "start": {
                    "column": 12,
                    "line": 10
                  }
                }
              },
              "range": [
                147,
                151
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 10
                },
                "start": {
                  "column": 12,
                  "line": 10
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
                137,
                138
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 10
                },
                "start": {
                  "column": 2,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              137,
              151
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 10
              },
              "start": {
                "column": 2,
                "line": 10
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  175,
                  221
                ],
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "range": [
                                178,
                                179
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 11
                                },
                                "start": {
                                  "column": 25,
                                  "line": 11
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
                                  "column": 34,
                                  "line": 11
                                },
                                "start": {
                                  "column": 26,
                                  "line": 11
                                }
                              },
                              "range": [
                                179,
                                187
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  181,
                                  187
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 11
                                  }
                                }
                              }
                            },
                            "range": [
                              178,
                              188
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 11
                              },
                              "start": {
                                "column": 25,
                                "line": 11
                              }
                            }
                          }
                        ],
                        "range": [
                          176,
                          190
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 11
                          },
                          "start": {
                            "column": 23,
                            "line": 11
                          }
                        }
                      },
                      {
                        "type": "TSMappedType",
                        "constraint": {
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
                                207,
                                208
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 11
                                },
                                "start": {
                                  "column": 54,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              207,
                              208
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 11
                              },
                              "start": {
                                "column": 54,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            201,
                            208
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 11
                            },
                            "start": {
                              "column": 48,
                              "line": 11
                            }
                          }
                        },
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "range": [
                            196,
                            197
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 11
                            },
                            "start": {
                              "column": 43,
                              "line": 11
                            }
                          }
                        },
                        "nameType": null,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            211,
                            217
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 11
                            },
                            "start": {
                              "column": 58,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          193,
                          220
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 11
                          },
                          "start": {
                            "column": 40,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "range": [
                      176,
                      220
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 11
                      },
                      "start": {
                        "column": 23,
                        "line": 11
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 11
                  },
                  "start": {
                    "column": 22,
                    "line": 11
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AMappedType",
                "optional": false,
                "range": [
                  164,
                  175
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 11
                  }
                }
              },
              "range": [
                164,
                221
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Output",
              "optional": false,
              "range": [
                155,
                161
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 11
                },
                "start": {
                  "column": 2,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              155,
              221
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        121,
        255
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
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
        "name": "F1",
        "optional": false,
        "range": [
          262,
          264
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 17
          },
          "start": {
            "column": 5,
            "line": 17
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
              270,
              271
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 17
              },
              "start": {
                "column": 13,
                "line": 17
              }
            }
          },
          "range": [
            270,
            271
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 17
            },
            "start": {
              "column": 13,
              "line": 17
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              282,
              291
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
                    "name": "U",
                    "optional": false,
                    "range": [
                      289,
                      290
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 17
                      },
                      "start": {
                        "column": 32,
                        "line": 17
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    289,
                    290
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 17
                    },
                    "start": {
                      "column": 32,
                      "line": 17
                    }
                  }
                },
                "range": [
                  283,
                  290
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 17
                  },
                  "start": {
                    "column": 26,
                    "line": 17
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 17
              },
              "start": {
                "column": 25,
                "line": 17
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "X1",
            "optional": false,
            "range": [
              280,
              282
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 17
              },
              "start": {
                "column": 23,
                "line": 17
              }
            }
          },
          "range": [
            280,
            291
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 17
            },
            "start": {
              "column": 23,
              "line": 17
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            298,
            303
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 17
            },
            "start": {
              "column": 41,
              "line": 17
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              294,
              295
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 17
              },
              "start": {
                "column": 37,
                "line": 17
              }
            }
          },
          "range": [
            294,
            295
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 17
            },
            "start": {
              "column": 37,
              "line": 17
            }
          }
        },
        "range": [
          270,
          303
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 17
          },
          "start": {
            "column": 13,
            "line": 17
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 17
          },
          "start": {
            "column": 7,
            "line": 17
          }
        },
        "range": [
          264,
          267
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
                265,
                266
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 17
                },
                "start": {
                  "column": 8,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              265,
              266
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 17
              },
              "start": {
                "column": 8,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        257,
        304
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          374,
          405
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "tee",
              "optional": false,
              "range": [
                378,
                381
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 2,
                  "line": 25
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
                  "column": 8,
                  "line": 25
                },
                "start": {
                  "column": 5,
                  "line": 25
                }
              },
              "range": [
                381,
                384
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    383,
                    384
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 25
                    },
                    "start": {
                      "column": 7,
                      "line": 25
                    }
                  }
                },
                "range": [
                  383,
                  384
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 25
                  },
                  "start": {
                    "column": 7,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              378,
              385
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 25
              },
              "start": {
                "column": 2,
                "line": 25
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "output",
              "optional": false,
              "range": [
                388,
                394
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 26
                },
                "start": {
                  "column": 2,
                  "line": 26
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
                  "line": 26
                },
                "start": {
                  "column": 8,
                  "line": 26
                }
              },
              "range": [
                394,
                402
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Output",
                  "optional": false,
                  "range": [
                    396,
                    402
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 26
                    },
                    "start": {
                      "column": 10,
                      "line": 26
                    }
                  }
                },
                "range": [
                  396,
                  402
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 26
                  },
                  "start": {
                    "column": 10,
                    "line": 26
                  }
                }
              }
            },
            "range": [
              388,
              403
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 26
              },
              "start": {
                "column": 2,
                "line": 26
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 2,
            "line": 24
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X2",
        "optional": false,
        "range": [
          341,
          343
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 21
          },
          "start": {
            "column": 10,
            "line": 21
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 12,
            "line": 21
          }
        },
        "range": [
          343,
          373
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
                "name": "HasM",
                "optional": false,
                "range": [
                  357,
                  361
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
                357,
                361
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
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                347,
                348
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 22
                },
                "start": {
                  "column": 2,
                  "line": 22
                }
              }
            },
            "out": false,
            "range": [
              347,
              361
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 22
              },
              "start": {
                "column": 2,
                "line": 22
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
              "name": "Output",
              "optional": false,
              "range": [
                365,
                371
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 23
                },
                "start": {
                  "column": 2,
                  "line": 23
                }
              }
            },
            "out": false,
            "range": [
              365,
              371
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 23
              },
              "start": {
                "column": 2,
                "line": 23
              }
            }
          }
        ]
      },
      "range": [
        331,
        405
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F2",
        "optional": false,
        "range": [
          412,
          414
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 29
          },
          "start": {
            "column": 5,
            "line": 29
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
              420,
              421
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 29
              },
              "start": {
                "column": 13,
                "line": 29
              }
            }
          },
          "range": [
            420,
            421
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 29
            },
            "start": {
              "column": 13,
              "line": 29
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              432,
              508
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
                    "name": "U",
                    "optional": false,
                    "range": [
                      439,
                      440
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 29
                      },
                      "start": {
                        "column": 32,
                        "line": 29
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    439,
                    440
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 29
                    },
                    "start": {
                      "column": 32,
                      "line": 29
                    }
                  }
                },
                "range": [
                  433,
                  440
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 29
                  },
                  "start": {
                    "column": 26,
                    "line": 29
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    453,
                    507
                  ],
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "range": [
                                  456,
                                  457
                                ],
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 49,
                                    "line": 29
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
                                    "column": 58,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 50,
                                    "line": 29
                                  }
                                },
                                "range": [
                                  457,
                                  465
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    459,
                                    465
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 58,
                                      "line": 29
                                    },
                                    "start": {
                                      "column": 52,
                                      "line": 29
                                    }
                                  }
                                }
                              },
                              "range": [
                                456,
                                466
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 29
                                },
                                "start": {
                                  "column": 49,
                                  "line": 29
                                }
                              }
                            }
                          ],
                          "range": [
                            454,
                            468
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 29
                            },
                            "start": {
                              "column": 47,
                              "line": 29
                            }
                          }
                        },
                        {
                          "type": "TSMappedType",
                          "constraint": {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSInferType",
                              "typeParameter": {
                                "type": "TSTypeParameter",
                                "const": false,
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "range": [
                                    492,
                                    493
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 86,
                                      "line": 29
                                    },
                                    "start": {
                                      "column": 85,
                                      "line": 29
                                    }
                                  }
                                },
                                "out": false,
                                "range": [
                                  492,
                                  493
                                ],
                                "loc": {
                                  "end": {
                                    "column": 86,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 85,
                                    "line": 29
                                  }
                                }
                              },
                              "range": [
                                486,
                                493
                              ],
                              "loc": {
                                "end": {
                                  "column": 86,
                                  "line": 29
                                },
                                "start": {
                                  "column": 79,
                                  "line": 29
                                }
                              }
                            },
                            "range": [
                              479,
                              494
                            ],
                            "loc": {
                              "end": {
                                "column": 87,
                                "line": 29
                              },
                              "start": {
                                "column": 72,
                                "line": 29
                              }
                            }
                          },
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "range": [
                              474,
                              475
                            ],
                            "loc": {
                              "end": {
                                "column": 68,
                                "line": 29
                              },
                              "start": {
                                "column": 67,
                                "line": 29
                              }
                            }
                          },
                          "nameType": null,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              497,
                              503
                            ],
                            "loc": {
                              "end": {
                                "column": 96,
                                "line": 29
                              },
                              "start": {
                                "column": 90,
                                "line": 29
                              }
                            }
                          },
                          "range": [
                            471,
                            506
                          ],
                          "loc": {
                            "end": {
                              "column": 99,
                              "line": 29
                            },
                            "start": {
                              "column": 64,
                              "line": 29
                            }
                          }
                        }
                      ],
                      "range": [
                        454,
                        506
                      ],
                      "loc": {
                        "end": {
                          "column": 99,
                          "line": 29
                        },
                        "start": {
                          "column": 47,
                          "line": 29
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 100,
                      "line": 29
                    },
                    "start": {
                      "column": 46,
                      "line": 29
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AMappedType",
                  "optional": false,
                  "range": [
                    442,
                    453
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 29
                    },
                    "start": {
                      "column": 35,
                      "line": 29
                    }
                  }
                },
                "range": [
                  442,
                  507
                ],
                "loc": {
                  "end": {
                    "column": 100,
                    "line": 29
                  },
                  "start": {
                    "column": 35,
                    "line": 29
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 101,
                "line": 29
              },
              "start": {
                "column": 25,
                "line": 29
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "X2",
            "optional": false,
            "range": [
              430,
              432
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 29
              },
              "start": {
                "column": 23,
                "line": 29
              }
            }
          },
          "range": [
            430,
            508
          ],
          "loc": {
            "end": {
              "column": 101,
              "line": 29
            },
            "start": {
              "column": 23,
              "line": 29
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            515,
            520
          ],
          "loc": {
            "end": {
              "column": 113,
              "line": 29
            },
            "start": {
              "column": 108,
              "line": 29
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              511,
              512
            ],
            "loc": {
              "end": {
                "column": 105,
                "line": 29
              },
              "start": {
                "column": 104,
                "line": 29
              }
            }
          },
          "range": [
            511,
            512
          ],
          "loc": {
            "end": {
              "column": 105,
              "line": 29
            },
            "start": {
              "column": 104,
              "line": 29
            }
          }
        },
        "range": [
          420,
          520
        ],
        "loc": {
          "end": {
            "column": 113,
            "line": 29
          },
          "start": {
            "column": 13,
            "line": 29
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 29
          },
          "start": {
            "column": 7,
            "line": 29
          }
        },
        "range": [
          414,
          417
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
                415,
                416
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 29
                },
                "start": {
                  "column": 8,
                  "line": 29
                }
              }
            },
            "out": false,
            "range": [
              415,
              416
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 29
              },
              "start": {
                "column": 8,
                "line": 29
              }
            }
          }
        ]
      },
      "range": [
        407,
        521
      ],
      "loc": {
        "end": {
          "column": 114,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Simplify",
        "optional": false,
        "range": [
          547,
          555
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 33
          },
          "start": {
            "column": 5,
            "line": 33
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
              "name": "T",
              "optional": false,
              "range": [
                580,
                581
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 33
                },
                "start": {
                  "column": 38,
                  "line": 33
                }
              }
            },
            "range": [
              580,
              581
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 33
              },
              "start": {
                "column": 38,
                "line": 33
              }
            }
          },
          "range": [
            574,
            581
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 33
            },
            "start": {
              "column": 32,
              "line": 33
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "KeyType",
          "optional": false,
          "range": [
            563,
            570
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 33
            },
            "start": {
              "column": 21,
              "line": 33
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
              "name": "KeyType",
              "optional": false,
              "range": [
                586,
                593
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 33
                },
                "start": {
                  "column": 44,
                  "line": 33
                }
              }
            },
            "range": [
              586,
              593
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 33
              },
              "start": {
                "column": 44,
                "line": 33
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
                584,
                585
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 33
                },
                "start": {
                  "column": 42,
                  "line": 33
                }
              }
            },
            "range": [
              584,
              585
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 33
              },
              "start": {
                "column": 42,
                "line": 33
              }
            }
          },
          "range": [
            584,
            594
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 33
            },
            "start": {
              "column": 42,
              "line": 33
            }
          }
        },
        "range": [
          561,
          595
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 33
          },
          "start": {
            "column": 19,
            "line": 33
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 33
          },
          "start": {
            "column": 13,
            "line": 33
          }
        },
        "range": [
          555,
          558
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
                556,
                557
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 33
                },
                "start": {
                  "column": 14,
                  "line": 33
                }
              }
            },
            "out": false,
            "range": [
              556,
              557
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 33
              },
              "start": {
                "column": 14,
                "line": 33
              }
            }
          }
        ]
      },
      "range": [
        542,
        596
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "optionalKeys",
        "optional": false,
        "range": [
          603,
          615
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 35
          },
          "start": {
            "column": 5,
            "line": 35
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "indexType": {
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
                702,
                703
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 37
                },
                "start": {
                  "column": 8,
                  "line": 37
                }
              }
            },
            "range": [
              702,
              703
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 37
              },
              "start": {
                "column": 8,
                "line": 37
              }
            }
          },
          "range": [
            696,
            703
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 37
            },
            "start": {
              "column": 2,
              "line": 37
            }
          }
        },
        "objectType": {
          "type": "TSMappedType",
          "constraint": {
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
                  654,
                  655
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 36
                  },
                  "start": {
                    "column": 16,
                    "line": 36
                  }
                }
              },
              "range": [
                654,
                655
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 36
                },
                "start": {
                  "column": 16,
                  "line": 36
                }
              }
            },
            "range": [
              648,
              655
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 36
              },
              "start": {
                "column": 10,
                "line": 36
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "range": [
              643,
              644
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 36
              },
              "start": {
                "column": 5,
                "line": 36
              }
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSUndefinedKeyword",
              "range": [
                658,
                667
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 36
                },
                "start": {
                  "column": 20,
                  "line": 36
                }
              }
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "range": [
                    678,
                    679
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 36
                    },
                    "start": {
                      "column": 40,
                      "line": 36
                    }
                  }
                },
                "range": [
                  678,
                  679
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 36
                  },
                  "start": {
                    "column": 40,
                    "line": 36
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
                    676,
                    677
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 36
                    },
                    "start": {
                      "column": 38,
                      "line": 36
                    }
                  }
                },
                "range": [
                  676,
                  677
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 36
                  },
                  "start": {
                    "column": 38,
                    "line": 36
                  }
                }
              },
              "range": [
                676,
                680
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 36
                },
                "start": {
                  "column": 38,
                  "line": 36
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "range": [
                687,
                692
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 36
                },
                "start": {
                  "column": 49,
                  "line": 36
                }
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "range": [
                  683,
                  684
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 36
                  },
                  "start": {
                    "column": 45,
                    "line": 36
                  }
                }
              },
              "range": [
                683,
                684
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 36
                },
                "start": {
                  "column": 45,
                  "line": 36
                }
              }
            },
            "range": [
              658,
              692
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 36
              },
              "start": {
                "column": 20,
                "line": 36
              }
            }
          },
          "range": [
            636,
            695
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 37
            },
            "start": {
              "column": 38,
              "line": 35
            }
          }
        },
        "range": [
          636,
          704
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 37
          },
          "start": {
            "column": 38,
            "line": 35
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 35
          },
          "start": {
            "column": 17,
            "line": 35
          }
        },
        "range": [
          615,
          633
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                626,
                632
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 35
                },
                "start": {
                  "column": 28,
                  "line": 35
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
                616,
                617
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 35
                },
                "start": {
                  "column": 18,
                  "line": 35
                }
              }
            },
            "out": false,
            "range": [
              616,
              632
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 35
              },
              "start": {
                "column": 18,
                "line": 35
              }
            }
          }
        ]
      },
      "range": [
        598,
        705
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "requiredKeys",
        "optional": false,
        "range": [
          712,
          724
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 39
          },
          "start": {
            "column": 5,
            "line": 39
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            752,
            778
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
                    759,
                    760
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 39
                    },
                    "start": {
                      "column": 52,
                      "line": 39
                    }
                  }
                },
                "range": [
                  759,
                  760
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 39
                  },
                  "start": {
                    "column": 52,
                    "line": 39
                  }
                }
              },
              "range": [
                753,
                760
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 39
                },
                "start": {
                  "column": 46,
                  "line": 39
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  774,
                  777
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
                        775,
                        776
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 39
                        },
                        "start": {
                          "column": 68,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      775,
                      776
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 39
                      },
                      "start": {
                        "column": 68,
                        "line": 39
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 39
                  },
                  "start": {
                    "column": 67,
                    "line": 39
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "optionalKeys",
                "optional": false,
                "range": [
                  762,
                  774
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 39
                  },
                  "start": {
                    "column": 55,
                    "line": 39
                  }
                }
              },
              "range": [
                762,
                777
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 39
                },
                "start": {
                  "column": 55,
                  "line": 39
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 39
            },
            "start": {
              "column": 45,
              "line": 39
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Exclude",
          "optional": false,
          "range": [
            745,
            752
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 39
            },
            "start": {
              "column": 38,
              "line": 39
            }
          }
        },
        "range": [
          745,
          778
        ],
        "loc": {
          "end": {
            "column": 71,
            "line": 39
          },
          "start": {
            "column": 38,
            "line": 39
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 39
          },
          "start": {
            "column": 17,
            "line": 39
          }
        },
        "range": [
          724,
          742
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                735,
                741
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 39
                },
                "start": {
                  "column": 28,
                  "line": 39
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
                725,
                726
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 39
                },
                "start": {
                  "column": 18,
                  "line": 39
                }
              }
            },
            "out": false,
            "range": [
              725,
              741
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 39
              },
              "start": {
                "column": 18,
                "line": 39
              }
            }
          }
        ]
      },
      "range": [
        707,
        779
      ],
      "loc": {
        "end": {
          "column": 72,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        781,
        909
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "addQuestionMarks",
          "optional": false,
          "range": [
            793,
            809
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 41
            },
            "start": {
              "column": 12,
              "line": 41
            }
          }
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    854,
                    857
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
                          855,
                          856
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 42
                          },
                          "start": {
                            "column": 23,
                            "line": 42
                          }
                        }
                      },
                      "range": [
                        855,
                        856
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 42
                        },
                        "start": {
                          "column": 23,
                          "line": 42
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 42
                    },
                    "start": {
                      "column": 22,
                      "line": 42
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalKeys",
                  "optional": false,
                  "range": [
                    842,
                    854
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 42
                    },
                    "start": {
                      "column": 10,
                      "line": 42
                    }
                  }
                },
                "range": [
                  842,
                  857
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 42
                  },
                  "start": {
                    "column": 10,
                    "line": 42
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "range": [
                  837,
                  838
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 42
                  },
                  "start": {
                    "column": 5,
                    "line": 42
                  }
                }
              },
              "nameType": null,
              "optional": true,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "range": [
                      863,
                      864
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 42
                      },
                      "start": {
                        "column": 31,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    863,
                    864
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 42
                    },
                    "start": {
                      "column": 31,
                      "line": 42
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
                      861,
                      862
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 42
                      },
                      "start": {
                        "column": 29,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    861,
                    862
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 42
                    },
                    "start": {
                      "column": 29,
                      "line": 42
                    }
                  }
                },
                "range": [
                  861,
                  865
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 42
                  },
                  "start": {
                    "column": 29,
                    "line": 42
                  }
                }
              },
              "range": [
                830,
                868
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 43
                },
                "start": {
                  "column": 49,
                  "line": 41
                }
              }
            },
            {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    895,
                    898
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
                          896,
                          897
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 44
                          },
                          "start": {
                            "column": 23,
                            "line": 44
                          }
                        }
                      },
                      "range": [
                        896,
                        897
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 44
                        },
                        "start": {
                          "column": 23,
                          "line": 44
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 44
                    },
                    "start": {
                      "column": 22,
                      "line": 44
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "requiredKeys",
                  "optional": false,
                  "range": [
                    883,
                    895
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 44
                    },
                    "start": {
                      "column": 10,
                      "line": 44
                    }
                  }
                },
                "range": [
                  883,
                  898
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 44
                  },
                  "start": {
                    "column": 10,
                    "line": 44
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "range": [
                  878,
                  879
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 44
                  },
                  "start": {
                    "column": 5,
                    "line": 44
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
                    "name": "k",
                    "optional": false,
                    "range": [
                      903,
                      904
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 44
                      },
                      "start": {
                        "column": 30,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    903,
                    904
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 44
                    },
                    "start": {
                      "column": 30,
                      "line": 44
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
                      901,
                      902
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 44
                      },
                      "start": {
                        "column": 28,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    901,
                    902
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 44
                    },
                    "start": {
                      "column": 28,
                      "line": 44
                    }
                  }
                },
                "range": [
                  901,
                  905
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 44
                  },
                  "start": {
                    "column": 28,
                    "line": 44
                  }
                }
              },
              "range": [
                871,
                908
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 45
                },
                "start": {
                  "column": 4,
                  "line": 43
                }
              }
            }
          ],
          "range": [
            830,
            908
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 45
            },
            "start": {
              "column": 49,
              "line": 41
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 46,
              "line": 41
            },
            "start": {
              "column": 28,
              "line": 41
            }
          },
          "range": [
            809,
            827
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "range": [
                  820,
                  826
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 41
                  },
                  "start": {
                    "column": 39,
                    "line": 41
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
                  810,
                  811
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 41
                  },
                  "start": {
                    "column": 29,
                    "line": 41
                  }
                }
              },
              "out": false,
              "range": [
                810,
                826
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 41
                },
                "start": {
                  "column": 29,
                  "line": 41
                }
              }
            }
          ]
        },
        "range": [
          788,
          909
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 45
          },
          "start": {
            "column": 7,
            "line": 41
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodRawShape",
        "optional": false,
        "range": [
          916,
          927
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 47
          },
          "start": {
            "column": 5,
            "line": 47
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 48
                    },
                    "start": {
                      "column": 6,
                      "line": 48
                    }
                  },
                  "range": [
                    938,
                    946
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      940,
                      946
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 48
                      },
                      "start": {
                        "column": 8,
                        "line": 48
                      }
                    }
                  }
                },
                "range": [
                  937,
                  946
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 48
                  },
                  "start": {
                    "column": 5,
                    "line": 48
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 48
                },
                "start": {
                  "column": 15,
                  "line": 48
                }
              },
              "range": [
                947,
                961
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    956,
                    961
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        957,
                        960
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 48
                        },
                        "start": {
                          "column": 25,
                          "line": 48
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 48
                    },
                    "start": {
                      "column": 24,
                      "line": 48
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ZodType",
                  "optional": false,
                  "range": [
                    949,
                    956
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 48
                    },
                    "start": {
                      "column": 17,
                      "line": 48
                    }
                  }
                },
                "range": [
                  949,
                  961
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 48
                  },
                  "start": {
                    "column": 17,
                    "line": 48
                  }
                }
              }
            },
            "range": [
              936,
              962
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          }
        ],
        "range": [
          930,
          964
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 49
          },
          "start": {
            "column": 19,
            "line": 47
          }
        }
      },
      "range": [
        911,
        965
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          993,
          1013
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_type",
              "optional": false,
              "range": [
                997,
                1002
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 52
                },
                "start": {
                  "column": 2,
                  "line": 52
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
                  "column": 15,
                  "line": 52
                },
                "start": {
                  "column": 7,
                  "line": 52
                }
              },
              "range": [
                1002,
                1010
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Output",
                  "optional": false,
                  "range": [
                    1004,
                    1010
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 52
                    },
                    "start": {
                      "column": 9,
                      "line": 52
                    }
                  }
                },
                "range": [
                  1004,
                  1010
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 52
                  },
                  "start": {
                    "column": 9,
                    "line": 52
                  }
                }
              }
            },
            "range": [
              997,
              1011
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 52
              },
              "start": {
                "column": 2,
                "line": 52
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 53
          },
          "start": {
            "column": 26,
            "line": 51
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodType",
        "optional": false,
        "range": [
          977,
          984
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 51
          },
          "start": {
            "column": 10,
            "line": 51
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 51
          },
          "start": {
            "column": 17,
            "line": 51
          }
        },
        "range": [
          984,
          992
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Output",
              "optional": false,
              "range": [
                985,
                991
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 51
                },
                "start": {
                  "column": 18,
                  "line": 51
                }
              }
            },
            "out": false,
            "range": [
              985,
              991
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 51
              },
              "start": {
                "column": 18,
                "line": 51
              }
            }
          }
        ]
      },
      "range": [
        967,
        1013
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1207,
          1232
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_shape",
              "optional": false,
              "range": [
                1220,
                1226
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 65
                },
                "start": {
                  "column": 11,
                  "line": 65
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
                  "column": 20,
                  "line": 65
                },
                "start": {
                  "column": 17,
                  "line": 65
                }
              },
              "range": [
                1226,
                1229
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1228,
                    1229
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 65
                    },
                    "start": {
                      "column": 19,
                      "line": 65
                    }
                  }
                },
                "range": [
                  1228,
                  1229
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 65
                  },
                  "start": {
                    "column": 19,
                    "line": 65
                  }
                }
              }
            },
            "range": [
              1211,
              1230
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 65
              },
              "start": {
                "column": 2,
                "line": 65
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 66
          },
          "start": {
            "column": 26,
            "line": 64
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodType",
            "optional": false,
            "range": [
              1191,
              1198
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 64
              },
              "start": {
                "column": 10,
                "line": 64
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1198,
              1206
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Output",
                  "optional": false,
                  "range": [
                    1199,
                    1205
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 64
                    },
                    "start": {
                      "column": 18,
                      "line": 64
                    }
                  }
                },
                "range": [
                  1199,
                  1205
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 64
                  },
                  "start": {
                    "column": 18,
                    "line": 64
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 64
              },
              "start": {
                "column": 17,
                "line": 64
              }
            }
          },
          "range": [
            1191,
            1206
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 64
            },
            "start": {
              "column": 10,
              "line": 64
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodObject",
        "optional": false,
        "range": [
          1025,
          1034
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 55
          },
          "start": {
            "column": 10,
            "line": 55
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 64
          },
          "start": {
            "column": 19,
            "line": 55
          }
        },
        "range": [
          1034,
          1182
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
                "name": "ZodRawShape",
                "optional": false,
                "range": [
                  1048,
                  1059
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 56
                  },
                  "start": {
                    "column": 12,
                    "line": 56
                  }
                }
              },
              "range": [
                1048,
                1059
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 56
                },
                "start": {
                  "column": 12,
                  "line": 56
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
                1038,
                1039
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 56
                },
                "start": {
                  "column": 2,
                  "line": 56
                }
              }
            },
            "out": false,
            "range": [
              1038,
              1059
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 56
              },
              "start": {
                "column": 2,
                "line": 56
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1080,
                  1180
                ],
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSMappedType",
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              1112,
                              1115
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
                                    1113,
                                    1114
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 59
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 59
                                    }
                                  }
                                },
                                "range": [
                                  1113,
                                  1114
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 59
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 59
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 59
                              },
                              "start": {
                                "column": 24,
                                "line": 59
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "optionalKeys",
                            "optional": false,
                            "range": [
                              1100,
                              1112
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 59
                              },
                              "start": {
                                "column": 12,
                                "line": 59
                              }
                            }
                          },
                          "range": [
                            1100,
                            1115
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 59
                            },
                            "start": {
                              "column": 12,
                              "line": 59
                            }
                          }
                        },
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "range": [
                            1095,
                            1096
                          ],
                          "loc": {
                            "end": {
                              "column": 8,
                              "line": 59
                            },
                            "start": {
                              "column": 7,
                              "line": 59
                            }
                          }
                        },
                        "nameType": null,
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "range": [
                                1121,
                                1122
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 59
                                },
                                "start": {
                                  "column": 33,
                                  "line": 59
                                }
                              }
                            },
                            "range": [
                              1121,
                              1122
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 59
                              },
                              "start": {
                                "column": 33,
                                "line": 59
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
                                1119,
                                1120
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 59
                                },
                                "start": {
                                  "column": 31,
                                  "line": 59
                                }
                              }
                            },
                            "range": [
                              1119,
                              1120
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 59
                              },
                              "start": {
                                "column": 31,
                                "line": 59
                              }
                            }
                          },
                          "range": [
                            1119,
                            1123
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 59
                            },
                            "start": {
                              "column": 31,
                              "line": 59
                            }
                          }
                        },
                        "range": [
                          1086,
                          1130
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 60
                          },
                          "start": {
                            "column": 4,
                            "line": 58
                          }
                        }
                      },
                      {
                        "type": "TSMappedType",
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              1159,
                              1162
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
                                    1160,
                                    1161
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 61
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 61
                                    }
                                  }
                                },
                                "range": [
                                  1160,
                                  1161
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 61
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 61
                              },
                              "start": {
                                "column": 24,
                                "line": 61
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "requiredKeys",
                            "optional": false,
                            "range": [
                              1147,
                              1159
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 61
                              },
                              "start": {
                                "column": 12,
                                "line": 61
                              }
                            }
                          },
                          "range": [
                            1147,
                            1162
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 61
                            },
                            "start": {
                              "column": 12,
                              "line": 61
                            }
                          }
                        },
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "range": [
                            1142,
                            1143
                          ],
                          "loc": {
                            "end": {
                              "column": 8,
                              "line": 61
                            },
                            "start": {
                              "column": 7,
                              "line": 61
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
                              "name": "k",
                              "optional": false,
                              "range": [
                                1167,
                                1168
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 61
                                },
                                "start": {
                                  "column": 32,
                                  "line": 61
                                }
                              }
                            },
                            "range": [
                              1167,
                              1168
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 61
                              },
                              "start": {
                                "column": 32,
                                "line": 61
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
                                1165,
                                1166
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 61
                                },
                                "start": {
                                  "column": 30,
                                  "line": 61
                                }
                              }
                            },
                            "range": [
                              1165,
                              1166
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 61
                              },
                              "start": {
                                "column": 30,
                                "line": 61
                              }
                            }
                          },
                          "range": [
                            1165,
                            1169
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 61
                            },
                            "start": {
                              "column": 30,
                              "line": 61
                            }
                          }
                        },
                        "range": [
                          1133,
                          1176
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 62
                          },
                          "start": {
                            "column": 8,
                            "line": 60
                          }
                        }
                      }
                    ],
                    "range": [
                      1086,
                      1176
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 62
                      },
                      "start": {
                        "column": 4,
                        "line": 58
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 63
                  },
                  "start": {
                    "column": 19,
                    "line": 57
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Simplify",
                "optional": false,
                "range": [
                  1072,
                  1080
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 57
                  },
                  "start": {
                    "column": 11,
                    "line": 57
                  }
                }
              },
              "range": [
                1072,
                1180
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 63
                },
                "start": {
                  "column": 11,
                  "line": 57
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Output",
              "optional": false,
              "range": [
                1063,
                1069
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 57
                },
                "start": {
                  "column": 2,
                  "line": 57
                }
              }
            },
            "out": false,
            "range": [
              1063,
              1180
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 63
              },
              "start": {
                "column": 2,
                "line": 57
              }
            }
          }
        ]
      },
      "range": [
        1015,
        1232
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyObject",
        "optional": false,
        "range": [
          1239,
          1247
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 68
          },
          "start": {
            "column": 5,
            "line": 68
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
              1253,
              1254
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 68
              },
              "start": {
                "column": 19,
                "line": 68
              }
            }
          },
          "range": [
            1253,
            1254
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 68
            },
            "start": {
              "column": 19,
              "line": 68
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1272,
              1281
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
                    "name": "U",
                    "optional": false,
                    "range": [
                      1279,
                      1280
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 68
                      },
                      "start": {
                        "column": 45,
                        "line": 68
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1279,
                    1280
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 68
                    },
                    "start": {
                      "column": 45,
                      "line": 68
                    }
                  }
                },
                "range": [
                  1273,
                  1280
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 68
                  },
                  "start": {
                    "column": 39,
                    "line": 68
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 68
              },
              "start": {
                "column": 38,
                "line": 68
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodObject",
            "optional": false,
            "range": [
              1263,
              1272
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 68
              },
              "start": {
                "column": 29,
                "line": 68
              }
            }
          },
          "range": [
            1263,
            1281
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 68
            },
            "start": {
              "column": 29,
              "line": 68
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            1332,
            1337
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 72
            },
            "start": {
              "column": 4,
              "line": 72
            }
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                1286,
                1287
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 69
                },
                "start": {
                  "column": 4,
                  "line": 69
                }
              }
            },
            "range": [
              1286,
              1287
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 69
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ZodRawShape",
              "optional": false,
              "range": [
                1296,
                1307
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 69
                },
                "start": {
                  "column": 14,
                  "line": 69
                }
              }
            },
            "range": [
              1296,
              1307
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 69
              },
              "start": {
                "column": 14,
                "line": 69
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              1322,
              1327
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 71
              },
              "start": {
                "column": 6,
                "line": 71
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                1314,
                1315
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 70
                },
                "start": {
                  "column": 6,
                  "line": 70
                }
              }
            },
            "range": [
              1314,
              1315
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 70
              },
              "start": {
                "column": 6,
                "line": 70
              }
            }
          },
          "range": [
            1286,
            1327
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 71
            },
            "start": {
              "column": 4,
              "line": 69
            }
          }
        },
        "range": [
          1253,
          1337
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 72
          },
          "start": {
            "column": 19,
            "line": 68
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 68
          },
          "start": {
            "column": 13,
            "line": 68
          }
        },
        "range": [
          1247,
          1250
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
                1248,
                1249
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 68
                },
                "start": {
                  "column": 14,
                  "line": 68
                }
              }
            },
            "out": false,
            "range": [
              1248,
              1249
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 68
              },
              "start": {
                "column": 14,
                "line": 68
              }
            }
          }
        ]
      },
      "range": [
        1234,
        1338
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 68
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cell",
        "optional": false,
        "range": [
          1367,
          1371
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 76
          },
          "start": {
            "column": 5,
            "line": 76
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
              "name": "id",
              "optional": false,
              "range": [
                1430,
                1432
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 77
                },
                "start": {
                  "column": 2,
                  "line": 77
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
                  "column": 12,
                  "line": 77
                },
                "start": {
                  "column": 4,
                  "line": 77
                }
              },
              "range": [
                1432,
                1440
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1434,
                  1440
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 77
                  },
                  "start": {
                    "column": 6,
                    "line": 77
                  }
                }
              }
            },
            "range": [
              1430,
              1440
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 77
              },
              "start": {
                "column": 2,
                "line": 77
              }
            }
          }
        ],
        "range": [
          1426,
          1442
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 78
          },
          "start": {
            "column": 64,
            "line": 76
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 61,
            "line": 76
          },
          "start": {
            "column": 9,
            "line": 76
          }
        },
        "range": [
          1371,
          1423
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
                "name": "BaseValue",
                "optional": false,
                "range": [
                  1386,
                  1395
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 76
                  },
                  "start": {
                    "column": 24,
                    "line": 76
                  }
                }
              },
              "range": [
                1386,
                1395
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 76
                },
                "start": {
                  "column": 24,
                  "line": 76
                }
              }
            },
            "default": {
              "type": "TSAnyKeyword",
              "range": [
                1398,
                1401
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 76
                },
                "start": {
                  "column": 36,
                  "line": 76
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "range": [
                1372,
                1377
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 76
                },
                "start": {
                  "column": 10,
                  "line": 76
                }
              }
            },
            "out": false,
            "range": [
              1372,
              1401
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 76
              },
              "start": {
                "column": 10,
                "line": 76
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSUnknownKeyword",
              "range": [
                1415,
                1422
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 76
                },
                "start": {
                  "column": 53,
                  "line": 76
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "BaseValue",
              "optional": false,
              "range": [
                1403,
                1412
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 76
                },
                "start": {
                  "column": 41,
                  "line": 76
                }
              }
            },
            "out": false,
            "range": [
              1403,
              1422
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 76
              },
              "start": {
                "column": 41,
                "line": 76
              }
            }
          }
        ]
      },
      "range": [
        1362,
        1442
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 78
        },
        "start": {
          "column": 0,
          "line": 76
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Items",
        "optional": false,
        "range": [
          1449,
          1454
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 80
          },
          "start": {
            "column": 5,
            "line": 80
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
              "name": "type",
              "optional": false,
              "range": [
                1487,
                1491
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 81
                },
                "start": {
                  "column": 2,
                  "line": 81
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
                  "column": 12,
                  "line": 81
                },
                "start": {
                  "column": 6,
                  "line": 81
                }
              },
              "range": [
                1491,
                1497
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "range": [
                    1493,
                    1497
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 81
                    },
                    "start": {
                      "column": 8,
                      "line": 81
                    }
                  }
                },
                "range": [
                  1493,
                  1497
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 81
                  },
                  "start": {
                    "column": 8,
                    "line": 81
                  }
                }
              }
            },
            "range": [
              1487,
              1497
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 81
              },
              "start": {
                "column": 2,
                "line": 81
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                1500,
                1504
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 82
                },
                "start": {
                  "column": 2,
                  "line": 82
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
                  "column": 14,
                  "line": 82
                },
                "start": {
                  "column": 6,
                  "line": 82
                }
              },
              "range": [
                1504,
                1512
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1506,
                  1512
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 82
                  },
                  "start": {
                    "column": 8,
                    "line": 82
                  }
                }
              }
            },
            "range": [
              1500,
              1512
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 82
              },
              "start": {
                "column": 2,
                "line": 82
              }
            }
          }
        ],
        "range": [
          1483,
          1514
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 83
          },
          "start": {
            "column": 39,
            "line": 80
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 36,
            "line": 80
          },
          "start": {
            "column": 10,
            "line": 80
          }
        },
        "range": [
          1454,
          1480
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
                "name": "Cell",
                "optional": false,
                "range": [
                  1468,
                  1472
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 80
                  },
                  "start": {
                    "column": 24,
                    "line": 80
                  }
                }
              },
              "range": [
                1468,
                1472
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 80
                },
                "start": {
                  "column": 24,
                  "line": 80
                }
              }
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cell",
                "optional": false,
                "range": [
                  1475,
                  1479
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 80
                  },
                  "start": {
                    "column": 31,
                    "line": 80
                  }
                }
              },
              "range": [
                1475,
                1479
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 80
                },
                "start": {
                  "column": 31,
                  "line": 80
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "range": [
                1455,
                1459
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 80
                },
                "start": {
                  "column": 11,
                  "line": 80
                }
              }
            },
            "out": false,
            "range": [
              1455,
              1479
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 80
              },
              "start": {
                "column": 11,
                "line": 80
              }
            }
          }
        ]
      },
      "range": [
        1444,
        1514
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 80
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferIOItemToJSType",
        "optional": false,
        "range": [
          1521,
          1540
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 85
          },
          "start": {
            "column": 5,
            "line": 85
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
              1562,
              1563
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 86
              },
              "start": {
                "column": 2,
                "line": 86
              }
            }
          },
          "range": [
            1562,
            1563
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 86
            },
            "start": {
              "column": 2,
              "line": 86
            }
          }
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "range": [
                  1574,
                  1578
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 86
                  },
                  "start": {
                    "column": 14,
                    "line": 86
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
                    "column": 27,
                    "line": 86
                  },
                  "start": {
                    "column": 18,
                    "line": 86
                  }
                },
                "range": [
                  1578,
                  1587
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
                      "name": "U",
                      "optional": false,
                      "range": [
                        1586,
                        1587
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 86
                        },
                        "start": {
                          "column": 26,
                          "line": 86
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      1586,
                      1587
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 86
                      },
                      "start": {
                        "column": 26,
                        "line": 86
                      }
                    }
                  },
                  "range": [
                    1580,
                    1587
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 86
                    },
                    "start": {
                      "column": 20,
                      "line": 86
                    }
                  }
                }
              },
              "range": [
                1574,
                1587
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 86
                },
                "start": {
                  "column": 14,
                  "line": 86
                }
              }
            }
          ],
          "range": [
            1572,
            1589
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 86
            },
            "start": {
              "column": 12,
              "line": 86
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            1696,
            1701
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 90
            },
            "start": {
              "column": 6,
              "line": 90
            }
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                1596,
                1597
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 87
                },
                "start": {
                  "column": 6,
                  "line": 87
                }
              }
            },
            "range": [
              1596,
              1597
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 87
              },
              "start": {
                "column": 6,
                "line": 87
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1610,
                1665
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
                      "name": "V",
                      "optional": false,
                      "range": [
                        1617,
                        1618
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 87
                        },
                        "start": {
                          "column": 27,
                          "line": 87
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      1617,
                      1618
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 87
                      },
                      "start": {
                        "column": 27,
                        "line": 87
                      }
                    }
                  },
                  "range": [
                    1611,
                    1618
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 87
                    },
                    "start": {
                      "column": 21,
                      "line": 87
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 87
                },
                "start": {
                  "column": 20,
                  "line": 87
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cell",
              "optional": false,
              "range": [
                1606,
                1610
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 87
                },
                "start": {
                  "column": 16,
                  "line": 87
                }
              }
            },
            "range": [
              1606,
              1665
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 87
              },
              "start": {
                "column": 16,
                "line": 87
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              1684,
              1689
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 89
              },
              "start": {
                "column": 8,
                "line": 89
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "range": [
                1674,
                1675
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 88
                },
                "start": {
                  "column": 8,
                  "line": 88
                }
              }
            },
            "range": [
              1674,
              1675
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 88
              },
              "start": {
                "column": 8,
                "line": 88
              }
            }
          },
          "range": [
            1596,
            1689
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 89
            },
            "start": {
              "column": 6,
              "line": 87
            }
          }
        },
        "range": [
          1562,
          1701
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 90
          },
          "start": {
            "column": 2,
            "line": 86
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 41,
            "line": 85
          },
          "start": {
            "column": 24,
            "line": 85
          }
        },
        "range": [
          1540,
          1557
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
                "name": "Items",
                "optional": false,
                "range": [
                  1551,
                  1556
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 85
                  },
                  "start": {
                    "column": 35,
                    "line": 85
                  }
                }
              },
              "range": [
                1551,
                1556
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 85
                },
                "start": {
                  "column": 35,
                  "line": 85
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
                1541,
                1542
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 85
                },
                "start": {
                  "column": 25,
                  "line": 85
                }
              }
            },
            "out": false,
            "range": [
              1541,
              1556
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 85
              },
              "start": {
                "column": 25,
                "line": 85
              }
            }
          }
        ]
      },
      "range": [
        1516,
        1701
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 85
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 91
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
