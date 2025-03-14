__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    17,
    748
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testD",
        "optional": false,
        "range": [
          34,
          39
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 29,
            "line": 3
          },
          "start": {
            "column": 24,
            "line": 3
          }
        },
        "range": [
          41,
          46
        ],
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"d\"",
            "value": "d",
            "range": [
              43,
              46
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 3
              },
              "start": {
                "column": 26,
                "line": 3
              }
            }
          },
          "range": [
            43,
            46
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 3
            },
            "start": {
              "column": 26,
              "line": 3
            }
          }
        }
      },
      "range": [
        17,
        47
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
        "name": "forceMatch",
        "optional": false,
        "range": [
          66,
          76
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 5
          },
          "start": {
            "column": 17,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "matched",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 1,
                "line": 7
              },
              "start": {
                "column": 38,
                "line": 5
              }
            },
            "range": [
              87,
              117
            ],
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
                      107,
                      108
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 6
                      },
                      "start": {
                        "column": 16,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    107,
                    108
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 6
                    },
                    "start": {
                      "column": 16,
                      "line": 6
                    }
                  }
                },
                "range": [
                  101,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 6
                  },
                  "start": {
                    "column": 10,
                    "line": 6
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "range": [
                  94,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 6
                  },
                  "start": {
                    "column": 3,
                    "line": 6
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "range": [
                    111,
                    114
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 6
                    },
                    "start": {
                      "column": 20,
                      "line": 6
                    }
                  }
                },
                "range": [
                  111,
                  114
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 6
                  },
                  "start": {
                    "column": 20,
                    "line": 6
                  }
                }
              },
              "range": [
                89,
                117
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 7
                },
                "start": {
                  "column": 40,
                  "line": 5
                }
              }
            }
          },
          "range": [
            80,
            117
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 31,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 8,
            "line": 7
          },
          "start": {
            "column": 2,
            "line": 7
          }
        },
        "range": [
          118,
          124
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            120,
            124
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 5
          },
          "start": {
            "column": 27,
            "line": 5
          }
        },
        "range": [
          76,
          79
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
                77,
                78
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 5
                },
                "start": {
                  "column": 28,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              77,
              78
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 5
              },
              "start": {
                "column": 28,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        49,
        125
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
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
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testD",
                    "optional": false,
                    "range": [
                      143,
                      148
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 10
                      },
                      "start": {
                        "column": 3,
                        "line": 10
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    143,
                    150
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 10
                    },
                    "start": {
                      "column": 3,
                      "line": 10
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"d\"",
                  "value": "d",
                  "range": [
                    153,
                    156
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 10
                    },
                    "start": {
                      "column": 13,
                      "line": 10
                    }
                  }
                },
                "range": [
                  142,
                  156
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
              }
            ],
            "range": [
              138,
              159
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 11
              },
              "start": {
                "column": 11,
                "line": 9
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "forceMatch",
          "optional": false,
          "range": [
            127,
            137
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "optional": false,
        "range": [
          127,
          160
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        127,
        161
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
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
        "name": "forceMatch2",
        "optional": false,
        "range": [
          180,
          191
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 13
          },
          "start": {
            "column": 17,
            "line": 13
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "matched",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 1,
                "line": 15
              },
              "start": {
                "column": 39,
                "line": 13
              }
            },
            "range": [
              202,
              260
            ],
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
                      222,
                      223
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 14
                      },
                      "start": {
                        "column": 16,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    222,
                    223
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 14
                    },
                    "start": {
                      "column": 16,
                      "line": 14
                    }
                  }
                },
                "range": [
                  216,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 14
                  },
                  "start": {
                    "column": 10,
                    "line": 14
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "range": [
                  209,
                  212
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 14
                  },
                  "start": {
                    "column": 3,
                    "line": 14
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "range": [
                            229,
                            232
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 14
                            },
                            "start": {
                              "column": 23,
                              "line": 14
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "range": [
                            229,
                            232
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 14
                            },
                            "start": {
                              "column": 23,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          229,
                          232
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 14
                          },
                          "start": {
                            "column": 23,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 14
                        },
                        "start": {
                          "column": 28,
                          "line": 14
                        }
                      },
                      "range": [
                        234,
                        248
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "range": [
                                238,
                                241
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 14
                                },
                                "start": {
                                  "column": 32,
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
                                  "column": 40,
                                  "line": 14
                                },
                                "start": {
                                  "column": 35,
                                  "line": 14
                                }
                              },
                              "range": [
                                241,
                                246
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "range": [
                                    243,
                                    246
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 40,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 14
                                    }
                                  }
                                },
                                "range": [
                                  243,
                                  246
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 14
                                  }
                                }
                              }
                            },
                            "range": [
                              238,
                              246
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 14
                              },
                              "start": {
                                "column": 32,
                                "line": 14
                              }
                            }
                          }
                        ],
                        "range": [
                          236,
                          248
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 14
                          },
                          "start": {
                            "column": 30,
                            "line": 14
                          }
                        }
                      }
                    },
                    "range": [
                      227,
                      248
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 14
                      },
                      "start": {
                        "column": 21,
                        "line": 14
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 14
                    },
                    "start": {
                      "column": 44,
                      "line": 14
                    }
                  },
                  "range": [
                    250,
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
                        "column": 51,
                        "line": 14
                      },
                      "start": {
                        "column": 47,
                        "line": 14
                      }
                    }
                  }
                },
                "range": [
                  226,
                  257
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 14
                  },
                  "start": {
                    "column": 20,
                    "line": 14
                  }
                }
              },
              "range": [
                204,
                260
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 15
                },
                "start": {
                  "column": 41,
                  "line": 13
                }
              }
            }
          },
          "range": [
            195,
            260
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 15
            },
            "start": {
              "column": 32,
              "line": 13
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 8,
            "line": 15
          },
          "start": {
            "column": 2,
            "line": 15
          }
        },
        "range": [
          261,
          267
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            263,
            267
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 13
          },
          "start": {
            "column": 28,
            "line": 13
          }
        },
        "range": [
          191,
          194
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
                192,
                193
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 13
                },
                "start": {
                  "column": 29,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              192,
              193
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 13
              },
              "start": {
                "column": 29,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        163,
        268
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 13
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
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testD",
                    "optional": false,
                    "range": [
                      287,
                      292
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 18
                      },
                      "start": {
                        "column": 3,
                        "line": 18
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    287,
                    294
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 18
                    },
                    "start": {
                      "column": 3,
                      "line": 18
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
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      310,
                      312
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 18
                      },
                      "start": {
                        "column": 26,
                        "line": 18
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "range": [
                              300,
                              303
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 18
                              },
                              "start": {
                                "column": 16,
                                "line": 18
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "range": [
                              300,
                              303
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 18
                              },
                              "start": {
                                "column": 16,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            300,
                            303
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 18
                            },
                            "start": {
                              "column": 16,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "range": [
                        298,
                        305
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 18
                        },
                        "start": {
                          "column": 14,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "range": [
                    297,
                    312
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 18
                    },
                    "start": {
                      "column": 13,
                      "line": 18
                    }
                  }
                },
                "range": [
                  286,
                  312
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 18
                  },
                  "start": {
                    "column": 2,
                    "line": 18
                  }
                }
              }
            ],
            "range": [
              282,
              315
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 19
              },
              "start": {
                "column": 12,
                "line": 17
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "forceMatch2",
          "optional": false,
          "range": [
            270,
            281
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "optional": false,
        "range": [
          270,
          316
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        270,
        317
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Original",
        "optional": false,
        "range": [
          341,
          349
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 23
          },
          "start": {
            "column": 5,
            "line": 23
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
              "name": "foo",
              "optional": false,
              "range": [
                354,
                357
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 23
                },
                "start": {
                  "column": 18,
                  "line": 23
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
                  "line": 23
                },
                "start": {
                  "column": 21,
                  "line": 23
                }
              },
              "range": [
                357,
                385
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'expects a string literal'",
                  "value": "expects a string literal",
                  "range": [
                    359,
                    385
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 23
                    },
                    "start": {
                      "column": 23,
                      "line": 23
                    }
                  }
                },
                "range": [
                  359,
                  385
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 23
                  },
                  "start": {
                    "column": 23,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              354,
              386
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 23
              },
              "start": {
                "column": 18,
                "line": 23
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "range": [
                387,
                390
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 23
                },
                "start": {
                  "column": 51,
                  "line": 23
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
                  "column": 63,
                  "line": 23
                },
                "start": {
                  "column": 54,
                  "line": 23
                }
              },
              "range": [
                390,
                399
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  392,
                  399
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 23
                  },
                  "start": {
                    "column": 56,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              387,
              400
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 23
              },
              "start": {
                "column": 51,
                "line": 23
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                401,
                404
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 23
                },
                "start": {
                  "column": 65,
                  "line": 23
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
                  "line": 23
                },
                "start": {
                  "column": 68,
                  "line": 23
                }
              },
              "range": [
                404,
                412
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  406,
                  412
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 23
                  },
                  "start": {
                    "column": 70,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              401,
              412
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 23
              },
              "start": {
                "column": 65,
                "line": 23
              }
            }
          }
        ],
        "range": [
          352,
          414
        ],
        "loc": {
          "end": {
            "column": 78,
            "line": 23
          },
          "start": {
            "column": 16,
            "line": 23
          }
        }
      },
      "range": [
        336,
        414
      ],
      "loc": {
        "end": {
          "column": 78,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped",
        "optional": false,
        "range": [
          421,
          427
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 25
          },
          "start": {
            "column": 5,
            "line": 25
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
              "name": "Original",
              "optional": false,
              "range": [
                449,
                457
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 26
                },
                "start": {
                  "column": 17,
                  "line": 26
                }
              }
            },
            "range": [
              449,
              457
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 26
              },
              "start": {
                "column": 17,
                "line": 26
              }
            }
          },
          "range": [
            443,
            457
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 26
            },
            "start": {
              "column": 11,
              "line": 26
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "range": [
            435,
            439
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 26
            },
            "start": {
              "column": 3,
              "line": 26
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 26
                  },
                  "start": {
                    "column": 32,
                    "line": 26
                  }
                },
                "range": [
                  464,
                  480
                ],
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "range": [
                        475,
                        479
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 26
                        },
                        "start": {
                          "column": 43,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      475,
                      479
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 26
                      },
                      "start": {
                        "column": 43,
                        "line": 26
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Original",
                      "optional": false,
                      "range": [
                        466,
                        474
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 26
                        },
                        "start": {
                          "column": 34,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      466,
                      474
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 26
                      },
                      "start": {
                        "column": 34,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    466,
                    480
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 26
                    },
                    "start": {
                      "column": 34,
                      "line": 26
                    }
                  }
                }
              },
              "range": [
                461,
                480
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 26
                },
                "start": {
                  "column": 29,
                  "line": 26
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 67,
                "line": 26
              },
              "start": {
                "column": 50,
                "line": 26
              }
            },
            "range": [
              482,
              499
            ],
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "range": [
                    494,
                    498
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 26
                    },
                    "start": {
                      "column": 62,
                      "line": 26
                    }
                  }
                },
                "range": [
                  494,
                  498
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 26
                  },
                  "start": {
                    "column": 62,
                    "line": 26
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Original",
                  "optional": false,
                  "range": [
                    485,
                    493
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 26
                    },
                    "start": {
                      "column": 53,
                      "line": 26
                    }
                  }
                },
                "range": [
                  485,
                  493
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 26
                  },
                  "start": {
                    "column": 53,
                    "line": 26
                  }
                }
              },
              "range": [
                485,
                499
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 26
                },
                "start": {
                  "column": 53,
                  "line": 26
                }
              }
            }
          },
          "range": [
            460,
            499
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 26
            },
            "start": {
              "column": 28,
              "line": 26
            }
          }
        },
        "range": [
          430,
          501
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 14,
            "line": 25
          }
        }
      },
      "range": [
        416,
        501
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
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
            "name": "propSelector",
            "optional": false,
            "range": [
              509,
              521
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 29
              },
              "start": {
                "column": 6,
                "line": 29
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "propName",
              "optional": false,
              "range": [
                584,
                592
              ],
              "loc": {
                "end": {
                  "column": 89,
                  "line": 29
                },
                "start": {
                  "column": 81,
                  "line": 29
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
                "name": "propName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 29
                    },
                    "start": {
                      "column": 56,
                      "line": 29
                    }
                  },
                  "range": [
                    559,
                    569
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "propName",
                      "optional": false,
                      "range": [
                        561,
                        569
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 29
                        },
                        "start": {
                          "column": 58,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      561,
                      569
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 29
                      },
                      "start": {
                        "column": 58,
                        "line": 29
                      }
                    }
                  }
                },
                "range": [
                  551,
                  569
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 29
                  },
                  "start": {
                    "column": 48,
                    "line": 29
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 77,
                  "line": 29
                },
                "start": {
                  "column": 67,
                  "line": 29
                }
              },
              "range": [
                570,
                580
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propName",
                  "optional": false,
                  "range": [
                    572,
                    580
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 29
                    },
                    "start": {
                      "column": 69,
                      "line": 29
                    }
                  }
                },
                "range": [
                  572,
                  580
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 29
                  },
                  "start": {
                    "column": 69,
                    "line": 29
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 47,
                  "line": 29
                },
                "start": {
                  "column": 22,
                  "line": 29
                }
              },
              "range": [
                525,
                550
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSStringKeyword",
                    "range": [
                      543,
                      549
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 29
                      },
                      "start": {
                        "column": 40,
                        "line": 29
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "propName",
                    "optional": false,
                    "range": [
                      526,
                      534
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 29
                      },
                      "start": {
                        "column": 23,
                        "line": 29
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    526,
                    549
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 29
                    },
                    "start": {
                      "column": 23,
                      "line": 29
                    }
                  }
                }
              ]
            },
            "range": [
              525,
              592
            ],
            "loc": {
              "end": {
                "column": 89,
                "line": 29
              },
              "start": {
                "column": 22,
                "line": 29
              }
            }
          },
          "range": [
            509,
            592
          ],
          "loc": {
            "end": {
              "column": 89,
              "line": 29
            },
            "start": {
              "column": 6,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        503,
        593
      ],
      "loc": {
        "end": {
          "column": 90,
          "line": 29
        },
        "start": {
          "column": 0,
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
            "name": "unexpectedlyFailingExample",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 31
                },
                "start": {
                  "column": 32,
                  "line": 31
                }
              },
              "range": [
                627,
                635
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mapped",
                  "optional": false,
                  "range": [
                    629,
                    635
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 31
                    },
                    "start": {
                      "column": 34,
                      "line": 31
                    }
                  }
                },
                "range": [
                  629,
                  635
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 31
                  },
                  "start": {
                    "column": 34,
                    "line": 31
                  }
                }
              }
            },
            "range": [
              601,
              635
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 31
              },
              "start": {
                "column": 6,
                "line": 31
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    642,
                    645
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 32
                    },
                    "start": {
                      "column": 2,
                      "line": 32
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
                    "type": "Literal",
                    "raw": "'expects a string literal'",
                    "value": "expects a string literal",
                    "range": [
                      656,
                      682
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 32
                      },
                      "start": {
                        "column": 16,
                        "line": 32
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
                      "name": "arg",
                      "optional": false,
                      "range": [
                        648,
                        651
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 32
                        },
                        "start": {
                          "column": 8,
                          "line": 32
                        }
                      }
                    }
                  ],
                  "range": [
                    647,
                    682
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 32
                    },
                    "start": {
                      "column": 7,
                      "line": 32
                    }
                  }
                },
                "range": [
                  642,
                  682
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 32
                  },
                  "start": {
                    "column": 2,
                    "line": 32
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "range": [
                    686,
                    689
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 33
                    },
                    "start": {
                      "column": 2,
                      "line": 33
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
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      700,
                      704
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 33
                      },
                      "start": {
                        "column": 16,
                        "line": 33
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
                      "name": "arg",
                      "optional": false,
                      "range": [
                        692,
                        695
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 33
                        },
                        "start": {
                          "column": 8,
                          "line": 33
                        }
                      }
                    }
                  ],
                  "range": [
                    691,
                    704
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 33
                    },
                    "start": {
                      "column": 7,
                      "line": 33
                    }
                  }
                },
                "range": [
                  686,
                  704
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 33
                  },
                  "start": {
                    "column": 2,
                    "line": 33
                  }
                }
              },
              {
                "type": "Property",
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "'bar'",
                      "value": "bar",
                      "range": [
                        722,
                        727
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 34
                        },
                        "start": {
                          "column": 16,
                          "line": 34
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "propSelector",
                    "optional": false,
                    "range": [
                      709,
                      721
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 34
                      },
                      "start": {
                        "column": 3,
                        "line": 34
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    709,
                    728
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 34
                    },
                    "start": {
                      "column": 3,
                      "line": 34
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
                    "type": "Literal",
                    "raw": "51345",
                    "value": 51345,
                    "range": [
                      740,
                      745
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 34
                      },
                      "start": {
                        "column": 34,
                        "line": 34
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
                      "name": "arg",
                      "optional": false,
                      "range": [
                        732,
                        735
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 34
                        },
                        "start": {
                          "column": 26,
                          "line": 34
                        }
                      }
                    }
                  ],
                  "range": [
                    731,
                    745
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 34
                    },
                    "start": {
                      "column": 25,
                      "line": 34
                    }
                  }
                },
                "range": [
                  708,
                  745
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 34
                  },
                  "start": {
                    "column": 2,
                    "line": 34
                  }
                }
              }
            ],
            "range": [
              638,
              747
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 35
              },
              "start": {
                "column": 43,
                "line": 31
              }
            }
          },
          "range": [
            601,
            747
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 35
            },
            "start": {
              "column": 6,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        595,
        747
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 36
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
