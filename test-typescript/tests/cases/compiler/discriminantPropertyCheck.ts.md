__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    3989
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "range": [
          5,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item1",
              "optional": false,
              "range": [
                12,
                17
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 1
                },
                "start": {
                  "column": 12,
                  "line": 1
                }
              }
            },
            "range": [
              12,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item2",
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
          }
        ],
        "range": [
          12,
          25
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "range": [
        0,
        26
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          43,
          64
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                49,
                52
              ],
              "loc": {
                "end": {
                  "column": 7,
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
                  "column": 7,
                  "line": 4
                }
              },
              "range": [
                52,
                61
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  54,
                  61
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
              }
            },
            "range": [
              49,
              62
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
            "column": 15,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          38,
          42
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        28,
        64
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
          95,
          175
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "range": [
                101,
                105
              ],
              "loc": {
                "end": {
                  "column": 8,
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
                  "column": 13,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 8
                }
              },
              "range": [
                105,
                110
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"A\"",
                  "value": "A",
                  "range": [
                    107,
                    110
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 8
                    },
                    "start": {
                      "column": 10,
                      "line": 8
                    }
                  }
                },
                "range": [
                  107,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 8
                  },
                  "start": {
                    "column": 10,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              101,
              111
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                116,
                119
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
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
                  "column": 27,
                  "line": 9
                },
                "start": {
                  "column": 7,
                  "line": 9
                }
              },
              "range": [
                119,
                139
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      121,
                      127
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 9
                      },
                      "start": {
                        "column": 9,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      130,
                      139
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 9
                      },
                      "start": {
                        "column": 18,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  121,
                  139
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 9
                  },
                  "start": {
                    "column": 9,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              116,
              140
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
                145,
                148
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
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
                  "line": 10
                },
                "start": {
                  "column": 7,
                  "line": 10
                }
              },
              "range": [
                148,
                157
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  150,
                  157
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
              }
            },
            "range": [
              145,
              158
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "qux",
              "optional": false,
              "range": [
                163,
                166
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 11
                },
                "start": {
                  "column": 4,
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
                  "column": 13,
                  "line": 11
                },
                "start": {
                  "column": 7,
                  "line": 11
                }
              },
              "range": [
                166,
                172
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    168,
                    172
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 11
                    },
                    "start": {
                      "column": 9,
                      "line": 11
                    }
                  }
                },
                "range": [
                  168,
                  172
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 11
                  },
                  "start": {
                    "column": 9,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              163,
              173
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
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
            "column": 29,
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
            "name": "Base",
            "optional": false,
            "range": [
              90,
              94
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 7
              },
              "start": {
                "column": 24,
                "line": 7
              }
            }
          },
          "range": [
            90,
            94
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 7
            },
            "start": {
              "column": 24,
              "line": 7
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item1",
        "optional": false,
        "range": [
          76,
          81
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
        66,
        175
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          206,
          287
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "range": [
                212,
                216
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
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              },
              "range": [
                216,
                221
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"B\"",
                  "value": "B",
                  "range": [
                    218,
                    221
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 15
                    },
                    "start": {
                      "column": 10,
                      "line": 15
                    }
                  }
                },
                "range": [
                  218,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 15
                  },
                  "start": {
                    "column": 10,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              212,
              222
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                227,
                230
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
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
                  "column": 27,
                  "line": 16
                },
                "start": {
                  "column": 7,
                  "line": 16
                }
              },
              "range": [
                230,
                250
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      232,
                      238
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 16
                      },
                      "start": {
                        "column": 9,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      241,
                      250
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 16
                      },
                      "start": {
                        "column": 18,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  232,
                  250
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 16
                  },
                  "start": {
                    "column": 9,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              227,
              251
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
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
                256,
                259
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
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
                  "line": 17
                },
                "start": {
                  "column": 7,
                  "line": 17
                }
              },
              "range": [
                259,
                268
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  261,
                  268
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 17
                  },
                  "start": {
                    "column": 9,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              256,
              269
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "qux",
              "optional": false,
              "range": [
                274,
                277
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
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
                  "column": 14,
                  "line": 18
                },
                "start": {
                  "column": 7,
                  "line": 18
                }
              },
              "range": [
                277,
                284
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    279,
                    284
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 18
                    },
                    "start": {
                      "column": 9,
                      "line": 18
                    }
                  }
                },
                "range": [
                  279,
                  284
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 18
                  },
                  "start": {
                    "column": 9,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              274,
              285
            ],
            "loc": {
              "end": {
                "column": 15,
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
            "column": 29,
            "line": 14
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
            "name": "Base",
            "optional": false,
            "range": [
              201,
              205
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
            201,
            205
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
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item2",
        "optional": false,
        "range": [
          187,
          192
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
      "range": [
        177,
        287
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 14
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
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          371,
                          372
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 23
                          },
                          "start": {
                            "column": 8,
                            "line": 23
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          373,
                          376
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 23
                          },
                          "start": {
                            "column": 10,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        371,
                        376
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 23
                        },
                        "start": {
                          "column": 8,
                          "line": 23
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
                        377,
                        383
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 23
                        },
                        "start": {
                          "column": 14,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      371,
                      383
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    371,
                    384
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
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
                361,
                390
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 24
                },
                "start": {
                  "column": 47,
                  "line": 22
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      322,
                      323
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "range": [
                      324,
                      328
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 22
                      },
                      "start": {
                        "column": 10,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    322,
                    328
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"A\"",
                  "value": "A",
                  "range": [
                    333,
                    336
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 22
                    },
                    "start": {
                      "column": 19,
                      "line": 22
                    }
                  }
                },
                "range": [
                  322,
                  336
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "!==",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      340,
                      341
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 22
                      },
                      "start": {
                        "column": 26,
                        "line": 22
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      342,
                      345
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 22
                      },
                      "start": {
                        "column": 28,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    340,
                    345
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 22
                    },
                    "start": {
                      "column": 26,
                      "line": 22
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    350,
                    359
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 22
                    },
                    "start": {
                      "column": 36,
                      "line": 22
                    }
                  }
                },
                "range": [
                  340,
                  359
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 22
                  },
                  "start": {
                    "column": 26,
                    "line": 22
                  }
                }
              },
              "range": [
                322,
                359
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 22
                },
                "start": {
                  "column": 8,
                  "line": 22
                }
              }
            },
            "range": [
              318,
              390
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
        "range": [
          312,
          392
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 23,
            "line": 21
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "goo1",
        "optional": false,
        "range": [
          298,
          302
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 21
          },
          "start": {
            "column": 9,
            "line": 21
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
                "column": 21,
                "line": 21
              },
              "start": {
                "column": 15,
                "line": 21
              }
            },
            "range": [
              304,
              310
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "range": [
                  306,
                  310
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 21
                  },
                  "start": {
                    "column": 17,
                    "line": 21
                  }
                }
              },
              "range": [
                306,
                310
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 21
                },
                "start": {
                  "column": 17,
                  "line": 21
                }
              }
            }
          },
          "range": [
            303,
            310
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 21
            },
            "start": {
              "column": 14,
              "line": 21
            }
          }
        }
      ],
      "range": [
        289,
        392
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          476,
                          477
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 29
                          },
                          "start": {
                            "column": 8,
                            "line": 29
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          478,
                          481
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 29
                          },
                          "start": {
                            "column": 10,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        476,
                        481
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 29
                        },
                        "start": {
                          "column": 8,
                          "line": 29
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
                        482,
                        488
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 29
                        },
                        "start": {
                          "column": 14,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      476,
                      488
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    476,
                    489
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
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
                466,
                537
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 30
                },
                "start": {
                  "column": 47,
                  "line": 28
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "operator": "!==",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      427,
                      428
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 28
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      429,
                      432
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 28
                      },
                      "start": {
                        "column": 10,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    427,
                    432
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    437,
                    446
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 28
                    },
                    "start": {
                      "column": 18,
                      "line": 28
                    }
                  }
                },
                "range": [
                  427,
                  446
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 28
                  },
                  "start": {
                    "column": 8,
                    "line": 28
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      450,
                      451
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 28
                      },
                      "start": {
                        "column": 31,
                        "line": 28
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "range": [
                      452,
                      456
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 28
                      },
                      "start": {
                        "column": 33,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    450,
                    456
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 28
                    },
                    "start": {
                      "column": 31,
                      "line": 28
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"A\"",
                  "value": "A",
                  "range": [
                    461,
                    464
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 28
                    },
                    "start": {
                      "column": 42,
                      "line": 28
                    }
                  }
                },
                "range": [
                  450,
                  464
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 28
                  },
                  "start": {
                    "column": 31,
                    "line": 28
                  }
                }
              },
              "range": [
                427,
                464
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 28
                },
                "start": {
                  "column": 8,
                  "line": 28
                }
              }
            },
            "range": [
              423,
              537
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
          }
        ],
        "range": [
          417,
          539
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 23,
            "line": 27
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "goo2",
        "optional": false,
        "range": [
          403,
          407
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 27
          },
          "start": {
            "column": 9,
            "line": 27
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
                "column": 21,
                "line": 27
              },
              "start": {
                "column": 15,
                "line": 27
              }
            },
            "range": [
              409,
              415
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "range": [
                  411,
                  415
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 27
                  },
                  "start": {
                    "column": 17,
                    "line": 27
                  }
                }
              },
              "range": [
                411,
                415
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 27
                },
                "start": {
                  "column": 17,
                  "line": 27
                }
              }
            }
          },
          "range": [
            408,
            415
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 27
            },
            "start": {
              "column": 14,
              "line": 27
            }
          }
        }
      ],
      "range": [
        394,
        539
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 27
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
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          614,
                          615
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 35
                          },
                          "start": {
                            "column": 8,
                            "line": 35
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          616,
                          619
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 35
                          },
                          "start": {
                            "column": 10,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        614,
                        619
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 35
                        },
                        "start": {
                          "column": 8,
                          "line": 35
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
                        620,
                        626
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 35
                        },
                        "start": {
                          "column": 14,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      614,
                      626
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 35
                      },
                      "start": {
                        "column": 8,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    614,
                    627
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
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
                604,
                633
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 36
                },
                "start": {
                  "column": 38,
                  "line": 34
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    574,
                    575
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 34
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "range": [
                    576,
                    579
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 34
                    },
                    "start": {
                      "column": 10,
                      "line": 34
                    }
                  }
                },
                "range": [
                  574,
                  579
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 34
                  },
                  "start": {
                    "column": 8,
                    "line": 34
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "!==",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      583,
                      584
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 34
                      },
                      "start": {
                        "column": 17,
                        "line": 34
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      585,
                      588
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 34
                      },
                      "start": {
                        "column": 19,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    583,
                    588
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 34
                    },
                    "start": {
                      "column": 17,
                      "line": 34
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    593,
                    602
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 34
                    },
                    "start": {
                      "column": 27,
                      "line": 34
                    }
                  }
                },
                "range": [
                  583,
                  602
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 34
                  },
                  "start": {
                    "column": 17,
                    "line": 34
                  }
                }
              },
              "range": [
                574,
                602
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 34
                },
                "start": {
                  "column": 8,
                  "line": 34
                }
              }
            },
            "range": [
              570,
              633
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
        "range": [
          564,
          635
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 23,
            "line": 33
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "range": [
          550,
          554
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 33
          },
          "start": {
            "column": 9,
            "line": 33
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
                "column": 21,
                "line": 33
              },
              "start": {
                "column": 15,
                "line": 33
              }
            },
            "range": [
              556,
              562
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "range": [
                  558,
                  562
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 33
                  },
                  "start": {
                    "column": 17,
                    "line": 33
                  }
                }
              },
              "range": [
                558,
                562
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 33
                },
                "start": {
                  "column": 17,
                  "line": 33
                }
              }
            }
          },
          "range": [
            555,
            562
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 33
            },
            "start": {
              "column": 14,
              "line": 33
            }
          }
        }
      ],
      "range": [
        541,
        635
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 33
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
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          710,
                          711
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 41
                          },
                          "start": {
                            "column": 8,
                            "line": 41
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          712,
                          715
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 41
                          },
                          "start": {
                            "column": 10,
                            "line": 41
                          }
                        }
                      },
                      "range": [
                        710,
                        715
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 41
                        },
                        "start": {
                          "column": 8,
                          "line": 41
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
                        716,
                        722
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 41
                        },
                        "start": {
                          "column": 14,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      710,
                      722
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 41
                      },
                      "start": {
                        "column": 8,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    710,
                    723
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 41
                    },
                    "start": {
                      "column": 8,
                      "line": 41
                    }
                  }
                }
              ],
              "range": [
                700,
                729
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 42
                },
                "start": {
                  "column": 38,
                  "line": 40
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "operator": "!==",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      670,
                      671
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 40
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      672,
                      675
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 40
                      },
                      "start": {
                        "column": 10,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    670,
                    675
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 40
                    },
                    "start": {
                      "column": 8,
                      "line": 40
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    680,
                    689
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 40
                    },
                    "start": {
                      "column": 18,
                      "line": 40
                    }
                  }
                },
                "range": [
                  670,
                  689
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 40
                  },
                  "start": {
                    "column": 8,
                    "line": 40
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    693,
                    694
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 40
                    },
                    "start": {
                      "column": 31,
                      "line": 40
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "range": [
                    695,
                    698
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
                "range": [
                  693,
                  698
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 40
                  },
                  "start": {
                    "column": 31,
                    "line": 40
                  }
                }
              },
              "range": [
                670,
                698
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 40
                },
                "start": {
                  "column": 8,
                  "line": 40
                }
              }
            },
            "range": [
              666,
              729
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          }
        ],
        "range": [
          660,
          731
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 43
          },
          "start": {
            "column": 23,
            "line": 39
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "range": [
          646,
          650
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 39
          },
          "start": {
            "column": 9,
            "line": 39
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
                "column": 21,
                "line": 39
              },
              "start": {
                "column": 15,
                "line": 39
              }
            },
            "range": [
              652,
              658
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "range": [
                  654,
                  658
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 39
                  },
                  "start": {
                    "column": 17,
                    "line": 39
                  }
                }
              },
              "range": [
                654,
                658
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 39
                },
                "start": {
                  "column": 17,
                  "line": 39
                }
              }
            }
          },
          "range": [
            651,
            658
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 39
            },
            "start": {
              "column": 14,
              "line": 39
            }
          }
        }
      ],
      "range": [
        637,
        731
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 39
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
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          806,
                          807
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 47
                          },
                          "start": {
                            "column": 8,
                            "line": 47
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          808,
                          811
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 47
                          },
                          "start": {
                            "column": 10,
                            "line": 47
                          }
                        }
                      },
                      "range": [
                        806,
                        811
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 47
                        },
                        "start": {
                          "column": 8,
                          "line": 47
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
                        812,
                        818
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 47
                        },
                        "start": {
                          "column": 14,
                          "line": 47
                        }
                      }
                    },
                    "range": [
                      806,
                      818
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 47
                      },
                      "start": {
                        "column": 8,
                        "line": 47
                      }
                    }
                  },
                  "range": [
                    806,
                    819
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
                    }
                  }
                }
              ],
              "range": [
                796,
                825
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 48
                },
                "start": {
                  "column": 38,
                  "line": 46
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    766,
                    767
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "range": [
                    768,
                    771
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 46
                    },
                    "start": {
                      "column": 10,
                      "line": 46
                    }
                  }
                },
                "range": [
                  766,
                  771
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 46
                  },
                  "start": {
                    "column": 8,
                    "line": 46
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "!==",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      775,
                      776
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 46
                      },
                      "start": {
                        "column": 17,
                        "line": 46
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      777,
                      780
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 46
                      },
                      "start": {
                        "column": 19,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    775,
                    780
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 46
                    },
                    "start": {
                      "column": 17,
                      "line": 46
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    785,
                    794
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 46
                    },
                    "start": {
                      "column": 27,
                      "line": 46
                    }
                  }
                },
                "range": [
                  775,
                  794
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 46
                  },
                  "start": {
                    "column": 17,
                    "line": 46
                  }
                }
              },
              "range": [
                766,
                794
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 46
                },
                "start": {
                  "column": 8,
                  "line": 46
                }
              }
            },
            "range": [
              762,
              825
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          }
        ],
        "range": [
          756,
          827
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 49
          },
          "start": {
            "column": 23,
            "line": 45
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "range": [
          742,
          746
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 45
          },
          "start": {
            "column": 9,
            "line": 45
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
                "column": 21,
                "line": 45
              },
              "start": {
                "column": 15,
                "line": 45
              }
            },
            "range": [
              748,
              754
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "range": [
                  750,
                  754
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 45
                  },
                  "start": {
                    "column": 17,
                    "line": 45
                  }
                }
              },
              "range": [
                750,
                754
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 45
                },
                "start": {
                  "column": 17,
                  "line": 45
                }
              }
            }
          },
          "range": [
            747,
            754
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 45
            },
            "start": {
              "column": 14,
              "line": 45
            }
          }
        }
      ],
      "range": [
        733,
        827
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 45
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
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          902,
                          903
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 53
                          },
                          "start": {
                            "column": 8,
                            "line": 53
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          904,
                          907
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 53
                          },
                          "start": {
                            "column": 10,
                            "line": 53
                          }
                        }
                      },
                      "range": [
                        902,
                        907
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 53
                        },
                        "start": {
                          "column": 8,
                          "line": 53
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
                        908,
                        914
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 53
                        },
                        "start": {
                          "column": 14,
                          "line": 53
                        }
                      }
                    },
                    "range": [
                      902,
                      914
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 53
                      },
                      "start": {
                        "column": 8,
                        "line": 53
                      }
                    }
                  },
                  "range": [
                    902,
                    915
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 53
                    },
                    "start": {
                      "column": 8,
                      "line": 53
                    }
                  }
                }
              ],
              "range": [
                892,
                921
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 54
                },
                "start": {
                  "column": 38,
                  "line": 52
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "operator": "!==",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      862,
                      863
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 52
                      },
                      "start": {
                        "column": 8,
                        "line": 52
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      864,
                      867
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 52
                      },
                      "start": {
                        "column": 10,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    862,
                    867
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 52
                    },
                    "start": {
                      "column": 8,
                      "line": 52
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    872,
                    881
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 52
                    },
                    "start": {
                      "column": 18,
                      "line": 52
                    }
                  }
                },
                "range": [
                  862,
                  881
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 52
                  },
                  "start": {
                    "column": 8,
                    "line": 52
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    885,
                    886
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 52
                    },
                    "start": {
                      "column": 31,
                      "line": 52
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "range": [
                    887,
                    890
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 52
                    },
                    "start": {
                      "column": 33,
                      "line": 52
                    }
                  }
                },
                "range": [
                  885,
                  890
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 52
                  },
                  "start": {
                    "column": 31,
                    "line": 52
                  }
                }
              },
              "range": [
                862,
                890
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 52
                },
                "start": {
                  "column": 8,
                  "line": 52
                }
              }
            },
            "range": [
              858,
              921
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          }
        ],
        "range": [
          852,
          923
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 55
          },
          "start": {
            "column": 23,
            "line": 51
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "range": [
          838,
          842
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 51
          },
          "start": {
            "column": 9,
            "line": 51
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
                "column": 21,
                "line": 51
              },
              "start": {
                "column": 15,
                "line": 51
              }
            },
            "range": [
              844,
              850
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "range": [
                  846,
                  850
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 51
                  },
                  "start": {
                    "column": 17,
                    "line": 51
                  }
                }
              },
              "range": [
                846,
                850
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 51
                },
                "start": {
                  "column": 17,
                  "line": 51
                }
              }
            }
          },
          "range": [
            843,
            850
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 51
            },
            "start": {
              "column": 14,
              "line": 51
            }
          }
        }
      ],
      "range": [
        829,
        923
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 51
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
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          998,
                          999
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 59
                          },
                          "start": {
                            "column": 8,
                            "line": 59
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          1000,
                          1003
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 59
                          },
                          "start": {
                            "column": 10,
                            "line": 59
                          }
                        }
                      },
                      "range": [
                        998,
                        1003
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 59
                        },
                        "start": {
                          "column": 8,
                          "line": 59
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
                        1004,
                        1010
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 59
                        },
                        "start": {
                          "column": 14,
                          "line": 59
                        }
                      }
                    },
                    "range": [
                      998,
                      1010
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 59
                      },
                      "start": {
                        "column": 8,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    998,
                    1011
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 59
                    },
                    "start": {
                      "column": 8,
                      "line": 59
                    }
                  }
                }
              ],
              "range": [
                988,
                1017
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 60
                },
                "start": {
                  "column": 38,
                  "line": 58
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    958,
                    959
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 58
                    },
                    "start": {
                      "column": 8,
                      "line": 58
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "qux",
                  "optional": false,
                  "range": [
                    960,
                    963
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 58
                    },
                    "start": {
                      "column": 10,
                      "line": 58
                    }
                  }
                },
                "range": [
                  958,
                  963
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 58
                  },
                  "start": {
                    "column": 8,
                    "line": 58
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "!==",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      967,
                      968
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 58
                      },
                      "start": {
                        "column": 17,
                        "line": 58
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      969,
                      972
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 58
                      },
                      "start": {
                        "column": 19,
                        "line": 58
                      }
                    }
                  },
                  "range": [
                    967,
                    972
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 58
                    },
                    "start": {
                      "column": 17,
                      "line": 58
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    977,
                    986
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 58
                    },
                    "start": {
                      "column": 27,
                      "line": 58
                    }
                  }
                },
                "range": [
                  967,
                  986
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 58
                  },
                  "start": {
                    "column": 17,
                    "line": 58
                  }
                }
              },
              "range": [
                958,
                986
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 58
                },
                "start": {
                  "column": 8,
                  "line": 58
                }
              }
            },
            "range": [
              954,
              1017
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 58
              }
            }
          }
        ],
        "range": [
          948,
          1019
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 23,
            "line": 57
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "range": [
          934,
          938
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 57
          },
          "start": {
            "column": 9,
            "line": 57
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
                "column": 21,
                "line": 57
              },
              "start": {
                "column": 15,
                "line": 57
              }
            },
            "range": [
              940,
              946
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "range": [
                  942,
                  946
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 57
                  },
                  "start": {
                    "column": 17,
                    "line": 57
                  }
                }
              },
              "range": [
                942,
                946
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 57
                },
                "start": {
                  "column": 17,
                  "line": 57
                }
              }
            }
          },
          "range": [
            939,
            946
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 57
            },
            "start": {
              "column": 14,
              "line": 57
            }
          }
        }
      ],
      "range": [
        925,
        1019
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 57
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
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1094,
                          1095
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 65
                          },
                          "start": {
                            "column": 8,
                            "line": 65
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          1096,
                          1099
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 65
                          },
                          "start": {
                            "column": 10,
                            "line": 65
                          }
                        }
                      },
                      "range": [
                        1094,
                        1099
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 65
                        },
                        "start": {
                          "column": 8,
                          "line": 65
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
                        1100,
                        1106
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 65
                        },
                        "start": {
                          "column": 14,
                          "line": 65
                        }
                      }
                    },
                    "range": [
                      1094,
                      1106
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 65
                      },
                      "start": {
                        "column": 8,
                        "line": 65
                      }
                    }
                  },
                  "range": [
                    1094,
                    1107
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 65
                    },
                    "start": {
                      "column": 8,
                      "line": 65
                    }
                  }
                }
              ],
              "range": [
                1084,
                1155
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 66
                },
                "start": {
                  "column": 38,
                  "line": 64
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "operator": "!==",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1054,
                      1055
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 64
                      },
                      "start": {
                        "column": 8,
                        "line": 64
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      1056,
                      1059
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 64
                      },
                      "start": {
                        "column": 10,
                        "line": 64
                      }
                    }
                  },
                  "range": [
                    1054,
                    1059
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 64
                    },
                    "start": {
                      "column": 8,
                      "line": 64
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    1064,
                    1073
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 64
                    },
                    "start": {
                      "column": 18,
                      "line": 64
                    }
                  }
                },
                "range": [
                  1054,
                  1073
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 64
                  },
                  "start": {
                    "column": 8,
                    "line": 64
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1077,
                    1078
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 64
                    },
                    "start": {
                      "column": 31,
                      "line": 64
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "qux",
                  "optional": false,
                  "range": [
                    1079,
                    1082
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 64
                    },
                    "start": {
                      "column": 33,
                      "line": 64
                    }
                  }
                },
                "range": [
                  1077,
                  1082
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 64
                  },
                  "start": {
                    "column": 31,
                    "line": 64
                  }
                }
              },
              "range": [
                1054,
                1082
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 64
                },
                "start": {
                  "column": 8,
                  "line": 64
                }
              }
            },
            "range": [
              1050,
              1155
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          }
        ],
        "range": [
          1044,
          1157
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 67
          },
          "start": {
            "column": 23,
            "line": 63
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "range": [
          1030,
          1034
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 63
          },
          "start": {
            "column": 9,
            "line": 63
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
                "column": 21,
                "line": 63
              },
              "start": {
                "column": 15,
                "line": 63
              }
            },
            "range": [
              1036,
              1042
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "range": [
                  1038,
                  1042
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 63
                  },
                  "start": {
                    "column": 17,
                    "line": 63
                  }
                }
              },
              "range": [
                1038,
                1042
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 63
                },
                "start": {
                  "column": 17,
                  "line": 63
                }
              }
            }
          },
          "range": [
            1035,
            1042
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 63
            },
            "start": {
              "column": 14,
              "line": 63
            }
          }
        }
      ],
      "range": [
        1021,
        1157
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 63
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          1192,
          1212
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Str",
              "optional": false,
              "range": [
                1194,
                1197
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 71
                },
                "start": {
                  "column": 13,
                  "line": 71
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                1200,
                1201
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 71
                },
                "start": {
                  "column": 19,
                  "line": 71
                }
              }
            },
            "range": [
              1194,
              1201
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 71
              },
              "start": {
                "column": 13,
                "line": 71
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Num",
              "optional": false,
              "range": [
                1203,
                1206
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 71
                },
                "start": {
                  "column": 22,
                  "line": 71
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                1209,
                1210
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 71
                },
                "start": {
                  "column": 28,
                  "line": 71
                }
              }
            },
            "range": [
              1203,
              1210
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 71
              },
              "start": {
                "column": 22,
                "line": 71
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 71
          },
          "start": {
            "column": 11,
            "line": 71
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Types",
        "optional": false,
        "range": [
          1186,
          1191
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 71
          },
          "start": {
            "column": 5,
            "line": 71
          }
        }
      },
      "range": [
        1181,
        1212
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 71
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Instance",
        "optional": false,
        "range": [
          1219,
          1227
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 73
          },
          "start": {
            "column": 5,
            "line": 73
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "StrType",
              "optional": false,
              "range": [
                1230,
                1237
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 73
                },
                "start": {
                  "column": 16,
                  "line": 73
                }
              }
            },
            "range": [
              1230,
              1237
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 73
              },
              "start": {
                "column": 16,
                "line": 73
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NumType",
              "optional": false,
              "range": [
                1240,
                1247
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 73
                },
                "start": {
                  "column": 26,
                  "line": 73
                }
              }
            },
            "range": [
              1240,
              1247
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 73
              },
              "start": {
                "column": 26,
                "line": 73
              }
            }
          }
        ],
        "range": [
          1230,
          1247
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 73
          },
          "start": {
            "column": 16,
            "line": 73
          }
        }
      },
      "range": [
        1214,
        1248
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 73
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1268,
          1331
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "range": [
                1274,
                1278
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 76
                },
                "start": {
                  "column": 4,
                  "line": 76
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
                  "column": 19,
                  "line": 76
                },
                "start": {
                  "column": 8,
                  "line": 76
                }
              },
              "range": [
                1278,
                1289
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Types",
                    "optional": false,
                    "range": [
                      1280,
                      1285
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 76
                      },
                      "start": {
                        "column": 10,
                        "line": 76
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Str",
                    "optional": false,
                    "range": [
                      1286,
                      1289
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 76
                      },
                      "start": {
                        "column": 16,
                        "line": 76
                      }
                    }
                  },
                  "range": [
                    1280,
                    1289
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 76
                    },
                    "start": {
                      "column": 10,
                      "line": 76
                    }
                  }
                },
                "range": [
                  1280,
                  1289
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 76
                  },
                  "start": {
                    "column": 10,
                    "line": 76
                  }
                }
              }
            },
            "range": [
              1274,
              1290
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 76
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                1295,
                1300
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 77
                },
                "start": {
                  "column": 4,
                  "line": 77
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
                  "line": 77
                },
                "start": {
                  "column": 9,
                  "line": 77
                }
              },
              "range": [
                1300,
                1308
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1302,
                  1308
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 77
                  },
                  "start": {
                    "column": 11,
                    "line": 77
                  }
                }
              }
            },
            "range": [
              1295,
              1309
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 77
              },
              "start": {
                "column": 4,
                "line": 77
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "range": [
                1314,
                1320
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 78
                },
                "start": {
                  "column": 4,
                  "line": 78
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
                  "column": 18,
                  "line": 78
                },
                "start": {
                  "column": 10,
                  "line": 78
                }
              },
              "range": [
                1320,
                1328
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1322,
                  1328
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 78
                  },
                  "start": {
                    "column": 12,
                    "line": 78
                  }
                }
              }
            },
            "range": [
              1314,
              1329
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 78
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 79
          },
          "start": {
            "column": 18,
            "line": 75
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrType",
        "optional": false,
        "range": [
          1260,
          1267
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 75
          },
          "start": {
            "column": 10,
            "line": 75
          }
        }
      },
      "range": [
        1250,
        1331
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 75
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1351,
          1394
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "range": [
                1357,
                1361
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 82
                },
                "start": {
                  "column": 4,
                  "line": 82
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
                  "column": 19,
                  "line": 82
                },
                "start": {
                  "column": 8,
                  "line": 82
                }
              },
              "range": [
                1361,
                1372
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Types",
                    "optional": false,
                    "range": [
                      1363,
                      1368
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 82
                      },
                      "start": {
                        "column": 10,
                        "line": 82
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Num",
                    "optional": false,
                    "range": [
                      1369,
                      1372
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 82
                      },
                      "start": {
                        "column": 16,
                        "line": 82
                      }
                    }
                  },
                  "range": [
                    1363,
                    1372
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 82
                    },
                    "start": {
                      "column": 10,
                      "line": 82
                    }
                  }
                },
                "range": [
                  1363,
                  1372
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 82
                  },
                  "start": {
                    "column": 10,
                    "line": 82
                  }
                }
              }
            },
            "range": [
              1357,
              1373
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 82
              },
              "start": {
                "column": 4,
                "line": 82
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                1378,
                1383
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 83
                },
                "start": {
                  "column": 4,
                  "line": 83
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
                  "line": 83
                },
                "start": {
                  "column": 9,
                  "line": 83
                }
              },
              "range": [
                1383,
                1391
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1385,
                  1391
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 83
                  },
                  "start": {
                    "column": 11,
                    "line": 83
                  }
                }
              }
            },
            "range": [
              1378,
              1392
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 83
              },
              "start": {
                "column": 4,
                "line": 83
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 84
          },
          "start": {
            "column": 18,
            "line": 81
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumType",
        "optional": false,
        "range": [
          1343,
          1350
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 81
          },
          "start": {
            "column": 10,
            "line": 81
          }
        }
      },
      "range": [
        1333,
        1394
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 81
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
            "type": "WhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "consequent": [
                        {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "inst",
                                    "optional": false,
                                    "range": [
                                      1523,
                                      1527
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 90
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 90
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "range": [
                                      1528,
                                      1533
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 90
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 90
                                      }
                                    }
                                  },
                                  "range": [
                                    1523,
                                    1533
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 90
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 90
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
                                    1534,
                                    1540
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 90
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 90
                                    }
                                  }
                                },
                                "range": [
                                  1523,
                                  1540
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 90
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 90
                                  }
                                }
                              },
                              "range": [
                                1523,
                                1541
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 90
                                },
                                "start": {
                                  "column": 16,
                                  "line": 90
                                }
                              }
                            },
                            {
                              "type": "BreakStatement",
                              "label": null,
                              "range": [
                                1558,
                                1564
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 91
                                },
                                "start": {
                                  "column": 16,
                                  "line": 91
                                }
                              }
                            }
                          ],
                          "range": [
                            1505,
                            1578
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 92
                            },
                            "start": {
                              "column": 28,
                              "line": 89
                            }
                          }
                        }
                      ],
                      "test": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Types",
                          "optional": false,
                          "range": [
                            1494,
                            1499
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 89
                            },
                            "start": {
                              "column": 17,
                              "line": 89
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Str",
                          "optional": false,
                          "range": [
                            1500,
                            1503
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 89
                            },
                            "start": {
                              "column": 23,
                              "line": 89
                            }
                          }
                        },
                        "range": [
                          1494,
                          1503
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 89
                          },
                          "start": {
                            "column": 17,
                            "line": 89
                          }
                        }
                      },
                      "range": [
                        1489,
                        1578
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 92
                        },
                        "start": {
                          "column": 12,
                          "line": 89
                        }
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "consequent": [
                        {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "inst",
                                    "optional": false,
                                    "range": [
                                      1625,
                                      1629
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 94
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 94
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "range": [
                                      1630,
                                      1635
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 94
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 94
                                      }
                                    }
                                  },
                                  "range": [
                                    1625,
                                    1635
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 94
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 94
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "toExponential",
                                  "optional": false,
                                  "range": [
                                    1636,
                                    1649
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 40,
                                      "line": 94
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 94
                                    }
                                  }
                                },
                                "range": [
                                  1625,
                                  1649
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 94
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 94
                                  }
                                }
                              },
                              "range": [
                                1625,
                                1650
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 94
                                },
                                "start": {
                                  "column": 16,
                                  "line": 94
                                }
                              }
                            },
                            {
                              "type": "BreakStatement",
                              "label": null,
                              "range": [
                                1667,
                                1673
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 95
                                },
                                "start": {
                                  "column": 16,
                                  "line": 95
                                }
                              }
                            }
                          ],
                          "range": [
                            1607,
                            1687
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 96
                            },
                            "start": {
                              "column": 28,
                              "line": 93
                            }
                          }
                        }
                      ],
                      "test": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Types",
                          "optional": false,
                          "range": [
                            1596,
                            1601
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 93
                            },
                            "start": {
                              "column": 17,
                              "line": 93
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Num",
                          "optional": false,
                          "range": [
                            1602,
                            1605
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 93
                            },
                            "start": {
                              "column": 23,
                              "line": 93
                            }
                          }
                        },
                        "range": [
                          1596,
                          1605
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 93
                          },
                          "start": {
                            "column": 17,
                            "line": 93
                          }
                        }
                      },
                      "range": [
                        1591,
                        1687
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 96
                        },
                        "start": {
                          "column": 12,
                          "line": 93
                        }
                      }
                    }
                  ],
                  "discriminant": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inst",
                      "optional": false,
                      "range": [
                        1464,
                        1468
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 88
                        },
                        "start": {
                          "column": 16,
                          "line": 88
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "range": [
                        1469,
                        1473
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 88
                        },
                        "start": {
                          "column": 21,
                          "line": 88
                        }
                      }
                    },
                    "range": [
                      1464,
                      1473
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 88
                      },
                      "start": {
                        "column": 16,
                        "line": 88
                      }
                    }
                  },
                  "range": [
                    1456,
                    1697
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 97
                    },
                    "start": {
                      "column": 8,
                      "line": 88
                    }
                  }
                }
              ],
              "range": [
                1446,
                1703
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 98
                },
                "start": {
                  "column": 17,
                  "line": 87
                }
              }
            },
            "test": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                1440,
                1444
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 87
                },
                "start": {
                  "column": 11,
                  "line": 87
                }
              }
            },
            "range": [
              1433,
              1703
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 98
              },
              "start": {
                "column": 4,
                "line": 87
              }
            }
          }
        ],
        "range": [
          1427,
          1705
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 99
          },
          "start": {
            "column": 31,
            "line": 86
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func2",
        "optional": false,
        "range": [
          1405,
          1410
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 86
          },
          "start": {
            "column": 9,
            "line": 86
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "inst",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 29,
                "line": 86
              },
              "start": {
                "column": 19,
                "line": 86
              }
            },
            "range": [
              1415,
              1425
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Instance",
                "optional": false,
                "range": [
                  1417,
                  1425
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 86
                  },
                  "start": {
                    "column": 21,
                    "line": 86
                  }
                }
              },
              "range": [
                1417,
                1425
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 86
                },
                "start": {
                  "column": 21,
                  "line": 86
                }
              }
            }
          },
          "range": [
            1411,
            1425
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 86
            },
            "start": {
              "column": 15,
              "line": 86
            }
          }
        }
      ],
      "range": [
        1396,
        1705
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 99
        },
        "start": {
          "column": 0,
          "line": 86
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
            "name": "f",
            "optional": false,
            "range": [
              1735,
              1736
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 103
              },
              "start": {
                "column": 6,
                "line": 103
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                1773,
                1775
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 103
                },
                "start": {
                  "column": 44,
                  "line": 103
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
                "name": "_a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 103
                    },
                    "start": {
                      "column": 13,
                      "line": 103
                    }
                  },
                  "range": [
                    1742,
                    1750
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1744,
                      1750
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 103
                      },
                      "start": {
                        "column": 15,
                        "line": 103
                      }
                    }
                  }
                },
                "range": [
                  1740,
                  1750
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 103
                  },
                  "start": {
                    "column": 11,
                    "line": 103
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 103
                    },
                    "start": {
                      "column": 25,
                      "line": 103
                    }
                  },
                  "range": [
                    1754,
                    1762
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1756,
                      1762
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 103
                      },
                      "start": {
                        "column": 27,
                        "line": 103
                      }
                    }
                  }
                },
                "range": [
                  1752,
                  1762
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 103
                  },
                  "start": {
                    "column": 23,
                    "line": 103
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 103
                },
                "start": {
                  "column": 34,
                  "line": 103
                }
              },
              "range": [
                1763,
                1769
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  1765,
                  1769
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 103
                  },
                  "start": {
                    "column": 36,
                    "line": 103
                  }
                }
              }
            },
            "range": [
              1739,
              1775
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 103
              },
              "start": {
                "column": 10,
                "line": 103
              }
            }
          },
          "range": [
            1735,
            1775
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 103
            },
            "start": {
              "column": 6,
              "line": 103
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1729,
        1776
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 103
        },
        "start": {
          "column": 0,
          "line": 103
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1790,
          1821
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                1794,
                1795
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 106
                },
                "start": {
                  "column": 2,
                  "line": 106
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 106
                },
                "start": {
                  "column": 4,
                  "line": 106
                }
              },
              "range": [
                1796,
                1804
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1798,
                  1804
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 106
                  },
                  "start": {
                    "column": 6,
                    "line": 106
                  }
                }
              }
            },
            "range": [
              1794,
              1805
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 106
              },
              "start": {
                "column": 2,
                "line": 106
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                1808,
                1809
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 107
                },
                "start": {
                  "column": 2,
                  "line": 107
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 107
                },
                "start": {
                  "column": 4,
                  "line": 107
                }
              },
              "range": [
                1810,
                1818
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1812,
                  1818
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 107
                  },
                  "start": {
                    "column": 6,
                    "line": 107
                  }
                }
              }
            },
            "range": [
              1808,
              1819
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 107
              },
              "start": {
                "column": 2,
                "line": 107
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 108
          },
          "start": {
            "column": 12,
            "line": 105
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          1788,
          1789
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 105
          },
          "start": {
            "column": 10,
            "line": 105
          }
        }
      },
      "range": [
        1778,
        1821
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 108
        },
        "start": {
          "column": 0,
          "line": 105
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1835,
          1864
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                1839,
                1840
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 111
                },
                "start": {
                  "column": 2,
                  "line": 111
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
                  "column": 11,
                  "line": 111
                },
                "start": {
                  "column": 3,
                  "line": 111
                }
              },
              "range": [
                1840,
                1848
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1842,
                  1848
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 111
                  },
                  "start": {
                    "column": 5,
                    "line": 111
                  }
                }
              }
            },
            "range": [
              1839,
              1849
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 111
              },
              "start": {
                "column": 2,
                "line": 111
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                1852,
                1853
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 112
                },
                "start": {
                  "column": 2,
                  "line": 112
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
                  "column": 11,
                  "line": 112
                },
                "start": {
                  "column": 3,
                  "line": 112
                }
              },
              "range": [
                1853,
                1861
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1855,
                  1861
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 112
                  },
                  "start": {
                    "column": 5,
                    "line": 112
                  }
                }
              }
            },
            "range": [
              1852,
              1862
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 112
              },
              "start": {
                "column": 2,
                "line": 112
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 113
          },
          "start": {
            "column": 12,
            "line": 110
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          1833,
          1834
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 110
          },
          "start": {
            "column": 10,
            "line": 110
          }
        }
      },
      "range": [
        1823,
        1864
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 113
        },
        "start": {
          "column": 0,
          "line": 110
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U",
        "optional": false,
        "range": [
          1871,
          1872
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 115
          },
          "start": {
            "column": 5,
            "line": 115
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                1875,
                1876
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 115
                },
                "start": {
                  "column": 9,
                  "line": 115
                }
              }
            },
            "range": [
              1875,
              1876
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 115
              },
              "start": {
                "column": 9,
                "line": 115
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                1879,
                1880
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 115
                },
                "start": {
                  "column": 13,
                  "line": 115
                }
              }
            },
            "range": [
              1879,
              1880
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 115
              },
              "start": {
                "column": 13,
                "line": 115
              }
            }
          }
        ],
        "range": [
          1875,
          1880
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 115
          },
          "start": {
            "column": 9,
            "line": 115
          }
        }
      },
      "range": [
        1866,
        1881
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 115
        },
        "start": {
          "column": 0,
          "line": 115
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
            "name": "u",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 117
                },
                "start": {
                  "column": 7,
                  "line": 117
                }
              },
              "range": [
                1890,
                1893
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    1892,
                    1893
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 117
                    },
                    "start": {
                      "column": 9,
                      "line": 117
                    }
                  }
                },
                "range": [
                  1892,
                  1893
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 117
                  },
                  "start": {
                    "column": 9,
                    "line": 117
                  }
                }
              }
            },
            "range": [
              1889,
              1893
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 117
              },
              "start": {
                "column": 6,
                "line": 117
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                1896,
                1898
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 117
                },
                "start": {
                  "column": 13,
                  "line": 117
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1902,
                1905
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 117
                },
                "start": {
                  "column": 19,
                  "line": 117
                }
              }
            },
            "range": [
              1896,
              1905
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 117
              },
              "start": {
                "column": 13,
                "line": 117
              }
            }
          },
          "range": [
            1889,
            1905
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 117
            },
            "start": {
              "column": 6,
              "line": 117
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1883,
        1906
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 117
        },
        "start": {
          "column": 0,
          "line": 117
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "operator": "&&",
        "left": {
          "type": "LogicalExpression",
          "operator": "&&",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "range": [
                1908,
                1909
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 119
                },
                "start": {
                  "column": 0,
                  "line": 119
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
                1910,
                1911
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 119
                },
                "start": {
                  "column": 2,
                  "line": 119
                }
              }
            },
            "range": [
              1908,
              1911
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 119
              },
              "start": {
                "column": 0,
                "line": 119
              }
            }
          },
          "right": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "range": [
                1915,
                1916
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 119
                },
                "start": {
                  "column": 7,
                  "line": 119
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                1917,
                1918
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 119
                },
                "start": {
                  "column": 9,
                  "line": 119
                }
              }
            },
            "range": [
              1915,
              1918
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 119
              },
              "start": {
                "column": 7,
                "line": 119
              }
            }
          },
          "range": [
            1908,
            1918
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 119
            },
            "start": {
              "column": 0,
              "line": 119
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "range": [
                  1924,
                  1925
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 119
                  },
                  "start": {
                    "column": 16,
                    "line": 119
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
                  1926,
                  1927
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 119
                  },
                  "start": {
                    "column": 18,
                    "line": 119
                  }
                }
              },
              "range": [
                1924,
                1927
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 119
                },
                "start": {
                  "column": 16,
                  "line": 119
                }
              }
            },
            {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "range": [
                  1929,
                  1930
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 119
                  },
                  "start": {
                    "column": 21,
                    "line": 119
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  1931,
                  1932
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 119
                  },
                  "start": {
                    "column": 23,
                    "line": 119
                  }
                }
              },
              "range": [
                1929,
                1932
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 119
                },
                "start": {
                  "column": 21,
                  "line": 119
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "range": [
              1922,
              1923
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 119
              },
              "start": {
                "column": 14,
                "line": 119
              }
            }
          },
          "optional": false,
          "range": [
            1922,
            1933
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 119
            },
            "start": {
              "column": 14,
              "line": 119
            }
          }
        },
        "range": [
          1908,
          1933
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 119
          },
          "start": {
            "column": 0,
            "line": 119
          }
        }
      },
      "range": [
        1908,
        1934
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 119
        },
        "start": {
          "column": 0,
          "line": 119
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "operator": "&&",
        "left": {
          "type": "LogicalExpression",
          "operator": "&&",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "range": [
                1936,
                1937
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 121
                },
                "start": {
                  "column": 0,
                  "line": 121
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                1938,
                1939
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 121
                },
                "start": {
                  "column": 2,
                  "line": 121
                }
              }
            },
            "range": [
              1936,
              1939
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 121
              },
              "start": {
                "column": 0,
                "line": 121
              }
            }
          },
          "right": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "range": [
                1943,
                1944
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 121
                },
                "start": {
                  "column": 7,
                  "line": 121
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
                1945,
                1946
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 121
                },
                "start": {
                  "column": 9,
                  "line": 121
                }
              }
            },
            "range": [
              1943,
              1946
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 121
              },
              "start": {
                "column": 7,
                "line": 121
              }
            }
          },
          "range": [
            1936,
            1946
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 121
            },
            "start": {
              "column": 0,
              "line": 121
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "range": [
                  1952,
                  1953
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 121
                  },
                  "start": {
                    "column": 16,
                    "line": 121
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
                  1954,
                  1955
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 121
                  },
                  "start": {
                    "column": 18,
                    "line": 121
                  }
                }
              },
              "range": [
                1952,
                1955
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 121
                },
                "start": {
                  "column": 16,
                  "line": 121
                }
              }
            },
            {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "range": [
                  1957,
                  1958
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 121
                  },
                  "start": {
                    "column": 21,
                    "line": 121
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  1959,
                  1960
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 121
                  },
                  "start": {
                    "column": 23,
                    "line": 121
                  }
                }
              },
              "range": [
                1957,
                1960
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 121
                },
                "start": {
                  "column": 21,
                  "line": 121
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "range": [
              1950,
              1951
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 121
              },
              "start": {
                "column": 14,
                "line": 121
              }
            }
          },
          "optional": false,
          "range": [
            1950,
            1961
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 121
            },
            "start": {
              "column": 14,
              "line": 121
            }
          }
        },
        "range": [
          1936,
          1961
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 121
          },
          "start": {
            "column": 0,
            "line": 121
          }
        }
      },
      "range": [
        1936,
        1962
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 121
        },
        "start": {
          "column": 0,
          "line": 121
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Additive",
        "optional": false,
        "range": [
          1991,
          1999
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 125
          },
          "start": {
            "column": 5,
            "line": 125
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'+'",
              "value": "+",
              "range": [
                2002,
                2005
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 125
                },
                "start": {
                  "column": 16,
                  "line": 125
                }
              }
            },
            "range": [
              2002,
              2005
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 125
              },
              "start": {
                "column": 16,
                "line": 125
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'-'",
              "value": "-",
              "range": [
                2008,
                2011
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 125
                },
                "start": {
                  "column": 22,
                  "line": 125
                }
              }
            },
            "range": [
              2008,
              2011
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 125
              },
              "start": {
                "column": 22,
                "line": 125
              }
            }
          }
        ],
        "range": [
          2002,
          2011
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 125
          },
          "start": {
            "column": 16,
            "line": 125
          }
        }
      },
      "range": [
        1986,
        2012
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 125
        },
        "start": {
          "column": 0,
          "line": 125
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Multiplicative",
        "optional": false,
        "range": [
          2018,
          2032
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 126
          },
          "start": {
            "column": 5,
            "line": 126
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'*'",
              "value": "*",
              "range": [
                2035,
                2038
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 126
                },
                "start": {
                  "column": 22,
                  "line": 126
                }
              }
            },
            "range": [
              2035,
              2038
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 126
              },
              "start": {
                "column": 22,
                "line": 126
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'/'",
              "value": "/",
              "range": [
                2041,
                2044
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 126
                },
                "start": {
                  "column": 28,
                  "line": 126
                }
              }
            },
            "range": [
              2041,
              2044
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 126
              },
              "start": {
                "column": 28,
                "line": 126
              }
            }
          }
        ],
        "range": [
          2035,
          2044
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 126
          },
          "start": {
            "column": 22,
            "line": 126
          }
        }
      },
      "range": [
        2013,
        2045
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 126
        },
        "start": {
          "column": 0,
          "line": 126
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2069,
          2090
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "range": [
                2075,
                2078
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 129
                },
                "start": {
                  "column": 4,
                  "line": 129
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
                  "line": 129
                },
                "start": {
                  "column": 7,
                  "line": 129
                }
              },
              "range": [
                2078,
                2088
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Additive",
                  "optional": false,
                  "range": [
                    2080,
                    2088
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 129
                    },
                    "start": {
                      "column": 9,
                      "line": 129
                    }
                  }
                },
                "range": [
                  2080,
                  2088
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 129
                  },
                  "start": {
                    "column": 9,
                    "line": 129
                  }
                }
              }
            },
            "range": [
              2075,
              2088
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 129
              },
              "start": {
                "column": 4,
                "line": 129
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 130
          },
          "start": {
            "column": 22,
            "line": 128
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AdditiveObj",
        "optional": false,
        "range": [
          2057,
          2068
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 128
          },
          "start": {
            "column": 10,
            "line": 128
          }
        }
      },
      "range": [
        2047,
        2090
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 130
        },
        "start": {
          "column": 0,
          "line": 128
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2120,
          2147
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "range": [
                2126,
                2129
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 133
                },
                "start": {
                  "column": 4,
                  "line": 133
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
                  "column": 23,
                  "line": 133
                },
                "start": {
                  "column": 7,
                  "line": 133
                }
              },
              "range": [
                2129,
                2145
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Multiplicative",
                  "optional": false,
                  "range": [
                    2131,
                    2145
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 133
                    },
                    "start": {
                      "column": 9,
                      "line": 133
                    }
                  }
                },
                "range": [
                  2131,
                  2145
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 133
                  },
                  "start": {
                    "column": 9,
                    "line": 133
                  }
                }
              }
            },
            "range": [
              2126,
              2145
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 133
              },
              "start": {
                "column": 4,
                "line": 133
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 134
          },
          "start": {
            "column": 28,
            "line": 132
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MultiplicativeObj",
        "optional": false,
        "range": [
          2102,
          2119
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 132
          },
          "start": {
            "column": 10,
            "line": 132
          }
        }
      },
      "range": [
        2092,
        2147
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 134
        },
        "start": {
          "column": 0,
          "line": 132
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "range": [
          2154,
          2157
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 136
          },
          "start": {
            "column": 5,
            "line": 136
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AdditiveObj",
              "optional": false,
              "range": [
                2160,
                2171
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 136
                },
                "start": {
                  "column": 11,
                  "line": 136
                }
              }
            },
            "range": [
              2160,
              2171
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 136
              },
              "start": {
                "column": 11,
                "line": 136
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MultiplicativeObj",
              "optional": false,
              "range": [
                2174,
                2191
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 136
                },
                "start": {
                  "column": 25,
                  "line": 136
                }
              }
            },
            "range": [
              2174,
              2191
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 136
              },
              "start": {
                "column": 25,
                "line": 136
              }
            }
          }
        ],
        "range": [
          2160,
          2191
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 136
          },
          "start": {
            "column": 11,
            "line": 136
          }
        }
      },
      "range": [
        2149,
        2191
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 136
        },
        "start": {
          "column": 0,
          "line": 136
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2193,
        2336
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "SwitchStatement",
              "cases": [
                {
                  "type": "SwitchCase",
                  "consequent": [
                    {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false,
                                  "range": [
                                    2289,
                                    2292
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 141
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 141
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
                                    2293,
                                    2296
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 141
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 141
                                    }
                                  }
                                },
                                "range": [
                                  2289,
                                  2296
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 141
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 141
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "onlyPlus",
                              "optional": false,
                              "range": [
                                2280,
                                2288
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 141
                                },
                                "start": {
                                  "column": 12,
                                  "line": 141
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              2280,
                              2297
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 141
                              },
                              "start": {
                                "column": 12,
                                "line": 141
                              }
                            }
                          },
                          "range": [
                            2280,
                            2298
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 141
                            },
                            "start": {
                              "column": 12,
                              "line": 141
                            }
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": null,
                          "range": [
                            2311,
                            2318
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 142
                            },
                            "start": {
                              "column": 12,
                              "line": 142
                            }
                          }
                        }
                      ],
                      "range": [
                        2266,
                        2328
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 143
                        },
                        "start": {
                          "column": 18,
                          "line": 140
                        }
                      }
                    }
                  ],
                  "test": {
                    "type": "Literal",
                    "raw": "'+'",
                    "value": "+",
                    "range": [
                      2261,
                      2264
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 140
                      },
                      "start": {
                        "column": 13,
                        "line": 140
                      }
                    }
                  },
                  "range": [
                    2256,
                    2328
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 143
                    },
                    "start": {
                      "column": 8,
                      "line": 140
                    }
                  }
                }
              ],
              "discriminant": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    2237,
                    2240
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 139
                    },
                    "start": {
                      "column": 12,
                      "line": 139
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
                    2241,
                    2244
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 139
                    },
                    "start": {
                      "column": 16,
                      "line": 139
                    }
                  }
                },
                "range": [
                  2237,
                  2244
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 139
                  },
                  "start": {
                    "column": 12,
                    "line": 139
                  }
                }
              },
              "range": [
                2229,
                2334
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 144
                },
                "start": {
                  "column": 4,
                  "line": 139
                }
              }
            }
          ],
          "range": [
            2223,
            2336
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 145
            },
            "start": {
              "column": 30,
              "line": 138
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            2209,
            2212
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 138
            },
            "start": {
              "column": 16,
              "line": 138
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
                  "column": 28,
                  "line": 138
                },
                "start": {
                  "column": 23,
                  "line": 138
                }
              },
              "range": [
                2216,
                2221
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "range": [
                    2218,
                    2221
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 138
                    },
                    "start": {
                      "column": 25,
                      "line": 138
                    }
                  }
                },
                "range": [
                  2218,
                  2221
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 138
                  },
                  "start": {
                    "column": 25,
                    "line": 138
                  }
                }
              }
            },
            "range": [
              2213,
              2221
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 138
              },
              "start": {
                "column": 20,
                "line": 138
              }
            }
          }
        ],
        "range": [
          2200,
          2336
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 145
          },
          "start": {
            "column": 7,
            "line": 138
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 145
        },
        "start": {
          "column": 0,
          "line": 138
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
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "range": [
                2377,
                2380
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 148
                },
                "start": {
                  "column": 9,
                  "line": 148
                }
              }
            },
            "range": [
              2370,
              2381
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 148
              },
              "start": {
                "column": 2,
                "line": 148
              }
            }
          }
        ],
        "range": [
          2366,
          2383
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 149
          },
          "start": {
            "column": 28,
            "line": 147
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "onlyPlus",
        "optional": false,
        "range": [
          2347,
          2355
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 147
          },
          "start": {
            "column": 9,
            "line": 147
          }
        }
      },
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
                "column": 26,
                "line": 147
              },
              "start": {
                "column": 21,
                "line": 147
              }
            },
            "range": [
              2359,
              2364
            ],
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'+'",
                "value": "+",
                "range": [
                  2361,
                  2364
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 147
                  },
                  "start": {
                    "column": 23,
                    "line": 147
                  }
                }
              },
              "range": [
                2361,
                2364
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 147
                },
                "start": {
                  "column": 23,
                  "line": 147
                }
              }
            }
          },
          "range": [
            2356,
            2364
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 147
            },
            "start": {
              "column": 18,
              "line": 147
            }
          }
        }
      ],
      "range": [
        2338,
        2383
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 149
        },
        "start": {
          "column": 0,
          "line": 147
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
        "name": "never",
        "optional": false,
        "range": [
          2424,
          2429
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 153
          },
          "start": {
            "column": 17,
            "line": 153
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 35,
                "line": 153
              },
              "start": {
                "column": 28,
                "line": 153
              }
            },
            "range": [
              2435,
              2442
            ],
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "range": [
                2437,
                2442
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 153
                },
                "start": {
                  "column": 30,
                  "line": 153
                }
              }
            }
          },
          "range": [
            2430,
            2442
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 153
            },
            "start": {
              "column": 23,
              "line": 153
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 43,
            "line": 153
          },
          "start": {
            "column": 36,
            "line": 153
          }
        },
        "range": [
          2443,
          2450
        ],
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "range": [
            2445,
            2450
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 153
            },
            "start": {
              "column": 38,
              "line": 153
            }
          }
        }
      },
      "range": [
        2407,
        2451
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 153
        },
        "start": {
          "column": 0,
          "line": 153
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          2472,
          2503
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar1",
              "optional": false,
              "range": [
                2478,
                2482
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 156
                },
                "start": {
                  "column": 4,
                  "line": 156
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                2485,
                2486
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 156
                },
                "start": {
                  "column": 11,
                  "line": 156
                }
              }
            },
            "range": [
              2478,
              2486
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 156
              },
              "start": {
                "column": 4,
                "line": 156
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar2",
              "optional": false,
              "range": [
                2492,
                2496
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 157
                },
                "start": {
                  "column": 4,
                  "line": 157
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                2499,
                2500
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 157
                },
                "start": {
                  "column": 11,
                  "line": 157
                }
              }
            },
            "range": [
              2492,
              2500
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 157
              },
              "start": {
                "column": 4,
                "line": 157
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 158
          },
          "start": {
            "column": 19,
            "line": 155
          }
        }
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BarEnum",
        "optional": false,
        "range": [
          2464,
          2471
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 155
          },
          "start": {
            "column": 11,
            "line": 155
          }
        }
      },
      "range": [
        2453,
        2503
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 158
        },
        "start": {
          "column": 0,
          "line": 155
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnionOfBar",
        "optional": false,
        "range": [
          2510,
          2520
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 160
          },
          "start": {
            "column": 5,
            "line": 160
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeBar1",
              "optional": false,
              "range": [
                2523,
                2531
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 160
                },
                "start": {
                  "column": 18,
                  "line": 160
                }
              }
            },
            "range": [
              2523,
              2531
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 160
              },
              "start": {
                "column": 18,
                "line": 160
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeBar2",
              "optional": false,
              "range": [
                2534,
                2542
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 160
                },
                "start": {
                  "column": 29,
                  "line": 160
                }
              }
            },
            "range": [
              2534,
              2542
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 160
              },
              "start": {
                "column": 29,
                "line": 160
              }
            }
          }
        ],
        "range": [
          2523,
          2542
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 160
          },
          "start": {
            "column": 18,
            "line": 160
          }
        }
      },
      "range": [
        2505,
        2543
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 160
        },
        "start": {
          "column": 0,
          "line": 160
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeBar1",
        "optional": false,
        "range": [
          2549,
          2557
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 161
          },
          "start": {
            "column": 5,
            "line": 161
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
              "name": "type",
              "optional": false,
              "range": [
                2562,
                2566
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 161
                },
                "start": {
                  "column": 18,
                  "line": 161
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
                  "column": 36,
                  "line": 161
                },
                "start": {
                  "column": 22,
                  "line": 161
                }
              },
              "range": [
                2566,
                2580
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BarEnum",
                    "optional": false,
                    "range": [
                      2568,
                      2575
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 161
                      },
                      "start": {
                        "column": 24,
                        "line": 161
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar1",
                    "optional": false,
                    "range": [
                      2576,
                      2580
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 161
                      },
                      "start": {
                        "column": 32,
                        "line": 161
                      }
                    }
                  },
                  "range": [
                    2568,
                    2580
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 161
                    },
                    "start": {
                      "column": 24,
                      "line": 161
                    }
                  }
                },
                "range": [
                  2568,
                  2580
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 161
                  },
                  "start": {
                    "column": 24,
                    "line": 161
                  }
                }
              }
            },
            "range": [
              2562,
              2580
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 161
              },
              "start": {
                "column": 18,
                "line": 161
              }
            }
          }
        ],
        "range": [
          2560,
          2582
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 161
          },
          "start": {
            "column": 16,
            "line": 161
          }
        }
      },
      "range": [
        2544,
        2583
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 161
        },
        "start": {
          "column": 0,
          "line": 161
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeBar2",
        "optional": false,
        "range": [
          2589,
          2597
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 162
          },
          "start": {
            "column": 5,
            "line": 162
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
              "name": "type",
              "optional": false,
              "range": [
                2602,
                2606
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 162
                },
                "start": {
                  "column": 18,
                  "line": 162
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
                  "column": 36,
                  "line": 162
                },
                "start": {
                  "column": 22,
                  "line": 162
                }
              },
              "range": [
                2606,
                2620
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BarEnum",
                    "optional": false,
                    "range": [
                      2608,
                      2615
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 162
                      },
                      "start": {
                        "column": 24,
                        "line": 162
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar2",
                    "optional": false,
                    "range": [
                      2616,
                      2620
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 162
                      },
                      "start": {
                        "column": 32,
                        "line": 162
                      }
                    }
                  },
                  "range": [
                    2608,
                    2620
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 162
                    },
                    "start": {
                      "column": 24,
                      "line": 162
                    }
                  }
                },
                "range": [
                  2608,
                  2620
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 162
                  },
                  "start": {
                    "column": 24,
                    "line": 162
                  }
                }
              }
            },
            "range": [
              2602,
              2620
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 162
              },
              "start": {
                "column": 18,
                "line": 162
              }
            }
          }
        ],
        "range": [
          2600,
          2622
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 162
          },
          "start": {
            "column": 16,
            "line": 162
          }
        }
      },
      "range": [
        2584,
        2623
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 162
        },
        "start": {
          "column": 0,
          "line": 162
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
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "range": [
                            2783,
                            2789
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 168
                            },
                            "start": {
                              "column": 16,
                              "line": 168
                            }
                          }
                        }
                      ],
                      "test": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "BarEnum",
                          "optional": false,
                          "range": [
                            2753,
                            2760
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 167
                            },
                            "start": {
                              "column": 17,
                              "line": 167
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar1",
                          "optional": false,
                          "range": [
                            2761,
                            2765
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 167
                            },
                            "start": {
                              "column": 25,
                              "line": 167
                            }
                          }
                        },
                        "range": [
                          2753,
                          2765
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 167
                          },
                          "start": {
                            "column": 17,
                            "line": 167
                          }
                        }
                      },
                      "range": [
                        2748,
                        2789
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 168
                        },
                        "start": {
                          "column": 12,
                          "line": 167
                        }
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "range": [
                            2837,
                            2843
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 170
                            },
                            "start": {
                              "column": 16,
                              "line": 170
                            }
                          }
                        }
                      ],
                      "test": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "BarEnum",
                          "optional": false,
                          "range": [
                            2807,
                            2814
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 169
                            },
                            "start": {
                              "column": 17,
                              "line": 169
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar2",
                          "optional": false,
                          "range": [
                            2815,
                            2819
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 169
                            },
                            "start": {
                              "column": 25,
                              "line": 169
                            }
                          }
                        },
                        "range": [
                          2807,
                          2819
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 169
                          },
                          "start": {
                            "column": 17,
                            "line": 169
                          }
                        }
                      },
                      "range": [
                        2802,
                        2843
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 170
                        },
                        "start": {
                          "column": 12,
                          "line": 169
                        }
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "range": [
                                    2887,
                                    2892
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 172
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 172
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "range": [
                                    2893,
                                    2897
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 172
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 172
                                    }
                                  }
                                },
                                "range": [
                                  2887,
                                  2897
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 172
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 172
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "never",
                              "optional": false,
                              "range": [
                                2881,
                                2886
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 172
                                },
                                "start": {
                                  "column": 16,
                                  "line": 172
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              2881,
                              2898
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 172
                              },
                              "start": {
                                "column": 16,
                                "line": 172
                              }
                            }
                          },
                          "range": [
                            2881,
                            2899
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 172
                            },
                            "start": {
                              "column": 16,
                              "line": 172
                            }
                          }
                        }
                      ],
                      "test": null,
                      "range": [
                        2856,
                        2899
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 172
                        },
                        "start": {
                          "column": 12,
                          "line": 171
                        }
                      }
                    }
                  ],
                  "discriminant": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "range": [
                        2722,
                        2727
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 166
                        },
                        "start": {
                          "column": 16,
                          "line": 166
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "range": [
                        2728,
                        2732
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 166
                        },
                        "start": {
                          "column": 22,
                          "line": 166
                        }
                      }
                    },
                    "range": [
                      2722,
                      2732
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 166
                      },
                      "start": {
                        "column": 16,
                        "line": 166
                      }
                    }
                  },
                  "range": [
                    2714,
                    2909
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 173
                    },
                    "start": {
                      "column": 8,
                      "line": 166
                    }
                  }
                }
              ],
              "range": [
                2704,
                2915
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 174
                },
                "start": {
                  "column": 34,
                  "line": 165
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    2678,
                    2683
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 165
                    },
                    "start": {
                      "column": 8,
                      "line": 165
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "range": [
                    2684,
                    2688
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 165
                    },
                    "start": {
                      "column": 14,
                      "line": 165
                    }
                  }
                },
                "range": [
                  2678,
                  2688
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 165
                  },
                  "start": {
                    "column": 8,
                    "line": 165
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "range": [
                  2693,
                  2702
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 165
                  },
                  "start": {
                    "column": 23,
                    "line": 165
                  }
                }
              },
              "range": [
                2678,
                2702
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 165
                },
                "start": {
                  "column": 8,
                  "line": 165
                }
              }
            },
            "range": [
              2674,
              2915
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 174
              },
              "start": {
                "column": 4,
                "line": 165
              }
            }
          }
        ],
        "range": [
          2668,
          2917
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 175
          },
          "start": {
            "column": 43,
            "line": 164
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func3",
        "optional": false,
        "range": [
          2634,
          2639
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 164
          },
          "start": {
            "column": 9,
            "line": 164
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 41,
                "line": 164
              },
              "start": {
                "column": 20,
                "line": 164
              }
            },
            "range": [
              2645,
              2666
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2654,
                  2666
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "UnionOfBar",
                      "optional": false,
                      "range": [
                        2655,
                        2665
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 164
                        },
                        "start": {
                          "column": 30,
                          "line": 164
                        }
                      }
                    },
                    "range": [
                      2655,
                      2665
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 164
                      },
                      "start": {
                        "column": 30,
                        "line": 164
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 164
                  },
                  "start": {
                    "column": 29,
                    "line": 164
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "range": [
                  2647,
                  2654
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 164
                  },
                  "start": {
                    "column": 22,
                    "line": 164
                  }
                }
              },
              "range": [
                2647,
                2666
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 164
                },
                "start": {
                  "column": 22,
                  "line": 164
                }
              }
            }
          },
          "range": [
            2640,
            2666
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 164
            },
            "start": {
              "column": 15,
              "line": 164
            }
          }
        }
      ],
      "range": [
        2625,
        2917
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 175
        },
        "start": {
          "column": 0,
          "line": 164
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2957,
          3006
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Name",
              "optional": false,
              "range": [
                2963,
                2967
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 180
                },
                "start": {
                  "column": 4,
                  "line": 180
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
                  "line": 180
                },
                "start": {
                  "column": 8,
                  "line": 180
                }
              },
              "range": [
                2967,
                2976
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"TypeA\"",
                  "value": "TypeA",
                  "range": [
                    2969,
                    2976
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 180
                    },
                    "start": {
                      "column": 10,
                      "line": 180
                    }
                  }
                },
                "range": [
                  2969,
                  2976
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 180
                  },
                  "start": {
                    "column": 10,
                    "line": 180
                  }
                }
              }
            },
            "range": [
              2963,
              2977
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 180
              },
              "start": {
                "column": 4,
                "line": 180
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value1",
              "optional": false,
              "range": [
                2982,
                2988
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 181
                },
                "start": {
                  "column": 4,
                  "line": 181
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
                  "column": 25,
                  "line": 181
                },
                "start": {
                  "column": 10,
                  "line": 181
                }
              },
              "range": [
                2988,
                3003
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"Cool stuff!\"",
                  "value": "Cool stuff!",
                  "range": [
                    2990,
                    3003
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 181
                    },
                    "start": {
                      "column": 12,
                      "line": 181
                    }
                  }
                },
                "range": [
                  2990,
                  3003
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 181
                  },
                  "start": {
                    "column": 12,
                    "line": 181
                  }
                }
              }
            },
            "range": [
              2982,
              3004
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 181
              },
              "start": {
                "column": 4,
                "line": 181
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 182
          },
          "start": {
            "column": 16,
            "line": 179
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeA",
        "optional": false,
        "range": [
          2951,
          2956
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 179
          },
          "start": {
            "column": 10,
            "line": 179
          }
        }
      },
      "range": [
        2941,
        3006
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 182
        },
        "start": {
          "column": 0,
          "line": 179
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          3024,
          3061
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Name",
              "optional": false,
              "range": [
                3030,
                3034
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 185
                },
                "start": {
                  "column": 4,
                  "line": 185
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
                  "line": 185
                },
                "start": {
                  "column": 8,
                  "line": 185
                }
              },
              "range": [
                3034,
                3043
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"TypeB\"",
                  "value": "TypeB",
                  "range": [
                    3036,
                    3043
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 185
                    },
                    "start": {
                      "column": 10,
                      "line": 185
                    }
                  }
                },
                "range": [
                  3036,
                  3043
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 185
                  },
                  "start": {
                    "column": 10,
                    "line": 185
                  }
                }
              }
            },
            "range": [
              3030,
              3044
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 185
              },
              "start": {
                "column": 4,
                "line": 185
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value2",
              "optional": false,
              "range": [
                3049,
                3055
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 186
                },
                "start": {
                  "column": 4,
                  "line": 186
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
                  "column": 13,
                  "line": 186
                },
                "start": {
                  "column": 10,
                  "line": 186
                }
              },
              "range": [
                3055,
                3058
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    3057,
                    3058
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 186
                    },
                    "start": {
                      "column": 12,
                      "line": 186
                    }
                  }
                },
                "range": [
                  3057,
                  3058
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 186
                  },
                  "start": {
                    "column": 12,
                    "line": 186
                  }
                }
              }
            },
            "range": [
              3049,
              3059
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 186
              },
              "start": {
                "column": 4,
                "line": 186
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 187
          },
          "start": {
            "column": 16,
            "line": 184
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeB",
        "optional": false,
        "range": [
          3018,
          3023
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 184
          },
          "start": {
            "column": 10,
            "line": 184
          }
        }
      },
      "range": [
        3008,
        3061
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 187
        },
        "start": {
          "column": 0,
          "line": 184
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Type",
        "optional": false,
        "range": [
          3068,
          3072
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 189
          },
          "start": {
            "column": 5,
            "line": 189
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeA",
              "optional": false,
              "range": [
                3075,
                3080
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 189
                },
                "start": {
                  "column": 12,
                  "line": 189
                }
              }
            },
            "range": [
              3075,
              3080
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 189
              },
              "start": {
                "column": 12,
                "line": 189
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeB",
              "optional": false,
              "range": [
                3083,
                3088
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 189
                },
                "start": {
                  "column": 20,
                  "line": 189
                }
              }
            },
            "range": [
              3083,
              3088
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 189
              },
              "start": {
                "column": 20,
                "line": 189
              }
            }
          }
        ],
        "range": [
          3075,
          3088
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 189
          },
          "start": {
            "column": 12,
            "line": 189
          }
        }
      },
      "range": [
        3063,
        3089
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 189
        },
        "start": {
          "column": 0,
          "line": 189
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
        "name": "isType",
        "optional": false,
        "range": [
          3108,
          3114
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 191
          },
          "start": {
            "column": 17,
            "line": 191
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
                "column": 34,
                "line": 191
              },
              "start": {
                "column": 25,
                "line": 191
              }
            },
            "range": [
              3116,
              3125
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                3118,
                3125
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 191
                },
                "start": {
                  "column": 27,
                  "line": 191
                }
              }
            }
          },
          "range": [
            3115,
            3125
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 191
            },
            "start": {
              "column": 24,
              "line": 191
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 46,
            "line": 191
          },
          "start": {
            "column": 35,
            "line": 191
          }
        },
        "range": [
          3126,
          3137
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              3128,
              3129
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 191
              },
              "start": {
                "column": 37,
                "line": 191
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 46,
                "line": 191
              },
              "start": {
                "column": 42,
                "line": 191
              }
            },
            "range": [
              3133,
              3137
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Type",
                "optional": false,
                "range": [
                  3133,
                  3137
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 191
                  },
                  "start": {
                    "column": 42,
                    "line": 191
                  }
                }
              },
              "range": [
                3133,
                3137
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 191
                },
                "start": {
                  "column": 42,
                  "line": 191
                }
              }
            }
          },
          "range": [
            3128,
            3137
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 191
            },
            "start": {
              "column": 37,
              "line": 191
            }
          }
        }
      },
      "range": [
        3091,
        3138
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 191
        },
        "start": {
          "column": 0,
          "line": 191
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
                        "name": "value1",
                        "optional": false,
                        "range": [
                          3224,
                          3230
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 195
                          },
                          "start": {
                            "column": 14,
                            "line": 195
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "range": [
                            3233,
                            3237
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 195
                            },
                            "start": {
                              "column": 23,
                              "line": 195
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Value1",
                          "optional": false,
                          "range": [
                            3238,
                            3244
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 195
                            },
                            "start": {
                              "column": 28,
                              "line": 195
                            }
                          }
                        },
                        "range": [
                          3233,
                          3244
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 195
                          },
                          "start": {
                            "column": 23,
                            "line": 195
                          }
                        }
                      },
                      "range": [
                        3224,
                        3244
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 195
                        },
                        "start": {
                          "column": 14,
                          "line": 195
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    3218,
                    3245
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 195
                    },
                    "start": {
                      "column": 8,
                      "line": 195
                    }
                  }
                }
              ],
              "range": [
                3208,
                3251
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 196
                },
                "start": {
                  "column": 31,
                  "line": 194
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "range": [
                    3185,
                    3189
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 194
                    },
                    "start": {
                      "column": 8,
                      "line": 194
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Name",
                  "optional": false,
                  "range": [
                    3190,
                    3194
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 194
                    },
                    "start": {
                      "column": 13,
                      "line": 194
                    }
                  }
                },
                "range": [
                  3185,
                  3194
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 194
                  },
                  "start": {
                    "column": 8,
                    "line": 194
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"TypeA\"",
                "value": "TypeA",
                "range": [
                  3199,
                  3206
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 194
                  },
                  "start": {
                    "column": 22,
                    "line": 194
                  }
                }
              },
              "range": [
                3185,
                3206
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 194
                },
                "start": {
                  "column": 8,
                  "line": 194
                }
              }
            },
            "range": [
              3181,
              3251
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 196
              },
              "start": {
                "column": 4,
                "line": 194
              }
            }
          }
        ],
        "range": [
          3175,
          3253
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 197
          },
          "start": {
            "column": 35,
            "line": 193
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WorksProperly",
        "optional": false,
        "range": [
          3149,
          3162
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 193
          },
          "start": {
            "column": 9,
            "line": 193
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 193
              },
              "start": {
                "column": 27,
                "line": 193
              }
            },
            "range": [
              3167,
              3173
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Type",
                "optional": false,
                "range": [
                  3169,
                  3173
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 193
                  },
                  "start": {
                    "column": 29,
                    "line": 193
                  }
                }
              },
              "range": [
                3169,
                3173
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 193
                },
                "start": {
                  "column": 29,
                  "line": 193
                }
              }
            }
          },
          "range": [
            3163,
            3173
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 193
            },
            "start": {
              "column": 23,
              "line": 193
            }
          }
        }
      ],
      "range": [
        3140,
        3253
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 197
        },
        "start": {
          "column": 0,
          "line": 193
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
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
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
                              "name": "value1",
                              "optional": false,
                              "range": [
                                3372,
                                3378
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 202
                                },
                                "start": {
                                  "column": 18,
                                  "line": 202
                                }
                              }
                            },
                            "init": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "data",
                                "optional": false,
                                "range": [
                                  3381,
                                  3385
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 202
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 202
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Value1",
                                "optional": false,
                                "range": [
                                  3386,
                                  3392
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 202
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 202
                                  }
                                }
                              },
                              "range": [
                                3381,
                                3392
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 202
                                },
                                "start": {
                                  "column": 27,
                                  "line": 202
                                }
                              }
                            },
                            "range": [
                              3372,
                              3392
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 202
                              },
                              "start": {
                                "column": 18,
                                "line": 202
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          3366,
                          3393
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 202
                          },
                          "start": {
                            "column": 12,
                            "line": 202
                          }
                        }
                      }
                    ],
                    "range": [
                      3352,
                      3403
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 203
                      },
                      "start": {
                        "column": 35,
                        "line": 201
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "range": [
                          3329,
                          3333
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 201
                          },
                          "start": {
                            "column": 12,
                            "line": 201
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Name",
                        "optional": false,
                        "range": [
                          3334,
                          3338
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 201
                          },
                          "start": {
                            "column": 17,
                            "line": 201
                          }
                        }
                      },
                      "range": [
                        3329,
                        3338
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 201
                        },
                        "start": {
                          "column": 12,
                          "line": 201
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"TypeA\"",
                      "value": "TypeA",
                      "range": [
                        3343,
                        3350
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 201
                        },
                        "start": {
                          "column": 26,
                          "line": 201
                        }
                      }
                    },
                    "range": [
                      3329,
                      3350
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 201
                      },
                      "start": {
                        "column": 12,
                        "line": 201
                      }
                    }
                  },
                  "range": [
                    3325,
                    3403
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 203
                    },
                    "start": {
                      "column": 8,
                      "line": 201
                    }
                  }
                }
              ],
              "range": [
                3315,
                3409
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 204
                },
                "start": {
                  "column": 22,
                  "line": 200
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "range": [
                    3308,
                    3312
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 200
                    },
                    "start": {
                      "column": 15,
                      "line": 200
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isType",
                "optional": false,
                "range": [
                  3301,
                  3307
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 200
                  },
                  "start": {
                    "column": 8,
                    "line": 200
                  }
                }
              },
              "optional": false,
              "range": [
                3301,
                3313
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 200
                },
                "start": {
                  "column": 8,
                  "line": 200
                }
              }
            },
            "range": [
              3297,
              3409
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 204
              },
              "start": {
                "column": 4,
                "line": 200
              }
            }
          }
        ],
        "range": [
          3291,
          3411
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 205
          },
          "start": {
            "column": 36,
            "line": 199
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DoesNotWork",
        "optional": false,
        "range": [
          3264,
          3275
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 199
          },
          "start": {
            "column": 9,
            "line": 199
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 199
              },
              "start": {
                "column": 25,
                "line": 199
              }
            },
            "range": [
              3280,
              3289
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                3282,
                3289
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 199
                },
                "start": {
                  "column": 27,
                  "line": 199
                }
              }
            }
          },
          "range": [
            3276,
            3289
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 199
            },
            "start": {
              "column": 21,
              "line": 199
            }
          }
        }
      ],
      "range": [
        3255,
        3411
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 205
        },
        "start": {
          "column": 0,
          "line": 199
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestA",
        "optional": false,
        "range": [
          3440,
          3445
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 209
          },
          "start": {
            "column": 5,
            "line": 209
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
              "name": "type",
              "optional": false,
              "range": [
                3454,
                3458
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 210
                },
                "start": {
                  "column": 4,
                  "line": 210
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
                  "line": 210
                },
                "start": {
                  "column": 8,
                  "line": 210
                }
              },
              "range": [
                3458,
                3467
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'testA'",
                  "value": "testA",
                  "range": [
                    3460,
                    3467
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 210
                    },
                    "start": {
                      "column": 10,
                      "line": 210
                    }
                  }
                },
                "range": [
                  3460,
                  3467
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 210
                  },
                  "start": {
                    "column": 10,
                    "line": 210
                  }
                }
              }
            },
            "range": [
              3454,
              3468
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 210
              },
              "start": {
                "column": 4,
                "line": 210
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bananas",
              "optional": false,
              "range": [
                3473,
                3480
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 211
                },
                "start": {
                  "column": 4,
                  "line": 211
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
                  "column": 14,
                  "line": 211
                },
                "start": {
                  "column": 11,
                  "line": 211
                }
              },
              "range": [
                3480,
                3483
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "3",
                  "value": 3,
                  "range": [
                    3482,
                    3483
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 211
                    },
                    "start": {
                      "column": 13,
                      "line": 211
                    }
                  }
                },
                "range": [
                  3482,
                  3483
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 211
                  },
                  "start": {
                    "column": 13,
                    "line": 211
                  }
                }
              }
            },
            "range": [
              3473,
              3484
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 211
              },
              "start": {
                "column": 4,
                "line": 211
              }
            }
          }
        ],
        "range": [
          3448,
          3486
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 212
          },
          "start": {
            "column": 13,
            "line": 209
          }
        }
      },
      "range": [
        3435,
        3486
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 212
        },
        "start": {
          "column": 0,
          "line": 209
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestB",
        "optional": false,
        "range": [
          3495,
          3500
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 214
          },
          "start": {
            "column": 5,
            "line": 214
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
              "name": "type",
              "optional": false,
              "range": [
                3509,
                3513
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 215
                },
                "start": {
                  "column": 4,
                  "line": 215
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
                  "line": 215
                },
                "start": {
                  "column": 8,
                  "line": 215
                }
              },
              "range": [
                3513,
                3522
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'testB'",
                  "value": "testB",
                  "range": [
                    3515,
                    3522
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 215
                    },
                    "start": {
                      "column": 10,
                      "line": 215
                    }
                  }
                },
                "range": [
                  3515,
                  3522
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 215
                  },
                  "start": {
                    "column": 10,
                    "line": 215
                  }
                }
              }
            },
            "range": [
              3509,
              3523
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 215
              },
              "start": {
                "column": 4,
                "line": 215
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "apples",
              "optional": false,
              "range": [
                3528,
                3534
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 216
                },
                "start": {
                  "column": 4,
                  "line": 216
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
                  "column": 13,
                  "line": 216
                },
                "start": {
                  "column": 10,
                  "line": 216
                }
              },
              "range": [
                3534,
                3537
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "5",
                  "value": 5,
                  "range": [
                    3536,
                    3537
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 216
                    },
                    "start": {
                      "column": 12,
                      "line": 216
                    }
                  }
                },
                "range": [
                  3536,
                  3537
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 216
                  },
                  "start": {
                    "column": 12,
                    "line": 216
                  }
                }
              }
            },
            "range": [
              3528,
              3538
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 216
              },
              "start": {
                "column": 4,
                "line": 216
              }
            }
          }
        ],
        "range": [
          3503,
          3540
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 217
          },
          "start": {
            "column": 13,
            "line": 214
          }
        }
      },
      "range": [
        3490,
        3540
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 217
        },
        "start": {
          "column": 0,
          "line": 214
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AllTests",
        "optional": false,
        "range": [
          3549,
          3557
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 219
          },
          "start": {
            "column": 5,
            "line": 219
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestA",
              "optional": false,
              "range": [
                3560,
                3565
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 219
                },
                "start": {
                  "column": 16,
                  "line": 219
                }
              }
            },
            "range": [
              3560,
              3565
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 219
              },
              "start": {
                "column": 16,
                "line": 219
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestB",
              "optional": false,
              "range": [
                3568,
                3573
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 219
                },
                "start": {
                  "column": 24,
                  "line": 219
                }
              }
            },
            "range": [
              3568,
              3573
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 219
              },
              "start": {
                "column": 24,
                "line": 219
              }
            }
          }
        ],
        "range": [
          3560,
          3573
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 219
          },
          "start": {
            "column": 16,
            "line": 219
          }
        }
      },
      "range": [
        3544,
        3574
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 219
        },
        "start": {
          "column": 0,
          "line": 219
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MapOfAllTests",
        "optional": false,
        "range": [
          3581,
          3594
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 221
          },
          "start": {
            "column": 5,
            "line": 221
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            3603,
            3621
          ],
          "params": [
            {
              "type": "TSStringKeyword",
              "range": [
                3604,
                3610
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 221
                },
                "start": {
                  "column": 28,
                  "line": 221
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AllTests",
                "optional": false,
                "range": [
                  3612,
                  3620
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 221
                  },
                  "start": {
                    "column": 36,
                    "line": 221
                  }
                }
              },
              "range": [
                3612,
                3620
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 221
                },
                "start": {
                  "column": 36,
                  "line": 221
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 221
            },
            "start": {
              "column": 27,
              "line": 221
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "range": [
            3597,
            3603
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 221
            },
            "start": {
              "column": 21,
              "line": 221
            }
          }
        },
        "range": [
          3597,
          3621
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 221
          },
          "start": {
            "column": 21,
            "line": 221
          }
        }
      },
      "range": [
        3576,
        3622
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 221
        },
        "start": {
          "column": 0,
          "line": 221
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
            "name": "doTestingStuff",
            "optional": false,
            "range": [
              3630,
              3644
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 223
              },
              "start": {
                "column": 6,
                "line": 223
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
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
                              "type": "VariableDeclaration",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "definite": false,
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "test",
                                    "optional": false,
                                    "range": [
                                      3731,
                                      3735
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 16,
                                        "line": 225
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 225
                                      }
                                    }
                                  },
                                  "init": null,
                                  "range": [
                                    3731,
                                    3735
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 225
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 225
                                    }
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "let",
                              "range": [
                                3727,
                                3736
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 225
                                },
                                "start": {
                                  "column": 8,
                                  "line": 225
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
                                  "name": "test",
                                  "optional": false,
                                  "range": [
                                    3745,
                                    3749
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 12,
                                      "line": 226
                                    },
                                    "start": {
                                      "column": 8,
                                      "line": 226
                                    }
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "mapOfTests",
                                    "optional": false,
                                    "range": [
                                      3752,
                                      3762
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 226
                                      },
                                      "start": {
                                        "column": 15,
                                        "line": 226
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "id",
                                    "optional": false,
                                    "range": [
                                      3763,
                                      3765
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 226
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 226
                                      }
                                    }
                                  },
                                  "range": [
                                    3752,
                                    3766
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 226
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 226
                                    }
                                  }
                                },
                                "range": [
                                  3745,
                                  3766
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 226
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 226
                                  }
                                }
                              },
                              "range": [
                                3745,
                                3767
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 226
                                },
                                "start": {
                                  "column": 8,
                                  "line": 226
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
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "arguments": [
                                        {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "test",
                                            "optional": false,
                                            "range": [
                                              3829,
                                              3833
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 28,
                                                "line": 228
                                              },
                                              "start": {
                                                "column": 24,
                                                "line": 228
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "bananas",
                                            "optional": false,
                                            "range": [
                                              3834,
                                              3841
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 36,
                                                "line": 228
                                              },
                                              "start": {
                                                "column": 29,
                                                "line": 228
                                              }
                                            }
                                          },
                                          "range": [
                                            3829,
                                            3841
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 36,
                                              "line": 228
                                            },
                                            "start": {
                                              "column": 24,
                                              "line": 228
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
                                          "name": "console",
                                          "optional": false,
                                          "range": [
                                            3817,
                                            3824
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 19,
                                              "line": 228
                                            },
                                            "start": {
                                              "column": 12,
                                              "line": 228
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "log",
                                          "optional": false,
                                          "range": [
                                            3825,
                                            3828
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 23,
                                              "line": 228
                                            },
                                            "start": {
                                              "column": 20,
                                              "line": 228
                                            }
                                          }
                                        },
                                        "range": [
                                          3817,
                                          3828
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 23,
                                            "line": 228
                                          },
                                          "start": {
                                            "column": 12,
                                            "line": 228
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "range": [
                                        3817,
                                        3842
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 37,
                                          "line": 228
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 228
                                        }
                                      }
                                    },
                                    "range": [
                                      3817,
                                      3843
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 228
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 228
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  3803,
                                  3853
                                ],
                                "loc": {
                                  "end": {
                                    "column": 9,
                                    "line": 229
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 227
                                  }
                                }
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "test",
                                    "optional": false,
                                    "range": [
                                      3780,
                                      3784
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 16,
                                        "line": 227
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 227
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "range": [
                                      3785,
                                      3789
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 227
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 227
                                      }
                                    }
                                  },
                                  "range": [
                                    3780,
                                    3789
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 227
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 227
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "'testA'",
                                  "value": "testA",
                                  "range": [
                                    3794,
                                    3801
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 227
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 227
                                    }
                                  }
                                },
                                "range": [
                                  3780,
                                  3801
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 227
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 227
                                  }
                                }
                              },
                              "range": [
                                3776,
                                3853
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 229
                                },
                                "start": {
                                  "column": 8,
                                  "line": 227
                                }
                              }
                            },
                            {
                              "type": "SwitchStatement",
                              "cases": [
                                {
                                  "type": "SwitchCase",
                                  "consequent": [
                                    {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "CallExpression",
                                            "arguments": [
                                              {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "test",
                                                  "optional": false,
                                                  "range": [
                                                    3939,
                                                    3943
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 32,
                                                      "line": 232
                                                    },
                                                    "start": {
                                                      "column": 28,
                                                      "line": 232
                                                    }
                                                  }
                                                },
                                                "optional": false,
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "bananas",
                                                  "optional": false,
                                                  "range": [
                                                    3944,
                                                    3951
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 40,
                                                      "line": 232
                                                    },
                                                    "start": {
                                                      "column": 33,
                                                      "line": 232
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  3939,
                                                  3951
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 40,
                                                    "line": 232
                                                  },
                                                  "start": {
                                                    "column": 28,
                                                    "line": 232
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
                                                "name": "console",
                                                "optional": false,
                                                "range": [
                                                  3927,
                                                  3934
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 23,
                                                    "line": 232
                                                  },
                                                  "start": {
                                                    "column": 16,
                                                    "line": 232
                                                  }
                                                }
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "log",
                                                "optional": false,
                                                "range": [
                                                  3935,
                                                  3938
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 27,
                                                    "line": 232
                                                  },
                                                  "start": {
                                                    "column": 24,
                                                    "line": 232
                                                  }
                                                }
                                              },
                                              "range": [
                                                3927,
                                                3938
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 27,
                                                  "line": 232
                                                },
                                                "start": {
                                                  "column": 16,
                                                  "line": 232
                                                }
                                              }
                                            },
                                            "optional": false,
                                            "range": [
                                              3927,
                                              3952
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 41,
                                                "line": 232
                                              },
                                              "start": {
                                                "column": 16,
                                                "line": 232
                                              }
                                            }
                                          },
                                          "range": [
                                            3927,
                                            3953
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 42,
                                              "line": 232
                                            },
                                            "start": {
                                              "column": 16,
                                              "line": 232
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        3909,
                                        3967
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 13,
                                          "line": 233
                                        },
                                        "start": {
                                          "column": 26,
                                          "line": 231
                                        }
                                      }
                                    }
                                  ],
                                  "test": {
                                    "type": "Literal",
                                    "raw": "'testA'",
                                    "value": "testA",
                                    "range": [
                                      3900,
                                      3907
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 231
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 231
                                      }
                                    }
                                  },
                                  "range": [
                                    3895,
                                    3967
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 233
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 231
                                    }
                                  }
                                }
                              ],
                              "discriminant": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "range": [
                                    3870,
                                    3874
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 230
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 230
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "range": [
                                    3875,
                                    3879
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 230
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 230
                                    }
                                  }
                                },
                                "range": [
                                  3870,
                                  3879
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 230
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 230
                                  }
                                }
                              },
                              "range": [
                                3862,
                                3977
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 234
                                },
                                "start": {
                                  "column": 8,
                                  "line": 230
                                }
                              }
                            }
                          ],
                          "range": [
                            3717,
                            3983
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 235
                            },
                            "start": {
                              "column": 22,
                              "line": 224
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
                            "name": "id",
                            "optional": false,
                            "range": [
                              3711,
                              3713
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 224
                              },
                              "start": {
                                "column": 16,
                                "line": 224
                              }
                            }
                          }
                        ],
                        "range": [
                          3711,
                          3983
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 235
                          },
                          "start": {
                            "column": 16,
                            "line": 224
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
                        "name": "ids",
                        "optional": false,
                        "range": [
                          3699,
                          3702
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 224
                          },
                          "start": {
                            "column": 4,
                            "line": 224
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "forEach",
                        "optional": false,
                        "range": [
                          3703,
                          3710
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 224
                          },
                          "start": {
                            "column": 8,
                            "line": 224
                          }
                        }
                      },
                      "range": [
                        3699,
                        3710
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 224
                        },
                        "start": {
                          "column": 4,
                          "line": 224
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      3699,
                      3984
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 235
                      },
                      "start": {
                        "column": 4,
                        "line": 224
                      }
                    }
                  },
                  "range": [
                    3699,
                    3985
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 235
                    },
                    "start": {
                      "column": 4,
                      "line": 224
                    }
                  }
                }
              ],
              "range": [
                3693,
                3987
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 236
                },
                "start": {
                  "column": 69,
                  "line": 223
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
                "name": "mapOfTests",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 223
                    },
                    "start": {
                      "column": 34,
                      "line": 223
                    }
                  },
                  "range": [
                    3658,
                    3673
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MapOfAllTests",
                      "optional": false,
                      "range": [
                        3660,
                        3673
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 223
                        },
                        "start": {
                          "column": 36,
                          "line": 223
                        }
                      }
                    },
                    "range": [
                      3660,
                      3673
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 223
                      },
                      "start": {
                        "column": 36,
                        "line": 223
                      }
                    }
                  }
                },
                "range": [
                  3648,
                  3673
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 223
                  },
                  "start": {
                    "column": 24,
                    "line": 223
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ids",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 223
                    },
                    "start": {
                      "column": 54,
                      "line": 223
                    }
                  },
                  "range": [
                    3678,
                    3688
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "range": [
                        3680,
                        3686
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 223
                        },
                        "start": {
                          "column": 56,
                          "line": 223
                        }
                      }
                    },
                    "range": [
                      3680,
                      3688
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 223
                      },
                      "start": {
                        "column": 56,
                        "line": 223
                      }
                    }
                  }
                },
                "range": [
                  3675,
                  3688
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 223
                  },
                  "start": {
                    "column": 51,
                    "line": 223
                  }
                }
              }
            ],
            "range": [
              3647,
              3987
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 236
              },
              "start": {
                "column": 23,
                "line": 223
              }
            }
          },
          "range": [
            3630,
            3987
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 236
            },
            "start": {
              "column": 6,
              "line": 223
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3624,
        3988
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 236
        },
        "start": {
          "column": 0,
          "line": 223
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 237
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
