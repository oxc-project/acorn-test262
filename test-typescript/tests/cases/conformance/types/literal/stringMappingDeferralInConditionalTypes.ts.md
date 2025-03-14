__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    603
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          62,
          63
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              78,
              90
            ],
            "params": [
              {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "range": [
                        79,
                        80
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
                    "range": [
                      79,
                      80
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
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      83,
                      89
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 3
                      },
                      "start": {
                        "column": 26,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  79,
                  89
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 3
                  },
                  "start": {
                    "column": 22,
                    "line": 3
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 3
              },
              "start": {
                "column": 21,
                "line": 3
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Lowercase",
            "optional": false,
            "range": [
              69,
              78
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          },
          "range": [
            69,
            90
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 3
            }
          }
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              99,
              104
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 3
              },
              "start": {
                "column": 42,
                "line": 3
              }
            }
          },
          "range": [
            99,
            104
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 3
            },
            "start": {
              "column": 42,
              "line": 3
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              111,
              112
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 3
              },
              "start": {
                "column": 54,
                "line": 3
              }
            }
          },
          "range": [
            111,
            112
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 3
            },
            "start": {
              "column": 54,
              "line": 3
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              107,
              108
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 3
              },
              "start": {
                "column": 50,
                "line": 3
              }
            }
          },
          "range": [
            107,
            108
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 3
            },
            "start": {
              "column": 50,
              "line": 3
            }
          }
        },
        "range": [
          69,
          112
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 9,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        },
        "range": [
          63,
          66
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                64,
                65
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 3
                },
                "start": {
                  "column": 7,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              64,
              65
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 3
              },
              "start": {
                "column": 7,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        57,
        113
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 4
                },
                "start": {
                  "column": 6,
                  "line": 4
                }
              },
              "range": [
                120,
                130
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    123,
                    130
                  ],
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"foo\"",
                        "value": "foo",
                        "range": [
                          124,
                          129
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 4
                          },
                          "start": {
                            "column": 10,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        124,
                        129
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 4
                        },
                        "start": {
                          "column": 10,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 4
                    },
                    "start": {
                      "column": 9,
                      "line": 4
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    122,
                    123
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "range": [
                  122,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              118,
              130
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              133,
              134
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 4
              },
              "start": {
                "column": 19,
                "line": 4
              }
            }
          },
          "range": [
            118,
            134
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        114,
        135
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          148,
          149
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              164,
              176
            ],
            "params": [
              {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "range": [
                        165,
                        166
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 6
                        },
                        "start": {
                          "column": 22,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      165,
                      166
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 6
                      },
                      "start": {
                        "column": 22,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      169,
                      175
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 6
                      },
                      "start": {
                        "column": 26,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  165,
                  175
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 6
                  },
                  "start": {
                    "column": 22,
                    "line": 6
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 6
              },
              "start": {
                "column": 21,
                "line": 6
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Lowercase",
            "optional": false,
            "range": [
              155,
              164
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 6
              },
              "start": {
                "column": 12,
                "line": 6
              }
            }
          },
          "range": [
            155,
            176
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 6
            },
            "start": {
              "column": 12,
              "line": 6
            }
          }
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": "f",
                "raw": "f"
              },
              "range": [
                185,
                189
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 6
                },
                "start": {
                  "column": 42,
                  "line": 6
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "range": [
                195,
                197
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 6
                },
                "start": {
                  "column": 52,
                  "line": 6
                }
              }
            }
          ],
          "types": [
            {
              "type": "TSStringKeyword",
              "range": [
                189,
                195
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 6
                },
                "start": {
                  "column": 46,
                  "line": 6
                }
              }
            }
          ],
          "range": [
            185,
            197
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 6
            },
            "start": {
              "column": 42,
              "line": 6
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              204,
              205
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 6
              },
              "start": {
                "column": 61,
                "line": 6
              }
            }
          },
          "range": [
            204,
            205
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 6
            },
            "start": {
              "column": 61,
              "line": 6
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              200,
              201
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 6
              },
              "start": {
                "column": 57,
                "line": 6
              }
            }
          },
          "range": [
            200,
            201
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 6
            },
            "start": {
              "column": 57,
              "line": 6
            }
          }
        },
        "range": [
          155,
          205
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 6
          },
          "start": {
            "column": 12,
            "line": 6
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 9,
            "line": 6
          },
          "start": {
            "column": 6,
            "line": 6
          }
        },
        "range": [
          149,
          152
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                150,
                151
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 6
                },
                "start": {
                  "column": 7,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              150,
              151
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 6
              },
              "start": {
                "column": 7,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        143,
        206
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 7
                },
                "start": {
                  "column": 6,
                  "line": 7
                }
              },
              "range": [
                213,
                223
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    216,
                    223
                  ],
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"foo\"",
                        "value": "foo",
                        "range": [
                          217,
                          222
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 7
                          },
                          "start": {
                            "column": 10,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        217,
                        222
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 7
                        },
                        "start": {
                          "column": 10,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 7
                    },
                    "start": {
                      "column": 9,
                      "line": 7
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "range": [
                    215,
                    216
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                },
                "range": [
                  215,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              211,
              223
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              226,
              227
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 7
              },
              "start": {
                "column": 19,
                "line": 7
              }
            }
          },
          "range": [
            211,
            227
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        207,
        228
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          241,
          242
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 9
          },
          "start": {
            "column": 5,
            "line": 9
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              258,
              281
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    268,
                    280
                  ],
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "range": [
                              269,
                              270
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 9
                              },
                              "start": {
                                "column": 33,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            269,
                            270
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 9
                            },
                            "start": {
                              "column": 33,
                              "line": 9
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            273,
                            279
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 9
                            },
                            "start": {
                              "column": 37,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "range": [
                        269,
                        279
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 9
                        },
                        "start": {
                          "column": 33,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 9
                    },
                    "start": {
                      "column": 32,
                      "line": 9
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Lowercase",
                  "optional": false,
                  "range": [
                    259,
                    268
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 9
                    },
                    "start": {
                      "column": 23,
                      "line": 9
                    }
                  }
                },
                "range": [
                  259,
                  280
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 9
                  },
                  "start": {
                    "column": 23,
                    "line": 9
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 9
              },
              "start": {
                "column": 22,
                "line": 9
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Capitalize",
            "optional": false,
            "range": [
              248,
              258
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 9
              },
              "start": {
                "column": 12,
                "line": 9
              }
            }
          },
          "range": [
            248,
            281
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 9
            },
            "start": {
              "column": 12,
              "line": 9
            }
          }
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"Foo\"",
            "value": "Foo",
            "range": [
              290,
              295
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 9
              },
              "start": {
                "column": 54,
                "line": 9
              }
            }
          },
          "range": [
            290,
            295
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 9
            },
            "start": {
              "column": 54,
              "line": 9
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              302,
              303
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 9
              },
              "start": {
                "column": 66,
                "line": 9
              }
            }
          },
          "range": [
            302,
            303
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 9
            },
            "start": {
              "column": 66,
              "line": 9
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              298,
              299
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 9
              },
              "start": {
                "column": 62,
                "line": 9
              }
            }
          },
          "range": [
            298,
            299
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 9
            },
            "start": {
              "column": 62,
              "line": 9
            }
          }
        },
        "range": [
          248,
          303
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 9
          },
          "start": {
            "column": 12,
            "line": 9
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 9,
            "line": 9
          },
          "start": {
            "column": 6,
            "line": 9
          }
        },
        "range": [
          242,
          245
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                243,
                244
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 9
                },
                "start": {
                  "column": 7,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              243,
              244
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 9
              },
              "start": {
                "column": 7,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        236,
        304
      ],
      "loc": {
        "end": {
          "column": 68,
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 10
                },
                "start": {
                  "column": 6,
                  "line": 10
                }
              },
              "range": [
                311,
                321
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    314,
                    321
                  ],
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"foo\"",
                        "value": "foo",
                        "range": [
                          315,
                          320
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 10
                          },
                          "start": {
                            "column": 10,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        315,
                        320
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 10
                        },
                        "start": {
                          "column": 10,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 10
                    },
                    "start": {
                      "column": 9,
                      "line": 10
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    313,
                    314
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
                "range": [
                  313,
                  321
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              309,
              321
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              324,
              325
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 10
              },
              "start": {
                "column": 19,
                "line": 10
              }
            }
          },
          "range": [
            309,
            325
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        305,
        326
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "range": [
          339,
          340
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
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              371,
              385
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    381,
                    384
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "range": [
                          382,
                          383
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 12
                          },
                          "start": {
                            "column": 48,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        382,
                        383
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 12
                        },
                        "start": {
                          "column": 48,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 12
                    },
                    "start": {
                      "column": 47,
                      "line": 12
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Lowercase",
                  "optional": false,
                  "range": [
                    372,
                    381
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 12
                    },
                    "start": {
                      "column": 38,
                      "line": 12
                    }
                  }
                },
                "range": [
                  372,
                  384
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 12
                  },
                  "start": {
                    "column": 38,
                    "line": 12
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 12
              },
              "start": {
                "column": 37,
                "line": 12
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Capitalize",
            "optional": false,
            "range": [
              361,
              371
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 12
              },
              "start": {
                "column": 27,
                "line": 12
              }
            }
          },
          "range": [
            361,
            385
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 12
            },
            "start": {
              "column": 27,
              "line": 12
            }
          }
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"Foo\"",
            "value": "Foo",
            "range": [
              394,
              399
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 12
              },
              "start": {
                "column": 60,
                "line": 12
              }
            }
          },
          "range": [
            394,
            399
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 12
            },
            "start": {
              "column": 60,
              "line": 12
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              406,
              407
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 12
              },
              "start": {
                "column": 72,
                "line": 12
              }
            }
          },
          "range": [
            406,
            407
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 12
            },
            "start": {
              "column": 72,
              "line": 12
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              402,
              403
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 12
              },
              "start": {
                "column": 68,
                "line": 12
              }
            }
          },
          "range": [
            402,
            403
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 12
            },
            "start": {
              "column": 68,
              "line": 12
            }
          }
        },
        "range": [
          361,
          407
        ],
        "loc": {
          "end": {
            "column": 73,
            "line": 12
          },
          "start": {
            "column": 27,
            "line": 12
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 12
          },
          "start": {
            "column": 6,
            "line": 12
          }
        },
        "range": [
          340,
          358
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                351,
                357
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 12
                },
                "start": {
                  "column": 17,
                  "line": 12
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                341,
                342
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 12
                },
                "start": {
                  "column": 7,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              341,
              357
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 12
              },
              "start": {
                "column": 7,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        334,
        408
      ],
      "loc": {
        "end": {
          "column": 74,
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
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 13
                },
                "start": {
                  "column": 6,
                  "line": 13
                }
              },
              "range": [
                415,
                425
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    418,
                    425
                  ],
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"foo\"",
                        "value": "foo",
                        "range": [
                          419,
                          424
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 13
                          },
                          "start": {
                            "column": 10,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        419,
                        424
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 13
                        },
                        "start": {
                          "column": 10,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 13
                    },
                    "start": {
                      "column": 9,
                      "line": 13
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "range": [
                    417,
                    418
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                },
                "range": [
                  417,
                  425
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              413,
              425
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              428,
              429
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 13
              },
              "start": {
                "column": 19,
                "line": 13
              }
            }
          },
          "range": [
            413,
            429
          ],
          "loc": {
            "end": {
              "column": 20,
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
      "kind": "let",
      "range": [
        409,
        430
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 13
        },
        "start": {
          "column": 0,
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
        "name": "E",
        "optional": false,
        "range": [
          443,
          444
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 15
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            459,
            496
          ],
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "f",
                        "raw": "f"
                      },
                      "range": [
                        460,
                        464
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 15
                        },
                        "start": {
                          "column": 22,
                          "line": 15
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "range": [
                        474,
                        476
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 15
                        },
                        "start": {
                          "column": 36,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "types": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "range": [
                              464,
                              465
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 15
                              },
                              "start": {
                                "column": 26,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            464,
                            465
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 15
                            },
                            "start": {
                              "column": 26,
                              "line": 15
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            468,
                            474
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 15
                            },
                            "start": {
                              "column": 30,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "range": [
                        464,
                        474
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 15
                        },
                        "start": {
                          "column": 26,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "range": [
                    460,
                    476
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 15
                    },
                    "start": {
                      "column": 22,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "range": [
                        479,
                        482
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 15
                        },
                        "start": {
                          "column": 41,
                          "line": 15
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": "f",
                        "raw": "f"
                      },
                      "range": [
                        492,
                        495
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 15
                        },
                        "start": {
                          "column": 54,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "types": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "range": [
                              482,
                              483
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 15
                              },
                              "start": {
                                "column": 44,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            482,
                            483
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 15
                            },
                            "start": {
                              "column": 44,
                              "line": 15
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            486,
                            492
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 15
                            },
                            "start": {
                              "column": 48,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "range": [
                        482,
                        492
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 15
                        },
                        "start": {
                          "column": 44,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "range": [
                    479,
                    495
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 15
                    },
                    "start": {
                      "column": 41,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                460,
                495
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 15
                },
                "start": {
                  "column": 22,
                  "line": 15
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 15
            },
            "start": {
              "column": 21,
              "line": 15
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "range": [
            450,
            459
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 15
            },
            "start": {
              "column": 12,
              "line": 15
            }
          }
        },
        "range": [
          450,
          496
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 15
          },
          "start": {
            "column": 12,
            "line": 15
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 9,
            "line": 15
          },
          "start": {
            "column": 6,
            "line": 15
          }
        },
        "range": [
          444,
          447
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                445,
                446
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 15
                },
                "start": {
                  "column": 7,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              445,
              446
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 15
              },
              "start": {
                "column": 7,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        438,
        497
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "range": [
          503,
          504
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 16
          },
          "start": {
            "column": 5,
            "line": 16
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              508,
              512
            ],
            "params": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"\"",
                  "value": "",
                  "range": [
                    509,
                    511
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 16
                    },
                    "start": {
                      "column": 11,
                      "line": 16
                    }
                  }
                },
                "range": [
                  509,
                  511
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 16
                  },
                  "start": {
                    "column": 11,
                    "line": 16
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 16
              },
              "start": {
                "column": 10,
                "line": 16
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "range": [
              507,
              508
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 16
              },
              "start": {
                "column": 9,
                "line": 16
              }
            }
          },
          "range": [
            507,
            512
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 16
            },
            "start": {
              "column": 9,
              "line": 16
            }
          }
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"f\"",
            "value": "f",
            "range": [
              521,
              524
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 16
              },
              "start": {
                "column": 23,
                "line": 16
              }
            }
          },
          "range": [
            521,
            524
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 16
            },
            "start": {
              "column": 23,
              "line": 16
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              531,
              532
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 16
              },
              "start": {
                "column": 33,
                "line": 16
              }
            }
          },
          "range": [
            531,
            532
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 16
            },
            "start": {
              "column": 33,
              "line": 16
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              527,
              528
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 16
              },
              "start": {
                "column": 29,
                "line": 16
              }
            }
          },
          "range": [
            527,
            528
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 16
            },
            "start": {
              "column": 29,
              "line": 16
            }
          }
        },
        "range": [
          507,
          532
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 16
          },
          "start": {
            "column": 9,
            "line": 16
          }
        }
      },
      "range": [
        498,
        533
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 16
        },
        "start": {
          "column": 0,
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
        "name": "G",
        "optional": false,
        "range": [
          544,
          545
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 17
          },
          "start": {
            "column": 5,
            "line": 17
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              552,
              555
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "range": [
                    553,
                    554
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 17
                    },
                    "start": {
                      "column": 14,
                      "line": 17
                    }
                  }
                },
                "range": [
                  553,
                  554
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 17
                  },
                  "start": {
                    "column": 14,
                    "line": 17
                  }
                }
              }
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
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "range": [
              551,
              552
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 17
              },
              "start": {
                "column": 12,
                "line": 17
              }
            }
          },
          "range": [
            551,
            555
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 17
            },
            "start": {
              "column": 12,
              "line": 17
            }
          }
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"f\"",
            "value": "f",
            "range": [
              564,
              567
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 17
              },
              "start": {
                "column": 25,
                "line": 17
              }
            }
          },
          "range": [
            564,
            567
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 17
            },
            "start": {
              "column": 25,
              "line": 17
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              574,
              575
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 17
              },
              "start": {
                "column": 35,
                "line": 17
              }
            }
          },
          "range": [
            574,
            575
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 17
            },
            "start": {
              "column": 35,
              "line": 17
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              570,
              571
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 17
              },
              "start": {
                "column": 31,
                "line": 17
              }
            }
          },
          "range": [
            570,
            571
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 17
            },
            "start": {
              "column": 31,
              "line": 17
            }
          }
        },
        "range": [
          551,
          575
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 17
          },
          "start": {
            "column": 12,
            "line": 17
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 9,
            "line": 17
          },
          "start": {
            "column": 6,
            "line": 17
          }
        },
        "range": [
          545,
          548
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                546,
                547
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 17
                },
                "start": {
                  "column": 7,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              546,
              547
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 17
              },
              "start": {
                "column": 7,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        539,
        576
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 18
                },
                "start": {
                  "column": 6,
                  "line": 18
                }
              },
              "range": [
                584,
                591
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    587,
                    591
                  ],
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"\"",
                        "value": "",
                        "range": [
                          588,
                          590
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 18
                          },
                          "start": {
                            "column": 10,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        588,
                        590
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 18
                        },
                        "start": {
                          "column": 10,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 18
                    },
                    "start": {
                      "column": 9,
                      "line": 18
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G",
                  "optional": false,
                  "range": [
                    586,
                    587
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                "range": [
                  586,
                  591
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              582,
              591
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              594,
              595
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 18
              },
              "start": {
                "column": 16,
                "line": 18
              }
            }
          },
          "range": [
            582,
            595
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        578,
        596
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
