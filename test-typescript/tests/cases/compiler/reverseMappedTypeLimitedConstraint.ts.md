__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    438
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "XNumber_",
        "optional": false,
        "range": [
          5,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
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
              "name": "x",
              "optional": false,
              "range": [
                18,
                19
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 1
                },
                "start": {
                  "column": 18,
                  "line": 1
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
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              },
              "range": [
                19,
                27
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  21,
                  27
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 1
                  },
                  "start": {
                    "column": 21,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              18,
              27
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            }
          }
        ],
        "range": [
          16,
          29
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 1
          },
          "start": {
            "column": 16,
            "line": 1
          }
        }
      },
      "range": [
        0,
        29
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 1
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
        "name": "foo_",
        "optional": false,
        "range": [
          48,
          52
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
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
                "column": 88,
                "line": 3
              },
              "start": {
                "column": 47,
                "line": 3
              }
            },
            "range": [
              78,
              119
            ],
            "typeAnnotation": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSIntersectionType",
                "types": [
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
                          93,
                          94
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 3
                          },
                          "start": {
                            "column": 62,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        93,
                        94
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 3
                        },
                        "start": {
                          "column": 62,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      87,
                      94
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 3
                      },
                      "start": {
                        "column": 56,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "XNumber_",
                        "optional": false,
                        "range": [
                          103,
                          111
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 3
                          },
                          "start": {
                            "column": 72,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        103,
                        111
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 3
                        },
                        "start": {
                          "column": 72,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      97,
                      111
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 3
                      },
                      "start": {
                        "column": 66,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  87,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 3
                  },
                  "start": {
                    "column": 56,
                    "line": 3
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  82,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 3
                  },
                  "start": {
                    "column": 51,
                    "line": 3
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
                    "name": "K",
                    "optional": false,
                    "range": [
                      116,
                      117
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 3
                      },
                      "start": {
                        "column": 85,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    116,
                    117
                  ],
                  "loc": {
                    "end": {
                      "column": 86,
                      "line": 3
                    },
                    "start": {
                      "column": 85,
                      "line": 3
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
                      114,
                      115
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 3
                      },
                      "start": {
                        "column": 83,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    114,
                    115
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 3
                    },
                    "start": {
                      "column": 83,
                      "line": 3
                    }
                  }
                },
                "range": [
                  114,
                  118
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 3
                  },
                  "start": {
                    "column": 83,
                    "line": 3
                  }
                }
              },
              "range": [
                80,
                119
              ],
              "loc": {
                "end": {
                  "column": 88,
                  "line": 3
                },
                "start": {
                  "column": 49,
                  "line": 3
                }
              }
            }
          },
          "range": [
            73,
            119
          ],
          "loc": {
            "end": {
              "column": 88,
              "line": 3
            },
            "start": {
              "column": 42,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 92,
            "line": 3
          },
          "start": {
            "column": 89,
            "line": 3
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
            "name": "T",
            "optional": false,
            "range": [
              122,
              123
            ],
            "loc": {
              "end": {
                "column": 92,
                "line": 3
              },
              "start": {
                "column": 91,
                "line": 3
              }
            }
          },
          "range": [
            122,
            123
          ],
          "loc": {
            "end": {
              "column": 92,
              "line": 3
            },
            "start": {
              "column": 91,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 41,
            "line": 3
          },
          "start": {
            "column": 21,
            "line": 3
          }
        },
        "range": [
          52,
          72
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
                "name": "XNumber_",
                "optional": false,
                "range": [
                  63,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 3
                  },
                  "start": {
                    "column": 32,
                    "line": 3
                  }
                }
              },
              "range": [
                63,
                71
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 3
                },
                "start": {
                  "column": 32,
                  "line": 3
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
                53,
                54
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 22,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              53,
              71
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 3
              },
              "start": {
                "column": 22,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        31,
        124
      ],
      "loc": {
        "end": {
          "column": 93,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
                    132,
                    133
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 5
                    },
                    "start": {
                      "column": 6,
                      "line": 5
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    135,
                    136
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 5
                    },
                    "start": {
                      "column": 9,
                      "line": 5
                    }
                  }
                },
                "range": [
                  132,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 5
                  },
                  "start": {
                    "column": 6,
                    "line": 5
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
                    138,
                    139
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 5
                    },
                    "start": {
                      "column": 12,
                      "line": 5
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'foo'",
                  "value": "foo",
                  "range": [
                    141,
                    146
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 5
                    },
                    "start": {
                      "column": 15,
                      "line": 5
                    }
                  }
                },
                "range": [
                  138,
                  146
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 5
                  },
                  "start": {
                    "column": 12,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              131,
              147
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 5
              },
              "start": {
                "column": 5,
                "line": 5
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo_",
          "optional": false,
          "range": [
            126,
            130
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "optional": false,
        "range": [
          126,
          148
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        126,
        149
      ],
      "loc": {
        "end": {
          "column": 23,
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
            "name": "checkType_",
            "optional": false,
            "range": [
              251,
              261
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "range": [
                  333,
                  338
                ],
                "loc": {
                  "end": {
                    "column": 93,
                    "line": 9
                  },
                  "start": {
                    "column": 88,
                    "line": 9
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 83,
                        "line": 9
                      },
                      "start": {
                        "column": 47,
                        "line": 9
                      }
                    },
                    "range": [
                      292,
                      328
                    ],
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "constraint": {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "range": [
                                  308,
                                  309
                                ],
                                "loc": {
                                  "end": {
                                    "column": 64,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 63,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                308,
                                309
                              ],
                              "loc": {
                                "end": {
                                  "column": 64,
                                  "line": 9
                                },
                                "start": {
                                  "column": 63,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              302,
                              309
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 9
                              },
                              "start": {
                                "column": 57,
                                "line": 9
                              }
                            }
                          },
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
                                  318,
                                  319
                                ],
                                "loc": {
                                  "end": {
                                    "column": 74,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 73,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                318,
                                319
                              ],
                              "loc": {
                                "end": {
                                  "column": 74,
                                  "line": 9
                                },
                                "start": {
                                  "column": 73,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              312,
                              319
                            ],
                            "loc": {
                              "end": {
                                "column": 74,
                                "line": 9
                              },
                              "start": {
                                "column": 67,
                                "line": 9
                              }
                            }
                          }
                        ],
                        "range": [
                          302,
                          319
                        ],
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 9
                          },
                          "start": {
                            "column": 57,
                            "line": 9
                          }
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "range": [
                          297,
                          298
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 9
                          },
                          "start": {
                            "column": 52,
                            "line": 9
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
                            "name": "K",
                            "optional": false,
                            "range": [
                              324,
                              325
                            ],
                            "loc": {
                              "end": {
                                "column": 80,
                                "line": 9
                              },
                              "start": {
                                "column": 79,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            324,
                            325
                          ],
                          "loc": {
                            "end": {
                              "column": 80,
                              "line": 9
                            },
                            "start": {
                              "column": 79,
                              "line": 9
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              322,
                              323
                            ],
                            "loc": {
                              "end": {
                                "column": 78,
                                "line": 9
                              },
                              "start": {
                                "column": 77,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            322,
                            323
                          ],
                          "loc": {
                            "end": {
                              "column": 78,
                              "line": 9
                            },
                            "start": {
                              "column": 77,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          322,
                          326
                        ],
                        "loc": {
                          "end": {
                            "column": 81,
                            "line": 9
                          },
                          "start": {
                            "column": 77,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        294,
                        328
                      ],
                      "loc": {
                        "end": {
                          "column": 83,
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
                    287,
                    328
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 9
                    },
                    "start": {
                      "column": 42,
                      "line": 9
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 9
                  },
                  "start": {
                    "column": 28,
                    "line": 9
                  }
                },
                "range": [
                  273,
                  286
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
                        "name": "T",
                        "optional": false,
                        "range": [
                          284,
                          285
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 9
                          },
                          "start": {
                            "column": 39,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        284,
                        285
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 9
                        },
                        "start": {
                          "column": 39,
                          "line": 9
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        274,
                        275
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 9
                        },
                        "start": {
                          "column": 29,
                          "line": 9
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      274,
                      285
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 9
                      },
                      "start": {
                        "column": 29,
                        "line": 9
                      }
                    }
                  }
                ]
              },
              "range": [
                273,
                338
              ],
              "loc": {
                "end": {
                  "column": 93,
                  "line": 9
                },
                "start": {
                  "column": 28,
                  "line": 9
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
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
                    265,
                    266
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
              264,
              338
            ],
            "loc": {
              "end": {
                "column": 93,
                "line": 9
              },
              "start": {
                "column": 19,
                "line": 9
              }
            }
          },
          "range": [
            251,
            338
          ],
          "loc": {
            "end": {
              "column": 93,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        245,
        339
      ],
      "loc": {
        "end": {
          "column": 94,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
            "name": "checked_",
            "optional": false,
            "range": [
              347,
              355
            ],
            "loc": {
              "end": {
                "column": 14,
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        399,
                        400
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
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          402,
                          403
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 12
                          },
                          "start": {
                            "column": 5,
                            "line": 12
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          407,
                          413
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 12
                          },
                          "start": {
                            "column": 10,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        402,
                        413
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 12
                        },
                        "start": {
                          "column": 5,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      399,
                      413
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 12
                      },
                      "start": {
                        "column": 2,
                        "line": 12
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
                        417,
                        418
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 13
                        },
                        "start": {
                          "column": 2,
                          "line": 13
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"y\"",
                      "value": "y",
                      "range": [
                        420,
                        423
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 13
                        },
                        "start": {
                          "column": 5,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      417,
                      423
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 13
                      },
                      "start": {
                        "column": 2,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "range": [
                        427,
                        428
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 14
                        },
                        "start": {
                          "column": 2,
                          "line": 14
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"z\"",
                      "value": "z",
                      "range": [
                        430,
                        433
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 14
                        },
                        "start": {
                          "column": 5,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      427,
                      433
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
                  }
                ],
                "range": [
                  395,
                  436
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 15
                  },
                  "start": {
                    "column": 54,
                    "line": 11
                  }
                }
              }
            ],
            "callee": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "checkType_",
                "optional": false,
                "range": [
                  358,
                  368
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 11
                  },
                  "start": {
                    "column": 17,
                    "line": 11
                  }
                }
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  368,
                  392
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            370,
                            371
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 11
                            },
                            "start": {
                              "column": 29,
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
                              "column": 38,
                              "line": 11
                            },
                            "start": {
                              "column": 30,
                              "line": 11
                            }
                          },
                          "range": [
                            371,
                            379
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              373,
                              379
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 11
                              },
                              "start": {
                                "column": 32,
                                "line": 11
                              }
                            }
                          }
                        },
                        "range": [
                          370,
                          380
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 11
                          },
                          "start": {
                            "column": 29,
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
                          "name": "y",
                          "optional": false,
                          "range": [
                            381,
                            382
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 11
                            },
                            "start": {
                              "column": 40,
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
                              "column": 49,
                              "line": 11
                            },
                            "start": {
                              "column": 41,
                              "line": 11
                            }
                          },
                          "range": [
                            382,
                            390
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              384,
                              390
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 11
                              },
                              "start": {
                                "column": 43,
                                "line": 11
                              }
                            }
                          }
                        },
                        "range": [
                          381,
                          390
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
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
                      369,
                      391
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 11
                      },
                      "start": {
                        "column": 28,
                        "line": 11
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 11
                  },
                  "start": {
                    "column": 27,
                    "line": 11
                  }
                }
              },
              "range": [
                358,
                394
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 11
                },
                "start": {
                  "column": 17,
                  "line": 11
                }
              }
            },
            "optional": false,
            "range": [
              358,
              437
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 15
              },
              "start": {
                "column": 17,
                "line": 11
              }
            }
          },
          "range": [
            347,
            437
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 15
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
        341,
        438
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 3,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
