__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    414
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          17,
          30
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__",
              "optional": false,
              "range": [
                23,
                25
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 2
                },
                "start": {
                  "column": 4,
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
                  "column": 9,
                  "line": 2
                },
                "start": {
                  "column": 6,
                  "line": 2
                }
              },
              "range": [
                25,
                28
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    27,
                    28
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                },
                "range": [
                  27,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              23,
              28
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "range": [
          10,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        },
        "range": [
          13,
          16
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
                14,
                15
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              14,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        30
      ],
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
        "name": "Recursive",
        "optional": false,
        "range": [
          37,
          46
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                58,
                59
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 6
                },
                "start": {
                  "column": 6,
                  "line": 6
                }
              }
            },
            "range": [
              58,
              59
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                69,
                83
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      79,
                      82
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
                            80,
                            81
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 7
                            },
                            "start": {
                              "column": 20,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          80,
                          81
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 7
                          },
                          "start": {
                            "column": 20,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 7
                      },
                      "start": {
                        "column": 19,
                        "line": 7
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Recursive",
                    "optional": false,
                    "range": [
                      70,
                      79
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 7
                      },
                      "start": {
                        "column": 10,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    70,
                    82
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 7
                    },
                    "start": {
                      "column": 10,
                      "line": 7
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 7
                },
                "start": {
                  "column": 9,
                  "line": 7
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Box",
              "optional": false,
              "range": [
                66,
                69
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 7
                },
                "start": {
                  "column": 6,
                  "line": 7
                }
              }
            },
            "range": [
              66,
              83
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          }
        ],
        "range": [
          56,
          83
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 7
          },
          "start": {
            "column": 4,
            "line": 6
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 5
          },
          "start": {
            "column": 14,
            "line": 5
          }
        },
        "range": [
          46,
          49
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
                47,
                48
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 5
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              47,
              48
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 5
              },
              "start": {
                "column": 15,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        32,
        83
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 7
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
        "name": "InferRecursive",
        "optional": false,
        "range": [
          90,
          104
        ],
        "loc": {
          "end": {
            "column": 19,
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
            "name": "T",
            "optional": false,
            "range": [
              110,
              111
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 9
              },
              "start": {
                "column": 25,
                "line": 9
              }
            }
          },
          "range": [
            110,
            111
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 9
            },
            "start": {
              "column": 25,
              "line": 9
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              129,
              138
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
                    "name": "R",
                    "optional": false,
                    "range": [
                      136,
                      137
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 9
                      },
                      "start": {
                        "column": 51,
                        "line": 9
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    136,
                    137
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 9
                    },
                    "start": {
                      "column": 51,
                      "line": 9
                    }
                  }
                },
                "range": [
                  130,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 9
                  },
                  "start": {
                    "column": 45,
                    "line": 9
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 9
              },
              "start": {
                "column": 44,
                "line": 9
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Recursive",
            "optional": false,
            "range": [
              120,
              129
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 9
              },
              "start": {
                "column": 35,
                "line": 9
              }
            }
          },
          "range": [
            120,
            138
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 9
            },
            "start": {
              "column": 35,
              "line": 9
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"never!\"",
            "value": "never!",
            "range": [
              145,
              153
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 9
              },
              "start": {
                "column": 60,
                "line": 9
              }
            }
          },
          "range": [
            145,
            153
          ],
          "loc": {
            "end": {
              "column": 68,
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
            "name": "R",
            "optional": false,
            "range": [
              141,
              142
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
            141,
            142
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
          110,
          153
        ],
        "loc": {
          "end": {
            "column": 68,
            "line": 9
          },
          "start": {
            "column": 25,
            "line": 9
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 9
          },
          "start": {
            "column": 19,
            "line": 9
          }
        },
        "range": [
          104,
          107
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
                105,
                106
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 9
                },
                "start": {
                  "column": 20,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              105,
              106
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 9
              },
              "start": {
                "column": 20,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        85,
        153
      ],
      "loc": {
        "end": {
          "column": 68,
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
        "name": "t1",
        "optional": false,
        "range": [
          192,
          194
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
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            200,
            232
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    201,
                    207
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 12
                    },
                    "start": {
                      "column": 14,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      213,
                      231
                    ],
                    "params": [
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              214,
                              220
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 12
                              },
                              "start": {
                                "column": 27,
                                "line": 12
                              }
                            }
                          },
                          {
                            "type": "TSBooleanKeyword",
                            "range": [
                              223,
                              230
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
                        "range": [
                          214,
                          230
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 12
                          },
                          "start": {
                            "column": 27,
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
                        "column": 26,
                        "line": 12
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Box",
                    "optional": false,
                    "range": [
                      210,
                      213
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 12
                      },
                      "start": {
                        "column": 23,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    210,
                    231
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 12
                    },
                    "start": {
                      "column": 23,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                201,
                231
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 12
                },
                "start": {
                  "column": 14,
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
              "column": 13,
              "line": 12
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "range": [
            197,
            200
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 12
            },
            "start": {
              "column": 10,
              "line": 12
            }
          }
        },
        "range": [
          197,
          232
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 12
          },
          "start": {
            "column": 10,
            "line": 12
          }
        }
      },
      "range": [
        187,
        232
      ],
      "loc": {
        "end": {
          "column": 45,
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
        "name": "t2",
        "optional": false,
        "range": [
          239,
          241
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
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            258,
            262
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "range": [
                  259,
                  261
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 14
                  },
                  "start": {
                    "column": 25,
                    "line": 14
                  }
                }
              },
              "range": [
                259,
                261
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 14
                },
                "start": {
                  "column": 25,
                  "line": 14
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 14
            },
            "start": {
              "column": 24,
              "line": 14
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InferRecursive",
          "optional": false,
          "range": [
            244,
            258
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 14
            },
            "start": {
              "column": 10,
              "line": 14
            }
          }
        },
        "range": [
          244,
          262
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 14
          },
          "start": {
            "column": 10,
            "line": 14
          }
        }
      },
      "range": [
        234,
        262
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t3",
        "optional": false,
        "range": [
          268,
          270
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 15
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            287,
            324
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  291,
                  323
                ],
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          292,
                          298
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 15
                          },
                          "start": {
                            "column": 29,
                            "line": 15
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            304,
                            322
                          ],
                          "params": [
                            {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    305,
                                    311
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 48,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 15
                                    }
                                  }
                                },
                                {
                                  "type": "TSBooleanKeyword",
                                  "range": [
                                    314,
                                    321
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 58,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 51,
                                      "line": 15
                                    }
                                  }
                                }
                              ],
                              "range": [
                                305,
                                321
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 15
                                },
                                "start": {
                                  "column": 42,
                                  "line": 15
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 15
                            },
                            "start": {
                              "column": 41,
                              "line": 15
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Box",
                          "optional": false,
                          "range": [
                            301,
                            304
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 15
                            },
                            "start": {
                              "column": 38,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          301,
                          322
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 15
                          },
                          "start": {
                            "column": 38,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "range": [
                      292,
                      322
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 15
                      },
                      "start": {
                        "column": 29,
                        "line": 15
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 15
                  },
                  "start": {
                    "column": 28,
                    "line": 15
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Box",
                "optional": false,
                "range": [
                  288,
                  291
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 15
                  },
                  "start": {
                    "column": 25,
                    "line": 15
                  }
                }
              },
              "range": [
                288,
                323
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 15
                },
                "start": {
                  "column": 25,
                  "line": 15
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 15
            },
            "start": {
              "column": 24,
              "line": 15
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InferRecursive",
          "optional": false,
          "range": [
            273,
            287
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 15
            },
            "start": {
              "column": 10,
              "line": 15
            }
          }
        },
        "range": [
          273,
          324
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 15
          },
          "start": {
            "column": 10,
            "line": 15
          }
        }
      },
      "range": [
        263,
        324
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 31,
      "line": 18
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
