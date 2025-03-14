__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    17,
    878
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          47,
          76
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onDone",
              "optional": false,
              "range": [
                51,
                57
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              },
              "range": [
                57,
                73
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 4
                        },
                        "start": {
                          "column": 12,
                          "line": 4
                        }
                      },
                      "range": [
                        61,
                        64
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            63,
                            64
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 4
                            },
                            "start": {
                              "column": 14,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          63,
                          64
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 4
                          },
                          "start": {
                            "column": 14,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      60,
                      64
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 4
                      },
                      "start": {
                        "column": 11,
                        "line": 4
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 4
                    },
                    "start": {
                      "column": 17,
                      "line": 4
                    }
                  },
                  "range": [
                    66,
                    73
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      69,
                      73
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 4
                      },
                      "start": {
                        "column": 20,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  59,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 4
                  },
                  "start": {
                    "column": 10,
                    "line": 4
                  }
                }
              }
            },
            "value": null,
            "range": [
              51,
              74
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
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
            "column": 30,
            "line": 3
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StateMachine",
        "optional": false,
        "range": [
          31,
          43
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 3
          },
          "start": {
            "column": 14,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 3
          },
          "start": {
            "column": 26,
            "line": 3
          }
        },
        "range": [
          43,
          46
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
                44,
                45
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 27,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              44,
              45
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 3
              },
              "start": {
                "column": 27,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        17,
        76
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
        "name": "createMachine",
        "optional": false,
        "range": [
          95,
          108
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 7
          },
          "start": {
            "column": 17,
            "line": 7
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "implementations",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 1,
                "line": 9
              },
              "start": {
                "column": 49,
                "line": 7
              }
            },
            "range": [
              127,
              196
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
                    "name": "services",
                    "optional": false,
                    "range": [
                      133,
                      141
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 8
                      },
                      "start": {
                        "column": 2,
                        "line": 8
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
                        "column": 62,
                        "line": 8
                      },
                      "start": {
                        "column": 10,
                        "line": 8
                      }
                    },
                    "range": [
                      141,
                      193
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          149,
                          193
                        ],
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              150,
                              156
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 8
                              },
                              "start": {
                                "column": 19,
                                "line": 8
                              }
                            }
                          },
                          {
                            "type": "TSFunctionType",
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 61,
                                  "line": 8
                                },
                                "start": {
                                  "column": 30,
                                  "line": 8
                                }
                              },
                              "range": [
                                161,
                                192
                              ],
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "range": [
                                        171,
                                        174
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
                                              172,
                                              173
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 42,
                                                "line": 8
                                              },
                                              "start": {
                                                "column": 41,
                                                "line": 8
                                              }
                                            }
                                          },
                                          "range": [
                                            172,
                                            173
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 42,
                                              "line": 8
                                            },
                                            "start": {
                                              "column": 41,
                                              "line": 8
                                            }
                                          }
                                        }
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 40,
                                          "line": 8
                                        }
                                      }
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Promise",
                                      "optional": false,
                                      "range": [
                                        164,
                                        171
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
                                    },
                                    "range": [
                                      164,
                                      174
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 43,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 33,
                                        "line": 8
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "range": [
                                        189,
                                        192
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
                                              190,
                                              191
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 60,
                                                "line": 8
                                              },
                                              "start": {
                                                "column": 59,
                                                "line": 8
                                              }
                                            }
                                          },
                                          "range": [
                                            190,
                                            191
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 60,
                                              "line": 8
                                            },
                                            "start": {
                                              "column": 59,
                                              "line": 8
                                            }
                                          }
                                        }
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 61,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 58,
                                          "line": 8
                                        }
                                      }
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "StateMachine",
                                      "optional": false,
                                      "range": [
                                        177,
                                        189
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 58,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 46,
                                          "line": 8
                                        }
                                      }
                                    },
                                    "range": [
                                      177,
                                      192
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 61,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 46,
                                        "line": 8
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  164,
                                  192
                                ],
                                "loc": {
                                  "end": {
                                    "column": 61,
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
                              158,
                              192
                            ],
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 8
                              },
                              "start": {
                                "column": 27,
                                "line": 8
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 8
                          },
                          "start": {
                            "column": 18,
                            "line": 8
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Record",
                        "optional": false,
                        "range": [
                          143,
                          149
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 8
                          },
                          "start": {
                            "column": 12,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        143,
                        193
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 8
                        },
                        "start": {
                          "column": 12,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    133,
                    194
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 8
                    },
                    "start": {
                      "column": 2,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                129,
                196
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 9
                },
                "start": {
                  "column": 51,
                  "line": 7
                }
              }
            }
          },
          "range": [
            112,
            196
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 34,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 8,
            "line": 9
          },
          "start": {
            "column": 2,
            "line": 9
          }
        },
        "range": [
          197,
          203
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            199,
            203
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 7
          },
          "start": {
            "column": 30,
            "line": 7
          }
        },
        "range": [
          108,
          111
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
                109,
                110
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 7
                },
                "start": {
                  "column": 31,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              109,
              110
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 7
              },
              "start": {
                "column": 31,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        78,
        204
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
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
                  "name": "services",
                  "optional": false,
                  "range": [
                    243,
                    251
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
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
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "range": [
                          259,
                          263
                        ],
                        "loc": {
                          "end": {
                            "column": 8,
                            "line": 13
                          },
                          "start": {
                            "column": 4,
                            "line": 13
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "async": true,
                        "body": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Literal",
                              "raw": "\"some err\"",
                              "value": "some err",
                              "range": [
                                292,
                                302
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 13
                                },
                                "start": {
                                  "column": 37,
                                  "line": 13
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
                              "name": "Promise",
                              "optional": false,
                              "range": [
                                277,
                                284
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 13
                                },
                                "start": {
                                  "column": 22,
                                  "line": 13
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "reject",
                              "optional": false,
                              "range": [
                                285,
                                291
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 13
                                },
                                "start": {
                                  "column": 30,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              277,
                              291
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 13
                              },
                              "start": {
                                "column": 22,
                                "line": 13
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            277,
                            303
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
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          265,
                          303
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 13
                          },
                          "start": {
                            "column": 10,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        259,
                        303
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 13
                        },
                        "start": {
                          "column": 4,
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
                        "name": "test2",
                        "optional": false,
                        "range": [
                          315,
                          320
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 14
                          },
                          "start": {
                            "column": 10,
                            "line": 14
                          }
                        }
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "range": [
                          320,
                          371
                        ],
                        "async": true,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "raw": "\"some err\"",
                                    "value": "some err",
                                    "range": [
                                      353,
                                      363
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 15
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 15
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
                                    "name": "Promise",
                                    "optional": false,
                                    "range": [
                                      338,
                                      345
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 15
                                      },
                                      "start": {
                                        "column": 13,
                                        "line": 15
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "reject",
                                    "optional": false,
                                    "range": [
                                      346,
                                      352
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 15
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 15
                                      }
                                    }
                                  },
                                  "range": [
                                    338,
                                    352
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 15
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  338,
                                  364
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                331,
                                365
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 15
                                },
                                "start": {
                                  "column": 6,
                                  "line": 15
                                }
                              }
                            }
                          ],
                          "range": [
                            323,
                            371
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 16
                            },
                            "start": {
                              "column": 18,
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
                            "line": 16
                          },
                          "start": {
                            "column": 15,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        309,
                        371
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 16
                        },
                        "start": {
                          "column": 4,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "range": [
                    253,
                    376
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 17
                    },
                    "start": {
                      "column": 12,
                      "line": 12
                    }
                  }
                },
                "range": [
                  243,
                  376
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 17
                  },
                  "start": {
                    "column": 2,
                    "line": 12
                  }
                }
              }
            ],
            "range": [
              239,
              379
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 18
              },
              "start": {
                "column": 33,
                "line": 11
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createMachine",
          "optional": false,
          "range": [
            206,
            219
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            219,
            238
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
                    "name": "count",
                    "optional": false,
                    "range": [
                      222,
                      227
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 11
                      },
                      "start": {
                        "column": 16,
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
                        "column": 29,
                        "line": 11
                      },
                      "start": {
                        "column": 21,
                        "line": 11
                      }
                    },
                    "range": [
                      227,
                      235
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        229,
                        235
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 11
                        },
                        "start": {
                          "column": 23,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    222,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 11
                    },
                    "start": {
                      "column": 16,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                220,
                237
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 11
            },
            "start": {
              "column": 13,
              "line": 11
            }
          }
        },
        "range": [
          206,
          380
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        206,
        381
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 18
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
              "type": "ArrowFunctionExpression",
              "async": true,
              "body": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "'some err'",
                    "value": "some err",
                    "range": [
                      504,
                      514
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 21
                      },
                      "start": {
                        "column": 36,
                        "line": 21
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
                    "name": "Promise",
                    "optional": false,
                    "range": [
                      489,
                      496
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 21
                      },
                      "start": {
                        "column": 21,
                        "line": 21
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reject",
                    "optional": false,
                    "range": [
                      497,
                      503
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 21
                      },
                      "start": {
                        "column": 29,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    489,
                    503
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 21
                    },
                    "start": {
                      "column": 21,
                      "line": 21
                    }
                  }
                },
                "optional": false,
                "range": [
                  489,
                  515
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 21
                  },
                  "start": {
                    "column": 21,
                    "line": 21
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                477,
                515
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 21
                },
                "start": {
                  "column": 9,
                  "line": 21
                }
              }
            },
            "range": [
              470,
              515
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 21
              },
              "start": {
                "column": 2,
                "line": 21
              }
            }
          }
        ],
        "range": [
          466,
          517
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 83,
            "line": 20
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "range": [
          392,
          395
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 20
          },
          "start": {
            "column": 9,
            "line": 20
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 82,
            "line": 20
          },
          "start": {
            "column": 14,
            "line": 20
          }
        },
        "range": [
          397,
          465
        ],
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 82,
                "line": 20
              },
              "start": {
                "column": 19,
                "line": 20
              }
            },
            "range": [
              402,
              465
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      412,
                      431
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
                              "name": "count",
                              "optional": false,
                              "range": [
                                415,
                                420
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 20
                                },
                                "start": {
                                  "column": 32,
                                  "line": 20
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
                                  "column": 45,
                                  "line": 20
                                },
                                "start": {
                                  "column": 37,
                                  "line": 20
                                }
                              },
                              "range": [
                                420,
                                428
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  422,
                                  428
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 20
                                  }
                                }
                              }
                            },
                            "range": [
                              415,
                              428
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 20
                              },
                              "start": {
                                "column": 32,
                                "line": 20
                              }
                            }
                          }
                        ],
                        "range": [
                          413,
                          430
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 20
                          },
                          "start": {
                            "column": 30,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 20
                      },
                      "start": {
                        "column": 29,
                        "line": 20
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "range": [
                      405,
                      412
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 20
                      },
                      "start": {
                        "column": 22,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    405,
                    431
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 20
                    },
                    "start": {
                      "column": 22,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      446,
                      465
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
                              "name": "count",
                              "optional": false,
                              "range": [
                                449,
                                454
                              ],
                              "loc": {
                                "end": {
                                  "column": 71,
                                  "line": 20
                                },
                                "start": {
                                  "column": 66,
                                  "line": 20
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
                                  "column": 79,
                                  "line": 20
                                },
                                "start": {
                                  "column": 71,
                                  "line": 20
                                }
                              },
                              "range": [
                                454,
                                462
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  456,
                                  462
                                ],
                                "loc": {
                                  "end": {
                                    "column": 79,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 73,
                                    "line": 20
                                  }
                                }
                              }
                            },
                            "range": [
                              449,
                              462
                            ],
                            "loc": {
                              "end": {
                                "column": 79,
                                "line": 20
                              },
                              "start": {
                                "column": 66,
                                "line": 20
                              }
                            }
                          }
                        ],
                        "range": [
                          447,
                          464
                        ],
                        "loc": {
                          "end": {
                            "column": 81,
                            "line": 20
                          },
                          "start": {
                            "column": 64,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 20
                      },
                      "start": {
                        "column": 63,
                        "line": 20
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StateMachine",
                    "optional": false,
                    "range": [
                      434,
                      446
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 20
                      },
                      "start": {
                        "column": 51,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    434,
                    465
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 20
                    },
                    "start": {
                      "column": 51,
                      "line": 20
                    }
                  }
                }
              ],
              "range": [
                405,
                465
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 20
                },
                "start": {
                  "column": 22,
                  "line": 20
                }
              }
            }
          },
          "range": [
            399,
            465
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 20
            },
            "start": {
              "column": 16,
              "line": 20
            }
          }
        }
      },
      "range": [
        383,
        517
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 20
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
        "name": "load",
        "optional": false,
        "range": [
          577,
          581
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 26
          },
          "start": {
            "column": 17,
            "line": 26
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 41,
            "line": 26
          },
          "start": {
            "column": 23,
            "line": 26
          }
        },
        "range": [
          583,
          601
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              592,
              601
            ],
            "params": [
              {
                "type": "TSBooleanKeyword",
                "range": [
                  593,
                  600
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 26
                  },
                  "start": {
                    "column": 33,
                    "line": 26
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 26
              },
              "start": {
                "column": 32,
                "line": 26
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "range": [
              585,
              592
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 26
              },
              "start": {
                "column": 25,
                "line": 26
              }
            }
          },
          "range": [
            585,
            601
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 26
            },
            "start": {
              "column": 25,
              "line": 26
            }
          }
        }
      },
      "range": [
        560,
        602
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LoadCallback",
        "optional": false,
        "range": [
          609,
          621
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 28
          },
          "start": {
            "column": 5,
            "line": 28
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 51,
              "line": 28
            },
            "start": {
              "column": 23,
              "line": 28
            }
          },
          "range": [
            627,
            655
          ],
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    637,
                    646
                  ],
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "range": [
                        638,
                        645
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 28
                        },
                        "start": {
                          "column": 34,
                          "line": 28
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 28
                    },
                    "start": {
                      "column": 33,
                      "line": 28
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    630,
                    637
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 28
                    },
                    "start": {
                      "column": 26,
                      "line": 28
                    }
                  }
                },
                "range": [
                  630,
                  646
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 28
                  },
                  "start": {
                    "column": 26,
                    "line": 28
                  }
                }
              },
              {
                "type": "TSStringKeyword",
                "range": [
                  649,
                  655
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 28
                  },
                  "start": {
                    "column": 45,
                    "line": 28
                  }
                }
              }
            ],
            "range": [
              630,
              655
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 28
              },
              "start": {
                "column": 26,
                "line": 28
              }
            }
          }
        },
        "range": [
          624,
          655
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 28
          },
          "start": {
            "column": 20,
            "line": 28
          }
        }
      },
      "range": [
        604,
        656
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
            "name": "cb1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 31
                },
                "start": {
                  "column": 9,
                  "line": 31
                }
              },
              "range": [
                730,
                744
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LoadCallback",
                  "optional": false,
                  "range": [
                    732,
                    744
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 31
                    },
                    "start": {
                      "column": 11,
                      "line": 31
                    }
                  }
                },
                "range": [
                  732,
                  744
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 31
                  },
                  "start": {
                    "column": 11,
                    "line": 31
                  }
                }
              }
            },
            "range": [
              727,
              744
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 31
              },
              "start": {
                "column": 6,
                "line": 31
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": true,
            "body": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "range": [
                      776,
                      777
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 31
                      },
                      "start": {
                        "column": 55,
                        "line": 31
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
                      "name": "m",
                      "optional": false,
                      "range": [
                        771,
                        772
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 31
                        },
                        "start": {
                          "column": 50,
                          "line": 31
                        }
                      }
                    }
                  ],
                  "range": [
                    771,
                    777
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 31
                    },
                    "start": {
                      "column": 50,
                      "line": 31
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "load",
                    "optional": false,
                    "range": [
                      759,
                      763
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 31
                      },
                      "start": {
                        "column": 38,
                        "line": 31
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    759,
                    765
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 31
                    },
                    "start": {
                      "column": 38,
                      "line": 31
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "range": [
                    766,
                    770
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 31
                    },
                    "start": {
                      "column": 45,
                      "line": 31
                    }
                  }
                },
                "range": [
                  759,
                  770
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 31
                  },
                  "start": {
                    "column": 38,
                    "line": 31
                  }
                }
              },
              "optional": false,
              "range": [
                759,
                778
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 31
                },
                "start": {
                  "column": 38,
                  "line": 31
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              747,
              778
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 31
              },
              "start": {
                "column": 26,
                "line": 31
              }
            }
          },
          "range": [
            727,
            778
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 31
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
        721,
        779
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
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
            "name": "cb2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 32
                },
                "start": {
                  "column": 9,
                  "line": 32
                }
              },
              "range": [
                789,
                803
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LoadCallback",
                  "optional": false,
                  "range": [
                    791,
                    803
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 32
                    },
                    "start": {
                      "column": 11,
                      "line": 32
                    }
                  }
                },
                "range": [
                  791,
                  803
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 32
                  },
                  "start": {
                    "column": 11,
                    "line": 32
                  }
                }
              }
            },
            "range": [
              786,
              803
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 32
              },
              "start": {
                "column": 6,
                "line": 32
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": true,
            "body": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "load",
                "optional": false,
                "range": [
                  818,
                  822
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 32
                  },
                  "start": {
                    "column": 38,
                    "line": 32
                  }
                }
              },
              "optional": false,
              "range": [
                818,
                824
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 32
                },
                "start": {
                  "column": 38,
                  "line": 32
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              806,
              824
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 32
              },
              "start": {
                "column": 26,
                "line": 32
              }
            }
          },
          "range": [
            786,
            824
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 32
            },
            "start": {
              "column": 6,
              "line": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        780,
        825
      ],
      "loc": {
        "end": {
          "column": 45,
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
            "name": "cb3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 33
                },
                "start": {
                  "column": 9,
                  "line": 33
                }
              },
              "range": [
                835,
                849
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LoadCallback",
                  "optional": false,
                  "range": [
                    837,
                    849
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 33
                    },
                    "start": {
                      "column": 11,
                      "line": 33
                    }
                  }
                },
                "range": [
                  837,
                  849
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 33
                  },
                  "start": {
                    "column": 11,
                    "line": 33
                  }
                }
              }
            },
            "range": [
              832,
              849
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 33
              },
              "start": {
                "column": 6,
                "line": 33
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "range": [
                      875,
                      876
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 33
                      },
                      "start": {
                        "column": 49,
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
                      "name": "m",
                      "optional": false,
                      "range": [
                        870,
                        871
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 33
                        },
                        "start": {
                          "column": 44,
                          "line": 33
                        }
                      }
                    }
                  ],
                  "range": [
                    870,
                    876
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 33
                    },
                    "start": {
                      "column": 44,
                      "line": 33
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "load",
                    "optional": false,
                    "range": [
                      858,
                      862
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 33
                      },
                      "start": {
                        "column": 32,
                        "line": 33
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    858,
                    864
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 33
                    },
                    "start": {
                      "column": 32,
                      "line": 33
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "range": [
                    865,
                    869
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 33
                    },
                    "start": {
                      "column": 39,
                      "line": 33
                    }
                  }
                },
                "range": [
                  858,
                  869
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 33
                  },
                  "start": {
                    "column": 32,
                    "line": 33
                  }
                }
              },
              "optional": false,
              "range": [
                858,
                877
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 33
                },
                "start": {
                  "column": 32,
                  "line": 33
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              852,
              877
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 33
              },
              "start": {
                "column": 26,
                "line": 33
              }
            }
          },
          "range": [
            832,
            877
          ],
          "loc": {
            "end": {
              "column": 51,
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
        826,
        878
      ],
      "loc": {
        "end": {
          "column": 52,
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
      "column": 52,
      "line": 33
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
