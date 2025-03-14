__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    192
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          20,
          44
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "range": [
                26,
                32
              ],
              "loc": {
                "end": {
                  "column": 10,
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
                "name": "x",
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
                    34,
                    37
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        36,
                        37
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
                      36,
                      37
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
                  33,
                  37
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
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
                  "column": 19,
                  "line": 2
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              },
              "range": [
                38,
                41
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    40,
                    41
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 2
                    },
                    "start": {
                      "column": 18,
                      "line": 2
                    }
                  }
                },
                "range": [
                  40,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              }
            },
            "static": false,
            "range": [
              26,
              42
            ],
            "loc": {
              "end": {
                "column": 20,
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
            "column": 20,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Int",
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
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        },
        "range": [
          13,
          19
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
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                17,
                18
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              17,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        44
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
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          62,
          65
        ],
        "loc": {
          "end": {
            "column": 20,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 4
              },
              "start": {
                "column": 28,
                "line": 4
              }
            },
            "range": [
              73,
              76
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  75,
                  76
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 4
                  },
                  "start": {
                    "column": 30,
                    "line": 4
                  }
                }
              },
              "range": [
                75,
                76
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 4
                },
                "start": {
                  "column": 30,
                  "line": 4
                }
              }
            }
          },
          "range": [
            72,
            76
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 4
            },
            "start": {
              "column": 27,
              "line": 4
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 4
              },
              "start": {
                "column": 34,
                "line": 4
              }
            },
            "range": [
              79,
              90
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  84,
                  90
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
                        85,
                        86
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 4
                        },
                        "start": {
                          "column": 40,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      85,
                      86
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 4
                      },
                      "start": {
                        "column": 40,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        88,
                        89
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 4
                        },
                        "start": {
                          "column": 43,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      88,
                      89
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 4
                      },
                      "start": {
                        "column": 43,
                        "line": 4
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 4
                  },
                  "start": {
                    "column": 39,
                    "line": 4
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Int",
                "optional": false,
                "range": [
                  81,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 4
                  },
                  "start": {
                    "column": 36,
                    "line": 4
                  }
                }
              },
              "range": [
                81,
                90
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 4
                },
                "start": {
                  "column": 36,
                  "line": 4
                }
              }
            }
          },
          "range": [
            78,
            90
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 4
            },
            "start": {
              "column": 33,
              "line": 4
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 59,
                "line": 4
              },
              "start": {
                "column": 48,
                "line": 4
              }
            },
            "range": [
              93,
              104
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  98,
                  104
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        99,
                        100
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 4
                        },
                        "start": {
                          "column": 54,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      99,
                      100
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 4
                      },
                      "start": {
                        "column": 54,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        102,
                        103
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 4
                        },
                        "start": {
                          "column": 57,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      102,
                      103
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 4
                      },
                      "start": {
                        "column": 57,
                        "line": 4
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 4
                  },
                  "start": {
                    "column": 53,
                    "line": 4
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Int",
                "optional": false,
                "range": [
                  95,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 4
                  },
                  "start": {
                    "column": 50,
                    "line": 4
                  }
                }
              },
              "range": [
                95,
                104
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 4
                },
                "start": {
                  "column": 50,
                  "line": 4
                }
              }
            }
          },
          "range": [
            92,
            104
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 4
            },
            "start": {
              "column": 47,
              "line": 4
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 63,
            "line": 4
          },
          "start": {
            "column": 60,
            "line": 4
          }
        },
        "range": [
          105,
          108
        ],
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
                "column": 63,
                "line": 4
              },
              "start": {
                "column": 62,
                "line": 4
              }
            }
          },
          "range": [
            107,
            108
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 4
            },
            "start": {
              "column": 62,
              "line": 4
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 4
          },
          "start": {
            "column": 20,
            "line": 4
          }
        },
        "range": [
          65,
          71
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
                66,
                67
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 4
                },
                "start": {
                  "column": 21,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              66,
              67
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 4
              },
              "start": {
                "column": 21,
                "line": 4
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                69,
                70
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 4
                },
                "start": {
                  "column": 24,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              69,
              70
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 4
              },
              "start": {
                "column": 24,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        45,
        109
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "raw": "\"\"",
            "value": "",
            "range": [
              114,
              116
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "range": [
                    120,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 5
                    },
                    "start": {
                      "column": 10,
                      "line": 5
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
                    126,
                    151
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
                            "name": "p1",
                            "optional": false,
                            "range": [
                              140,
                              142
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 5
                              },
                              "start": {
                                "column": 30,
                                "line": 5
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "range": [
                              143,
                              149
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 5
                              },
                              "start": {
                                "column": 33,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            140,
                            149
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 5
                            },
                            "start": {
                              "column": 30,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          133,
                          149
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 5
                          },
                          "start": {
                            "column": 23,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "range": [
                      131,
                      151
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 5
                      },
                      "start": {
                        "column": 21,
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
                      "name": "p1",
                      "optional": false,
                      "range": [
                        127,
                        129
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 5
                        },
                        "start": {
                          "column": 17,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 5
                    },
                    "start": {
                      "column": 16,
                      "line": 5
                    }
                  }
                },
                "range": [
                  120,
                  151
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 5
                  },
                  "start": {
                    "column": 10,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              118,
              153
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 5
              },
              "start": {
                "column": 8,
                "line": 5
              }
            }
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "range": [
                    157,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 5
                    },
                    "start": {
                      "column": 47,
                      "line": 5
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
                    163,
                    188
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
                          "name": "undefined",
                          "optional": false,
                          "range": [
                            177,
                            186
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 5
                            },
                            "start": {
                              "column": 67,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          170,
                          186
                        ],
                        "loc": {
                          "end": {
                            "column": 76,
                            "line": 5
                          },
                          "start": {
                            "column": 60,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "range": [
                      168,
                      188
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 5
                      },
                      "start": {
                        "column": 58,
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
                      "name": "p2",
                      "optional": false,
                      "range": [
                        164,
                        166
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 5
                        },
                        "start": {
                          "column": 54,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 5
                    },
                    "start": {
                      "column": 53,
                      "line": 5
                    }
                  }
                },
                "range": [
                  157,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 5
                  },
                  "start": {
                    "column": 47,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              155,
              190
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 5
              },
              "start": {
                "column": 45,
                "line": 5
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            110,
            113
          ],
          "loc": {
            "end": {
              "column": 3,
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
          110,
          191
        ],
        "loc": {
          "end": {
            "column": 81,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        110,
        192
      ],
      "loc": {
        "end": {
          "column": 82,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 82,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
