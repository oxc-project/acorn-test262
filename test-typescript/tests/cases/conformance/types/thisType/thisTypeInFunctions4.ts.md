__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    424
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WrongObject",
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
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                20,
                25
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 1
                },
                "start": {
                  "column": 20,
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
                  "column": 33,
                  "line": 1
                },
                "start": {
                  "column": 25,
                  "line": 1
                }
              },
              "range": [
                25,
                33
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  27,
                  33
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 1
                  },
                  "start": {
                    "column": 27,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              20,
              33
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            }
          }
        ],
        "range": [
          19,
          34
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 1
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "range": [
        0,
        35
      ],
      "loc": {
        "end": {
          "column": 35,
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
        "name": "CorrectObject",
        "optional": false,
        "range": [
          41,
          54
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
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
              "name": "name",
              "optional": false,
              "range": [
                58,
                62
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 22,
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
                  "column": 34,
                  "line": 2
                },
                "start": {
                  "column": 26,
                  "line": 2
                }
              },
              "range": [
                62,
                70
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  64,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 2
                  },
                  "start": {
                    "column": 28,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              58,
              70
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 2
              },
              "start": {
                "column": 22,
                "line": 2
              }
            }
          }
        ],
        "range": [
          57,
          71
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 2
          },
          "start": {
            "column": 21,
            "line": 2
          }
        }
      },
      "range": [
        36,
        72
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
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isCorrect",
        "optional": false,
        "range": [
          91,
          100
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 4
          },
          "start": {
            "column": 17,
            "line": 4
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
                "column": 35,
                "line": 4
              },
              "start": {
                "column": 30,
                "line": 4
              }
            },
            "range": [
              104,
              109
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                106,
                109
              ],
              "loc": {
                "end": {
                  "column": 35,
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
            101,
            109
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 4
            },
            "start": {
              "column": 27,
              "line": 4
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 58,
            "line": 4
          },
          "start": {
            "column": 36,
            "line": 4
          }
        },
        "range": [
          110,
          132
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "range": [
              112,
              115
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 4
              },
              "start": {
                "column": 38,
                "line": 4
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 58,
                "line": 4
              },
              "start": {
                "column": 45,
                "line": 4
              }
            },
            "range": [
              119,
              132
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "CorrectObject",
                "optional": false,
                "range": [
                  119,
                  132
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 4
                  },
                  "start": {
                    "column": 45,
                    "line": 4
                  }
                }
              },
              "range": [
                119,
                132
              ],
              "loc": {
                "end": {
                  "column": 58,
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
            112,
            132
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 4
            },
            "start": {
              "column": 38,
              "line": 4
            }
          }
        }
      },
      "range": [
        74,
        132
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
        "name": "callsCallback",
        "optional": false,
        "range": [
          151,
          164
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 6
          },
          "start": {
            "column": 17,
            "line": 6
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 55,
                "line": 6
              },
              "start": {
                "column": 33,
                "line": 6
              }
            },
            "range": [
              167,
              189
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 6
                      },
                      "start": {
                        "column": 40,
                        "line": 6
                      }
                    },
                    "range": [
                      174,
                      182
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        176,
                        182
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 6
                        },
                        "start": {
                          "column": 42,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    170,
                    182
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 6
                    },
                    "start": {
                      "column": 36,
                      "line": 6
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 6
                  },
                  "start": {
                    "column": 49,
                    "line": 6
                  }
                },
                "range": [
                  183,
                  189
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    185,
                    189
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 6
                    },
                    "start": {
                      "column": 51,
                      "line": 6
                    }
                  }
                }
              },
              "range": [
                169,
                189
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 6
                },
                "start": {
                  "column": 35,
                  "line": 6
                }
              }
            }
          },
          "range": [
            165,
            189
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 6
            },
            "start": {
              "column": 31,
              "line": 6
            }
          }
        }
      ],
      "range": [
        134,
        190
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
              "argument": null,
              "range": [
                303,
                310
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 10
                },
                "start": {
                  "column": 26,
                  "line": 10
                }
              }
            },
            "test": {
              "type": "UnaryExpression",
              "argument": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ThisExpression",
                    "range": [
                      296,
                      300
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 10
                      },
                      "start": {
                        "column": 19,
                        "line": 10
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isCorrect",
                  "optional": false,
                  "range": [
                    286,
                    295
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 10
                    },
                    "start": {
                      "column": 9,
                      "line": 10
                    }
                  }
                },
                "optional": false,
                "range": [
                  286,
                  301
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 10
                  },
                  "start": {
                    "column": 9,
                    "line": 10
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                285,
                301
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              }
            },
            "range": [
              281,
              310
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                348,
                                352
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 13
                                },
                                "start": {
                                  "column": 8,
                                  "line": 13
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "range": [
                                353,
                                357
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 13
                                },
                                "start": {
                                  "column": 13,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              348,
                              357
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 13
                              },
                              "start": {
                                "column": 8,
                                "line": 13
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "range": [
                              360,
                              364
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 13
                              },
                              "start": {
                                "column": 20,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            348,
                            364
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 13
                            },
                            "start": {
                              "column": 8,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          348,
                          365
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 13
                          },
                          "start": {
                            "column": 8,
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
                          "name": "T",
                          "optional": false,
                          "range": [
                            398,
                            399
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
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "ThisExpression",
                            "range": [
                              409,
                              413
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
                          "range": [
                            402,
                            413
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 14
                            },
                            "start": {
                              "column": 17,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          393,
                          414
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 14
                          },
                          "start": {
                            "column": 8,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "range": [
                      338,
                      420
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 15
                      },
                      "start": {
                        "column": 26,
                        "line": 12
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "range": [
                        331,
                        335
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 12
                        },
                        "start": {
                          "column": 19,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "range": [
                    330,
                    420
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 15
                    },
                    "start": {
                      "column": 18,
                      "line": 12
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "callsCallback",
                "optional": false,
                "range": [
                  316,
                  329
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "range": [
                316,
                421
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              316,
              422
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          258,
          424
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 66,
            "line": 8
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "problemFunction",
        "optional": false,
        "range": [
          201,
          216
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 58,
                "line": 8
              },
              "start": {
                "column": 29,
                "line": 8
              }
            },
            "range": [
              221,
              250
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CorrectObject",
                    "optional": false,
                    "range": [
                      223,
                      236
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 8
                      },
                      "start": {
                        "column": 31,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    223,
                    236
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 8
                    },
                    "start": {
                      "column": 31,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "WrongObject",
                    "optional": false,
                    "range": [
                      239,
                      250
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 8
                      },
                      "start": {
                        "column": 47,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    239,
                    250
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 8
                    },
                    "start": {
                      "column": 47,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                223,
                250
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 8
                },
                "start": {
                  "column": 31,
                  "line": 8
                }
              }
            }
          },
          "range": [
            217,
            250
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 8
            },
            "start": {
              "column": 25,
              "line": 8
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 65,
            "line": 8
          },
          "start": {
            "column": 59,
            "line": 8
          }
        },
        "range": [
          251,
          257
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            253,
            257
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 8
            },
            "start": {
              "column": 61,
              "line": 8
            }
          }
        }
      },
      "range": [
        192,
        424
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
