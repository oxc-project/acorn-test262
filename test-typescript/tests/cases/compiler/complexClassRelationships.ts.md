__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    42,
    938
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          69,
          176
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createEmpty",
              "optional": false,
              "range": [
                89,
                100
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                100,
                174
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
                          "name": "item",
                          "optional": false,
                          "range": [
                            126,
                            130
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 4
                            },
                            "start": {
                              "column": 12,
                              "line": 4
                            }
                          }
                        },
                        "init": {
                          "type": "NewExpression",
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "range": [
                              137,
                              144
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 4
                              },
                              "start": {
                                "column": 23,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            133,
                            146
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 4
                            },
                            "start": {
                              "column": 19,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          126,
                          146
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 4
                          },
                          "start": {
                            "column": 12,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      122,
                      147
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "range": [
                        163,
                        167
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 5
                        },
                        "start": {
                          "column": 15,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      156,
                      168
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
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
                  112,
                  174
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 41,
                    "line": 3
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 3
                  },
                  "start": {
                    "column": 31,
                    "line": 3
                  }
                },
                "range": [
                  102,
                  111
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived",
                    "optional": false,
                    "range": [
                      104,
                      111
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 3
                      },
                      "start": {
                        "column": 33,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    104,
                    111
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 3
                    },
                    "start": {
                      "column": 33,
                      "line": 3
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 29,
                  "line": 3
                }
              }
            },
            "range": [
              75,
              174
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 27,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "range": [
          48,
          55
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          64,
          68
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
      "range": [
        42,
        176
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          214,
          309
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                220,
                231
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
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
                231,
                307
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "item",
                                    "optional": false,
                                    "range": [
                                      281,
                                      285
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 35,
                                        "line": 10
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Components",
                                    "optional": false,
                                    "range": [
                                      286,
                                      296
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 50,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 40,
                                        "line": 10
                                      }
                                    }
                                  },
                                  "range": [
                                    281,
                                    296
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 50,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 10
                                    }
                                  }
                                }
                              ],
                              "range": [
                                280,
                                297
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 10
                                },
                                "start": {
                                  "column": 34,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              273,
                              298
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 10
                              },
                              "start": {
                                "column": 27,
                                "line": 10
                              }
                            }
                          }
                        ],
                        "range": [
                          271,
                          300
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 10
                          },
                          "start": {
                            "column": 25,
                            "line": 10
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
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 10
                              },
                              "start": {
                                "column": 13,
                                "line": 10
                              }
                            },
                            "range": [
                              259,
                              266
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thing",
                                "optional": false,
                                "range": [
                                  261,
                                  266
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 10
                                  }
                                }
                              },
                              "range": [
                                261,
                                266
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 10
                                },
                                "start": {
                                  "column": 15,
                                  "line": 10
                                }
                              }
                            }
                          },
                          "range": [
                            255,
                            266
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 10
                            },
                            "start": {
                              "column": 9,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "range": [
                        254,
                        300
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 10
                        },
                        "start": {
                          "column": 8,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      254,
                      301
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  244,
                  307
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 28,
                    "line": 9
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 9
                      },
                      "start": {
                        "column": 17,
                        "line": 9
                      }
                    },
                    "range": [
                      233,
                      242
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 9
                          },
                          "start": {
                            "column": 22,
                            "line": 9
                          }
                        },
                        "range": [
                          238,
                          242
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              241,
                              242
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
                            241,
                            242
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
                        }
                      },
                      "range": [
                        235,
                        242
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 9
                        },
                        "start": {
                          "column": 19,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    232,
                    242
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 9
                    },
                    "start": {
                      "column": 16,
                      "line": 9
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 15,
                  "line": 9
                }
              }
            },
            "range": [
              220,
              307
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 37,
            "line": 8
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseCollection",
        "optional": false,
        "range": [
          183,
          197
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 8
          },
          "start": {
            "column": 6,
            "line": 8
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 36,
            "line": 8
          },
          "start": {
            "column": 20,
            "line": 8
          }
        },
        "range": [
          197,
          213
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
                "name": "Base",
                "optional": false,
                "range": [
                  208,
                  212
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 8
                  },
                  "start": {
                    "column": 31,
                    "line": 8
                  }
                }
              },
              "range": [
                208,
                212
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 8
                },
                "start": {
                  "column": 31,
                  "line": 8
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
                198,
                199
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 8
                },
                "start": {
                  "column": 21,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              198,
              212
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 8
              },
              "start": {
                "column": 21,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        177,
        309
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          321,
          367
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
              "name": "ownerCollection",
              "optional": false,
              "range": [
                327,
                342
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
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
                  "column": 41,
                  "line": 14
                },
                "start": {
                  "column": 19,
                  "line": 14
                }
              },
              "range": [
                342,
                364
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    358,
                    364
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          359,
                          363
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 14
                          },
                          "start": {
                            "column": 36,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        359,
                        363
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 14
                        },
                        "start": {
                          "column": 36,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 14
                    },
                    "start": {
                      "column": 35,
                      "line": 14
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BaseCollection",
                  "optional": false,
                  "range": [
                    344,
                    358
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 14
                    },
                    "start": {
                      "column": 21,
                      "line": 14
                    }
                  }
                },
                "range": [
                  344,
                  364
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 14
                  },
                  "start": {
                    "column": 21,
                    "line": 14
                  }
                }
              }
            },
            "value": null,
            "range": [
              327,
              365
            ],
            "loc": {
              "end": {
                "column": 42,
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
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 11,
            "line": 13
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          316,
          320
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 13
          },
          "start": {
            "column": 6,
            "line": 13
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        310,
        367
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          381,
          454
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Components",
              "optional": false,
              "range": [
                398,
                408
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 18
                },
                "start": {
                  "column": 15,
                  "line": 18
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                408,
                452
              ],
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
                        446,
                        450
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 18
                        },
                        "start": {
                          "column": 63,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      439,
                      450
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 18
                      },
                      "start": {
                        "column": 56,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  437,
                  452
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 18
                  },
                  "start": {
                    "column": 54,
                    "line": 18
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 18
                  },
                  "start": {
                    "column": 27,
                    "line": 18
                  }
                },
                "range": [
                  410,
                  436
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      431,
                      436
                    ],
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          432,
                          435
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 18
                          },
                          "start": {
                            "column": 49,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 18
                      },
                      "start": {
                        "column": 48,
                        "line": 18
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ComponentCollection",
                    "optional": false,
                    "range": [
                      412,
                      431
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 18
                      },
                      "start": {
                        "column": 29,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    412,
                    436
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 18
                    },
                    "start": {
                      "column": 29,
                      "line": 18
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 69,
                  "line": 18
                },
                "start": {
                  "column": 25,
                  "line": 18
                }
              }
            },
            "range": [
              387,
              452
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
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
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "range": [
          375,
          380
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 17
          },
          "start": {
            "column": 6,
            "line": 17
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        369,
        454
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          485,
          562
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sortComponents",
              "optional": false,
              "range": [
                506,
                520
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 22
                },
                "start": {
                  "column": 19,
                  "line": 22
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                520,
                560
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "range": [
                          546,
                          547
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 23
                          },
                          "start": {
                            "column": 15,
                            "line": 23
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop1",
                        "optional": false,
                        "range": [
                          548,
                          553
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 23
                          },
                          "start": {
                            "column": 17,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        546,
                        553
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 23
                        },
                        "start": {
                          "column": 15,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      539,
                      554
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  529,
                  560
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 24
                  },
                  "start": {
                    "column": 42,
                    "line": 22
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 22
                      },
                      "start": {
                        "column": 35,
                        "line": 22
                      }
                    },
                    "range": [
                      522,
                      527
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "range": [
                          524,
                          527
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 22
                          },
                          "start": {
                            "column": 37,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        524,
                        527
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 22
                        },
                        "start": {
                          "column": 37,
                          "line": 22
                        }
                      }
                    }
                  },
                  "range": [
                    521,
                    527
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 22
                    },
                    "start": {
                      "column": 34,
                      "line": 22
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 24
                },
                "start": {
                  "column": 33,
                  "line": 22
                }
              }
            },
            "range": [
              491,
              560
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 29,
            "line": 21
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentCollection",
        "optional": false,
        "range": [
          462,
          481
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 21
          },
          "start": {
            "column": 6,
            "line": 21
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 21
          },
          "start": {
            "column": 25,
            "line": 21
          }
        },
        "range": [
          481,
          484
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
                482,
                483
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 21
                },
                "start": {
                  "column": 26,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              482,
              483
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 21
              },
              "start": {
                "column": 26,
                "line": 21
              }
            }
          }
        ]
      },
      "range": [
        456,
        562
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          574,
          825
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "range": [
                591,
                596
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 28
                },
                "start": {
                  "column": 15,
                  "line": 28
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                596,
                652
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "range": [
                            640,
                            644
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 29
                            },
                            "start": {
                              "column": 39,
                              "line": 29
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "GenericType",
                        "optional": false,
                        "range": [
                          620,
                          631
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 29
                          },
                          "start": {
                            "column": 19,
                            "line": 29
                          }
                        }
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          631,
                          639
                        ],
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              632,
                              638
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 29
                              },
                              "start": {
                                "column": 31,
                                "line": 29
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 29
                          },
                          "start": {
                            "column": 30,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        616,
                        645
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 29
                        },
                        "start": {
                          "column": 15,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      609,
                      646
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  599,
                  652
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 30
                  },
                  "start": {
                    "column": 23,
                    "line": 28
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
                  "line": 30
                },
                "start": {
                  "column": 20,
                  "line": 28
                }
              }
            },
            "range": [
              580,
              652
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "populate",
              "optional": false,
              "range": [
                664,
                672
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 31
                },
                "start": {
                  "column": 11,
                  "line": 31
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
                672,
                702
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          685,
                          689
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 32
                          },
                          "start": {
                            "column": 8,
                            "line": 32
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop2",
                        "optional": false,
                        "range": [
                          690,
                          695
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 32
                          },
                          "start": {
                            "column": 13,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        685,
                        695
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 32
                        },
                        "start": {
                          "column": 8,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      685,
                      696
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
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
                  675,
                  702
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 33
                  },
                  "start": {
                    "column": 22,
                    "line": 31
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
                  "line": 33
                },
                "start": {
                  "column": 19,
                  "line": 31
                }
              }
            },
            "range": [
              657,
              702
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "range": [
                718,
                723
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 34
                },
                "start": {
                  "column": 15,
                  "line": 34
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                723,
                823
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "range": [
                              796,
                              803
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 35
                              },
                              "start": {
                                "column": 43,
                                "line": 35
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "createEmpty",
                            "optional": false,
                            "range": [
                              804,
                              815
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 35
                              },
                              "start": {
                                "column": 51,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            796,
                            815
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 35
                            },
                            "start": {
                              "column": 43,
                              "line": 35
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseCollection",
                        "optional": false,
                        "range": [
                          772,
                          786
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 35
                          },
                          "start": {
                            "column": 19,
                            "line": 35
                          }
                        }
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          786,
                          795
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "range": [
                                787,
                                794
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 35
                                },
                                "start": {
                                  "column": 34,
                                  "line": 35
                                }
                              }
                            },
                            "range": [
                              787,
                              794
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 35
                              },
                              "start": {
                                "column": 34,
                                "line": 35
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 35
                          },
                          "start": {
                            "column": 33,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        768,
                        816
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 35
                        },
                        "start": {
                          "column": 15,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      761,
                      817
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 35
                      },
                      "start": {
                        "column": 8,
                        "line": 35
                      }
                    }
                  }
                ],
                "range": [
                  751,
                  823
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 36
                  },
                  "start": {
                    "column": 48,
                    "line": 34
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 34
                  },
                  "start": {
                    "column": 22,
                    "line": 34
                  }
                },
                "range": [
                  725,
                  750
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      741,
                      750
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "range": [
                            742,
                            749
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 34
                            },
                            "start": {
                              "column": 39,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          742,
                          749
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 34
                          },
                          "start": {
                            "column": 39,
                            "line": 34
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 34
                      },
                      "start": {
                        "column": 38,
                        "line": 34
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BaseCollection",
                    "optional": false,
                    "range": [
                      727,
                      741
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 34
                      },
                      "start": {
                        "column": 24,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    727,
                    750
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 34
                    },
                    "start": {
                      "column": 24,
                      "line": 34
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 36
                },
                "start": {
                  "column": 20,
                  "line": 34
                }
              }
            },
            "range": [
              707,
              823
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 10,
            "line": 27
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          570,
          573
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 27
          },
          "start": {
            "column": 6,
            "line": 27
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        564,
        825
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          848,
          888
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                854,
                865
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 40
                },
                "start": {
                  "column": 4,
                  "line": 40
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
                865,
                886
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  883,
                  886
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 40
                  },
                  "start": {
                    "column": 33,
                    "line": 40
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
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 40
                      },
                      "start": {
                        "column": 22,
                        "line": 40
                      }
                    },
                    "range": [
                      872,
                      881
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FooBase",
                        "optional": false,
                        "range": [
                          874,
                          881
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 40
                          },
                          "start": {
                            "column": 24,
                            "line": 40
                          }
                        }
                      },
                      "range": [
                        874,
                        881
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 40
                        },
                        "start": {
                          "column": 24,
                          "line": 40
                        }
                      }
                    }
                  },
                  "range": [
                    866,
                    881
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 40
                    },
                    "start": {
                      "column": 16,
                      "line": 40
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 40
                },
                "start": {
                  "column": 15,
                  "line": 40
                }
              }
            },
            "range": [
              854,
              886
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 21,
            "line": 39
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericType",
        "optional": false,
        "range": [
          833,
          844
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 39
          },
          "start": {
            "column": 6,
            "line": 39
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 39
          },
          "start": {
            "column": 17,
            "line": 39
          }
        },
        "range": [
          844,
          847
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
                845,
                846
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 39
                },
                "start": {
                  "column": 18,
                  "line": 39
                }
              }
            },
            "out": false,
            "range": [
              845,
              846
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 39
              },
              "start": {
                "column": 18,
                "line": 39
              }
            }
          }
        ]
      },
      "range": [
        827,
        888
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          904,
          938
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "populate",
              "optional": false,
              "range": [
                917,
                925
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 44
                },
                "start": {
                  "column": 11,
                  "line": 44
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
                925,
                936
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  928,
                  936
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 46
                  },
                  "start": {
                    "column": 22,
                    "line": 44
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
                  "line": 46
                },
                "start": {
                  "column": 19,
                  "line": 44
                }
              }
            },
            "range": [
              910,
              936
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 14,
            "line": 43
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooBase",
        "optional": false,
        "range": [
          896,
          903
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 43
          },
          "start": {
            "column": 6,
            "line": 43
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        890,
        938
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 47
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
