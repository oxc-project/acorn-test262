__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    60,
    426
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          135,
          426
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                141,
                152
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                152,
                181
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  174,
                  181
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 37,
                    "line": 3
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constant",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 3
                        },
                        "start": {
                          "column": 32,
                          "line": 3
                        }
                      },
                      "range": [
                        169,
                        172
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            171,
                            172
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 3
                            },
                            "start": {
                              "column": 34,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          171,
                          172
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 3
                          },
                          "start": {
                            "column": 34,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      161,
                      172
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 3
                      },
                      "start": {
                        "column": 24,
                        "line": 3
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    153,
                    172
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 3
                    },
                    "start": {
                      "column": 16,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "range": [
              141,
              181
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 3
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
              "name": "next",
              "optional": false,
              "range": [
                192,
                196
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
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
                196,
                424
              ],
              "async": true,
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
                            "arguments": [
                              {
                                "type": "Literal",
                                "raw": "\"ConstantIterator.prototype.next may not take any values\"",
                                "value": "ConstantIterator.prototype.next may not take any values",
                                "range": [
                                  295,
                                  352
                                ],
                                "loc": {
                                  "end": {
                                    "column": 85,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 7
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Error",
                              "optional": false,
                              "range": [
                                289,
                                294
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 7
                                },
                                "start": {
                                  "column": 22,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              285,
                              353
                            ],
                            "loc": {
                              "end": {
                                "column": 86,
                                "line": 7
                              },
                              "start": {
                                "column": 18,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            279,
                            354
                          ],
                          "loc": {
                            "end": {
                              "column": 87,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "range": [
                        265,
                        364
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 8
                        },
                        "start": {
                          "column": 27,
                          "line": 6
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "!=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          250,
                          255
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 6
                          },
                          "start": {
                            "column": 12,
                            "line": 6
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          259,
                          263
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 6
                          },
                          "start": {
                            "column": 21,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        250,
                        263
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 6
                        },
                        "start": {
                          "column": 12,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      246,
                      364
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              382,
                              387
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 9
                              },
                              "start": {
                                "column": 17,
                                "line": 9
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
                              "type": "ThisExpression",
                              "range": [
                                389,
                                393
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 9
                                },
                                "start": {
                                  "column": 24,
                                  "line": 9
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "constant",
                              "optional": false,
                              "range": [
                                394,
                                402
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 9
                                },
                                "start": {
                                  "column": 29,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              389,
                              402
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 9
                              },
                              "start": {
                                "column": 24,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            382,
                            402
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 9
                            },
                            "start": {
                              "column": 17,
                              "line": 9
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "range": [
                              404,
                              408
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 9
                              },
                              "start": {
                                "column": 39,
                                "line": 9
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "false",
                            "value": false,
                            "range": [
                              410,
                              415
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 9
                              },
                              "start": {
                                "column": 45,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            404,
                            415
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 9
                            },
                            "start": {
                              "column": 39,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "range": [
                        380,
                        417
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 9
                        },
                        "start": {
                          "column": 15,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      373,
                      418
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  236,
                  424
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 54,
                    "line": 5
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
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 5
                      },
                      "start": {
                        "column": 21,
                        "line": 5
                      }
                    },
                    "range": [
                      203,
                      206
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          205,
                          206
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 5
                          },
                          "start": {
                            "column": 23,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        205,
                        206
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 5
                        },
                        "start": {
                          "column": 23,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    197,
                    206
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 5
                    },
                    "start": {
                      "column": 15,
                      "line": 5
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 5
                  },
                  "start": {
                    "column": 25,
                    "line": 5
                  }
                },
                "range": [
                  207,
                  235
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      216,
                      235
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            231,
                            234
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
                                  232,
                                  233
                                ],
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 50,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                232,
                                233
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 5
                                },
                                "start": {
                                  "column": 50,
                                  "line": 5
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 5
                            },
                            "start": {
                              "column": 49,
                              "line": 5
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IteratorResult",
                          "optional": false,
                          "range": [
                            217,
                            231
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 5
                            },
                            "start": {
                              "column": 35,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          217,
                          234
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 5
                          },
                          "start": {
                            "column": 35,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 5
                      },
                      "start": {
                        "column": 34,
                        "line": 5
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "range": [
                      209,
                      216
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 5
                      },
                      "start": {
                        "column": 27,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    209,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 5
                    },
                    "start": {
                      "column": 27,
                      "line": 5
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              }
            },
            "range": [
              186,
              424
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 75,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConstantIterator",
        "optional": false,
        "range": [
          66,
          82
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "range": [
              97,
              110
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 2
              },
              "start": {
                "column": 37,
                "line": 2
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              110,
              134
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
                    111,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 2
                    },
                    "start": {
                      "column": 51,
                      "line": 2
                    }
                  }
                },
                "range": [
                  111,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 2
                  },
                  "start": {
                    "column": 51,
                    "line": 2
                  }
                }
              },
              {
                "type": "TSVoidKeyword",
                "range": [
                  114,
                  118
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 2
                  },
                  "start": {
                    "column": 54,
                    "line": 2
                  }
                }
              },
              {
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
                        120,
                        121
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 2
                        },
                        "start": {
                          "column": 60,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      120,
                      121
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 2
                      },
                      "start": {
                        "column": 60,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      124,
                      133
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 2
                      },
                      "start": {
                        "column": 64,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  120,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 2
                  },
                  "start": {
                    "column": 60,
                    "line": 2
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 2
              },
              "start": {
                "column": 50,
                "line": 2
              }
            }
          },
          "range": [
            97,
            134
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 2
            },
            "start": {
              "column": 37,
              "line": 2
            }
          }
        }
      ],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 2
          },
          "start": {
            "column": 22,
            "line": 2
          }
        },
        "range": [
          82,
          85
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
                83,
                84
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 2
                },
                "start": {
                  "column": 23,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              83,
              84
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 2
              },
              "start": {
                "column": 23,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        60,
        426
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
