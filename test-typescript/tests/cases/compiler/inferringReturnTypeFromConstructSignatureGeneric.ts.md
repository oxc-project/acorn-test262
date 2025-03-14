__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    533
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          39,
          83
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "give",
              "optional": false,
              "range": [
                43,
                47
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 2
                },
                "start": {
                  "column": 2,
                  "line": 2
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                47,
                81
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "range": [
                        71,
                        76
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 3
                        },
                        "start": {
                          "column": 11,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      64,
                      77
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
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
                  58,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 4
                  },
                  "start": {
                    "column": 17,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 2
                      },
                      "start": {
                        "column": 12,
                        "line": 2
                      }
                    },
                    "range": [
                      53,
                      56
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          55,
                          56
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
                      "range": [
                        55,
                        56
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
                    }
                  },
                  "range": [
                    48,
                    56
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 2
                    },
                    "start": {
                      "column": 7,
                      "line": 2
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 4
                },
                "start": {
                  "column": 6,
                  "line": 2
                }
              }
            },
            "range": [
              43,
              81
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 39,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericObject",
        "optional": false,
        "range": [
          6,
          19
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 38,
            "line": 1
          },
          "start": {
            "column": 19,
            "line": 1
          }
        },
        "range": [
          19,
          38
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                30,
                32
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 1
                },
                "start": {
                  "column": 30,
                  "line": 1
                }
              }
            },
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                35,
                37
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 1
                },
                "start": {
                  "column": 35,
                  "line": 1
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
                20,
                21
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              20,
              37
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        83
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          122,
          166
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "give",
              "optional": false,
              "range": [
                126,
                130
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 7
                },
                "start": {
                  "column": 2,
                  "line": 7
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                130,
                164
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "range": [
                        154,
                        159
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 8
                        },
                        "start": {
                          "column": 11,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      147,
                      160
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 8
                      },
                      "start": {
                        "column": 4,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  141,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 9
                  },
                  "start": {
                    "column": 17,
                    "line": 7
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 7
                      },
                      "start": {
                        "column": 12,
                        "line": 7
                      }
                    },
                    "range": [
                      136,
                      139
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          138,
                          139
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 7
                          },
                          "start": {
                            "column": 14,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        138,
                        139
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 7
                        },
                        "start": {
                          "column": 14,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    131,
                    139
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 7
                    },
                    "start": {
                      "column": 7,
                      "line": 7
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 9
                },
                "start": {
                  "column": 6,
                  "line": 7
                }
              }
            },
            "range": [
              126,
              164
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 9
              },
              "start": {
                "column": 2,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 38,
            "line": 6
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericNumber",
        "optional": false,
        "range": [
          90,
          103
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 6
          },
          "start": {
            "column": 6,
            "line": 6
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 37,
            "line": 6
          },
          "start": {
            "column": 19,
            "line": 6
          }
        },
        "range": [
          103,
          121
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                114,
                120
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 6
                },
                "start": {
                  "column": 30,
                  "line": 6
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
                104,
                105
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 6
                },
                "start": {
                  "column": 20,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              104,
              120
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 6
              },
              "start": {
                "column": 20,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        84,
        166
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          222,
          266
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "give",
              "optional": false,
              "range": [
                226,
                230
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 12
                },
                "start": {
                  "column": 2,
                  "line": 12
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                230,
                264
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "range": [
                        254,
                        259
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 13
                        },
                        "start": {
                          "column": 11,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      247,
                      260
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 13
                      },
                      "start": {
                        "column": 4,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  241,
                  264
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 14
                  },
                  "start": {
                    "column": 17,
                    "line": 12
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 12
                      },
                      "start": {
                        "column": 12,
                        "line": 12
                      }
                    },
                    "range": [
                      236,
                      239
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          238,
                          239
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 12
                          },
                          "start": {
                            "column": 14,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        238,
                        239
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 12
                        },
                        "start": {
                          "column": 14,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    231,
                    239
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 12
                    },
                    "start": {
                      "column": 7,
                      "line": 12
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 14
                },
                "start": {
                  "column": 6,
                  "line": 12
                }
              }
            },
            "range": [
              226,
              264
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 12
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
            "column": 55,
            "line": 11
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericNumberOrString",
        "optional": false,
        "range": [
          173,
          194
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 11
          },
          "start": {
            "column": 6,
            "line": 11
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 54,
            "line": 11
          },
          "start": {
            "column": 27,
            "line": 11
          }
        },
        "range": [
          194,
          221
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    205,
                    211
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 11
                    },
                    "start": {
                      "column": 38,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    214,
                    220
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 11
                    },
                    "start": {
                      "column": 47,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                205,
                220
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 11
                },
                "start": {
                  "column": 38,
                  "line": 11
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
                195,
                196
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 11
                },
                "start": {
                  "column": 28,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              195,
              220
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 11
              },
              "start": {
                "column": 28,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        167,
        266
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 11
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
              "type": "NewExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "range": [
                  321,
                  325
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 18
                  },
                  "start": {
                    "column": 15,
                    "line": 18
                  }
                }
              },
              "range": [
                317,
                327
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 18
                }
              }
            },
            "range": [
              310,
              328
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
          }
        ],
        "range": [
          304,
          330
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 36,
            "line": 17
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "range": [
          277,
          278
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 17
          },
          "start": {
            "column": 9,
            "line": 17
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 17
              },
              "start": {
                "column": 18,
                "line": 17
              }
            },
            "range": [
              286,
              299
            ],
            "typeAnnotation": {
              "type": "TSConstructorType",
              "abstract": false,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 17
                  },
                  "start": {
                    "column": 27,
                    "line": 17
                  }
                },
                "range": [
                  295,
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
                        "column": 31,
                        "line": 17
                      },
                      "start": {
                        "column": 30,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    298,
                    299
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 17
                    },
                    "start": {
                      "column": 30,
                      "line": 17
                    }
                  }
                }
              },
              "range": [
                288,
                299
              ],
              "loc": {
                "end": {
                  "column": 31,
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
            282,
            299
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 17
            },
            "start": {
              "column": 14,
              "line": 17
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 35,
            "line": 17
          },
          "start": {
            "column": 32,
            "line": 17
          }
        },
        "range": [
          300,
          303
        ],
        "typeAnnotation": {
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
                "column": 35,
                "line": 17
              },
              "start": {
                "column": 34,
                "line": 17
              }
            }
          },
          "range": [
            302,
            303
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 17
            },
            "start": {
              "column": 34,
              "line": 17
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 17
          },
          "start": {
            "column": 10,
            "line": 17
          }
        },
        "range": [
          278,
          281
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
                279,
                280
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 17
                },
                "start": {
                  "column": 11,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              279,
              280
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 17
              },
              "start": {
                "column": 11,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        268,
        330
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
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
            "name": "g1",
            "optional": false,
            "range": [
              338,
              340
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 21
              },
              "start": {
                "column": 6,
                "line": 21
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "GenericObject",
                "optional": false,
                "range": [
                  345,
                  358
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 21
                  },
                  "start": {
                    "column": 13,
                    "line": 21
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "range": [
                343,
                344
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 21
                }
              }
            },
            "optional": false,
            "range": [
              343,
              359
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 21
              },
              "start": {
                "column": 11,
                "line": 21
              }
            }
          },
          "range": [
            338,
            359
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 21
            },
            "start": {
              "column": 6,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        332,
        360
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              369,
              371
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 22
              },
              "start": {
                "column": 8,
                "line": 22
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
            "name": "g1",
            "optional": false,
            "range": [
              361,
              363
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 22
              },
              "start": {
                "column": 0,
                "line": 22
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "give",
            "optional": false,
            "range": [
              364,
              368
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 22
              },
              "start": {
                "column": 3,
                "line": 22
              }
            }
          },
          "range": [
            361,
            368
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "optional": false,
        "range": [
          361,
          372
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        361,
        373
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
            "name": "g2",
            "optional": false,
            "range": [
              381,
              383
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 24
              },
              "start": {
                "column": 6,
                "line": 24
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "GenericNumber",
                "optional": false,
                "range": [
                  388,
                  401
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 24
                  },
                  "start": {
                    "column": 13,
                    "line": 24
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "range": [
                386,
                387
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 24
                },
                "start": {
                  "column": 11,
                  "line": 24
                }
              }
            },
            "optional": false,
            "range": [
              386,
              402
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 24
              },
              "start": {
                "column": 11,
                "line": 24
              }
            }
          },
          "range": [
            381,
            402
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 24
            },
            "start": {
              "column": 6,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        375,
        403
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              412,
              413
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
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "g2",
            "optional": false,
            "range": [
              404,
              406
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 25
              },
              "start": {
                "column": 0,
                "line": 25
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "give",
            "optional": false,
            "range": [
              407,
              411
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 25
              },
              "start": {
                "column": 3,
                "line": 25
              }
            }
          },
          "range": [
            404,
            411
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "optional": false,
        "range": [
          404,
          414
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        404,
        415
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
            "name": "g3",
            "optional": false,
            "range": [
              423,
              425
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 27
              },
              "start": {
                "column": 6,
                "line": 27
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "GenericNumberOrString",
                "optional": false,
                "range": [
                  430,
                  451
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 27
                  },
                  "start": {
                    "column": 13,
                    "line": 27
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "range": [
                428,
                429
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 27
                },
                "start": {
                  "column": 11,
                  "line": 27
                }
              }
            },
            "optional": false,
            "range": [
              428,
              452
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 27
              },
              "start": {
                "column": 11,
                "line": 27
              }
            }
          },
          "range": [
            423,
            452
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 27
            },
            "start": {
              "column": 6,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        417,
        453
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              462,
              463
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 28
              },
              "start": {
                "column": 8,
                "line": 28
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
            "name": "g3",
            "optional": false,
            "range": [
              454,
              456
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 28
              },
              "start": {
                "column": 0,
                "line": 28
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "give",
            "optional": false,
            "range": [
              457,
              461
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 28
              },
              "start": {
                "column": 3,
                "line": 28
              }
            }
          },
          "range": [
            454,
            461
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 28
            },
            "start": {
              "column": 0,
              "line": 28
            }
          }
        },
        "optional": false,
        "range": [
          454,
          464
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        454,
        465
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "'1'",
            "value": "1",
            "range": [
              474,
              477
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 29
              },
              "start": {
                "column": 8,
                "line": 29
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
            "name": "g3",
            "optional": false,
            "range": [
              466,
              468
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 29
              },
              "start": {
                "column": 0,
                "line": 29
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "give",
            "optional": false,
            "range": [
              469,
              473
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 29
              },
              "start": {
                "column": 3,
                "line": 29
              }
            }
          },
          "range": [
            466,
            473
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 29
            },
            "start": {
              "column": 0,
              "line": 29
            }
          }
        },
        "optional": false,
        "range": [
          466,
          478
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 29
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "range": [
        466,
        479
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          513,
          515
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 13,
            "line": 32
          },
          "start": {
            "column": 11,
            "line": 32
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          508,
          509
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 32
          },
          "start": {
            "column": 6,
            "line": 32
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 32
          },
          "start": {
            "column": 7,
            "line": 32
          }
        },
        "range": [
          509,
          512
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
                510,
                511
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 32
                },
                "start": {
                  "column": 8,
                  "line": 32
                }
              }
            },
            "out": false,
            "range": [
              510,
              511
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 32
              },
              "start": {
                "column": 8,
                "line": 32
              }
            }
          }
        ]
      },
      "range": [
        502,
        515
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
            "name": "g4",
            "optional": false,
            "range": [
              522,
              524
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 33
              },
              "start": {
                "column": 6,
                "line": 33
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  529,
                  530
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 33
                  },
                  "start": {
                    "column": 13,
                    "line": 33
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "range": [
                527,
                528
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 33
                },
                "start": {
                  "column": 11,
                  "line": 33
                }
              }
            },
            "optional": false,
            "range": [
              527,
              531
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 33
              },
              "start": {
                "column": 11,
                "line": 33
              }
            }
          },
          "range": [
            522,
            531
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 33
            },
            "start": {
              "column": 6,
              "line": 33
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        516,
        532
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 34
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
