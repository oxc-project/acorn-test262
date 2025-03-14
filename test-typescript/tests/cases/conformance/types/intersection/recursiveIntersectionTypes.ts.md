__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    416
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LinkedList",
        "optional": false,
        "range": [
          6,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                22,
                23
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 1
                },
                "start": {
                  "column": 22,
                  "line": 1
                }
              }
            },
            "range": [
              22,
              23
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 1
              },
              "start": {
                "column": 22,
                "line": 1
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "next",
                  "optional": false,
                  "range": [
                    28,
                    32
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 1
                    },
                    "start": {
                      "column": 28,
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
                      "column": 47,
                      "line": 1
                    },
                    "start": {
                      "column": 32,
                      "line": 1
                    }
                  },
                  "range": [
                    32,
                    47
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        44,
                        47
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
                              45,
                              46
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 1
                              },
                              "start": {
                                "column": 45,
                                "line": 1
                              }
                            }
                          },
                          "range": [
                            45,
                            46
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 1
                            },
                            "start": {
                              "column": 45,
                              "line": 1
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 1
                        },
                        "start": {
                          "column": 44,
                          "line": 1
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LinkedList",
                      "optional": false,
                      "range": [
                        34,
                        44
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 1
                        },
                        "start": {
                          "column": 34,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      34,
                      47
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 1
                      },
                      "start": {
                        "column": 34,
                        "line": 1
                      }
                    }
                  }
                },
                "range": [
                  28,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 1
                  },
                  "start": {
                    "column": 28,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              26,
              49
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 1
              },
              "start": {
                "column": 26,
                "line": 1
              }
            }
          }
        ],
        "range": [
          22,
          49
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 1
          },
          "start": {
            "column": 22,
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
            "column": 16,
            "line": 1
          }
        },
        "range": [
          16,
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
        1,
        50
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 1
        },
        "start": {
          "column": 1,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          69,
          90
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                75,
                79
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                  "column": 16,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              },
              "range": [
                79,
                87
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  81,
                  87
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 4
                  },
                  "start": {
                    "column": 10,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              75,
              88
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 4
              },
              "start": {
                "column": 4,
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
            "column": 17,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Entity",
        "optional": false,
        "range": [
          62,
          68
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        52,
        90
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          125,
          147
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "price",
              "optional": false,
              "range": [
                131,
                136
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 8
                },
                "start": {
                  "column": 4,
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
                  "column": 17,
                  "line": 8
                },
                "start": {
                  "column": 9,
                  "line": 8
                }
              },
              "range": [
                136,
                144
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  138,
                  144
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              131,
              145
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 33,
            "line": 7
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Entity",
            "optional": false,
            "range": [
              118,
              124
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 7
              },
              "start": {
                "column": 26,
                "line": 7
              }
            }
          },
          "range": [
            118,
            124
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 7
            },
            "start": {
              "column": 26,
              "line": 7
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Product",
        "optional": false,
        "range": [
          102,
          109
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 7
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "range": [
        92,
        147
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "entityList",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
                }
              },
              "range": [
                163,
                183
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    175,
                    183
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Entity",
                        "optional": false,
                        "range": [
                          176,
                          182
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 11
                          },
                          "start": {
                            "column": 27,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        176,
                        182
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 11
                        },
                        "start": {
                          "column": 27,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 11
                    },
                    "start": {
                      "column": 26,
                      "line": 11
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LinkedList",
                  "optional": false,
                  "range": [
                    165,
                    175
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 11
                    },
                    "start": {
                      "column": 16,
                      "line": 11
                    }
                  }
                },
                "range": [
                  165,
                  183
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 11
                  },
                  "start": {
                    "column": 16,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              153,
              183
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": null,
          "range": [
            153,
            183
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        149,
        184
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "s",
            "optional": false,
            "range": [
              189,
              190
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "entityList",
              "optional": false,
              "range": [
                193,
                203
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
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
                204,
                208
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
            },
            "range": [
              193,
              208
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 12
              },
              "start": {
                "column": 8,
                "line": 12
              }
            }
          },
          "range": [
            189,
            208
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        185,
        209
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "s",
            "optional": false,
            "range": [
              214,
              215
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "entityList",
                "optional": false,
                "range": [
                  218,
                  228
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
                "name": "next",
                "optional": false,
                "range": [
                  229,
                  233
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 13
                  },
                  "start": {
                    "column": 19,
                    "line": 13
                  }
                }
              },
              "range": [
                218,
                233
              ],
              "loc": {
                "end": {
                  "column": 23,
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
                234,
                238
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 13
                },
                "start": {
                  "column": 24,
                  "line": 13
                }
              }
            },
            "range": [
              218,
              238
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 13
              },
              "start": {
                "column": 8,
                "line": 13
              }
            }
          },
          "range": [
            214,
            238
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        210,
        239
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "s",
            "optional": false,
            "range": [
              244,
              245
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "entityList",
                  "optional": false,
                  "range": [
                    248,
                    258
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "next",
                  "optional": false,
                  "range": [
                    259,
                    263
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 14
                    },
                    "start": {
                      "column": 19,
                      "line": 14
                    }
                  }
                },
                "range": [
                  248,
                  263
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "range": [
                  264,
                  268
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
                248,
                268
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
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
                269,
                273
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 14
                },
                "start": {
                  "column": 29,
                  "line": 14
                }
              }
            },
            "range": [
              248,
              273
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 14
              },
              "start": {
                "column": 8,
                "line": 14
              }
            }
          },
          "range": [
            244,
            273
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        240,
        274
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "s",
            "optional": false,
            "range": [
              279,
              280
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "entityList",
                    "optional": false,
                    "range": [
                      283,
                      293
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "next",
                    "optional": false,
                    "range": [
                      294,
                      298
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 15
                      },
                      "start": {
                        "column": 19,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    283,
                    298
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "next",
                  "optional": false,
                  "range": [
                    299,
                    303
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 15
                    },
                    "start": {
                      "column": 24,
                      "line": 15
                    }
                  }
                },
                "range": [
                  283,
                  303
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "range": [
                  304,
                  308
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 15
                  },
                  "start": {
                    "column": 29,
                    "line": 15
                  }
                }
              },
              "range": [
                283,
                308
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 15
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
                309,
                313
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 15
                },
                "start": {
                  "column": 34,
                  "line": 15
                }
              }
            },
            "range": [
              283,
              313
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 15
              },
              "start": {
                "column": 8,
                "line": 15
              }
            }
          },
          "range": [
            279,
            313
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        275,
        314
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "productList",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 17
                },
                "start": {
                  "column": 15,
                  "line": 17
                }
              },
              "range": [
                331,
                352
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    343,
                    352
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Product",
                        "optional": false,
                        "range": [
                          344,
                          351
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 17
                          },
                          "start": {
                            "column": 28,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        344,
                        351
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 17
                        },
                        "start": {
                          "column": 28,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 17
                    },
                    "start": {
                      "column": 27,
                      "line": 17
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LinkedList",
                  "optional": false,
                  "range": [
                    333,
                    343
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 17
                    },
                    "start": {
                      "column": 17,
                      "line": 17
                    }
                  }
                },
                "range": [
                  333,
                  352
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 17
                  },
                  "start": {
                    "column": 17,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              320,
              352
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": null,
          "range": [
            320,
            352
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        316,
        353
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "entityList",
          "optional": false,
          "range": [
            354,
            364
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "productList",
          "optional": false,
          "range": [
            367,
            378
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 18
            },
            "start": {
              "column": 13,
              "line": 18
            }
          }
        },
        "range": [
          354,
          378
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        354,
        379
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "productList",
          "optional": false,
          "range": [
            380,
            391
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 19
            },
            "start": {
              "column": 0,
              "line": 19
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "entityList",
          "optional": false,
          "range": [
            394,
            404
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 19
            },
            "start": {
              "column": 14,
              "line": 19
            }
          }
        },
        "range": [
          380,
          404
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        380,
        405
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 20
    },
    "start": {
      "column": 1,
      "line": 1
    }
  },
  "hashbang": null
}
```
