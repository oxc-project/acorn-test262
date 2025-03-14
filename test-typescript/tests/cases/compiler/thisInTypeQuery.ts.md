__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    23,
    514
  ],
  "body": [
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
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "range": [
                        120,
                        125
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 5
                        },
                        "start": {
                          "column": 18,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      116,
                      127
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 5
                      },
                      "start": {
                        "column": 14,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    110,
                    128
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                100,
                134
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 20,
                  "line": 4
                }
              }
            },
            "test": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "condition",
                "optional": false,
                "range": [
                  89,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 4
                  },
                  "start": {
                    "column": 9,
                    "line": 4
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                88,
                98
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "range": [
              84,
              134
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          78,
          136
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 55,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assert",
        "optional": false,
        "range": [
          32,
          38
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "condition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 3
              },
              "start": {
                "column": 25,
                "line": 3
              }
            },
            "range": [
              48,
              57
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                50,
                57
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 3
                },
                "start": {
                  "column": 27,
                  "line": 3
                }
              }
            }
          },
          "range": [
            39,
            57
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 3
            },
            "start": {
              "column": 16,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 54,
            "line": 3
          },
          "start": {
            "column": 35,
            "line": 3
          }
        },
        "range": [
          58,
          77
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": true,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "condition",
            "optional": false,
            "range": [
              68,
              77
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 3
              },
              "start": {
                "column": 45,
                "line": 3
              }
            }
          },
          "typeAnnotation": null,
          "range": [
            60,
            77
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 3
            },
            "start": {
              "column": 37,
              "line": 3
            }
          }
        }
      },
      "range": [
        23,
        136
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          152,
          416
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "range": [
                166,
                169
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 10
                },
                "start": {
                  "column": 12,
                  "line": 10
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "my_key",
                    "optional": false,
                    "range": [
                      182,
                      188
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'example_value'",
                    "value": "example_value",
                    "range": [
                      190,
                      205
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 11
                      },
                      "start": {
                        "column": 16,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    182,
                    205
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                172,
                211
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 18,
                  "line": 10
                }
              }
            },
            "range": [
              158,
              212
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "runTypeFails",
              "optional": false,
              "range": [
                218,
                230
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
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
                414
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "params",
                          "optional": false,
                          "range": [
                            249,
                            255
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 15
                            },
                            "start": {
                              "column": 14,
                              "line": 15
                            }
                          }
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "Literal",
                              "raw": "null",
                              "value": null,
                              "range": [
                                258,
                                262
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 15
                                },
                                "start": {
                                  "column": 23,
                                  "line": 15
                                }
                              }
                            },
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "range": [
                                266,
                                269
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 15
                                },
                                "start": {
                                  "column": 31,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              258,
                              269
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 15
                              },
                              "start": {
                                "column": 23,
                                "line": 15
                              }
                            }
                          },
                          "typeAnnotation": {
                            "type": "TSUnionType",
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
                                      "name": "a",
                                      "optional": false,
                                      "range": [
                                        275,
                                        276
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 41,
                                          "line": 15
                                        },
                                        "start": {
                                          "column": 40,
                                          "line": 15
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
                                          "line": 15
                                        },
                                        "start": {
                                          "column": 41,
                                          "line": 15
                                        }
                                      },
                                      "range": [
                                        276,
                                        293
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
                                                280,
                                                283
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 48,
                                                  "line": 15
                                                },
                                                "start": {
                                                  "column": 45,
                                                  "line": 15
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
                                                  "column": 56,
                                                  "line": 15
                                                },
                                                "start": {
                                                  "column": 48,
                                                  "line": 15
                                                }
                                              },
                                              "range": [
                                                283,
                                                291
                                              ],
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "range": [
                                                  285,
                                                  291
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 56,
                                                    "line": 15
                                                  },
                                                  "start": {
                                                    "column": 50,
                                                    "line": 15
                                                  }
                                                }
                                              }
                                            },
                                            "range": [
                                              280,
                                              291
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 56,
                                                "line": 15
                                              },
                                              "start": {
                                                "column": 45,
                                                "line": 15
                                              }
                                            }
                                          }
                                        ],
                                        "range": [
                                          278,
                                          293
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 58,
                                            "line": 15
                                          },
                                          "start": {
                                            "column": 43,
                                            "line": 15
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      275,
                                      293
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 58,
                                        "line": 15
                                      },
                                      "start": {
                                        "column": 40,
                                        "line": 15
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  273,
                                  295
                                ],
                                "loc": {
                                  "end": {
                                    "column": 60,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 15
                                  }
                                }
                              },
                              {
                                "type": "TSNullKeyword",
                                "range": [
                                  298,
                                  302
                                ],
                                "loc": {
                                  "end": {
                                    "column": 67,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 63,
                                    "line": 15
                                  }
                                }
                              }
                            ],
                            "range": [
                              273,
                              302
                            ],
                            "loc": {
                              "end": {
                                "column": 67,
                                "line": 15
                              },
                              "start": {
                                "column": 38,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            258,
                            302
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 15
                            },
                            "start": {
                              "column": 23,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          249,
                          302
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 15
                          },
                          "start": {
                            "column": 14,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      243,
                      303
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "params",
                          "optional": false,
                          "range": [
                            319,
                            325
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 16
                            },
                            "start": {
                              "column": 15,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "range": [
                          312,
                          318
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
                            "line": 16
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        312,
                        326
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      312,
                      327
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "TSTypeAliasDeclaration",
                    "declare": false,
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "range": [
                        341,
                        344
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 17
                        },
                        "start": {
                          "column": 13,
                          "line": 17
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "ThisExpression",
                            "range": [
                              360,
                              364
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 17
                              },
                              "start": {
                                "column": 32,
                                "line": 17
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "map",
                            "optional": false,
                            "range": [
                              365,
                              368
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 17
                              },
                              "start": {
                                "column": 37,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            360,
                            368
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 17
                            },
                            "start": {
                              "column": 32,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          353,
                          368
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 17
                          },
                          "start": {
                            "column": 25,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        347,
                        368
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 17
                        },
                        "start": {
                          "column": 19,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      336,
                      369
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            378,
                            382
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 18
                            },
                            "start": {
                              "column": 8,
                              "line": 18
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "map",
                          "optional": false,
                          "range": [
                            383,
                            386
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 18
                            },
                            "start": {
                              "column": 13,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          378,
                          386
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 18
                          },
                          "start": {
                            "column": 8,
                            "line": 18
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "params",
                              "optional": false,
                              "range": [
                                387,
                                393
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 18
                                },
                                "start": {
                                  "column": 17,
                                  "line": 18
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "range": [
                                394,
                                395
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 18
                                },
                                "start": {
                                  "column": 24,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              387,
                              395
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 18
                              },
                              "start": {
                                "column": 17,
                                "line": 18
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "range": [
                              396,
                              399
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
                          },
                          "range": [
                            387,
                            399
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 18
                            },
                            "start": {
                              "column": 17,
                              "line": 18
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Key",
                            "optional": false,
                            "range": [
                              403,
                              406
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 18
                              },
                              "start": {
                                "column": 33,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            403,
                            406
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 18
                            },
                            "start": {
                              "column": 33,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          387,
                          406
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 18
                          },
                          "start": {
                            "column": 17,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        378,
                        407
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 18
                        },
                        "start": {
                          "column": 8,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      378,
                      408
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  233,
                  414
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
                  },
                  "start": {
                    "column": 19,
                    "line": 14
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 19
                },
                "start": {
                  "column": 16,
                  "line": 14
                }
              }
            },
            "range": [
              218,
              414
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
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
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 14,
            "line": 9
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "range": [
          144,
          151
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 9
          },
          "start": {
            "column": 6,
            "line": 9
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        138,
        416
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          426,
          513
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                430,
                433
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 2,
                  "line": 23
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
                433,
                511
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            448,
                            449
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 24
                            },
                            "start": {
                              "column": 10,
                              "line": 24
                            }
                          }
                        },
                        "init": {
                          "type": "UnaryExpression",
                          "argument": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "Literal",
                              "raw": "true",
                              "value": true,
                              "range": [
                                454,
                                458
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 24
                                },
                                "start": {
                                  "column": 16,
                                  "line": 24
                                }
                              }
                            },
                            "operator": "!",
                            "prefix": true,
                            "range": [
                              453,
                              458
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 24
                              },
                              "start": {
                                "column": 15,
                                "line": 24
                              }
                            }
                          },
                          "operator": "!",
                          "prefix": true,
                          "range": [
                            452,
                            458
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 24
                            },
                            "start": {
                              "column": 14,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          448,
                          458
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 24
                          },
                          "start": {
                            "column": 10,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      442,
                      459
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 24
                      },
                      "start": {
                        "column": 4,
                        "line": 24
                      }
                    }
                  },
                  {
                    "type": "IfStatement",
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "TSTypeAliasDeclaration",
                          "declare": false,
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T0",
                            "optional": false,
                            "range": [
                              484,
                              486
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 26
                              },
                              "start": {
                                "column": 11,
                                "line": 26
                              }
                            }
                          },
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "ThisExpression",
                              "range": [
                                496,
                                500
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 26
                                },
                                "start": {
                                  "column": 23,
                                  "line": 26
                                }
                              }
                            },
                            "range": [
                              489,
                              500
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 26
                              },
                              "start": {
                                "column": 16,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            479,
                            501
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 26
                            },
                            "start": {
                              "column": 6,
                              "line": 26
                            }
                          }
                        }
                      ],
                      "range": [
                        471,
                        507
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 27
                        },
                        "start": {
                          "column": 11,
                          "line": 25
                        }
                      }
                    },
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        468,
                        469
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
                    },
                    "range": [
                      464,
                      507
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 27
                      },
                      "start": {
                        "column": 4,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  436,
                  511
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 28
                  },
                  "start": {
                    "column": 8,
                    "line": 23
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 28
                },
                "start": {
                  "column": 5,
                  "line": 23
                }
              }
            },
            "range": [
              430,
              511
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 28
              },
              "start": {
                "column": 2,
                "line": 23
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 8,
            "line": 22
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
          424,
          425
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 22
          },
          "start": {
            "column": 6,
            "line": 22
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        418,
        513
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 30
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
