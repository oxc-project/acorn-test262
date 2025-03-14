__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    194,
    5649
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        194,
        325
      ],
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "body": {
          "type": "TSEnumBody",
          "range": [
            237,
            325
          ],
          "members": [
            {
              "type": "TSEnumMember",
              "computed": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "redisHash",
                "optional": false,
                "range": [
                  243,
                  252
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 5
                  },
                  "start": {
                    "column": 4,
                    "line": 5
                  }
                }
              },
              "initializer": {
                "type": "Literal",
                "raw": "\"redisHash\"",
                "value": "redisHash",
                "range": [
                  255,
                  266
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 5
                  },
                  "start": {
                    "column": 16,
                    "line": 5
                  }
                }
              },
              "range": [
                243,
                266
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            {
              "type": "TSEnumMember",
              "computed": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "jsonEncodedRedisString",
                "optional": false,
                "range": [
                  272,
                  294
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
              "initializer": {
                "type": "Literal",
                "raw": "\"jsonEncodedRedisString\"",
                "value": "jsonEncodedRedisString",
                "range": [
                  297,
                  321
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 6
                  },
                  "start": {
                    "column": 29,
                    "line": 6
                  }
                }
              },
              "range": [
                272,
                321
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 7
            },
            "start": {
              "column": 43,
              "line": 4
            }
          }
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PubSubRecordIsStoredInRedisAsA",
          "optional": false,
          "range": [
            206,
            236
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 4
            },
            "start": {
              "column": 12,
              "line": 4
            }
          }
        },
        "range": [
          201,
          325
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 3,
          "line": 7
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
        331,
        582
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            426,
            582
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "range": [
                  432,
                  436
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
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
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                },
                "range": [
                  436,
                  442
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NAME",
                    "optional": false,
                    "range": [
                      438,
                      442
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 10
                      },
                      "start": {
                        "column": 10,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    438,
                    442
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 10
                    },
                    "start": {
                      "column": 10,
                      "line": 10
                    }
                  }
                }
              },
              "range": [
                432,
                443
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "record",
                "optional": false,
                "range": [
                  448,
                  454
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
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
                    "column": 18,
                    "line": 11
                  },
                  "start": {
                    "column": 10,
                    "line": 11
                  }
                },
                "range": [
                  454,
                  462
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RECORD",
                    "optional": false,
                    "range": [
                      456,
                      462
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 11
                      },
                      "start": {
                        "column": 12,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    456,
                    462
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 11
                    },
                    "start": {
                      "column": 12,
                      "line": 11
                    }
                  }
                }
              },
              "range": [
                448,
                463
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "identifier",
                "optional": false,
                "range": [
                  468,
                  478
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
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
                    "column": 26,
                    "line": 12
                  },
                  "start": {
                    "column": 14,
                    "line": 12
                  }
                },
                "range": [
                  478,
                  490
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IDENTIFIER",
                    "optional": false,
                    "range": [
                      480,
                      490
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 12
                      },
                      "start": {
                        "column": 16,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    480,
                    490
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 12
                    },
                    "start": {
                      "column": 16,
                      "line": 12
                    }
                  }
                }
              },
              "range": [
                468,
                491
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 12
                },
                "start": {
                  "column": 4,
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
                "name": "storedAs",
                "optional": false,
                "range": [
                  496,
                  504
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
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
                    "column": 44,
                    "line": 13
                  },
                  "start": {
                    "column": 12,
                    "line": 13
                  }
                },
                "range": [
                  504,
                  536
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PubSubRecordIsStoredInRedisAsA",
                    "optional": false,
                    "range": [
                      506,
                      536
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 13
                      },
                      "start": {
                        "column": 14,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    506,
                    536
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 13
                    },
                    "start": {
                      "column": 14,
                      "line": 13
                    }
                  }
                }
              },
              "range": [
                496,
                537
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 13
                },
                "start": {
                  "column": 4,
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
                "name": "maxMsToWaitBeforePublishing",
                "optional": false,
                "range": [
                  542,
                  569
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
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
                    "column": 39,
                    "line": 14
                  },
                  "start": {
                    "column": 31,
                    "line": 14
                  }
                },
                "range": [
                  569,
                  577
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    571,
                    577
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 14
                    },
                    "start": {
                      "column": 33,
                      "line": 14
                    }
                  }
                }
              },
              "range": [
                542,
                578
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 15
            },
            "start": {
              "column": 97,
              "line": 9
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PubSubRecord",
          "optional": false,
          "range": [
            348,
            360
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 9
            },
            "start": {
              "column": 19,
              "line": 9
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 96,
              "line": 9
            },
            "start": {
              "column": 31,
              "line": 9
            }
          },
          "range": [
            360,
            425
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSStringKeyword",
                "range": [
                  374,
                  380
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 9
                  },
                  "start": {
                    "column": 45,
                    "line": 9
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "NAME",
                "optional": false,
                "range": [
                  361,
                  365
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 9
                  },
                  "start": {
                    "column": 32,
                    "line": 9
                  }
                }
              },
              "out": false,
              "range": [
                361,
                380
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 9
                },
                "start": {
                  "column": 32,
                  "line": 9
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
                "name": "RECORD",
                "optional": false,
                "range": [
                  382,
                  388
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 9
                  },
                  "start": {
                    "column": 53,
                    "line": 9
                  }
                }
              },
              "out": false,
              "range": [
                382,
                388
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 9
                },
                "start": {
                  "column": 53,
                  "line": 9
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    416,
                    424
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RECORD",
                        "optional": false,
                        "range": [
                          417,
                          423
                        ],
                        "loc": {
                          "end": {
                            "column": 94,
                            "line": 9
                          },
                          "start": {
                            "column": 88,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        417,
                        423
                      ],
                      "loc": {
                        "end": {
                          "column": 94,
                          "line": 9
                        },
                        "start": {
                          "column": 88,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 95,
                      "line": 9
                    },
                    "start": {
                      "column": 87,
                      "line": 9
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "range": [
                    409,
                    416
                  ],
                  "loc": {
                    "end": {
                      "column": 87,
                      "line": 9
                    },
                    "start": {
                      "column": 80,
                      "line": 9
                    }
                  }
                },
                "range": [
                  409,
                  424
                ],
                "loc": {
                  "end": {
                    "column": 95,
                    "line": 9
                  },
                  "start": {
                    "column": 80,
                    "line": 9
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "IDENTIFIER",
                "optional": false,
                "range": [
                  390,
                  400
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 9
                  },
                  "start": {
                    "column": 61,
                    "line": 9
                  }
                }
              },
              "out": false,
              "range": [
                390,
                424
              ],
              "loc": {
                "end": {
                  "column": 95,
                  "line": 9
                },
                "start": {
                  "column": 61,
                  "line": 9
                }
              }
            }
          ]
        },
        "range": [
          338,
          582
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 9
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 3,
          "line": 15
        },
        "start": {
          "column": 2,
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
        "name": "NameFieldConstructor",
        "optional": false,
        "range": [
          593,
          613
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 17
          },
          "start": {
            "column": 7,
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
            "name": "SO_FAR",
            "optional": false,
            "range": [
              628,
              634
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "range": [
            628,
            634
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
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
                "name": "name",
                "optional": false,
                "range": [
                  644,
                  648
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 18
                  },
                  "start": {
                    "column": 20,
                    "line": 18
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
                    "column": 29,
                    "line": 18
                  },
                  "start": {
                    "column": 24,
                    "line": 18
                  }
                },
                "range": [
                  648,
                  653
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    650,
                    653
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
                }
              },
              "range": [
                644,
                653
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 18
                },
                "start": {
                  "column": 20,
                  "line": 18
                }
              }
            }
          ],
          "range": [
            643,
            654
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 18
            },
            "start": {
              "column": 19,
              "line": 18
            }
          }
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "range": [
                  670,
                  674
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 19
                  },
                  "start": {
                    "column": 6,
                    "line": 19
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
                    "column": 76,
                    "line": 19
                  },
                  "start": {
                    "column": 10,
                    "line": 19
                  }
                },
                "range": [
                  674,
                  740
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 19
                          },
                          "start": {
                            "column": 21,
                            "line": 19
                          }
                        },
                        "range": [
                          685,
                          691
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TYPE",
                            "optional": false,
                            "range": [
                              687,
                              691
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 19
                              },
                              "start": {
                                "column": 23,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            687,
                            691
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 19
                            },
                            "start": {
                              "column": 23,
                              "line": 19
                            }
                          }
                        }
                      },
                      "range": [
                        683,
                        691
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 19
                        },
                        "start": {
                          "column": 19,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 19
                      },
                      "start": {
                        "column": 29,
                        "line": 19
                      }
                    },
                    "range": [
                      693,
                      740
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          717,
                          740
                        ],
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "range": [
                                    718,
                                    724
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 60,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 54,
                                      "line": 19
                                    }
                                  }
                                },
                                "range": [
                                  718,
                                  724
                                ],
                                "loc": {
                                  "end": {
                                    "column": 60,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 19
                                  }
                                }
                              },
                              {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "name",
                                      "optional": false,
                                      "range": [
                                        728,
                                        732
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 68,
                                          "line": 19
                                        },
                                        "start": {
                                          "column": 64,
                                          "line": 19
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
                                          "column": 74,
                                          "line": 19
                                        },
                                        "start": {
                                          "column": 68,
                                          "line": 19
                                        }
                                      },
                                      "range": [
                                        732,
                                        738
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "TYPE",
                                          "optional": false,
                                          "range": [
                                            734,
                                            738
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 74,
                                              "line": 19
                                            },
                                            "start": {
                                              "column": 70,
                                              "line": 19
                                            }
                                          }
                                        },
                                        "range": [
                                          734,
                                          738
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 74,
                                            "line": 19
                                          },
                                          "start": {
                                            "column": 70,
                                            "line": 19
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      728,
                                      738
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 74,
                                        "line": 19
                                      },
                                      "start": {
                                        "column": 64,
                                        "line": 19
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  727,
                                  739
                                ],
                                "loc": {
                                  "end": {
                                    "column": 75,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 63,
                                    "line": 19
                                  }
                                }
                              }
                            ],
                            "range": [
                              718,
                              739
                            ],
                            "loc": {
                              "end": {
                                "column": 75,
                                "line": 19
                              },
                              "start": {
                                "column": 54,
                                "line": 19
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 76,
                            "line": 19
                          },
                          "start": {
                            "column": 53,
                            "line": 19
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "range": [
                          696,
                          717
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 19
                          },
                          "start": {
                            "column": 32,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        696,
                        740
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 19
                        },
                        "start": {
                          "column": 32,
                          "line": 19
                        }
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 19
                      },
                      "start": {
                        "column": 12,
                        "line": 19
                      }
                    },
                    "range": [
                      676,
                      682
                    ],
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TYPE",
                          "optional": false,
                          "range": [
                            677,
                            681
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 19
                            },
                            "start": {
                              "column": 13,
                              "line": 19
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          677,
                          681
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 19
                          },
                          "start": {
                            "column": 13,
                            "line": 19
                          }
                        }
                      }
                    ]
                  },
                  "range": [
                    676,
                    740
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 19
                    },
                    "start": {
                      "column": 12,
                      "line": 19
                    }
                  }
                }
              },
              "range": [
                670,
                740
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 19
                },
                "start": {
                  "column": 6,
                  "line": 19
                }
              }
            }
          ],
          "range": [
            662,
            746
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 20
            },
            "start": {
              "column": 38,
              "line": 18
            }
          }
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "members": [],
          "range": [
            657,
            659
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 18
            },
            "start": {
              "column": 33,
              "line": 18
            }
          }
        },
        "range": [
          628,
          746
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 20
          },
          "start": {
            "column": 4,
            "line": 18
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 17
          },
          "start": {
            "column": 27,
            "line": 17
          }
        },
        "range": [
          613,
          621
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "range": [
                614,
                620
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 17
                },
                "start": {
                  "column": 28,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              614,
              620
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 17
              },
              "start": {
                "column": 28,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        588,
        746
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 20
        },
        "start": {
          "column": 2,
          "line": 17
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
            "name": "buildNameFieldConstructor",
            "optional": false,
            "range": [
              758,
              783
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 22
              },
              "start": {
                "column": 8,
                "line": 22
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "range": [
                        850,
                        854
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 24
                        },
                        "start": {
                          "column": 6,
                          "line": 24
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "TSAsExpression",
                              "expression": {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "range": [
                                      938,
                                      940
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 46,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 44,
                                        "line": 25
                                      }
                                    }
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "soFar",
                                    "optional": false,
                                    "range": [
                                      942,
                                      947
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 53,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 48,
                                        "line": 25
                                      }
                                    }
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "name",
                                          "optional": false,
                                          "range": [
                                            950,
                                            954
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 60,
                                              "line": 25
                                            },
                                            "start": {
                                              "column": 56,
                                              "line": 25
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
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "instance",
                                            "optional": false,
                                            "range": [
                                              956,
                                              964
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 70,
                                                "line": 25
                                              },
                                              "start": {
                                                "column": 62,
                                                "line": 25
                                              }
                                            }
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "range": [
                                                968,
                                                972
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 78,
                                                  "line": 25
                                                },
                                                "start": {
                                                  "column": 74,
                                                  "line": 25
                                                }
                                              }
                                            },
                                            "range": [
                                              968,
                                              972
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 78,
                                                "line": 25
                                              },
                                              "start": {
                                                "column": 74,
                                                "line": 25
                                              }
                                            }
                                          },
                                          "range": [
                                            956,
                                            972
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 78,
                                              "line": 25
                                            },
                                            "start": {
                                              "column": 62,
                                              "line": 25
                                            }
                                          }
                                        },
                                        "range": [
                                          950,
                                          972
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 78,
                                            "line": 25
                                          },
                                          "start": {
                                            "column": 56,
                                            "line": 25
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      949,
                                      973
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 79,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 55,
                                        "line": 25
                                      }
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Object",
                                    "optional": false,
                                    "range": [
                                      924,
                                      930
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 36,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 30,
                                        "line": 25
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "assign",
                                    "optional": false,
                                    "range": [
                                      931,
                                      937
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 43,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 25
                                      }
                                    }
                                  },
                                  "range": [
                                    924,
                                    937
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 25
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  924,
                                  974
                                ],
                                "loc": {
                                  "end": {
                                    "column": 80,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 25
                                  }
                                }
                              },
                              "typeAnnotation": {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "range": [
                                        978,
                                        984
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 90,
                                          "line": 25
                                        },
                                        "start": {
                                          "column": 84,
                                          "line": 25
                                        }
                                      }
                                    },
                                    "range": [
                                      978,
                                      984
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 90,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 84,
                                        "line": 25
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeLiteral",
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "name",
                                          "optional": false,
                                          "range": [
                                            988,
                                            992
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 98,
                                              "line": 25
                                            },
                                            "start": {
                                              "column": 94,
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
                                              "column": 104,
                                              "line": 25
                                            },
                                            "start": {
                                              "column": 98,
                                              "line": 25
                                            }
                                          },
                                          "range": [
                                            992,
                                            998
                                          ],
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "range": [
                                                994,
                                                998
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 104,
                                                  "line": 25
                                                },
                                                "start": {
                                                  "column": 100,
                                                  "line": 25
                                                }
                                              }
                                            },
                                            "range": [
                                              994,
                                              998
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 104,
                                                "line": 25
                                              },
                                              "start": {
                                                "column": 100,
                                                "line": 25
                                              }
                                            }
                                          }
                                        },
                                        "range": [
                                          988,
                                          998
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 104,
                                            "line": 25
                                          },
                                          "start": {
                                            "column": 94,
                                            "line": 25
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      987,
                                      999
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 105,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 93,
                                        "line": 25
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  978,
                                  999
                                ],
                                "loc": {
                                  "end": {
                                    "column": 105,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 84,
                                    "line": 25
                                  }
                                }
                              },
                              "range": [
                                924,
                                999
                              ],
                              "loc": {
                                "end": {
                                  "column": 105,
                                  "line": 25
                                },
                                "start": {
                                  "column": 30,
                                  "line": 25
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "buildPubSubRecordType",
                            "optional": false,
                            "range": [
                              902,
                              923
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 25
                              },
                              "start": {
                                "column": 8,
                                "line": 25
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            902,
                            1000
                          ],
                          "loc": {
                            "end": {
                              "column": 106,
                              "line": 25
                            },
                            "start": {
                              "column": 8,
                              "line": 25
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              1025,
                              1048
                            ],
                            "params": [
                              {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "range": [
                                        1026,
                                        1032
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 138,
                                          "line": 25
                                        },
                                        "start": {
                                          "column": 132,
                                          "line": 25
                                        }
                                      }
                                    },
                                    "range": [
                                      1026,
                                      1032
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 138,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 132,
                                        "line": 25
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeLiteral",
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "name",
                                          "optional": false,
                                          "range": [
                                            1036,
                                            1040
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 146,
                                              "line": 25
                                            },
                                            "start": {
                                              "column": 142,
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
                                              "column": 152,
                                              "line": 25
                                            },
                                            "start": {
                                              "column": 146,
                                              "line": 25
                                            }
                                          },
                                          "range": [
                                            1040,
                                            1046
                                          ],
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "range": [
                                                1042,
                                                1046
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 152,
                                                  "line": 25
                                                },
                                                "start": {
                                                  "column": 148,
                                                  "line": 25
                                                }
                                              }
                                            },
                                            "range": [
                                              1042,
                                              1046
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 152,
                                                "line": 25
                                              },
                                              "start": {
                                                "column": 148,
                                                "line": 25
                                              }
                                            }
                                          }
                                        },
                                        "range": [
                                          1036,
                                          1046
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 152,
                                            "line": 25
                                          },
                                          "start": {
                                            "column": 142,
                                            "line": 25
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      1035,
                                      1047
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 153,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 141,
                                        "line": 25
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  1026,
                                  1047
                                ],
                                "loc": {
                                  "end": {
                                    "column": 153,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 132,
                                    "line": 25
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 154,
                                "line": 25
                              },
                              "start": {
                                "column": 131,
                                "line": 25
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BuildPubSubRecordType",
                            "optional": false,
                            "range": [
                              1004,
                              1025
                            ],
                            "loc": {
                              "end": {
                                "column": 131,
                                "line": 25
                              },
                              "start": {
                                "column": 110,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            1004,
                            1048
                          ],
                          "loc": {
                            "end": {
                              "column": 154,
                              "line": 25
                            },
                            "start": {
                              "column": 110,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          902,
                          1048
                        ],
                        "loc": {
                          "end": {
                            "column": 154,
                            "line": 25
                          },
                          "start": {
                            "column": 8,
                            "line": 25
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "instance",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 24
                                },
                                "start": {
                                  "column": 27,
                                  "line": 24
                                }
                              },
                              "range": [
                                871,
                                877
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TYPE",
                                  "optional": false,
                                  "range": [
                                    873,
                                    877
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 24
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 24
                                    }
                                  }
                                },
                                "range": [
                                  873,
                                  877
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 24
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 24
                                  }
                                }
                              }
                            },
                            "range": [
                              863,
                              877
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 24
                              },
                              "start": {
                                "column": 19,
                                "line": 24
                              }
                            }
                          },
                          "optional": false,
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "range": [
                              880,
                              889
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 24
                              },
                              "start": {
                                "column": 36,
                                "line": 24
                              }
                            }
                          },
                          "range": [
                            863,
                            889
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 24
                            },
                            "start": {
                              "column": 19,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 24
                          },
                          "start": {
                            "column": 12,
                            "line": 24
                          }
                        },
                        "range": [
                          856,
                          862
                        ],
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TYPE",
                              "optional": false,
                              "range": [
                                857,
                                861
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 24
                                },
                                "start": {
                                  "column": 13,
                                  "line": 24
                                }
                              }
                            },
                            "out": false,
                            "range": [
                              857,
                              861
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 24
                              },
                              "start": {
                                "column": 13,
                                "line": 24
                              }
                            }
                          }
                        ]
                      },
                      "range": [
                        856,
                        1048
                      ],
                      "loc": {
                        "end": {
                          "column": 154,
                          "line": 25
                        },
                        "start": {
                          "column": 12,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      850,
                      1048
                    ],
                    "loc": {
                      "end": {
                        "column": 154,
                        "line": 25
                      },
                      "start": {
                        "column": 6,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  842,
                  1054
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 26
                  },
                  "start": {
                    "column": 27,
                    "line": 23
                  }
                }
              },
              "consequent": {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  837,
                  839
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 23
                  },
                  "start": {
                    "column": 22,
                    "line": 23
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "raw": "\"name\"",
                  "value": "name",
                  "range": [
                    819,
                    825
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 23
                    },
                    "start": {
                      "column": 4,
                      "line": 23
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "soFar",
                  "optional": false,
                  "range": [
                    829,
                    834
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 23
                    },
                    "start": {
                      "column": 14,
                      "line": 23
                    }
                  }
                },
                "range": [
                  819,
                  834
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 23
                  }
                }
              },
              "range": [
                819,
                1054
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 22
                    },
                    "start": {
                      "column": 50,
                      "line": 22
                    }
                  },
                  "range": [
                    800,
                    808
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "range": [
                        802,
                        808
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 22
                        },
                        "start": {
                          "column": 52,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      802,
                      808
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 22
                      },
                      "start": {
                        "column": 52,
                        "line": 22
                      }
                    }
                  }
                },
                "range": [
                  795,
                  808
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 22
                  },
                  "start": {
                    "column": 45,
                    "line": 22
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 44,
                  "line": 22
                },
                "start": {
                  "column": 36,
                  "line": 22
                }
              },
              "range": [
                786,
                794
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "range": [
                      787,
                      793
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 22
                      },
                      "start": {
                        "column": 37,
                        "line": 22
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    787,
                    793
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 22
                    },
                    "start": {
                      "column": 37,
                      "line": 22
                    }
                  }
                }
              ]
            },
            "range": [
              786,
              1058
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 27
              },
              "start": {
                "column": 36,
                "line": 22
              }
            }
          },
          "range": [
            758,
            1058
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 27
            },
            "start": {
              "column": 8,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        752,
        1059
      ],
      "loc": {
        "end": {
          "column": 4,
          "line": 27
        },
        "start": {
          "column": 2,
          "line": 22
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StoredAsConstructor",
        "optional": false,
        "range": [
          1070,
          1089
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 29
          },
          "start": {
            "column": 7,
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
            "name": "SO_FAR",
            "optional": false,
            "range": [
              1104,
              1110
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          "range": [
            1104,
            1110
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 30
            },
            "start": {
              "column": 4,
              "line": 30
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
                "name": "storedAs",
                "optional": false,
                "range": [
                  1120,
                  1128
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 30
                  },
                  "start": {
                    "column": 20,
                    "line": 30
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
                    "line": 30
                  },
                  "start": {
                    "column": 28,
                    "line": 30
                  }
                },
                "range": [
                  1128,
                  1133
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    1130,
                    1133
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 30
                    },
                    "start": {
                      "column": 30,
                      "line": 30
                    }
                  }
                }
              },
              "range": [
                1120,
                1133
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 30
                },
                "start": {
                  "column": 20,
                  "line": 30
                }
              }
            }
          ],
          "range": [
            1119,
            1134
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 30
            },
            "start": {
              "column": 19,
              "line": 30
            }
          }
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "storedAsJsonEncodedRedisString",
                "optional": false,
                "range": [
                  1150,
                  1180
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 31
                  },
                  "start": {
                    "column": 6,
                    "line": 31
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
                    "column": 141,
                    "line": 31
                  },
                  "start": {
                    "column": 36,
                    "line": 31
                  }
                },
                "range": [
                  1180,
                  1285
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 141,
                        "line": 31
                      },
                      "start": {
                        "column": 41,
                        "line": 31
                      }
                    },
                    "range": [
                      1185,
                      1285
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1209,
                          1285
                        ],
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "range": [
                                    1210,
                                    1216
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 72,
                                      "line": 31
                                    },
                                    "start": {
                                      "column": 66,
                                      "line": 31
                                    }
                                  }
                                },
                                "range": [
                                  1210,
                                  1216
                                ],
                                "loc": {
                                  "end": {
                                    "column": 72,
                                    "line": 31
                                  },
                                  "start": {
                                    "column": 66,
                                    "line": 31
                                  }
                                }
                              },
                              {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "storedAs",
                                      "optional": false,
                                      "range": [
                                        1220,
                                        1228
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 84,
                                          "line": 31
                                        },
                                        "start": {
                                          "column": 76,
                                          "line": 31
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
                                          "column": 139,
                                          "line": 31
                                        },
                                        "start": {
                                          "column": 84,
                                          "line": 31
                                        }
                                      },
                                      "range": [
                                        1228,
                                        1283
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "TSQualifiedName",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "PubSubRecordIsStoredInRedisAsA",
                                            "optional": false,
                                            "range": [
                                              1230,
                                              1260
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 116,
                                                "line": 31
                                              },
                                              "start": {
                                                "column": 86,
                                                "line": 31
                                              }
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "jsonEncodedRedisString",
                                            "optional": false,
                                            "range": [
                                              1261,
                                              1283
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 139,
                                                "line": 31
                                              },
                                              "start": {
                                                "column": 117,
                                                "line": 31
                                              }
                                            }
                                          },
                                          "range": [
                                            1230,
                                            1283
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 139,
                                              "line": 31
                                            },
                                            "start": {
                                              "column": 86,
                                              "line": 31
                                            }
                                          }
                                        },
                                        "range": [
                                          1230,
                                          1283
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 139,
                                            "line": 31
                                          },
                                          "start": {
                                            "column": 86,
                                            "line": 31
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      1220,
                                      1283
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 139,
                                        "line": 31
                                      },
                                      "start": {
                                        "column": 76,
                                        "line": 31
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  1219,
                                  1284
                                ],
                                "loc": {
                                  "end": {
                                    "column": 140,
                                    "line": 31
                                  },
                                  "start": {
                                    "column": 75,
                                    "line": 31
                                  }
                                }
                              }
                            ],
                            "range": [
                              1210,
                              1284
                            ],
                            "loc": {
                              "end": {
                                "column": 140,
                                "line": 31
                              },
                              "start": {
                                "column": 66,
                                "line": 31
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 141,
                            "line": 31
                          },
                          "start": {
                            "column": 65,
                            "line": 31
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "range": [
                          1188,
                          1209
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 31
                          },
                          "start": {
                            "column": 44,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        1188,
                        1285
                      ],
                      "loc": {
                        "end": {
                          "column": 141,
                          "line": 31
                        },
                        "start": {
                          "column": 44,
                          "line": 31
                        }
                      }
                    }
                  },
                  "range": [
                    1182,
                    1285
                  ],
                  "loc": {
                    "end": {
                      "column": 141,
                      "line": 31
                    },
                    "start": {
                      "column": 38,
                      "line": 31
                    }
                  }
                }
              },
              "range": [
                1150,
                1286
              ],
              "loc": {
                "end": {
                  "column": 142,
                  "line": 31
                },
                "start": {
                  "column": 6,
                  "line": 31
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "storedRedisHash",
                "optional": false,
                "range": [
                  1293,
                  1308
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 32
                  },
                  "start": {
                    "column": 6,
                    "line": 32
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
                    "column": 113,
                    "line": 32
                  },
                  "start": {
                    "column": 21,
                    "line": 32
                  }
                },
                "range": [
                  1308,
                  1400
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 113,
                        "line": 32
                      },
                      "start": {
                        "column": 26,
                        "line": 32
                      }
                    },
                    "range": [
                      1313,
                      1400
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1337,
                          1400
                        ],
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "range": [
                                    1338,
                                    1344
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 57,
                                      "line": 32
                                    },
                                    "start": {
                                      "column": 51,
                                      "line": 32
                                    }
                                  }
                                },
                                "range": [
                                  1338,
                                  1344
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 32
                                  },
                                  "start": {
                                    "column": 51,
                                    "line": 32
                                  }
                                }
                              },
                              {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "storedAs",
                                      "optional": false,
                                      "range": [
                                        1348,
                                        1356
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 69,
                                          "line": 32
                                        },
                                        "start": {
                                          "column": 61,
                                          "line": 32
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
                                          "column": 111,
                                          "line": 32
                                        },
                                        "start": {
                                          "column": 69,
                                          "line": 32
                                        }
                                      },
                                      "range": [
                                        1356,
                                        1398
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "TSQualifiedName",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "PubSubRecordIsStoredInRedisAsA",
                                            "optional": false,
                                            "range": [
                                              1358,
                                              1388
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 101,
                                                "line": 32
                                              },
                                              "start": {
                                                "column": 71,
                                                "line": 32
                                              }
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "redisHash",
                                            "optional": false,
                                            "range": [
                                              1389,
                                              1398
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 111,
                                                "line": 32
                                              },
                                              "start": {
                                                "column": 102,
                                                "line": 32
                                              }
                                            }
                                          },
                                          "range": [
                                            1358,
                                            1398
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 111,
                                              "line": 32
                                            },
                                            "start": {
                                              "column": 71,
                                              "line": 32
                                            }
                                          }
                                        },
                                        "range": [
                                          1358,
                                          1398
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 111,
                                            "line": 32
                                          },
                                          "start": {
                                            "column": 71,
                                            "line": 32
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      1348,
                                      1398
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 111,
                                        "line": 32
                                      },
                                      "start": {
                                        "column": 61,
                                        "line": 32
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  1347,
                                  1399
                                ],
                                "loc": {
                                  "end": {
                                    "column": 112,
                                    "line": 32
                                  },
                                  "start": {
                                    "column": 60,
                                    "line": 32
                                  }
                                }
                              }
                            ],
                            "range": [
                              1338,
                              1399
                            ],
                            "loc": {
                              "end": {
                                "column": 112,
                                "line": 32
                              },
                              "start": {
                                "column": 51,
                                "line": 32
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 113,
                            "line": 32
                          },
                          "start": {
                            "column": 50,
                            "line": 32
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "range": [
                          1316,
                          1337
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 32
                          },
                          "start": {
                            "column": 29,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        1316,
                        1400
                      ],
                      "loc": {
                        "end": {
                          "column": 113,
                          "line": 32
                        },
                        "start": {
                          "column": 29,
                          "line": 32
                        }
                      }
                    }
                  },
                  "range": [
                    1310,
                    1400
                  ],
                  "loc": {
                    "end": {
                      "column": 113,
                      "line": 32
                    },
                    "start": {
                      "column": 23,
                      "line": 32
                    }
                  }
                }
              },
              "range": [
                1293,
                1401
              ],
              "loc": {
                "end": {
                  "column": 114,
                  "line": 32
                },
                "start": {
                  "column": 6,
                  "line": 32
                }
              }
            }
          ],
          "range": [
            1142,
            1407
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 33
            },
            "start": {
              "column": 42,
              "line": 30
            }
          }
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "members": [],
          "range": [
            1137,
            1139
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 30
            },
            "start": {
              "column": 37,
              "line": 30
            }
          }
        },
        "range": [
          1104,
          1407
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 33
          },
          "start": {
            "column": 4,
            "line": 30
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 29
          },
          "start": {
            "column": 26,
            "line": 29
          }
        },
        "range": [
          1089,
          1097
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "range": [
                1090,
                1096
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 29
                },
                "start": {
                  "column": 27,
                  "line": 29
                }
              }
            },
            "out": false,
            "range": [
              1090,
              1096
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 29
              },
              "start": {
                "column": 27,
                "line": 29
              }
            }
          }
        ]
      },
      "range": [
        1065,
        1407
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 33
        },
        "start": {
          "column": 2,
          "line": 29
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
            "name": "buildStoredAsConstructor",
            "optional": false,
            "range": [
              1419,
              1443
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 35
              },
              "start": {
                "column": 8,
                "line": 35
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "storedAsJsonEncodedRedisString",
                      "optional": false,
                      "range": [
                        1514,
                        1544
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 37
                        },
                        "start": {
                          "column": 6,
                          "line": 37
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "ObjectExpression",
                                  "properties": [],
                                  "range": [
                                    1596,
                                    1598
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 38
                                    },
                                    "start": {
                                      "column": 44,
                                      "line": 38
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "soFar",
                                  "optional": false,
                                  "range": [
                                    1600,
                                    1605
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 38
                                    },
                                    "start": {
                                      "column": 48,
                                      "line": 38
                                    }
                                  }
                                },
                                {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "storedAs",
                                        "optional": false,
                                        "range": [
                                          1608,
                                          1616
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 64,
                                            "line": 38
                                          },
                                          "start": {
                                            "column": 56,
                                            "line": 38
                                          }
                                        }
                                      },
                                      "kind": "init",
                                      "method": false,
                                      "optional": false,
                                      "shorthand": false,
                                      "value": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "PubSubRecordIsStoredInRedisAsA",
                                          "optional": false,
                                          "range": [
                                            1618,
                                            1648
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 96,
                                              "line": 38
                                            },
                                            "start": {
                                              "column": 66,
                                              "line": 38
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "jsonEncodedRedisString",
                                          "optional": false,
                                          "range": [
                                            1649,
                                            1671
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 119,
                                              "line": 38
                                            },
                                            "start": {
                                              "column": 97,
                                              "line": 38
                                            }
                                          }
                                        },
                                        "range": [
                                          1618,
                                          1671
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 119,
                                            "line": 38
                                          },
                                          "start": {
                                            "column": 66,
                                            "line": 38
                                          }
                                        }
                                      },
                                      "range": [
                                        1608,
                                        1671
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 119,
                                          "line": 38
                                        },
                                        "start": {
                                          "column": 56,
                                          "line": 38
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    1607,
                                    1672
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 120,
                                      "line": 38
                                    },
                                    "start": {
                                      "column": 55,
                                      "line": 38
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Object",
                                  "optional": false,
                                  "range": [
                                    1582,
                                    1588
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 38
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 38
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assign",
                                  "optional": false,
                                  "range": [
                                    1589,
                                    1595
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 38
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 38
                                    }
                                  }
                                },
                                "range": [
                                  1582,
                                  1595
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 38
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                1582,
                                1673
                              ],
                              "loc": {
                                "end": {
                                  "column": 121,
                                  "line": 38
                                },
                                "start": {
                                  "column": 30,
                                  "line": 38
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "buildPubSubRecordType",
                            "optional": false,
                            "range": [
                              1560,
                              1581
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 38
                              },
                              "start": {
                                "column": 8,
                                "line": 38
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1560,
                            1674
                          ],
                          "loc": {
                            "end": {
                              "column": 122,
                              "line": 38
                            },
                            "start": {
                              "column": 8,
                              "line": 38
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              1709,
                              1785
                            ],
                            "params": [
                              {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "range": [
                                        1710,
                                        1716
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 38,
                                          "line": 39
                                        },
                                        "start": {
                                          "column": 32,
                                          "line": 39
                                        }
                                      }
                                    },
                                    "range": [
                                      1710,
                                      1716
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 39
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 39
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeLiteral",
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "storedAs",
                                          "optional": false,
                                          "range": [
                                            1720,
                                            1728
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 50,
                                              "line": 39
                                            },
                                            "start": {
                                              "column": 42,
                                              "line": 39
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
                                              "column": 105,
                                              "line": 39
                                            },
                                            "start": {
                                              "column": 50,
                                              "line": 39
                                            }
                                          },
                                          "range": [
                                            1728,
                                            1783
                                          ],
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "TSQualifiedName",
                                              "left": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "PubSubRecordIsStoredInRedisAsA",
                                                "optional": false,
                                                "range": [
                                                  1730,
                                                  1760
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 82,
                                                    "line": 39
                                                  },
                                                  "start": {
                                                    "column": 52,
                                                    "line": 39
                                                  }
                                                }
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "jsonEncodedRedisString",
                                                "optional": false,
                                                "range": [
                                                  1761,
                                                  1783
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 105,
                                                    "line": 39
                                                  },
                                                  "start": {
                                                    "column": 83,
                                                    "line": 39
                                                  }
                                                }
                                              },
                                              "range": [
                                                1730,
                                                1783
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 105,
                                                  "line": 39
                                                },
                                                "start": {
                                                  "column": 52,
                                                  "line": 39
                                                }
                                              }
                                            },
                                            "range": [
                                              1730,
                                              1783
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 105,
                                                "line": 39
                                              },
                                              "start": {
                                                "column": 52,
                                                "line": 39
                                              }
                                            }
                                          }
                                        },
                                        "range": [
                                          1720,
                                          1783
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 105,
                                            "line": 39
                                          },
                                          "start": {
                                            "column": 42,
                                            "line": 39
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      1719,
                                      1784
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 106,
                                        "line": 39
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 39
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  1710,
                                  1784
                                ],
                                "loc": {
                                  "end": {
                                    "column": 106,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 39
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 107,
                                "line": 39
                              },
                              "start": {
                                "column": 31,
                                "line": 39
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BuildPubSubRecordType",
                            "optional": false,
                            "range": [
                              1688,
                              1709
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 39
                              },
                              "start": {
                                "column": 10,
                                "line": 39
                              }
                            }
                          },
                          "range": [
                            1688,
                            1785
                          ],
                          "loc": {
                            "end": {
                              "column": 107,
                              "line": 39
                            },
                            "start": {
                              "column": 10,
                              "line": 39
                            }
                          }
                        },
                        "range": [
                          1560,
                          1785
                        ],
                        "loc": {
                          "end": {
                            "column": 107,
                            "line": 39
                          },
                          "start": {
                            "column": 8,
                            "line": 38
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        1546,
                        1785
                      ],
                      "loc": {
                        "end": {
                          "column": 107,
                          "line": 39
                        },
                        "start": {
                          "column": 38,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      1514,
                      1785
                    ],
                    "loc": {
                      "end": {
                        "column": 107,
                        "line": 39
                      },
                      "start": {
                        "column": 6,
                        "line": 37
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "storedAsRedisHash",
                      "optional": false,
                      "range": [
                        1793,
                        1810
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 40
                        },
                        "start": {
                          "column": 6,
                          "line": 40
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "ObjectExpression",
                                  "properties": [],
                                  "range": [
                                    1862,
                                    1864
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 41
                                    },
                                    "start": {
                                      "column": 44,
                                      "line": 41
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "soFar",
                                  "optional": false,
                                  "range": [
                                    1866,
                                    1871
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 41
                                    },
                                    "start": {
                                      "column": 48,
                                      "line": 41
                                    }
                                  }
                                },
                                {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "storedAs",
                                        "optional": false,
                                        "range": [
                                          1874,
                                          1882
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 64,
                                            "line": 41
                                          },
                                          "start": {
                                            "column": 56,
                                            "line": 41
                                          }
                                        }
                                      },
                                      "kind": "init",
                                      "method": false,
                                      "optional": false,
                                      "shorthand": false,
                                      "value": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "PubSubRecordIsStoredInRedisAsA",
                                          "optional": false,
                                          "range": [
                                            1884,
                                            1914
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 96,
                                              "line": 41
                                            },
                                            "start": {
                                              "column": 66,
                                              "line": 41
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "redisHash",
                                          "optional": false,
                                          "range": [
                                            1915,
                                            1924
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 106,
                                              "line": 41
                                            },
                                            "start": {
                                              "column": 97,
                                              "line": 41
                                            }
                                          }
                                        },
                                        "range": [
                                          1884,
                                          1924
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 106,
                                            "line": 41
                                          },
                                          "start": {
                                            "column": 66,
                                            "line": 41
                                          }
                                        }
                                      },
                                      "range": [
                                        1874,
                                        1924
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 106,
                                          "line": 41
                                        },
                                        "start": {
                                          "column": 56,
                                          "line": 41
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    1873,
                                    1925
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 107,
                                      "line": 41
                                    },
                                    "start": {
                                      "column": 55,
                                      "line": 41
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Object",
                                  "optional": false,
                                  "range": [
                                    1848,
                                    1854
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 41
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 41
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assign",
                                  "optional": false,
                                  "range": [
                                    1855,
                                    1861
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 41
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 41
                                    }
                                  }
                                },
                                "range": [
                                  1848,
                                  1861
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 41
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 41
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                1848,
                                1926
                              ],
                              "loc": {
                                "end": {
                                  "column": 108,
                                  "line": 41
                                },
                                "start": {
                                  "column": 30,
                                  "line": 41
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "buildPubSubRecordType",
                            "optional": false,
                            "range": [
                              1826,
                              1847
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 41
                              },
                              "start": {
                                "column": 8,
                                "line": 41
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1826,
                            1927
                          ],
                          "loc": {
                            "end": {
                              "column": 109,
                              "line": 41
                            },
                            "start": {
                              "column": 8,
                              "line": 41
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              1962,
                              2025
                            ],
                            "params": [
                              {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "range": [
                                        1963,
                                        1969
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 38,
                                          "line": 42
                                        },
                                        "start": {
                                          "column": 32,
                                          "line": 42
                                        }
                                      }
                                    },
                                    "range": [
                                      1963,
                                      1969
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 42
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 42
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeLiteral",
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "storedAs",
                                          "optional": false,
                                          "range": [
                                            1973,
                                            1981
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 50,
                                              "line": 42
                                            },
                                            "start": {
                                              "column": 42,
                                              "line": 42
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
                                              "column": 92,
                                              "line": 42
                                            },
                                            "start": {
                                              "column": 50,
                                              "line": 42
                                            }
                                          },
                                          "range": [
                                            1981,
                                            2023
                                          ],
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "TSQualifiedName",
                                              "left": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "PubSubRecordIsStoredInRedisAsA",
                                                "optional": false,
                                                "range": [
                                                  1983,
                                                  2013
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 82,
                                                    "line": 42
                                                  },
                                                  "start": {
                                                    "column": 52,
                                                    "line": 42
                                                  }
                                                }
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "redisHash",
                                                "optional": false,
                                                "range": [
                                                  2014,
                                                  2023
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 92,
                                                    "line": 42
                                                  },
                                                  "start": {
                                                    "column": 83,
                                                    "line": 42
                                                  }
                                                }
                                              },
                                              "range": [
                                                1983,
                                                2023
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 92,
                                                  "line": 42
                                                },
                                                "start": {
                                                  "column": 52,
                                                  "line": 42
                                                }
                                              }
                                            },
                                            "range": [
                                              1983,
                                              2023
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 92,
                                                "line": 42
                                              },
                                              "start": {
                                                "column": 52,
                                                "line": 42
                                              }
                                            }
                                          }
                                        },
                                        "range": [
                                          1973,
                                          2023
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 92,
                                            "line": 42
                                          },
                                          "start": {
                                            "column": 42,
                                            "line": 42
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      1972,
                                      2024
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 93,
                                        "line": 42
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 42
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  1963,
                                  2024
                                ],
                                "loc": {
                                  "end": {
                                    "column": 93,
                                    "line": 42
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 42
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 94,
                                "line": 42
                              },
                              "start": {
                                "column": 31,
                                "line": 42
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BuildPubSubRecordType",
                            "optional": false,
                            "range": [
                              1941,
                              1962
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 42
                              },
                              "start": {
                                "column": 10,
                                "line": 42
                              }
                            }
                          },
                          "range": [
                            1941,
                            2025
                          ],
                          "loc": {
                            "end": {
                              "column": 94,
                              "line": 42
                            },
                            "start": {
                              "column": 10,
                              "line": 42
                            }
                          }
                        },
                        "range": [
                          1826,
                          2025
                        ],
                        "loc": {
                          "end": {
                            "column": 94,
                            "line": 42
                          },
                          "start": {
                            "column": 8,
                            "line": 41
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        1812,
                        2025
                      ],
                      "loc": {
                        "end": {
                          "column": 94,
                          "line": 42
                        },
                        "start": {
                          "column": 25,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      1793,
                      2025
                    ],
                    "loc": {
                      "end": {
                        "column": 94,
                        "line": 42
                      },
                      "start": {
                        "column": 6,
                        "line": 40
                      }
                    }
                  }
                ],
                "range": [
                  1506,
                  2032
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 43
                  },
                  "start": {
                    "column": 31,
                    "line": 36
                  }
                }
              },
              "consequent": {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  1501,
                  1503
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 36
                  },
                  "start": {
                    "column": 26,
                    "line": 36
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "raw": "\"storedAs\"",
                  "value": "storedAs",
                  "range": [
                    1479,
                    1489
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 36
                    },
                    "start": {
                      "column": 4,
                      "line": 36
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "soFar",
                  "optional": false,
                  "range": [
                    1493,
                    1498
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 36
                    },
                    "start": {
                      "column": 18,
                      "line": 36
                    }
                  }
                },
                "range": [
                  1479,
                  1498
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 36
                  },
                  "start": {
                    "column": 4,
                    "line": 36
                  }
                }
              },
              "range": [
                1479,
                2032
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 43
                },
                "start": {
                  "column": 4,
                  "line": 36
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 35
                    },
                    "start": {
                      "column": 49,
                      "line": 35
                    }
                  },
                  "range": [
                    1460,
                    1468
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "range": [
                        1462,
                        1468
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 35
                        },
                        "start": {
                          "column": 51,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      1462,
                      1468
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 35
                      },
                      "start": {
                        "column": 51,
                        "line": 35
                      }
                    }
                  }
                },
                "range": [
                  1455,
                  1468
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 35
                  },
                  "start": {
                    "column": 44,
                    "line": 35
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 35
                },
                "start": {
                  "column": 35,
                  "line": 35
                }
              },
              "range": [
                1446,
                1454
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "range": [
                      1447,
                      1453
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 35
                      },
                      "start": {
                        "column": 36,
                        "line": 35
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1447,
                    1453
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 35
                    },
                    "start": {
                      "column": 36,
                      "line": 35
                    }
                  }
                }
              ]
            },
            "range": [
              1446,
              2036
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 44
              },
              "start": {
                "column": 35,
                "line": 35
              }
            }
          },
          "range": [
            1419,
            2036
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 44
            },
            "start": {
              "column": 8,
              "line": 35
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1413,
        2037
      ],
      "loc": {
        "end": {
          "column": 4,
          "line": 44
        },
        "start": {
          "column": 2,
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
        "name": "IdentifierFieldConstructor",
        "optional": false,
        "range": [
          2048,
          2074
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 46
          },
          "start": {
            "column": 7,
            "line": 46
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
            "name": "SO_FAR",
            "optional": false,
            "range": [
              2089,
              2095
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          "range": [
            2089,
            2095
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 47
            },
            "start": {
              "column": 4,
              "line": 47
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
                "name": "identifier",
                "optional": false,
                "range": [
                  2105,
                  2115
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 47
                  },
                  "start": {
                    "column": 20,
                    "line": 47
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
                    "column": 35,
                    "line": 47
                  },
                  "start": {
                    "column": 30,
                    "line": 47
                  }
                },
                "range": [
                  2115,
                  2120
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    2117,
                    2120
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 47
                    },
                    "start": {
                      "column": 32,
                      "line": 47
                    }
                  }
                }
              },
              "range": [
                2105,
                2120
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 47
                },
                "start": {
                  "column": 20,
                  "line": 47
                }
              }
            }
          ],
          "range": [
            2104,
            2121
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 47
            },
            "start": {
              "column": 19,
              "line": 47
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "range": [
                2133,
                2139
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 48
                },
                "start": {
                  "column": 4,
                  "line": 48
                }
              }
            },
            "range": [
              2133,
              2139
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
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
                  "name": "record",
                  "optional": false,
                  "range": [
                    2149,
                    2155
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 48
                    },
                    "start": {
                      "column": 20,
                      "line": 48
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
                      "column": 31,
                      "line": 48
                    },
                    "start": {
                      "column": 26,
                      "line": 48
                    }
                  },
                  "range": [
                    2155,
                    2160
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      2157,
                      2160
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 48
                      },
                      "start": {
                        "column": 28,
                        "line": 48
                      }
                    }
                  }
                },
                "range": [
                  2149,
                  2160
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 48
                  },
                  "start": {
                    "column": 20,
                    "line": 48
                  }
                }
              }
            ],
            "range": [
              2148,
              2161
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 48
              },
              "start": {
                "column": 19,
                "line": 48
              }
            }
          },
          "falseType": {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              2297,
              2299
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 50
              },
              "start": {
                "column": 8,
                "line": 50
              }
            }
          },
          "trueType": {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "identifier",
                  "optional": false,
                  "range": [
                    2172,
                    2182
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 49
                    },
                    "start": {
                      "column": 6,
                      "line": 49
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
                      "column": 122,
                      "line": 49
                    },
                    "start": {
                      "column": 16,
                      "line": 49
                    }
                  },
                  "range": [
                    2182,
                    2288
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 49
                            },
                            "start": {
                              "column": 61,
                              "line": 49
                            }
                          },
                          "range": [
                            2227,
                            2233
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TYPE",
                              "optional": false,
                              "range": [
                                2229,
                                2233
                              ],
                              "loc": {
                                "end": {
                                  "column": 67,
                                  "line": 49
                                },
                                "start": {
                                  "column": 63,
                                  "line": 49
                                }
                              }
                            },
                            "range": [
                              2229,
                              2233
                            ],
                            "loc": {
                              "end": {
                                "column": 67,
                                "line": 49
                              },
                              "start": {
                                "column": 63,
                                "line": 49
                              }
                            }
                          }
                        },
                        "range": [
                          2225,
                          2233
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 49
                          },
                          "start": {
                            "column": 59,
                            "line": 49
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 122,
                          "line": 49
                        },
                        "start": {
                          "column": 69,
                          "line": 49
                        }
                      },
                      "range": [
                        2235,
                        2288
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            2259,
                            2288
                          ],
                          "params": [
                            {
                              "type": "TSIntersectionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "SO_FAR",
                                    "optional": false,
                                    "range": [
                                      2260,
                                      2266
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 100,
                                        "line": 49
                                      },
                                      "start": {
                                        "column": 94,
                                        "line": 49
                                      }
                                    }
                                  },
                                  "range": [
                                    2260,
                                    2266
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 100,
                                      "line": 49
                                    },
                                    "start": {
                                      "column": 94,
                                      "line": 49
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeLiteral",
                                  "members": [
                                    {
                                      "type": "TSPropertySignature",
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "identifier",
                                        "optional": false,
                                        "range": [
                                          2270,
                                          2280
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 114,
                                            "line": 49
                                          },
                                          "start": {
                                            "column": 104,
                                            "line": 49
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
                                            "column": 120,
                                            "line": 49
                                          },
                                          "start": {
                                            "column": 114,
                                            "line": 49
                                          }
                                        },
                                        "range": [
                                          2280,
                                          2286
                                        ],
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "TYPE",
                                            "optional": false,
                                            "range": [
                                              2282,
                                              2286
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 120,
                                                "line": 49
                                              },
                                              "start": {
                                                "column": 116,
                                                "line": 49
                                              }
                                            }
                                          },
                                          "range": [
                                            2282,
                                            2286
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 120,
                                              "line": 49
                                            },
                                            "start": {
                                              "column": 116,
                                              "line": 49
                                            }
                                          }
                                        }
                                      },
                                      "range": [
                                        2270,
                                        2286
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 120,
                                          "line": 49
                                        },
                                        "start": {
                                          "column": 104,
                                          "line": 49
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    2269,
                                    2287
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 121,
                                      "line": 49
                                    },
                                    "start": {
                                      "column": 103,
                                      "line": 49
                                    }
                                  }
                                }
                              ],
                              "range": [
                                2260,
                                2287
                              ],
                              "loc": {
                                "end": {
                                  "column": 121,
                                  "line": 49
                                },
                                "start": {
                                  "column": 94,
                                  "line": 49
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 122,
                              "line": 49
                            },
                            "start": {
                              "column": 93,
                              "line": 49
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "BuildPubSubRecordType",
                          "optional": false,
                          "range": [
                            2238,
                            2259
                          ],
                          "loc": {
                            "end": {
                              "column": 93,
                              "line": 49
                            },
                            "start": {
                              "column": 72,
                              "line": 49
                            }
                          }
                        },
                        "range": [
                          2238,
                          2288
                        ],
                        "loc": {
                          "end": {
                            "column": 122,
                            "line": 49
                          },
                          "start": {
                            "column": 72,
                            "line": 49
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 49
                        },
                        "start": {
                          "column": 18,
                          "line": 49
                        }
                      },
                      "range": [
                        2184,
                        2224
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
                                2205,
                                2223
                              ],
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "raw": "\"record\"",
                                      "value": "record",
                                      "range": [
                                        2213,
                                        2221
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 55,
                                          "line": 49
                                        },
                                        "start": {
                                          "column": 47,
                                          "line": 49
                                        }
                                      }
                                    },
                                    "range": [
                                      2213,
                                      2221
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 55,
                                        "line": 49
                                      },
                                      "start": {
                                        "column": 47,
                                        "line": 49
                                      }
                                    }
                                  },
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "range": [
                                        2206,
                                        2212
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 46,
                                          "line": 49
                                        },
                                        "start": {
                                          "column": 40,
                                          "line": 49
                                        }
                                      }
                                    },
                                    "range": [
                                      2206,
                                      2212
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 46,
                                        "line": 49
                                      },
                                      "start": {
                                        "column": 40,
                                        "line": 49
                                      }
                                    }
                                  },
                                  "range": [
                                    2206,
                                    2222
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 56,
                                      "line": 49
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 49
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 49
                                },
                                "start": {
                                  "column": 39,
                                  "line": 49
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Partial",
                              "optional": false,
                              "range": [
                                2198,
                                2205
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 49
                                },
                                "start": {
                                  "column": 32,
                                  "line": 49
                                }
                              }
                            },
                            "range": [
                              2198,
                              2223
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 49
                              },
                              "start": {
                                "column": 32,
                                "line": 49
                              }
                            }
                          },
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TYPE",
                            "optional": false,
                            "range": [
                              2185,
                              2189
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 49
                              },
                              "start": {
                                "column": 19,
                                "line": 49
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            2185,
                            2223
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 49
                            },
                            "start": {
                              "column": 19,
                              "line": 49
                            }
                          }
                        }
                      ]
                    },
                    "range": [
                      2184,
                      2288
                    ],
                    "loc": {
                      "end": {
                        "column": 122,
                        "line": 49
                      },
                      "start": {
                        "column": 18,
                        "line": 49
                      }
                    }
                  }
                },
                "range": [
                  2172,
                  2288
                ],
                "loc": {
                  "end": {
                    "column": 122,
                    "line": 49
                  },
                  "start": {
                    "column": 6,
                    "line": 49
                  }
                }
              }
            ],
            "range": [
              2164,
              2294
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 50
              },
              "start": {
                "column": 35,
                "line": 48
              }
            }
          },
          "range": [
            2133,
            2299
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 50
            },
            "start": {
              "column": 4,
              "line": 48
            }
          }
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "members": [],
          "range": [
            2124,
            2126
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 47
            },
            "start": {
              "column": 39,
              "line": 47
            }
          }
        },
        "range": [
          2089,
          2299
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 50
          },
          "start": {
            "column": 4,
            "line": 47
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 41,
            "line": 46
          },
          "start": {
            "column": 33,
            "line": 46
          }
        },
        "range": [
          2074,
          2082
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "range": [
                2075,
                2081
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 46
                },
                "start": {
                  "column": 34,
                  "line": 46
                }
              }
            },
            "out": false,
            "range": [
              2075,
              2081
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 46
              },
              "start": {
                "column": 34,
                "line": 46
              }
            }
          }
        ]
      },
      "range": [
        2043,
        2299
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 50
        },
        "start": {
          "column": 2,
          "line": 46
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
            "name": "buildIdentifierFieldConstructor",
            "optional": false,
            "range": [
              2311,
              2342
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 52
              },
              "start": {
                "column": 8,
                "line": 52
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "identifier",
                      "optional": false,
                      "range": [
                        2441,
                        2451
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 54
                        },
                        "start": {
                          "column": 6,
                          "line": 54
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "TSAsExpression",
                              "expression": {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "range": [
                                      2535,
                                      2537
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 46,
                                        "line": 55
                                      },
                                      "start": {
                                        "column": 44,
                                        "line": 55
                                      }
                                    }
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "soFar",
                                    "optional": false,
                                    "range": [
                                      2539,
                                      2544
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 53,
                                        "line": 55
                                      },
                                      "start": {
                                        "column": 48,
                                        "line": 55
                                      }
                                    }
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "identifier",
                                          "optional": false,
                                          "range": [
                                            2547,
                                            2557
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 66,
                                              "line": 55
                                            },
                                            "start": {
                                              "column": 56,
                                              "line": 55
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
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "instance",
                                            "optional": false,
                                            "range": [
                                              2559,
                                              2567
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 76,
                                                "line": 55
                                              },
                                              "start": {
                                                "column": 68,
                                                "line": 55
                                              }
                                            }
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "range": [
                                                2571,
                                                2575
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 84,
                                                  "line": 55
                                                },
                                                "start": {
                                                  "column": 80,
                                                  "line": 55
                                                }
                                              }
                                            },
                                            "range": [
                                              2571,
                                              2575
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 84,
                                                "line": 55
                                              },
                                              "start": {
                                                "column": 80,
                                                "line": 55
                                              }
                                            }
                                          },
                                          "range": [
                                            2559,
                                            2575
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 84,
                                              "line": 55
                                            },
                                            "start": {
                                              "column": 68,
                                              "line": 55
                                            }
                                          }
                                        },
                                        "range": [
                                          2547,
                                          2575
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 84,
                                            "line": 55
                                          },
                                          "start": {
                                            "column": 56,
                                            "line": 55
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      2546,
                                      2576
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 85,
                                        "line": 55
                                      },
                                      "start": {
                                        "column": 55,
                                        "line": 55
                                      }
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Object",
                                    "optional": false,
                                    "range": [
                                      2521,
                                      2527
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 36,
                                        "line": 55
                                      },
                                      "start": {
                                        "column": 30,
                                        "line": 55
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "assign",
                                    "optional": false,
                                    "range": [
                                      2528,
                                      2534
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 43,
                                        "line": 55
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 55
                                      }
                                    }
                                  },
                                  "range": [
                                    2521,
                                    2534
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 55
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 55
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  2521,
                                  2577
                                ],
                                "loc": {
                                  "end": {
                                    "column": 86,
                                    "line": 55
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 55
                                  }
                                }
                              },
                              "typeAnnotation": {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "range": [
                                        2581,
                                        2587
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 96,
                                          "line": 55
                                        },
                                        "start": {
                                          "column": 90,
                                          "line": 55
                                        }
                                      }
                                    },
                                    "range": [
                                      2581,
                                      2587
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 96,
                                        "line": 55
                                      },
                                      "start": {
                                        "column": 90,
                                        "line": 55
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeLiteral",
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "identifier",
                                          "optional": false,
                                          "range": [
                                            2591,
                                            2601
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 110,
                                              "line": 55
                                            },
                                            "start": {
                                              "column": 100,
                                              "line": 55
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
                                              "column": 116,
                                              "line": 55
                                            },
                                            "start": {
                                              "column": 110,
                                              "line": 55
                                            }
                                          },
                                          "range": [
                                            2601,
                                            2607
                                          ],
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "range": [
                                                2603,
                                                2607
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 116,
                                                  "line": 55
                                                },
                                                "start": {
                                                  "column": 112,
                                                  "line": 55
                                                }
                                              }
                                            },
                                            "range": [
                                              2603,
                                              2607
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 116,
                                                "line": 55
                                              },
                                              "start": {
                                                "column": 112,
                                                "line": 55
                                              }
                                            }
                                          }
                                        },
                                        "range": [
                                          2591,
                                          2607
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 116,
                                            "line": 55
                                          },
                                          "start": {
                                            "column": 100,
                                            "line": 55
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      2590,
                                      2608
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 117,
                                        "line": 55
                                      },
                                      "start": {
                                        "column": 99,
                                        "line": 55
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  2581,
                                  2608
                                ],
                                "loc": {
                                  "end": {
                                    "column": 117,
                                    "line": 55
                                  },
                                  "start": {
                                    "column": 90,
                                    "line": 55
                                  }
                                }
                              },
                              "range": [
                                2521,
                                2608
                              ],
                              "loc": {
                                "end": {
                                  "column": 117,
                                  "line": 55
                                },
                                "start": {
                                  "column": 30,
                                  "line": 55
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "buildPubSubRecordType",
                            "optional": false,
                            "range": [
                              2499,
                              2520
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 55
                              },
                              "start": {
                                "column": 8,
                                "line": 55
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            2499,
                            2609
                          ],
                          "loc": {
                            "end": {
                              "column": 118,
                              "line": 55
                            },
                            "start": {
                              "column": 8,
                              "line": 55
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              2634,
                              2663
                            ],
                            "params": [
                              {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "range": [
                                        2635,
                                        2641
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 150,
                                          "line": 55
                                        },
                                        "start": {
                                          "column": 144,
                                          "line": 55
                                        }
                                      }
                                    },
                                    "range": [
                                      2635,
                                      2641
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 150,
                                        "line": 55
                                      },
                                      "start": {
                                        "column": 144,
                                        "line": 55
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeLiteral",
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "identifier",
                                          "optional": false,
                                          "range": [
                                            2645,
                                            2655
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 164,
                                              "line": 55
                                            },
                                            "start": {
                                              "column": 154,
                                              "line": 55
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
                                              "column": 170,
                                              "line": 55
                                            },
                                            "start": {
                                              "column": 164,
                                              "line": 55
                                            }
                                          },
                                          "range": [
                                            2655,
                                            2661
                                          ],
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "range": [
                                                2657,
                                                2661
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 170,
                                                  "line": 55
                                                },
                                                "start": {
                                                  "column": 166,
                                                  "line": 55
                                                }
                                              }
                                            },
                                            "range": [
                                              2657,
                                              2661
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 170,
                                                "line": 55
                                              },
                                              "start": {
                                                "column": 166,
                                                "line": 55
                                              }
                                            }
                                          }
                                        },
                                        "range": [
                                          2645,
                                          2661
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 170,
                                            "line": 55
                                          },
                                          "start": {
                                            "column": 154,
                                            "line": 55
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      2644,
                                      2662
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 171,
                                        "line": 55
                                      },
                                      "start": {
                                        "column": 153,
                                        "line": 55
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  2635,
                                  2662
                                ],
                                "loc": {
                                  "end": {
                                    "column": 171,
                                    "line": 55
                                  },
                                  "start": {
                                    "column": 144,
                                    "line": 55
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 172,
                                "line": 55
                              },
                              "start": {
                                "column": 143,
                                "line": 55
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BuildPubSubRecordType",
                            "optional": false,
                            "range": [
                              2613,
                              2634
                            ],
                            "loc": {
                              "end": {
                                "column": 143,
                                "line": 55
                              },
                              "start": {
                                "column": 122,
                                "line": 55
                              }
                            }
                          },
                          "range": [
                            2613,
                            2663
                          ],
                          "loc": {
                            "end": {
                              "column": 172,
                              "line": 55
                            },
                            "start": {
                              "column": 122,
                              "line": 55
                            }
                          }
                        },
                        "range": [
                          2499,
                          2663
                        ],
                        "loc": {
                          "end": {
                            "column": 172,
                            "line": 55
                          },
                          "start": {
                            "column": 8,
                            "line": 55
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "instance",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 54
                                },
                                "start": {
                                  "column": 33,
                                  "line": 54
                                }
                              },
                              "range": [
                                2468,
                                2474
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TYPE",
                                  "optional": false,
                                  "range": [
                                    2470,
                                    2474
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 54
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 54
                                    }
                                  }
                                },
                                "range": [
                                  2470,
                                  2474
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 54
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 54
                                  }
                                }
                              }
                            },
                            "range": [
                              2460,
                              2474
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 54
                              },
                              "start": {
                                "column": 25,
                                "line": 54
                              }
                            }
                          },
                          "optional": false,
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "range": [
                              2477,
                              2486
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 54
                              },
                              "start": {
                                "column": 42,
                                "line": 54
                              }
                            }
                          },
                          "range": [
                            2460,
                            2486
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 54
                            },
                            "start": {
                              "column": 25,
                              "line": 54
                            }
                          }
                        }
                      ],
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 54
                          },
                          "start": {
                            "column": 18,
                            "line": 54
                          }
                        },
                        "range": [
                          2453,
                          2459
                        ],
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TYPE",
                              "optional": false,
                              "range": [
                                2454,
                                2458
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 54
                                },
                                "start": {
                                  "column": 19,
                                  "line": 54
                                }
                              }
                            },
                            "out": false,
                            "range": [
                              2454,
                              2458
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 54
                              },
                              "start": {
                                "column": 19,
                                "line": 54
                              }
                            }
                          }
                        ]
                      },
                      "range": [
                        2453,
                        2663
                      ],
                      "loc": {
                        "end": {
                          "column": 172,
                          "line": 55
                        },
                        "start": {
                          "column": 18,
                          "line": 54
                        }
                      }
                    },
                    "range": [
                      2441,
                      2663
                    ],
                    "loc": {
                      "end": {
                        "column": 172,
                        "line": 55
                      },
                      "start": {
                        "column": 6,
                        "line": 54
                      }
                    }
                  }
                ],
                "range": [
                  2433,
                  2669
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 56
                  },
                  "start": {
                    "column": 59,
                    "line": 53
                  }
                }
              },
              "consequent": {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  2428,
                  2430
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 53
                  },
                  "start": {
                    "column": 54,
                    "line": 53
                  }
                }
              },
              "test": {
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "in",
                  "left": {
                    "type": "Literal",
                    "raw": "\"identifier\"",
                    "value": "identifier",
                    "range": [
                      2378,
                      2390
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 53
                      },
                      "start": {
                        "column": 4,
                        "line": 53
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "soFar",
                    "optional": false,
                    "range": [
                      2394,
                      2399
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 53
                      },
                      "start": {
                        "column": 20,
                        "line": 53
                      }
                    }
                  },
                  "range": [
                    2378,
                    2399
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 53
                    },
                    "start": {
                      "column": 4,
                      "line": 53
                    }
                  }
                },
                "right": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "BinaryExpression",
                    "operator": "in",
                    "left": {
                      "type": "Literal",
                      "raw": "\"record\"",
                      "value": "record",
                      "range": [
                        2406,
                        2414
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 53
                        },
                        "start": {
                          "column": 32,
                          "line": 53
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "soFar",
                      "optional": false,
                      "range": [
                        2418,
                        2423
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 53
                        },
                        "start": {
                          "column": 44,
                          "line": 53
                        }
                      }
                    },
                    "range": [
                      2406,
                      2423
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 53
                      },
                      "start": {
                        "column": 32,
                        "line": 53
                      }
                    }
                  },
                  "operator": "!",
                  "prefix": true,
                  "range": [
                    2404,
                    2424
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 53
                    },
                    "start": {
                      "column": 30,
                      "line": 53
                    }
                  }
                },
                "range": [
                  2378,
                  2425
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 53
                  },
                  "start": {
                    "column": 4,
                    "line": 53
                  }
                }
              },
              "range": [
                2378,
                2669
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 56
                },
                "start": {
                  "column": 4,
                  "line": 53
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 52
                    },
                    "start": {
                      "column": 56,
                      "line": 52
                    }
                  },
                  "range": [
                    2359,
                    2367
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "range": [
                        2361,
                        2367
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 52
                        },
                        "start": {
                          "column": 58,
                          "line": 52
                        }
                      }
                    },
                    "range": [
                      2361,
                      2367
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 52
                      },
                      "start": {
                        "column": 58,
                        "line": 52
                      }
                    }
                  }
                },
                "range": [
                  2354,
                  2367
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 52
                  },
                  "start": {
                    "column": 51,
                    "line": 52
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 52
                },
                "start": {
                  "column": 42,
                  "line": 52
                }
              },
              "range": [
                2345,
                2353
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "range": [
                      2346,
                      2352
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 52
                      },
                      "start": {
                        "column": 43,
                        "line": 52
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2346,
                    2352
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 52
                    },
                    "start": {
                      "column": 43,
                      "line": 52
                    }
                  }
                }
              ]
            },
            "range": [
              2345,
              2673
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 57
              },
              "start": {
                "column": 42,
                "line": 52
              }
            }
          },
          "range": [
            2311,
            2673
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 57
            },
            "start": {
              "column": 8,
              "line": 52
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2305,
        2674
      ],
      "loc": {
        "end": {
          "column": 4,
          "line": 57
        },
        "start": {
          "column": 2,
          "line": 52
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RecordFieldConstructor",
        "optional": false,
        "range": [
          2685,
          2707
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 59
          },
          "start": {
            "column": 7,
            "line": 59
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
            "name": "SO_FAR",
            "optional": false,
            "range": [
              2722,
              2728
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          },
          "range": [
            2722,
            2728
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 60
            },
            "start": {
              "column": 4,
              "line": 60
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
                "name": "record",
                "optional": false,
                "range": [
                  2738,
                  2744
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 60
                  },
                  "start": {
                    "column": 20,
                    "line": 60
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
                    "column": 31,
                    "line": 60
                  },
                  "start": {
                    "column": 26,
                    "line": 60
                  }
                },
                "range": [
                  2744,
                  2749
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    2746,
                    2749
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 60
                    },
                    "start": {
                      "column": 28,
                      "line": 60
                    }
                  }
                }
              },
              "range": [
                2738,
                2749
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 60
                },
                "start": {
                  "column": 20,
                  "line": 60
                }
              }
            }
          ],
          "range": [
            2737,
            2750
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 60
            },
            "start": {
              "column": 19,
              "line": 60
            }
          }
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "record",
                "optional": false,
                "range": [
                  2766,
                  2772
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 61
                  },
                  "start": {
                    "column": 6,
                    "line": 61
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
                    "column": 80,
                    "line": 61
                  },
                  "start": {
                    "column": 12,
                    "line": 61
                  }
                },
                "range": [
                  2772,
                  2840
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 61
                          },
                          "start": {
                            "column": 23,
                            "line": 61
                          }
                        },
                        "range": [
                          2783,
                          2789
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TYPE",
                            "optional": false,
                            "range": [
                              2785,
                              2789
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 61
                              },
                              "start": {
                                "column": 25,
                                "line": 61
                              }
                            }
                          },
                          "range": [
                            2785,
                            2789
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 61
                            },
                            "start": {
                              "column": 25,
                              "line": 61
                            }
                          }
                        }
                      },
                      "range": [
                        2781,
                        2789
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 61
                        },
                        "start": {
                          "column": 21,
                          "line": 61
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 61
                      },
                      "start": {
                        "column": 31,
                        "line": 61
                      }
                    },
                    "range": [
                      2791,
                      2840
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          2815,
                          2840
                        ],
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "range": [
                                    2816,
                                    2822
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 62,
                                      "line": 61
                                    },
                                    "start": {
                                      "column": 56,
                                      "line": 61
                                    }
                                  }
                                },
                                "range": [
                                  2816,
                                  2822
                                ],
                                "loc": {
                                  "end": {
                                    "column": 62,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 56,
                                    "line": 61
                                  }
                                }
                              },
                              {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "record",
                                      "optional": false,
                                      "range": [
                                        2826,
                                        2832
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 72,
                                          "line": 61
                                        },
                                        "start": {
                                          "column": 66,
                                          "line": 61
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
                                          "column": 78,
                                          "line": 61
                                        },
                                        "start": {
                                          "column": 72,
                                          "line": 61
                                        }
                                      },
                                      "range": [
                                        2832,
                                        2838
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "TYPE",
                                          "optional": false,
                                          "range": [
                                            2834,
                                            2838
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 78,
                                              "line": 61
                                            },
                                            "start": {
                                              "column": 74,
                                              "line": 61
                                            }
                                          }
                                        },
                                        "range": [
                                          2834,
                                          2838
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 78,
                                            "line": 61
                                          },
                                          "start": {
                                            "column": 74,
                                            "line": 61
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      2826,
                                      2838
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 78,
                                        "line": 61
                                      },
                                      "start": {
                                        "column": 66,
                                        "line": 61
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  2825,
                                  2839
                                ],
                                "loc": {
                                  "end": {
                                    "column": 79,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 65,
                                    "line": 61
                                  }
                                }
                              }
                            ],
                            "range": [
                              2816,
                              2839
                            ],
                            "loc": {
                              "end": {
                                "column": 79,
                                "line": 61
                              },
                              "start": {
                                "column": 56,
                                "line": 61
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 61
                          },
                          "start": {
                            "column": 55,
                            "line": 61
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "range": [
                          2794,
                          2815
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 61
                          },
                          "start": {
                            "column": 34,
                            "line": 61
                          }
                        }
                      },
                      "range": [
                        2794,
                        2840
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 61
                        },
                        "start": {
                          "column": 34,
                          "line": 61
                        }
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 61
                      },
                      "start": {
                        "column": 14,
                        "line": 61
                      }
                    },
                    "range": [
                      2774,
                      2780
                    ],
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TYPE",
                          "optional": false,
                          "range": [
                            2775,
                            2779
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 61
                            },
                            "start": {
                              "column": 15,
                              "line": 61
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          2775,
                          2779
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 61
                          },
                          "start": {
                            "column": 15,
                            "line": 61
                          }
                        }
                      }
                    ]
                  },
                  "range": [
                    2774,
                    2840
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 61
                    },
                    "start": {
                      "column": 14,
                      "line": 61
                    }
                  }
                }
              },
              "range": [
                2766,
                2840
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 61
                },
                "start": {
                  "column": 6,
                  "line": 61
                }
              }
            }
          ],
          "range": [
            2758,
            2846
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 62
            },
            "start": {
              "column": 40,
              "line": 60
            }
          }
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "members": [],
          "range": [
            2753,
            2755
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 60
            },
            "start": {
              "column": 35,
              "line": 60
            }
          }
        },
        "range": [
          2722,
          2846
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 62
          },
          "start": {
            "column": 4,
            "line": 60
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 37,
            "line": 59
          },
          "start": {
            "column": 29,
            "line": 59
          }
        },
        "range": [
          2707,
          2715
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "range": [
                2708,
                2714
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 59
                },
                "start": {
                  "column": 30,
                  "line": 59
                }
              }
            },
            "out": false,
            "range": [
              2708,
              2714
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 59
              },
              "start": {
                "column": 30,
                "line": 59
              }
            }
          }
        ]
      },
      "range": [
        2680,
        2846
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 62
        },
        "start": {
          "column": 2,
          "line": 59
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
            "name": "buildRecordFieldConstructor",
            "optional": false,
            "range": [
              2858,
              2885
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 64
              },
              "start": {
                "column": 8,
                "line": 64
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "record",
                      "optional": false,
                      "range": [
                        2954,
                        2960
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 66
                        },
                        "start": {
                          "column": 6,
                          "line": 66
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "TSAsExpression",
                              "expression": {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "range": [
                                      3044,
                                      3046
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 46,
                                        "line": 67
                                      },
                                      "start": {
                                        "column": 44,
                                        "line": 67
                                      }
                                    }
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "soFar",
                                    "optional": false,
                                    "range": [
                                      3048,
                                      3053
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 53,
                                        "line": 67
                                      },
                                      "start": {
                                        "column": 48,
                                        "line": 67
                                      }
                                    }
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "record",
                                          "optional": false,
                                          "range": [
                                            3056,
                                            3062
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 62,
                                              "line": 67
                                            },
                                            "start": {
                                              "column": 56,
                                              "line": 67
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
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "instance",
                                            "optional": false,
                                            "range": [
                                              3064,
                                              3072
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 72,
                                                "line": 67
                                              },
                                              "start": {
                                                "column": 64,
                                                "line": 67
                                              }
                                            }
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "range": [
                                                3076,
                                                3080
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 80,
                                                  "line": 67
                                                },
                                                "start": {
                                                  "column": 76,
                                                  "line": 67
                                                }
                                              }
                                            },
                                            "range": [
                                              3076,
                                              3080
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 80,
                                                "line": 67
                                              },
                                              "start": {
                                                "column": 76,
                                                "line": 67
                                              }
                                            }
                                          },
                                          "range": [
                                            3064,
                                            3080
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 80,
                                              "line": 67
                                            },
                                            "start": {
                                              "column": 64,
                                              "line": 67
                                            }
                                          }
                                        },
                                        "range": [
                                          3056,
                                          3080
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 80,
                                            "line": 67
                                          },
                                          "start": {
                                            "column": 56,
                                            "line": 67
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      3055,
                                      3081
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 81,
                                        "line": 67
                                      },
                                      "start": {
                                        "column": 55,
                                        "line": 67
                                      }
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Object",
                                    "optional": false,
                                    "range": [
                                      3030,
                                      3036
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 36,
                                        "line": 67
                                      },
                                      "start": {
                                        "column": 30,
                                        "line": 67
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "assign",
                                    "optional": false,
                                    "range": [
                                      3037,
                                      3043
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 43,
                                        "line": 67
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 67
                                      }
                                    }
                                  },
                                  "range": [
                                    3030,
                                    3043
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 67
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 67
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  3030,
                                  3082
                                ],
                                "loc": {
                                  "end": {
                                    "column": 82,
                                    "line": 67
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 67
                                  }
                                }
                              },
                              "typeAnnotation": {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "range": [
                                        3086,
                                        3092
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 92,
                                          "line": 67
                                        },
                                        "start": {
                                          "column": 86,
                                          "line": 67
                                        }
                                      }
                                    },
                                    "range": [
                                      3086,
                                      3092
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 92,
                                        "line": 67
                                      },
                                      "start": {
                                        "column": 86,
                                        "line": 67
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeLiteral",
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "record",
                                          "optional": false,
                                          "range": [
                                            3096,
                                            3102
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 102,
                                              "line": 67
                                            },
                                            "start": {
                                              "column": 96,
                                              "line": 67
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
                                              "column": 108,
                                              "line": 67
                                            },
                                            "start": {
                                              "column": 102,
                                              "line": 67
                                            }
                                          },
                                          "range": [
                                            3102,
                                            3108
                                          ],
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "range": [
                                                3104,
                                                3108
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 108,
                                                  "line": 67
                                                },
                                                "start": {
                                                  "column": 104,
                                                  "line": 67
                                                }
                                              }
                                            },
                                            "range": [
                                              3104,
                                              3108
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 108,
                                                "line": 67
                                              },
                                              "start": {
                                                "column": 104,
                                                "line": 67
                                              }
                                            }
                                          }
                                        },
                                        "range": [
                                          3096,
                                          3108
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 108,
                                            "line": 67
                                          },
                                          "start": {
                                            "column": 96,
                                            "line": 67
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      3095,
                                      3109
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 109,
                                        "line": 67
                                      },
                                      "start": {
                                        "column": 95,
                                        "line": 67
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  3086,
                                  3109
                                ],
                                "loc": {
                                  "end": {
                                    "column": 109,
                                    "line": 67
                                  },
                                  "start": {
                                    "column": 86,
                                    "line": 67
                                  }
                                }
                              },
                              "range": [
                                3030,
                                3109
                              ],
                              "loc": {
                                "end": {
                                  "column": 109,
                                  "line": 67
                                },
                                "start": {
                                  "column": 30,
                                  "line": 67
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "buildPubSubRecordType",
                            "optional": false,
                            "range": [
                              3008,
                              3029
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 67
                              },
                              "start": {
                                "column": 8,
                                "line": 67
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            3008,
                            3110
                          ],
                          "loc": {
                            "end": {
                              "column": 110,
                              "line": 67
                            },
                            "start": {
                              "column": 8,
                              "line": 67
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              3135,
                              3160
                            ],
                            "params": [
                              {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "range": [
                                        3136,
                                        3142
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 142,
                                          "line": 67
                                        },
                                        "start": {
                                          "column": 136,
                                          "line": 67
                                        }
                                      }
                                    },
                                    "range": [
                                      3136,
                                      3142
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 142,
                                        "line": 67
                                      },
                                      "start": {
                                        "column": 136,
                                        "line": 67
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeLiteral",
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "record",
                                          "optional": false,
                                          "range": [
                                            3146,
                                            3152
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 152,
                                              "line": 67
                                            },
                                            "start": {
                                              "column": 146,
                                              "line": 67
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
                                              "column": 158,
                                              "line": 67
                                            },
                                            "start": {
                                              "column": 152,
                                              "line": 67
                                            }
                                          },
                                          "range": [
                                            3152,
                                            3158
                                          ],
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "range": [
                                                3154,
                                                3158
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 158,
                                                  "line": 67
                                                },
                                                "start": {
                                                  "column": 154,
                                                  "line": 67
                                                }
                                              }
                                            },
                                            "range": [
                                              3154,
                                              3158
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 158,
                                                "line": 67
                                              },
                                              "start": {
                                                "column": 154,
                                                "line": 67
                                              }
                                            }
                                          }
                                        },
                                        "range": [
                                          3146,
                                          3158
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 158,
                                            "line": 67
                                          },
                                          "start": {
                                            "column": 146,
                                            "line": 67
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      3145,
                                      3159
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 159,
                                        "line": 67
                                      },
                                      "start": {
                                        "column": 145,
                                        "line": 67
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  3136,
                                  3159
                                ],
                                "loc": {
                                  "end": {
                                    "column": 159,
                                    "line": 67
                                  },
                                  "start": {
                                    "column": 136,
                                    "line": 67
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 160,
                                "line": 67
                              },
                              "start": {
                                "column": 135,
                                "line": 67
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BuildPubSubRecordType",
                            "optional": false,
                            "range": [
                              3114,
                              3135
                            ],
                            "loc": {
                              "end": {
                                "column": 135,
                                "line": 67
                              },
                              "start": {
                                "column": 114,
                                "line": 67
                              }
                            }
                          },
                          "range": [
                            3114,
                            3160
                          ],
                          "loc": {
                            "end": {
                              "column": 160,
                              "line": 67
                            },
                            "start": {
                              "column": 114,
                              "line": 67
                            }
                          }
                        },
                        "range": [
                          3008,
                          3160
                        ],
                        "loc": {
                          "end": {
                            "column": 160,
                            "line": 67
                          },
                          "start": {
                            "column": 8,
                            "line": 67
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "instance",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 66
                                },
                                "start": {
                                  "column": 29,
                                  "line": 66
                                }
                              },
                              "range": [
                                2977,
                                2983
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TYPE",
                                  "optional": false,
                                  "range": [
                                    2979,
                                    2983
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 66
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 66
                                    }
                                  }
                                },
                                "range": [
                                  2979,
                                  2983
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 66
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 66
                                  }
                                }
                              }
                            },
                            "range": [
                              2969,
                              2983
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 66
                              },
                              "start": {
                                "column": 21,
                                "line": 66
                              }
                            }
                          },
                          "optional": false,
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "range": [
                              2986,
                              2995
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 66
                              },
                              "start": {
                                "column": 38,
                                "line": 66
                              }
                            }
                          },
                          "range": [
                            2969,
                            2995
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 66
                            },
                            "start": {
                              "column": 21,
                              "line": 66
                            }
                          }
                        }
                      ],
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 66
                          },
                          "start": {
                            "column": 14,
                            "line": 66
                          }
                        },
                        "range": [
                          2962,
                          2968
                        ],
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TYPE",
                              "optional": false,
                              "range": [
                                2963,
                                2967
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 66
                                },
                                "start": {
                                  "column": 15,
                                  "line": 66
                                }
                              }
                            },
                            "out": false,
                            "range": [
                              2963,
                              2967
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 66
                              },
                              "start": {
                                "column": 15,
                                "line": 66
                              }
                            }
                          }
                        ]
                      },
                      "range": [
                        2962,
                        3160
                      ],
                      "loc": {
                        "end": {
                          "column": 160,
                          "line": 67
                        },
                        "start": {
                          "column": 14,
                          "line": 66
                        }
                      }
                    },
                    "range": [
                      2954,
                      3160
                    ],
                    "loc": {
                      "end": {
                        "column": 160,
                        "line": 67
                      },
                      "start": {
                        "column": 6,
                        "line": 66
                      }
                    }
                  }
                ],
                "range": [
                  2946,
                  3166
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 68
                  },
                  "start": {
                    "column": 29,
                    "line": 65
                  }
                }
              },
              "consequent": {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  2941,
                  2943
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 65
                  },
                  "start": {
                    "column": 24,
                    "line": 65
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "raw": "\"record\"",
                  "value": "record",
                  "range": [
                    2921,
                    2929
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 65
                    },
                    "start": {
                      "column": 4,
                      "line": 65
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "soFar",
                  "optional": false,
                  "range": [
                    2933,
                    2938
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 65
                    },
                    "start": {
                      "column": 16,
                      "line": 65
                    }
                  }
                },
                "range": [
                  2921,
                  2938
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 65
                  },
                  "start": {
                    "column": 4,
                    "line": 65
                  }
                }
              },
              "range": [
                2921,
                3166
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 68
                },
                "start": {
                  "column": 4,
                  "line": 65
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 64
                    },
                    "start": {
                      "column": 52,
                      "line": 64
                    }
                  },
                  "range": [
                    2902,
                    2910
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "range": [
                        2904,
                        2910
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 64
                        },
                        "start": {
                          "column": 54,
                          "line": 64
                        }
                      }
                    },
                    "range": [
                      2904,
                      2910
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 64
                      },
                      "start": {
                        "column": 54,
                        "line": 64
                      }
                    }
                  }
                },
                "range": [
                  2897,
                  2910
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 64
                  },
                  "start": {
                    "column": 47,
                    "line": 64
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 64
                },
                "start": {
                  "column": 38,
                  "line": 64
                }
              },
              "range": [
                2888,
                2896
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "range": [
                      2889,
                      2895
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 64
                      },
                      "start": {
                        "column": 39,
                        "line": 64
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2889,
                    2895
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 64
                    },
                    "start": {
                      "column": 39,
                      "line": 64
                    }
                  }
                }
              ]
            },
            "range": [
              2888,
              3170
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 69
              },
              "start": {
                "column": 38,
                "line": 64
              }
            }
          },
          "range": [
            2858,
            3170
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 69
            },
            "start": {
              "column": 8,
              "line": 64
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2852,
        3171
      ],
      "loc": {
        "end": {
          "column": 4,
          "line": 69
        },
        "start": {
          "column": 2,
          "line": 64
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MaxMsToWaitBeforePublishingFieldConstructor",
        "optional": false,
        "range": [
          3182,
          3225
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 71
          },
          "start": {
            "column": 7,
            "line": 71
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
            "name": "SO_FAR",
            "optional": false,
            "range": [
              3240,
              3246
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          },
          "range": [
            3240,
            3246
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 72
            },
            "start": {
              "column": 4,
              "line": 72
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
                "name": "maxMsToWaitBeforePublishing",
                "optional": false,
                "range": [
                  3256,
                  3283
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 72
                  },
                  "start": {
                    "column": 20,
                    "line": 72
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
                    "column": 52,
                    "line": 72
                  },
                  "start": {
                    "column": 47,
                    "line": 72
                  }
                },
                "range": [
                  3283,
                  3288
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    3285,
                    3288
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 72
                    },
                    "start": {
                      "column": 49,
                      "line": 72
                    }
                  }
                }
              },
              "range": [
                3256,
                3288
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 72
                },
                "start": {
                  "column": 20,
                  "line": 72
                }
              }
            }
          ],
          "range": [
            3255,
            3289
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 72
            },
            "start": {
              "column": 19,
              "line": 72
            }
          }
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "maxMsToWaitBeforePublishing",
                "optional": false,
                "range": [
                  3305,
                  3332
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 73
                  },
                  "start": {
                    "column": 6,
                    "line": 73
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
                    "column": 119,
                    "line": 73
                  },
                  "start": {
                    "column": 33,
                    "line": 73
                  }
                },
                "range": [
                  3332,
                  3418
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 73
                          },
                          "start": {
                            "column": 37,
                            "line": 73
                          }
                        },
                        "range": [
                          3336,
                          3344
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            3338,
                            3344
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 73
                            },
                            "start": {
                              "column": 39,
                              "line": 73
                            }
                          }
                        }
                      },
                      "range": [
                        3335,
                        3344
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 73
                        },
                        "start": {
                          "column": 36,
                          "line": 73
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 119,
                        "line": 73
                      },
                      "start": {
                        "column": 47,
                        "line": 73
                      }
                    },
                    "range": [
                      3346,
                      3418
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          3370,
                          3418
                        ],
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "range": [
                                    3371,
                                    3377
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 78,
                                      "line": 73
                                    },
                                    "start": {
                                      "column": 72,
                                      "line": 73
                                    }
                                  }
                                },
                                "range": [
                                  3371,
                                  3377
                                ],
                                "loc": {
                                  "end": {
                                    "column": 78,
                                    "line": 73
                                  },
                                  "start": {
                                    "column": 72,
                                    "line": 73
                                  }
                                }
                              },
                              {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "maxMsToWaitBeforePublishing",
                                      "optional": false,
                                      "range": [
                                        3381,
                                        3408
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 109,
                                          "line": 73
                                        },
                                        "start": {
                                          "column": 82,
                                          "line": 73
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
                                          "column": 117,
                                          "line": 73
                                        },
                                        "start": {
                                          "column": 109,
                                          "line": 73
                                        }
                                      },
                                      "range": [
                                        3408,
                                        3416
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "range": [
                                          3410,
                                          3416
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 117,
                                            "line": 73
                                          },
                                          "start": {
                                            "column": 111,
                                            "line": 73
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      3381,
                                      3416
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 117,
                                        "line": 73
                                      },
                                      "start": {
                                        "column": 82,
                                        "line": 73
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  3380,
                                  3417
                                ],
                                "loc": {
                                  "end": {
                                    "column": 118,
                                    "line": 73
                                  },
                                  "start": {
                                    "column": 81,
                                    "line": 73
                                  }
                                }
                              }
                            ],
                            "range": [
                              3371,
                              3417
                            ],
                            "loc": {
                              "end": {
                                "column": 118,
                                "line": 73
                              },
                              "start": {
                                "column": 72,
                                "line": 73
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 119,
                            "line": 73
                          },
                          "start": {
                            "column": 71,
                            "line": 73
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "range": [
                          3349,
                          3370
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 73
                          },
                          "start": {
                            "column": 50,
                            "line": 73
                          }
                        }
                      },
                      "range": [
                        3349,
                        3418
                      ],
                      "loc": {
                        "end": {
                          "column": 119,
                          "line": 73
                        },
                        "start": {
                          "column": 50,
                          "line": 73
                        }
                      }
                    }
                  },
                  "range": [
                    3334,
                    3418
                  ],
                  "loc": {
                    "end": {
                      "column": 119,
                      "line": 73
                    },
                    "start": {
                      "column": 35,
                      "line": 73
                    }
                  }
                }
              },
              "range": [
                3305,
                3419
              ],
              "loc": {
                "end": {
                  "column": 120,
                  "line": 73
                },
                "start": {
                  "column": 6,
                  "line": 73
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "neverDelayPublishing",
                "optional": false,
                "range": [
                  3426,
                  3446
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 74
                  },
                  "start": {
                    "column": 6,
                    "line": 74
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
                    "column": 98,
                    "line": 74
                  },
                  "start": {
                    "column": 26,
                    "line": 74
                  }
                },
                "range": [
                  3446,
                  3518
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 98,
                        "line": 74
                      },
                      "start": {
                        "column": 31,
                        "line": 74
                      }
                    },
                    "range": [
                      3451,
                      3518
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          3475,
                          3518
                        ],
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "range": [
                                    3476,
                                    3482
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 62,
                                      "line": 74
                                    },
                                    "start": {
                                      "column": 56,
                                      "line": 74
                                    }
                                  }
                                },
                                "range": [
                                  3476,
                                  3482
                                ],
                                "loc": {
                                  "end": {
                                    "column": 62,
                                    "line": 74
                                  },
                                  "start": {
                                    "column": 56,
                                    "line": 74
                                  }
                                }
                              },
                              {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "maxMsToWaitBeforePublishing",
                                      "optional": false,
                                      "range": [
                                        3486,
                                        3513
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 93,
                                          "line": 74
                                        },
                                        "start": {
                                          "column": 66,
                                          "line": 74
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
                                          "column": 96,
                                          "line": 74
                                        },
                                        "start": {
                                          "column": 93,
                                          "line": 74
                                        }
                                      },
                                      "range": [
                                        3513,
                                        3516
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSLiteralType",
                                        "literal": {
                                          "type": "Literal",
                                          "raw": "0",
                                          "value": 0,
                                          "range": [
                                            3515,
                                            3516
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 96,
                                              "line": 74
                                            },
                                            "start": {
                                              "column": 95,
                                              "line": 74
                                            }
                                          }
                                        },
                                        "range": [
                                          3515,
                                          3516
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 96,
                                            "line": 74
                                          },
                                          "start": {
                                            "column": 95,
                                            "line": 74
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      3486,
                                      3516
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 96,
                                        "line": 74
                                      },
                                      "start": {
                                        "column": 66,
                                        "line": 74
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  3485,
                                  3517
                                ],
                                "loc": {
                                  "end": {
                                    "column": 97,
                                    "line": 74
                                  },
                                  "start": {
                                    "column": 65,
                                    "line": 74
                                  }
                                }
                              }
                            ],
                            "range": [
                              3476,
                              3517
                            ],
                            "loc": {
                              "end": {
                                "column": 97,
                                "line": 74
                              },
                              "start": {
                                "column": 56,
                                "line": 74
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 98,
                            "line": 74
                          },
                          "start": {
                            "column": 55,
                            "line": 74
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "range": [
                          3454,
                          3475
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 74
                          },
                          "start": {
                            "column": 34,
                            "line": 74
                          }
                        }
                      },
                      "range": [
                        3454,
                        3518
                      ],
                      "loc": {
                        "end": {
                          "column": 98,
                          "line": 74
                        },
                        "start": {
                          "column": 34,
                          "line": 74
                        }
                      }
                    }
                  },
                  "range": [
                    3448,
                    3518
                  ],
                  "loc": {
                    "end": {
                      "column": 98,
                      "line": 74
                    },
                    "start": {
                      "column": 28,
                      "line": 74
                    }
                  }
                }
              },
              "range": [
                3426,
                3519
              ],
              "loc": {
                "end": {
                  "column": 99,
                  "line": 74
                },
                "start": {
                  "column": 6,
                  "line": 74
                }
              }
            }
          ],
          "range": [
            3297,
            3525
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 75
            },
            "start": {
              "column": 61,
              "line": 72
            }
          }
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "members": [],
          "range": [
            3292,
            3294
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 72
            },
            "start": {
              "column": 56,
              "line": 72
            }
          }
        },
        "range": [
          3240,
          3525
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 75
          },
          "start": {
            "column": 4,
            "line": 72
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 58,
            "line": 71
          },
          "start": {
            "column": 50,
            "line": 71
          }
        },
        "range": [
          3225,
          3233
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "range": [
                3226,
                3232
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 71
                },
                "start": {
                  "column": 51,
                  "line": 71
                }
              }
            },
            "out": false,
            "range": [
              3226,
              3232
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 71
              },
              "start": {
                "column": 51,
                "line": 71
              }
            }
          }
        ]
      },
      "range": [
        3177,
        3525
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 75
        },
        "start": {
          "column": 2,
          "line": 71
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
            "name": "buildMaxMsToWaitBeforePublishingFieldConstructor",
            "optional": false,
            "range": [
              3537,
              3585
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 77
              },
              "start": {
                "column": 8,
                "line": 77
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ConditionalExpression",
                "alternate": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "maxMsToWaitBeforePublishing",
                        "optional": false,
                        "range": [
                          3728,
                          3755
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 79
                          },
                          "start": {
                            "column": 6,
                            "line": 79
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "range": [
                                      3827,
                                      3829
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 46,
                                        "line": 80
                                      },
                                      "start": {
                                        "column": 44,
                                        "line": 80
                                      }
                                    }
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "soFar",
                                    "optional": false,
                                    "range": [
                                      3831,
                                      3836
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 53,
                                        "line": 80
                                      },
                                      "start": {
                                        "column": 48,
                                        "line": 80
                                      }
                                    }
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "maxMsToWaitBeforePublishing",
                                          "optional": false,
                                          "range": [
                                            3839,
                                            3866
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 83,
                                              "line": 80
                                            },
                                            "start": {
                                              "column": 56,
                                              "line": 80
                                            }
                                          }
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "instance",
                                          "optional": false,
                                          "range": [
                                            3868,
                                            3876
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 93,
                                              "line": 80
                                            },
                                            "start": {
                                              "column": 85,
                                              "line": 80
                                            }
                                          }
                                        },
                                        "range": [
                                          3839,
                                          3876
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 93,
                                            "line": 80
                                          },
                                          "start": {
                                            "column": 56,
                                            "line": 80
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      3838,
                                      3877
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 94,
                                        "line": 80
                                      },
                                      "start": {
                                        "column": 55,
                                        "line": 80
                                      }
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Object",
                                    "optional": false,
                                    "range": [
                                      3813,
                                      3819
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 36,
                                        "line": 80
                                      },
                                      "start": {
                                        "column": 30,
                                        "line": 80
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "assign",
                                    "optional": false,
                                    "range": [
                                      3820,
                                      3826
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 43,
                                        "line": 80
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 80
                                      }
                                    }
                                  },
                                  "range": [
                                    3813,
                                    3826
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 80
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 80
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  3813,
                                  3878
                                ],
                                "loc": {
                                  "end": {
                                    "column": 95,
                                    "line": 80
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 80
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "buildPubSubRecordType",
                              "optional": false,
                              "range": [
                                3791,
                                3812
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 80
                                },
                                "start": {
                                  "column": 8,
                                  "line": 80
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              3791,
                              3879
                            ],
                            "loc": {
                              "end": {
                                "column": 96,
                                "line": 80
                              },
                              "start": {
                                "column": 8,
                                "line": 80
                              }
                            }
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                3904,
                                3952
                              ],
                              "params": [
                                {
                                  "type": "TSIntersectionType",
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "SO_FAR",
                                        "optional": false,
                                        "range": [
                                          3905,
                                          3911
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 128,
                                            "line": 80
                                          },
                                          "start": {
                                            "column": 122,
                                            "line": 80
                                          }
                                        }
                                      },
                                      "range": [
                                        3905,
                                        3911
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 128,
                                          "line": 80
                                        },
                                        "start": {
                                          "column": 122,
                                          "line": 80
                                        }
                                      }
                                    },
                                    {
                                      "type": "TSTypeLiteral",
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "maxMsToWaitBeforePublishing",
                                            "optional": false,
                                            "range": [
                                              3915,
                                              3942
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 159,
                                                "line": 80
                                              },
                                              "start": {
                                                "column": 132,
                                                "line": 80
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
                                                "column": 167,
                                                "line": 80
                                              },
                                              "start": {
                                                "column": 159,
                                                "line": 80
                                              }
                                            },
                                            "range": [
                                              3942,
                                              3950
                                            ],
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "range": [
                                                3944,
                                                3950
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 167,
                                                  "line": 80
                                                },
                                                "start": {
                                                  "column": 161,
                                                  "line": 80
                                                }
                                              }
                                            }
                                          },
                                          "range": [
                                            3915,
                                            3950
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 167,
                                              "line": 80
                                            },
                                            "start": {
                                              "column": 132,
                                              "line": 80
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        3914,
                                        3951
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 168,
                                          "line": 80
                                        },
                                        "start": {
                                          "column": 131,
                                          "line": 80
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    3905,
                                    3951
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 168,
                                      "line": 80
                                    },
                                    "start": {
                                      "column": 122,
                                      "line": 80
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 169,
                                  "line": 80
                                },
                                "start": {
                                  "column": 121,
                                  "line": 80
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "BuildPubSubRecordType",
                              "optional": false,
                              "range": [
                                3883,
                                3904
                              ],
                              "loc": {
                                "end": {
                                  "column": 121,
                                  "line": 80
                                },
                                "start": {
                                  "column": 100,
                                  "line": 80
                                }
                              }
                            },
                            "range": [
                              3883,
                              3952
                            ],
                            "loc": {
                              "end": {
                                "column": 169,
                                "line": 80
                              },
                              "start": {
                                "column": 100,
                                "line": 80
                              }
                            }
                          },
                          "range": [
                            3791,
                            3952
                          ],
                          "loc": {
                            "end": {
                              "column": 169,
                              "line": 80
                            },
                            "start": {
                              "column": 8,
                              "line": 80
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "instance",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 52,
                                    "line": 79
                                  },
                                  "start": {
                                    "column": 44,
                                    "line": 79
                                  }
                                },
                                "range": [
                                  3766,
                                  3774
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    3768,
                                    3774
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 52,
                                      "line": 79
                                    },
                                    "start": {
                                      "column": 46,
                                      "line": 79
                                    }
                                  }
                                }
                              },
                              "range": [
                                3758,
                                3774
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 79
                                },
                                "start": {
                                  "column": 36,
                                  "line": 79
                                }
                              }
                            },
                            "optional": false,
                            "right": {
                              "type": "Literal",
                              "raw": "0",
                              "value": 0,
                              "range": [
                                3777,
                                3778
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 79
                                },
                                "start": {
                                  "column": 55,
                                  "line": 79
                                }
                              }
                            },
                            "range": [
                              3758,
                              3778
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 79
                              },
                              "start": {
                                "column": 36,
                                "line": 79
                              }
                            }
                          }
                        ],
                        "range": [
                          3757,
                          3952
                        ],
                        "loc": {
                          "end": {
                            "column": 169,
                            "line": 80
                          },
                          "start": {
                            "column": 35,
                            "line": 79
                          }
                        }
                      },
                      "range": [
                        3728,
                        3952
                      ],
                      "loc": {
                        "end": {
                          "column": 169,
                          "line": 80
                        },
                        "start": {
                          "column": 6,
                          "line": 79
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "neverDelayPublishing",
                        "optional": false,
                        "range": [
                          3960,
                          3980
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 81
                          },
                          "start": {
                            "column": 6,
                            "line": 81
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "range": [
                                      4032,
                                      4034
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 46,
                                        "line": 82
                                      },
                                      "start": {
                                        "column": 44,
                                        "line": 82
                                      }
                                    }
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "soFar",
                                    "optional": false,
                                    "range": [
                                      4036,
                                      4041
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 53,
                                        "line": 82
                                      },
                                      "start": {
                                        "column": 48,
                                        "line": 82
                                      }
                                    }
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "maxMsToWaitBeforePublishing",
                                          "optional": false,
                                          "range": [
                                            4044,
                                            4071
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 83,
                                              "line": 82
                                            },
                                            "start": {
                                              "column": 56,
                                              "line": 82
                                            }
                                          }
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "raw": "0",
                                          "value": 0,
                                          "range": [
                                            4073,
                                            4074
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 86,
                                              "line": 82
                                            },
                                            "start": {
                                              "column": 85,
                                              "line": 82
                                            }
                                          }
                                        },
                                        "range": [
                                          4044,
                                          4074
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 86,
                                            "line": 82
                                          },
                                          "start": {
                                            "column": 56,
                                            "line": 82
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      4043,
                                      4075
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 87,
                                        "line": 82
                                      },
                                      "start": {
                                        "column": 55,
                                        "line": 82
                                      }
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Object",
                                    "optional": false,
                                    "range": [
                                      4018,
                                      4024
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 36,
                                        "line": 82
                                      },
                                      "start": {
                                        "column": 30,
                                        "line": 82
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "assign",
                                    "optional": false,
                                    "range": [
                                      4025,
                                      4031
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 43,
                                        "line": 82
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 82
                                      }
                                    }
                                  },
                                  "range": [
                                    4018,
                                    4031
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 82
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 82
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  4018,
                                  4076
                                ],
                                "loc": {
                                  "end": {
                                    "column": 88,
                                    "line": 82
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 82
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "buildPubSubRecordType",
                              "optional": false,
                              "range": [
                                3996,
                                4017
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 82
                                },
                                "start": {
                                  "column": 8,
                                  "line": 82
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              3996,
                              4077
                            ],
                            "loc": {
                              "end": {
                                "column": 89,
                                "line": 82
                              },
                              "start": {
                                "column": 8,
                                "line": 82
                              }
                            }
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                4102,
                                4145
                              ],
                              "params": [
                                {
                                  "type": "TSIntersectionType",
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "SO_FAR",
                                        "optional": false,
                                        "range": [
                                          4103,
                                          4109
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 121,
                                            "line": 82
                                          },
                                          "start": {
                                            "column": 115,
                                            "line": 82
                                          }
                                        }
                                      },
                                      "range": [
                                        4103,
                                        4109
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 121,
                                          "line": 82
                                        },
                                        "start": {
                                          "column": 115,
                                          "line": 82
                                        }
                                      }
                                    },
                                    {
                                      "type": "TSTypeLiteral",
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "maxMsToWaitBeforePublishing",
                                            "optional": false,
                                            "range": [
                                              4113,
                                              4140
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 152,
                                                "line": 82
                                              },
                                              "start": {
                                                "column": 125,
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
                                                "column": 155,
                                                "line": 82
                                              },
                                              "start": {
                                                "column": 152,
                                                "line": 82
                                              }
                                            },
                                            "range": [
                                              4140,
                                              4143
                                            ],
                                            "typeAnnotation": {
                                              "type": "TSLiteralType",
                                              "literal": {
                                                "type": "Literal",
                                                "raw": "0",
                                                "value": 0,
                                                "range": [
                                                  4142,
                                                  4143
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 155,
                                                    "line": 82
                                                  },
                                                  "start": {
                                                    "column": 154,
                                                    "line": 82
                                                  }
                                                }
                                              },
                                              "range": [
                                                4142,
                                                4143
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 155,
                                                  "line": 82
                                                },
                                                "start": {
                                                  "column": 154,
                                                  "line": 82
                                                }
                                              }
                                            }
                                          },
                                          "range": [
                                            4113,
                                            4143
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 155,
                                              "line": 82
                                            },
                                            "start": {
                                              "column": 125,
                                              "line": 82
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        4112,
                                        4144
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 156,
                                          "line": 82
                                        },
                                        "start": {
                                          "column": 124,
                                          "line": 82
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    4103,
                                    4144
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 156,
                                      "line": 82
                                    },
                                    "start": {
                                      "column": 115,
                                      "line": 82
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 157,
                                  "line": 82
                                },
                                "start": {
                                  "column": 114,
                                  "line": 82
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "BuildPubSubRecordType",
                              "optional": false,
                              "range": [
                                4081,
                                4102
                              ],
                              "loc": {
                                "end": {
                                  "column": 114,
                                  "line": 82
                                },
                                "start": {
                                  "column": 93,
                                  "line": 82
                                }
                              }
                            },
                            "range": [
                              4081,
                              4145
                            ],
                            "loc": {
                              "end": {
                                "column": 157,
                                "line": 82
                              },
                              "start": {
                                "column": 93,
                                "line": 82
                              }
                            }
                          },
                          "range": [
                            3996,
                            4145
                          ],
                          "loc": {
                            "end": {
                              "column": 157,
                              "line": 82
                            },
                            "start": {
                              "column": 8,
                              "line": 82
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          3982,
                          4145
                        ],
                        "loc": {
                          "end": {
                            "column": 157,
                            "line": 82
                          },
                          "start": {
                            "column": 28,
                            "line": 81
                          }
                        }
                      },
                      "range": [
                        3960,
                        4145
                      ],
                      "loc": {
                        "end": {
                          "column": 157,
                          "line": 82
                        },
                        "start": {
                          "column": 6,
                          "line": 81
                        }
                      }
                    }
                  ],
                  "range": [
                    3720,
                    4152
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 83
                    },
                    "start": {
                      "column": 50,
                      "line": 78
                    }
                  }
                },
                "consequent": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "range": [
                    3715,
                    3717
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 78
                    },
                    "start": {
                      "column": 45,
                      "line": 78
                    }
                  }
                },
                "test": {
                  "type": "BinaryExpression",
                  "operator": "in",
                  "left": {
                    "type": "Literal",
                    "raw": "\"maxMsToWaitBeforePublishing\"",
                    "value": "maxMsToWaitBeforePublishing",
                    "range": [
                      3674,
                      3703
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 78
                      },
                      "start": {
                        "column": 4,
                        "line": 78
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "soFar",
                    "optional": false,
                    "range": [
                      3707,
                      3712
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 78
                      },
                      "start": {
                        "column": 37,
                        "line": 78
                      }
                    }
                  },
                  "range": [
                    3674,
                    3712
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 78
                    },
                    "start": {
                      "column": 4,
                      "line": 78
                    }
                  }
                },
                "range": [
                  3674,
                  4152
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 83
                  },
                  "start": {
                    "column": 4,
                    "line": 78
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    4203,
                    4211
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SO_FAR",
                        "optional": false,
                        "range": [
                          4204,
                          4210
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 84
                          },
                          "start": {
                            "column": 51,
                            "line": 84
                          }
                        }
                      },
                      "range": [
                        4204,
                        4210
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 84
                        },
                        "start": {
                          "column": 51,
                          "line": 84
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 84
                    },
                    "start": {
                      "column": 50,
                      "line": 84
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MaxMsToWaitBeforePublishingFieldConstructor",
                  "optional": false,
                  "range": [
                    4160,
                    4203
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 84
                    },
                    "start": {
                      "column": 7,
                      "line": 84
                    }
                  }
                },
                "range": [
                  4160,
                  4211
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 84
                  },
                  "start": {
                    "column": 7,
                    "line": 84
                  }
                }
              },
              "range": [
                3668,
                4211
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 84
                },
                "start": {
                  "column": 139,
                  "line": 77
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 77
                    },
                    "start": {
                      "column": 73,
                      "line": 77
                    }
                  },
                  "range": [
                    3602,
                    3610
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "range": [
                        3604,
                        3610
                      ],
                      "loc": {
                        "end": {
                          "column": 81,
                          "line": 77
                        },
                        "start": {
                          "column": 75,
                          "line": 77
                        }
                      }
                    },
                    "range": [
                      3604,
                      3610
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 77
                      },
                      "start": {
                        "column": 75,
                        "line": 77
                      }
                    }
                  }
                },
                "range": [
                  3597,
                  3610
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 77
                  },
                  "start": {
                    "column": 68,
                    "line": 77
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 135,
                  "line": 77
                },
                "start": {
                  "column": 82,
                  "line": 77
                }
              },
              "range": [
                3611,
                3664
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    3656,
                    3664
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SO_FAR",
                        "optional": false,
                        "range": [
                          3657,
                          3663
                        ],
                        "loc": {
                          "end": {
                            "column": 134,
                            "line": 77
                          },
                          "start": {
                            "column": 128,
                            "line": 77
                          }
                        }
                      },
                      "range": [
                        3657,
                        3663
                      ],
                      "loc": {
                        "end": {
                          "column": 134,
                          "line": 77
                        },
                        "start": {
                          "column": 128,
                          "line": 77
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 135,
                      "line": 77
                    },
                    "start": {
                      "column": 127,
                      "line": 77
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MaxMsToWaitBeforePublishingFieldConstructor",
                  "optional": false,
                  "range": [
                    3613,
                    3656
                  ],
                  "loc": {
                    "end": {
                      "column": 127,
                      "line": 77
                    },
                    "start": {
                      "column": 84,
                      "line": 77
                    }
                  }
                },
                "range": [
                  3613,
                  3664
                ],
                "loc": {
                  "end": {
                    "column": 135,
                    "line": 77
                  },
                  "start": {
                    "column": 84,
                    "line": 77
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 67,
                  "line": 77
                },
                "start": {
                  "column": 59,
                  "line": 77
                }
              },
              "range": [
                3588,
                3596
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "range": [
                      3589,
                      3595
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 77
                      },
                      "start": {
                        "column": 60,
                        "line": 77
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3589,
                    3595
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 77
                    },
                    "start": {
                      "column": 60,
                      "line": 77
                    }
                  }
                }
              ]
            },
            "range": [
              3588,
              4211
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 84
              },
              "start": {
                "column": 59,
                "line": 77
              }
            }
          },
          "range": [
            3537,
            4211
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 84
            },
            "start": {
              "column": 8,
              "line": 77
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3531,
        4212
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 84
        },
        "start": {
          "column": 2,
          "line": 77
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeConstructor",
        "optional": false,
        "range": [
          4223,
          4238
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 86
          },
          "start": {
            "column": 7,
            "line": 86
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
            "name": "SO_FAR",
            "optional": false,
            "range": [
              4253,
              4259
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 87
              }
            }
          },
          "range": [
            4253,
            4259
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 87
            },
            "start": {
              "column": 4,
              "line": 87
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
                "name": "identifier",
                "optional": false,
                "range": [
                  4269,
                  4279
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 87
                  },
                  "start": {
                    "column": 20,
                    "line": 87
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
                    "column": 35,
                    "line": 87
                  },
                  "start": {
                    "column": 30,
                    "line": 87
                  }
                },
                "range": [
                  4279,
                  4284
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    4281,
                    4284
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 87
                    },
                    "start": {
                      "column": 32,
                      "line": 87
                    }
                  }
                }
              },
              "range": [
                4269,
                4285
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 87
                },
                "start": {
                  "column": 20,
                  "line": 87
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "record",
                "optional": false,
                "range": [
                  4286,
                  4292
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 87
                  },
                  "start": {
                    "column": 37,
                    "line": 87
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
                    "column": 48,
                    "line": 87
                  },
                  "start": {
                    "column": 43,
                    "line": 87
                  }
                },
                "range": [
                  4292,
                  4297
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    4294,
                    4297
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 87
                    },
                    "start": {
                      "column": 45,
                      "line": 87
                    }
                  }
                }
              },
              "range": [
                4286,
                4298
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 87
                },
                "start": {
                  "column": 37,
                  "line": 87
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "maxMsToWaitBeforePublishing",
                "optional": false,
                "range": [
                  4299,
                  4326
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 87
                  },
                  "start": {
                    "column": 50,
                    "line": 87
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
                    "column": 85,
                    "line": 87
                  },
                  "start": {
                    "column": 77,
                    "line": 87
                  }
                },
                "range": [
                  4326,
                  4334
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    4328,
                    4334
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 87
                    },
                    "start": {
                      "column": 79,
                      "line": 87
                    }
                  }
                }
              },
              "range": [
                4299,
                4335
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 87
                },
                "start": {
                  "column": 50,
                  "line": 87
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "storedAs",
                "optional": false,
                "range": [
                  4336,
                  4344
                ],
                "loc": {
                  "end": {
                    "column": 95,
                    "line": 87
                  },
                  "start": {
                    "column": 87,
                    "line": 87
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
                    "column": 127,
                    "line": 87
                  },
                  "start": {
                    "column": 95,
                    "line": 87
                  }
                },
                "range": [
                  4344,
                  4376
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PubSubRecordIsStoredInRedisAsA",
                    "optional": false,
                    "range": [
                      4346,
                      4376
                    ],
                    "loc": {
                      "end": {
                        "column": 127,
                        "line": 87
                      },
                      "start": {
                        "column": 97,
                        "line": 87
                      }
                    }
                  },
                  "range": [
                    4346,
                    4376
                  ],
                  "loc": {
                    "end": {
                      "column": 127,
                      "line": 87
                    },
                    "start": {
                      "column": 97,
                      "line": 87
                    }
                  }
                }
              },
              "range": [
                4336,
                4376
              ],
              "loc": {
                "end": {
                  "column": 127,
                  "line": 87
                },
                "start": {
                  "column": 87,
                  "line": 87
                }
              }
            }
          ],
          "range": [
            4268,
            4377
          ],
          "loc": {
            "end": {
              "column": 128,
              "line": 87
            },
            "start": {
              "column": 19,
              "line": 87
            }
          }
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "members": [],
          "range": [
            4526,
            4528
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 91
            },
            "start": {
              "column": 8,
              "line": 91
            }
          }
        },
        "trueType": {
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
                  4388,
                  4392
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 88
                  },
                  "start": {
                    "column": 6,
                    "line": 88
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
                    "column": 18,
                    "line": 88
                  },
                  "start": {
                    "column": 10,
                    "line": 88
                  }
                },
                "range": [
                  4392,
                  4400
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "range": [
                      4394,
                      4400
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 88
                      },
                      "start": {
                        "column": 12,
                        "line": 88
                      }
                    }
                  },
                  "range": [
                    4394,
                    4400
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 88
                    },
                    "start": {
                      "column": 12,
                      "line": 88
                    }
                  }
                }
              },
              "range": [
                4388,
                4401
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 88
                },
                "start": {
                  "column": 6,
                  "line": 88
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fields",
                "optional": false,
                "range": [
                  4408,
                  4414
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 89
                  },
                  "start": {
                    "column": 6,
                    "line": 89
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
                    "column": 31,
                    "line": 89
                  },
                  "start": {
                    "column": 12,
                    "line": 89
                  }
                },
                "range": [
                  4414,
                  4433
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      4419,
                      4433
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
                            "name": "SO_FAR",
                            "optional": false,
                            "range": [
                              4426,
                              4432
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 89
                              },
                              "start": {
                                "column": 24,
                                "line": 89
                              }
                            }
                          },
                          "range": [
                            4426,
                            4432
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 89
                            },
                            "start": {
                              "column": 24,
                              "line": 89
                            }
                          }
                        },
                        "range": [
                          4420,
                          4432
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 89
                          },
                          "start": {
                            "column": 18,
                            "line": 89
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 89
                      },
                      "start": {
                        "column": 17,
                        "line": 89
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "range": [
                      4416,
                      4419
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 89
                      },
                      "start": {
                        "column": 14,
                        "line": 89
                      }
                    }
                  },
                  "range": [
                    4416,
                    4433
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 89
                    },
                    "start": {
                      "column": 14,
                      "line": 89
                    }
                  }
                }
              },
              "range": [
                4408,
                4434
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 89
                },
                "start": {
                  "column": 6,
                  "line": 89
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasField",
                "optional": false,
                "range": [
                  4441,
                  4449
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 90
                  },
                  "start": {
                    "column": 6,
                    "line": 90
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
                    "column": 82,
                    "line": 90
                  },
                  "start": {
                    "column": 14,
                    "line": 90
                  }
                },
                "range": [
                  4449,
                  4517
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fieldName",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 90
                          },
                          "start": {
                            "column": 26,
                            "line": 90
                          }
                        },
                        "range": [
                          4461,
                          4487
                        ],
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "range": [
                                4463,
                                4469
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 90
                                },
                                "start": {
                                  "column": 28,
                                  "line": 90
                                }
                              }
                            },
                            {
                              "type": "TSNumberKeyword",
                              "range": [
                                4472,
                                4478
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 90
                                },
                                "start": {
                                  "column": 37,
                                  "line": 90
                                }
                              }
                            },
                            {
                              "type": "TSSymbolKeyword",
                              "range": [
                                4481,
                                4487
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 90
                                },
                                "start": {
                                  "column": 46,
                                  "line": 90
                                }
                              }
                            }
                          ],
                          "range": [
                            4463,
                            4487
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 90
                            },
                            "start": {
                              "column": 28,
                              "line": 90
                            }
                          }
                        }
                      },
                      "range": [
                        4452,
                        4487
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 90
                        },
                        "start": {
                          "column": 17,
                          "line": 90
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 90
                      },
                      "start": {
                        "column": 54,
                        "line": 90
                      }
                    },
                    "range": [
                      4489,
                      4517
                    ],
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "asserts": false,
                      "parameterName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fieldName",
                        "optional": false,
                        "range": [
                          4492,
                          4501
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 90
                          },
                          "start": {
                            "column": 57,
                            "line": 90
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 90
                          },
                          "start": {
                            "column": 70,
                            "line": 90
                          }
                        },
                        "range": [
                          4505,
                          4517
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SO_FAR",
                              "optional": false,
                              "range": [
                                4511,
                                4517
                              ],
                              "loc": {
                                "end": {
                                  "column": 82,
                                  "line": 90
                                },
                                "start": {
                                  "column": 76,
                                  "line": 90
                                }
                              }
                            },
                            "range": [
                              4511,
                              4517
                            ],
                            "loc": {
                              "end": {
                                "column": 82,
                                "line": 90
                              },
                              "start": {
                                "column": 76,
                                "line": 90
                              }
                            }
                          },
                          "range": [
                            4505,
                            4517
                          ],
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 90
                            },
                            "start": {
                              "column": 70,
                              "line": 90
                            }
                          }
                        }
                      },
                      "range": [
                        4492,
                        4517
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 90
                        },
                        "start": {
                          "column": 57,
                          "line": 90
                        }
                      }
                    }
                  },
                  "range": [
                    4451,
                    4517
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 90
                    },
                    "start": {
                      "column": 16,
                      "line": 90
                    }
                  }
                }
              },
              "range": [
                4441,
                4517
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 90
                },
                "start": {
                  "column": 6,
                  "line": 90
                }
              }
            }
          ],
          "range": [
            4380,
            4523
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 91
            },
            "start": {
              "column": 131,
              "line": 87
            }
          }
        },
        "range": [
          4253,
          4528
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 91
          },
          "start": {
            "column": 4,
            "line": 87
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 86
          },
          "start": {
            "column": 22,
            "line": 86
          }
        },
        "range": [
          4238,
          4246
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "range": [
                4239,
                4245
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 86
                },
                "start": {
                  "column": 23,
                  "line": 86
                }
              }
            },
            "out": false,
            "range": [
              4239,
              4245
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 86
              },
              "start": {
                "column": 23,
                "line": 86
              }
            }
          }
        ]
      },
      "range": [
        4218,
        4528
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 91
        },
        "start": {
          "column": 2,
          "line": 86
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
            "name": "buildType",
            "optional": false,
            "range": [
              4540,
              4549
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 93
              },
              "start": {
                "column": 8,
                "line": 93
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "range": [
                        4730,
                        4734
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 95
                        },
                        "start": {
                          "column": 6,
                          "line": 95
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "soFar",
                      "optional": false,
                      "range": [
                        4736,
                        4741
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 95
                        },
                        "start": {
                          "column": 12,
                          "line": 95
                        }
                      }
                    },
                    "range": [
                      4730,
                      4741
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 95
                      },
                      "start": {
                        "column": 6,
                        "line": 95
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fields",
                      "optional": false,
                      "range": [
                        4749,
                        4755
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 96
                        },
                        "start": {
                          "column": 6,
                          "line": 96
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "NewExpression",
                        "arguments": [
                          {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "soFar",
                                  "optional": false,
                                  "range": [
                                    4783,
                                    4788
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 96
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 96
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Object",
                                  "optional": false,
                                  "range": [
                                    4771,
                                    4777
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 96
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 96
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "keys",
                                  "optional": false,
                                  "range": [
                                    4778,
                                    4782
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 96
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 96
                                    }
                                  }
                                },
                                "range": [
                                  4771,
                                  4782
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 96
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 96
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                4771,
                                4789
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 96
                                },
                                "start": {
                                  "column": 28,
                                  "line": 96
                                }
                              }
                            },
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "SO_FAR",
                                    "optional": false,
                                    "range": [
                                      4800,
                                      4806
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 63,
                                        "line": 96
                                      },
                                      "start": {
                                        "column": 57,
                                        "line": 96
                                      }
                                    }
                                  },
                                  "range": [
                                    4800,
                                    4806
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 63,
                                      "line": 96
                                    },
                                    "start": {
                                      "column": 57,
                                      "line": 96
                                    }
                                  }
                                },
                                "range": [
                                  4794,
                                  4806
                                ],
                                "loc": {
                                  "end": {
                                    "column": 63,
                                    "line": 96
                                  },
                                  "start": {
                                    "column": 51,
                                    "line": 96
                                  }
                                }
                              },
                              "range": [
                                4793,
                                4809
                              ],
                              "loc": {
                                "end": {
                                  "column": 66,
                                  "line": 96
                                },
                                "start": {
                                  "column": 50,
                                  "line": 96
                                }
                              }
                            },
                            "range": [
                              4771,
                              4809
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 96
                              },
                              "start": {
                                "column": 28,
                                "line": 96
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Set",
                          "optional": false,
                          "range": [
                            4767,
                            4770
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 96
                            },
                            "start": {
                              "column": 24,
                              "line": 96
                            }
                          }
                        },
                        "range": [
                          4763,
                          4810
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 96
                          },
                          "start": {
                            "column": 20,
                            "line": 96
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        4757,
                        4810
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 96
                        },
                        "start": {
                          "column": 14,
                          "line": 96
                        }
                      }
                    },
                    "range": [
                      4749,
                      4810
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 96
                      },
                      "start": {
                        "column": 6,
                        "line": 96
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "hasField",
                      "optional": false,
                      "range": [
                        4818,
                        4826
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 97
                        },
                        "start": {
                          "column": 6,
                          "line": 97
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "BinaryExpression",
                        "operator": "in",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fieldName",
                          "optional": false,
                          "range": [
                            4869,
                            4878
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 97
                            },
                            "start": {
                              "column": 57,
                              "line": 97
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "soFar",
                          "optional": false,
                          "range": [
                            4882,
                            4887
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 97
                            },
                            "start": {
                              "column": 70,
                              "line": 97
                            }
                          }
                        },
                        "range": [
                          4869,
                          4887
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 97
                          },
                          "start": {
                            "column": 57,
                            "line": 97
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fieldName",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 97
                              },
                              "start": {
                                "column": 26,
                                "line": 97
                              }
                            },
                            "range": [
                              4838,
                              4864
                            ],
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    4840,
                                    4846
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 97
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 97
                                    }
                                  }
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    4849,
                                    4855
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 97
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 97
                                    }
                                  }
                                },
                                {
                                  "type": "TSSymbolKeyword",
                                  "range": [
                                    4858,
                                    4864
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 52,
                                      "line": 97
                                    },
                                    "start": {
                                      "column": 46,
                                      "line": 97
                                    }
                                  }
                                }
                              ],
                              "range": [
                                4840,
                                4864
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 97
                                },
                                "start": {
                                  "column": 28,
                                  "line": 97
                                }
                              }
                            }
                          },
                          "range": [
                            4829,
                            4864
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 97
                            },
                            "start": {
                              "column": 17,
                              "line": 97
                            }
                          }
                        }
                      ],
                      "range": [
                        4828,
                        4887
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 97
                        },
                        "start": {
                          "column": 16,
                          "line": 97
                        }
                      }
                    },
                    "range": [
                      4818,
                      4887
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 97
                      },
                      "start": {
                        "column": 6,
                        "line": 97
                      }
                    }
                  }
                ],
                "range": [
                  4722,
                  4893
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 98
                  },
                  "start": {
                    "column": 141,
                    "line": 94
                  }
                }
              },
              "consequent": {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  4717,
                  4719
                ],
                "loc": {
                  "end": {
                    "column": 138,
                    "line": 94
                  },
                  "start": {
                    "column": 136,
                    "line": 94
                  }
                }
              },
              "test": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "LogicalExpression",
                    "operator": "&&",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "in",
                      "left": {
                        "type": "Literal",
                        "raw": "\"identifier\"",
                        "value": "identifier",
                        "range": [
                          4585,
                          4597
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 94
                          },
                          "start": {
                            "column": 4,
                            "line": 94
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "range": [
                          4601,
                          4606
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 94
                          },
                          "start": {
                            "column": 20,
                            "line": 94
                          }
                        }
                      },
                      "range": [
                        4585,
                        4606
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 94
                        },
                        "start": {
                          "column": 4,
                          "line": 94
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "in",
                      "left": {
                        "type": "Literal",
                        "raw": "\"object\"",
                        "value": "object",
                        "range": [
                          4610,
                          4618
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 94
                          },
                          "start": {
                            "column": 29,
                            "line": 94
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "range": [
                          4622,
                          4627
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 94
                          },
                          "start": {
                            "column": 41,
                            "line": 94
                          }
                        }
                      },
                      "range": [
                        4610,
                        4627
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 94
                        },
                        "start": {
                          "column": 29,
                          "line": 94
                        }
                      }
                    },
                    "range": [
                      4585,
                      4627
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 94
                      },
                      "start": {
                        "column": 4,
                        "line": 94
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "in",
                    "left": {
                      "type": "Literal",
                      "raw": "\"maxMsToWaitBeforePublishing\"",
                      "value": "maxMsToWaitBeforePublishing",
                      "range": [
                        4631,
                        4660
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 94
                        },
                        "start": {
                          "column": 50,
                          "line": 94
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "soFar",
                      "optional": false,
                      "range": [
                        4664,
                        4669
                      ],
                      "loc": {
                        "end": {
                          "column": 88,
                          "line": 94
                        },
                        "start": {
                          "column": 83,
                          "line": 94
                        }
                      }
                    },
                    "range": [
                      4631,
                      4669
                    ],
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 94
                      },
                      "start": {
                        "column": 50,
                        "line": 94
                      }
                    }
                  },
                  "range": [
                    4585,
                    4669
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 94
                    },
                    "start": {
                      "column": 4,
                      "line": 94
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "in",
                  "left": {
                    "type": "Literal",
                    "raw": "\"PubSubRecordIsStoredInRedisAsA\"",
                    "value": "PubSubRecordIsStoredInRedisAsA",
                    "range": [
                      4673,
                      4705
                    ],
                    "loc": {
                      "end": {
                        "column": 124,
                        "line": 94
                      },
                      "start": {
                        "column": 92,
                        "line": 94
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "soFar",
                    "optional": false,
                    "range": [
                      4709,
                      4714
                    ],
                    "loc": {
                      "end": {
                        "column": 133,
                        "line": 94
                      },
                      "start": {
                        "column": 128,
                        "line": 94
                      }
                    }
                  },
                  "range": [
                    4673,
                    4714
                  ],
                  "loc": {
                    "end": {
                      "column": 133,
                      "line": 94
                    },
                    "start": {
                      "column": 92,
                      "line": 94
                    }
                  }
                },
                "range": [
                  4585,
                  4714
                ],
                "loc": {
                  "end": {
                    "column": 133,
                    "line": 94
                  },
                  "start": {
                    "column": 4,
                    "line": 94
                  }
                }
              },
              "range": [
                4585,
                4893
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 98
                },
                "start": {
                  "column": 4,
                  "line": 94
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 93
                    },
                    "start": {
                      "column": 34,
                      "line": 93
                    }
                  },
                  "range": [
                    4566,
                    4574
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "range": [
                        4568,
                        4574
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 93
                        },
                        "start": {
                          "column": 36,
                          "line": 93
                        }
                      }
                    },
                    "range": [
                      4568,
                      4574
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 93
                      },
                      "start": {
                        "column": 36,
                        "line": 93
                      }
                    }
                  }
                },
                "range": [
                  4561,
                  4574
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 93
                  },
                  "start": {
                    "column": 29,
                    "line": 93
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 93
                },
                "start": {
                  "column": 20,
                  "line": 93
                }
              },
              "range": [
                4552,
                4560
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "range": [
                      4553,
                      4559
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 93
                      },
                      "start": {
                        "column": 21,
                        "line": 93
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4553,
                    4559
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 93
                    },
                    "start": {
                      "column": 21,
                      "line": 93
                    }
                  }
                }
              ]
            },
            "range": [
              4552,
              4897
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 99
              },
              "start": {
                "column": 20,
                "line": 93
              }
            }
          },
          "range": [
            4540,
            4897
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 99
            },
            "start": {
              "column": 8,
              "line": 93
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        4534,
        4898
      ],
      "loc": {
        "end": {
          "column": 4,
          "line": 99
        },
        "start": {
          "column": 2,
          "line": 93
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BuildPubSubRecordType",
        "optional": false,
        "range": [
          4909,
          4930
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 101
          },
          "start": {
            "column": 7,
            "line": 101
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
                4965,
                4973
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "range": [
                      4966,
                      4972
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 102
                      },
                      "start": {
                        "column": 25,
                        "line": 102
                      }
                    }
                  },
                  "range": [
                    4966,
                    4972
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 102
                    },
                    "start": {
                      "column": 25,
                      "line": 102
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 102
                },
                "start": {
                  "column": 24,
                  "line": 102
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NameFieldConstructor",
              "optional": false,
              "range": [
                4945,
                4965
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 102
                },
                "start": {
                  "column": 4,
                  "line": 102
                }
              }
            },
            "range": [
              4945,
              4973
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 102
              },
              "start": {
                "column": 4,
                "line": 102
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                5006,
                5014
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "range": [
                      5007,
                      5013
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 103
                      },
                      "start": {
                        "column": 31,
                        "line": 103
                      }
                    }
                  },
                  "range": [
                    5007,
                    5013
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 103
                    },
                    "start": {
                      "column": 31,
                      "line": 103
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 103
                },
                "start": {
                  "column": 30,
                  "line": 103
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "IdentifierFieldConstructor",
              "optional": false,
              "range": [
                4980,
                5006
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 103
                },
                "start": {
                  "column": 4,
                  "line": 103
                }
              }
            },
            "range": [
              4980,
              5014
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 103
              },
              "start": {
                "column": 4,
                "line": 103
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                5043,
                5051
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "range": [
                      5044,
                      5050
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 104
                      },
                      "start": {
                        "column": 27,
                        "line": 104
                      }
                    }
                  },
                  "range": [
                    5044,
                    5050
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 104
                    },
                    "start": {
                      "column": 27,
                      "line": 104
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 104
                },
                "start": {
                  "column": 26,
                  "line": 104
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "RecordFieldConstructor",
              "optional": false,
              "range": [
                5021,
                5043
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 104
                },
                "start": {
                  "column": 4,
                  "line": 104
                }
              }
            },
            "range": [
              5021,
              5051
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 104
              },
              "start": {
                "column": 4,
                "line": 104
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                5077,
                5085
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "range": [
                      5078,
                      5084
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 105
                      },
                      "start": {
                        "column": 24,
                        "line": 105
                      }
                    }
                  },
                  "range": [
                    5078,
                    5084
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 105
                    },
                    "start": {
                      "column": 24,
                      "line": 105
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 105
                },
                "start": {
                  "column": 23,
                  "line": 105
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "StoredAsConstructor",
              "optional": false,
              "range": [
                5058,
                5077
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 105
                },
                "start": {
                  "column": 4,
                  "line": 105
                }
              }
            },
            "range": [
              5058,
              5085
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 105
              },
              "start": {
                "column": 4,
                "line": 105
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                5193,
                5201
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "range": [
                      5194,
                      5200
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 106
                      },
                      "start": {
                        "column": 48,
                        "line": 106
                      }
                    }
                  },
                  "range": [
                    5194,
                    5200
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 106
                    },
                    "start": {
                      "column": 48,
                      "line": 106
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 106
                },
                "start": {
                  "column": 47,
                  "line": 106
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MaxMsToWaitBeforePublishingFieldConstructor",
              "optional": false,
              "range": [
                5150,
                5193
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 106
                },
                "start": {
                  "column": 4,
                  "line": 106
                }
              }
            },
            "range": [
              5150,
              5201
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 106
              },
              "start": {
                "column": 4,
                "line": 106
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                5223,
                5231
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "range": [
                      5224,
                      5230
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 107
                      },
                      "start": {
                        "column": 20,
                        "line": 107
                      }
                    }
                  },
                  "range": [
                    5224,
                    5230
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 107
                    },
                    "start": {
                      "column": 20,
                      "line": 107
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 107
                },
                "start": {
                  "column": 19,
                  "line": 107
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeConstructor",
              "optional": false,
              "range": [
                5208,
                5223
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 107
                },
                "start": {
                  "column": 4,
                  "line": 107
                }
              }
            },
            "range": [
              5208,
              5231
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 107
              },
              "start": {
                "column": 4,
                "line": 107
              }
            }
          }
        ],
        "range": [
          4945,
          5231
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 107
          },
          "start": {
            "column": 4,
            "line": 102
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 36,
            "line": 101
          },
          "start": {
            "column": 28,
            "line": 101
          }
        },
        "range": [
          4930,
          4938
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "range": [
                4931,
                4937
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 101
                },
                "start": {
                  "column": 29,
                  "line": 101
                }
              }
            },
            "out": false,
            "range": [
              4931,
              4937
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 101
              },
              "start": {
                "column": 29,
                "line": 101
              }
            }
          }
        ]
      },
      "range": [
        4904,
        5231
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 107
        },
        "start": {
          "column": 2,
          "line": 101
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
            "name": "buildPubSubRecordType",
            "optional": false,
            "range": [
              5243,
              5264
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 109
              },
              "start": {
                "column": 8,
                "line": 109
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "TSAsExpression",
              "expression": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ObjectExpression",
                    "properties": [],
                    "range": [
                      5313,
                      5315
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 110
                      },
                      "start": {
                        "column": 4,
                        "line": 110
                      }
                    }
                  },
                  {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "range": [
                          5347,
                          5352
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 111
                          },
                          "start": {
                            "column": 30,
                            "line": 111
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "buildNameFieldConstructor",
                      "optional": false,
                      "range": [
                        5321,
                        5346
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 111
                        },
                        "start": {
                          "column": 4,
                          "line": 111
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      5321,
                      5353
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 111
                      },
                      "start": {
                        "column": 4,
                        "line": 111
                      }
                    }
                  },
                  {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "range": [
                          5391,
                          5396
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 112
                          },
                          "start": {
                            "column": 36,
                            "line": 112
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "buildIdentifierFieldConstructor",
                      "optional": false,
                      "range": [
                        5359,
                        5390
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 112
                        },
                        "start": {
                          "column": 4,
                          "line": 112
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      5359,
                      5397
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 112
                      },
                      "start": {
                        "column": 4,
                        "line": 112
                      }
                    }
                  },
                  {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "range": [
                          5431,
                          5436
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 113
                          },
                          "start": {
                            "column": 32,
                            "line": 113
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "buildRecordFieldConstructor",
                      "optional": false,
                      "range": [
                        5403,
                        5430
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 113
                        },
                        "start": {
                          "column": 4,
                          "line": 113
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      5403,
                      5437
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 113
                      },
                      "start": {
                        "column": 4,
                        "line": 113
                      }
                    }
                  },
                  {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "range": [
                          5468,
                          5473
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 114
                          },
                          "start": {
                            "column": 29,
                            "line": 114
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "buildStoredAsConstructor",
                      "optional": false,
                      "range": [
                        5443,
                        5467
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 114
                        },
                        "start": {
                          "column": 4,
                          "line": 114
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      5443,
                      5474
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 114
                      },
                      "start": {
                        "column": 4,
                        "line": 114
                      }
                    }
                  },
                  {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "range": [
                          5529,
                          5534
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 115
                          },
                          "start": {
                            "column": 53,
                            "line": 115
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "buildMaxMsToWaitBeforePublishingFieldConstructor",
                      "optional": false,
                      "range": [
                        5480,
                        5528
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 115
                        },
                        "start": {
                          "column": 4,
                          "line": 115
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      5480,
                      5535
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 115
                      },
                      "start": {
                        "column": 4,
                        "line": 115
                      }
                    }
                  },
                  {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "range": [
                          5551,
                          5556
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 116
                          },
                          "start": {
                            "column": 14,
                            "line": 116
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "buildType",
                      "optional": false,
                      "range": [
                        5541,
                        5550
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 116
                        },
                        "start": {
                          "column": 4,
                          "line": 116
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      5541,
                      5557
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 116
                      },
                      "start": {
                        "column": 4,
                        "line": 116
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "range": [
                      5294,
                      5300
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 109
                      },
                      "start": {
                        "column": 59,
                        "line": 109
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "assign",
                    "optional": false,
                    "range": [
                      5301,
                      5307
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 109
                      },
                      "start": {
                        "column": 66,
                        "line": 109
                      }
                    }
                  },
                  "range": [
                    5294,
                    5307
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 109
                    },
                    "start": {
                      "column": 59,
                      "line": 109
                    }
                  }
                },
                "optional": false,
                "range": [
                  5294,
                  5561
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 117
                  },
                  "start": {
                    "column": 59,
                    "line": 109
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    5586,
                    5594
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SO_FAR",
                        "optional": false,
                        "range": [
                          5587,
                          5593
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 117
                          },
                          "start": {
                            "column": 29,
                            "line": 117
                          }
                        }
                      },
                      "range": [
                        5587,
                        5593
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 117
                        },
                        "start": {
                          "column": 29,
                          "line": 117
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 117
                    },
                    "start": {
                      "column": 28,
                      "line": 117
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BuildPubSubRecordType",
                  "optional": false,
                  "range": [
                    5565,
                    5586
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 117
                    },
                    "start": {
                      "column": 7,
                      "line": 117
                    }
                  }
                },
                "range": [
                  5565,
                  5594
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 117
                  },
                  "start": {
                    "column": 7,
                    "line": 117
                  }
                }
              },
              "range": [
                5294,
                5594
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 117
                },
                "start": {
                  "column": 59,
                  "line": 109
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 109
                    },
                    "start": {
                      "column": 46,
                      "line": 109
                    }
                  },
                  "range": [
                    5281,
                    5289
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "range": [
                        5283,
                        5289
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 109
                        },
                        "start": {
                          "column": 48,
                          "line": 109
                        }
                      }
                    },
                    "range": [
                      5283,
                      5289
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 109
                      },
                      "start": {
                        "column": 48,
                        "line": 109
                      }
                    }
                  }
                },
                "range": [
                  5276,
                  5289
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 109
                  },
                  "start": {
                    "column": 41,
                    "line": 109
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 109
                },
                "start": {
                  "column": 32,
                  "line": 109
                }
              },
              "range": [
                5267,
                5275
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "range": [
                      5268,
                      5274
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 109
                      },
                      "start": {
                        "column": 33,
                        "line": 109
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    5268,
                    5274
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 109
                    },
                    "start": {
                      "column": 33,
                      "line": 109
                    }
                  }
                }
              ]
            },
            "range": [
              5267,
              5594
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 117
              },
              "start": {
                "column": 32,
                "line": 109
              }
            }
          },
          "range": [
            5243,
            5594
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 117
            },
            "start": {
              "column": 8,
              "line": 109
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        5237,
        5595
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 117
        },
        "start": {
          "column": 2,
          "line": 109
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
            "name": "PubSubRecordType",
            "optional": false,
            "range": [
              5604,
              5620
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 118
              },
              "start": {
                "column": 8,
                "line": 118
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  5645,
                  5647
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 118
                  },
                  "start": {
                    "column": 49,
                    "line": 118
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "buildPubSubRecordType",
              "optional": false,
              "range": [
                5623,
                5644
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 118
                },
                "start": {
                  "column": 27,
                  "line": 118
                }
              }
            },
            "optional": false,
            "range": [
              5623,
              5648
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 118
              },
              "start": {
                "column": 27,
                "line": 118
              }
            }
          },
          "range": [
            5604,
            5648
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 118
            },
            "start": {
              "column": 8,
              "line": 118
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        5598,
        5649
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 118
        },
        "start": {
          "column": 2,
          "line": 118
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 53,
      "line": 118
    },
    "start": {
      "column": 0,
      "line": 4
    }
  },
  "hashbang": null
}
```
