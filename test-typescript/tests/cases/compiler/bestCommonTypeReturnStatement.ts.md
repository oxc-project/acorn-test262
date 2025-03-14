__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    284
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          22,
          131
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "range": [
                28,
                32
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "successCallback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 2
                    },
                    "start": {
                      "column": 24,
                      "line": 2
                    }
                  },
                  "range": [
                    48,
                    74
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "promiseValue",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 2
                            },
                            "start": {
                              "column": 39,
                              "line": 2
                            }
                          },
                          "range": [
                            63,
                            66
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                65,
                                66
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 2
                                },
                                "start": {
                                  "column": 41,
                                  "line": 2
                                }
                              }
                            },
                            "range": [
                              65,
                              66
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 2
                              },
                              "start": {
                                "column": 41,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          51,
                          66
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 2
                          },
                          "start": {
                            "column": 27,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 2
                        },
                        "start": {
                          "column": 44,
                          "line": 2
                        }
                      },
                      "range": [
                        68,
                        74
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          71,
                          74
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 2
                          },
                          "start": {
                            "column": 47,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      50,
                      74
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 2
                      },
                      "start": {
                        "column": 26,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  33,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "errorCallback",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 2
                    },
                    "start": {
                      "column": 66,
                      "line": 2
                    }
                  },
                  "range": [
                    90,
                    112
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "reason",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 80,
                              "line": 2
                            },
                            "start": {
                              "column": 75,
                              "line": 2
                            }
                          },
                          "range": [
                            99,
                            104
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              101,
                              104
                            ],
                            "loc": {
                              "end": {
                                "column": 80,
                                "line": 2
                              },
                              "start": {
                                "column": 77,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          93,
                          104
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 2
                          },
                          "start": {
                            "column": 69,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 88,
                          "line": 2
                        },
                        "start": {
                          "column": 82,
                          "line": 2
                        }
                      },
                      "range": [
                        106,
                        112
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          109,
                          112
                        ],
                        "loc": {
                          "end": {
                            "column": 88,
                            "line": 2
                          },
                          "start": {
                            "column": 85,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      92,
                      112
                    ],
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 2
                      },
                      "start": {
                        "column": 68,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  76,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 88,
                    "line": 2
                  },
                  "start": {
                    "column": 52,
                    "line": 2
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 104,
                  "line": 2
                },
                "start": {
                  "column": 89,
                  "line": 2
                }
              },
              "range": [
                113,
                128
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    123,
                    128
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        124,
                        127
                      ],
                      "loc": {
                        "end": {
                          "column": 103,
                          "line": 2
                        },
                        "start": {
                          "column": 100,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 104,
                      "line": 2
                    },
                    "start": {
                      "column": 99,
                      "line": 2
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "range": [
                    115,
                    123
                  ],
                  "loc": {
                    "end": {
                      "column": 99,
                      "line": 2
                    },
                    "start": {
                      "column": 91,
                      "line": 2
                    }
                  }
                },
                "range": [
                  115,
                  128
                ],
                "loc": {
                  "end": {
                    "column": 104,
                    "line": 2
                  },
                  "start": {
                    "column": 91,
                    "line": 2
                  }
                }
              }
            },
            "static": false,
            "range": [
              28,
              129
            ],
            "loc": {
              "end": {
                "column": 105,
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
            "column": 22,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IPromise",
        "optional": false,
        "range": [
          10,
          18
        ],
        "loc": {
          "end": {
            "column": 18,
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
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        },
        "range": [
          18,
          21
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
                19,
                20
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              19,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 19,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        131
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    169,
                    170
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 6
                    },
                    "start": {
                      "column": 21,
                      "line": 6
                    }
                  }
                },
                "optional": false,
                "range": [
                  169,
                  172
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 6
                  },
                  "start": {
                    "column": 21,
                    "line": 6
                  }
                }
              },
              "range": [
                162,
                173
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 6
                },
                "start": {
                  "column": 14,
                  "line": 6
                }
              }
            },
            "test": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                156,
                160
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            },
            "range": [
              152,
              173
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  185,
                  186
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 7
                  },
                  "start": {
                    "column": 11,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "range": [
                185,
                188
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "range": [
              178,
              189
            ],
            "loc": {
              "end": {
                "column": 15,
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
          146,
          191
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 13,
            "line": 5
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
          142,
          143
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
      "params": [],
      "range": [
        133,
        191
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                232,
                236
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 11
                },
                "start": {
                  "column": 38,
                  "line": 11
                }
              }
            },
            "range": [
              225,
              237
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 11
              },
              "start": {
                "column": 31,
                "line": 11
              }
            }
          }
        ],
        "range": [
          223,
          239
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 11
          },
          "start": {
            "column": 29,
            "line": 11
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "range": [
          203,
          204
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 28,
            "line": 11
          },
          "start": {
            "column": 12,
            "line": 11
          }
        },
        "range": [
          206,
          222
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              216,
              222
            ],
            "params": [
              {
                "type": "TSVoidKeyword",
                "range": [
                  217,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 27,
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
                "column": 28,
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
            "name": "IPromise",
            "optional": false,
            "range": [
              208,
              216
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 11
              },
              "start": {
                "column": 14,
                "line": 11
              }
            }
          },
          "range": [
            208,
            222
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 11
            },
            "start": {
              "column": 14,
              "line": 11
            }
          }
        }
      },
      "range": [
        194,
        239
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 11
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
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                277,
                281
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 12
                },
                "start": {
                  "column": 37,
                  "line": 12
                }
              }
            },
            "range": [
              270,
              282
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 12
              },
              "start": {
                "column": 30,
                "line": 12
              }
            }
          }
        ],
        "range": [
          268,
          284
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "range": [
          249,
          250
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 12
          },
          "start": {
            "column": 9,
            "line": 12
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 27,
            "line": 12
          },
          "start": {
            "column": 12,
            "line": 12
          }
        },
        "range": [
          252,
          267
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              262,
              267
            ],
            "params": [
              {
                "type": "TSAnyKeyword",
                "range": [
                  263,
                  266
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
              }
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 12
              },
              "start": {
                "column": 22,
                "line": 12
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "range": [
              254,
              262
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 12
              },
              "start": {
                "column": 14,
                "line": 12
              }
            }
          },
          "range": [
            254,
            267
          ],
          "loc": {
            "end": {
              "column": 27,
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
        240,
        284
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 12
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
      "column": 44,
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
