__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    691
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          15,
          51
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "show",
              "optional": false,
              "range": [
                21,
                25
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 2
                },
                "start": {
                  "column": 4,
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
                  "column": 31,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              },
              "range": [
                25,
                48
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                          "column": 20,
                          "line": 2
                        },
                        "start": {
                          "column": 12,
                          "line": 2
                        }
                      },
                      "range": [
                        29,
                        37
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          31,
                          37
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
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
                      28,
                      37
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 2
                      },
                      "start": {
                        "column": 11,
                        "line": 2
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 2
                    },
                    "start": {
                      "column": 22,
                      "line": 2
                    }
                  },
                  "range": [
                    39,
                    48
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      42,
                      48
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 2
                      },
                      "start": {
                        "column": 25,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  27,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              21,
              49
            ],
            "loc": {
              "end": {
                "column": 32,
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
            "column": 15,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Show",
        "optional": false,
        "range": [
          10,
          14
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        51
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          99,
          101
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 4
          },
          "start": {
            "column": 47,
            "line": 4
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          61,
          62
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
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
                "name": "show",
                "optional": false,
                "range": [
                  65,
                  69
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 4
                  },
                  "start": {
                    "column": 13,
                    "line": 4
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "range": [
                  65,
                  89
                ],
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "show",
                  "optional": false,
                  "range": [
                    65,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 4
                    },
                    "start": {
                      "column": 13,
                      "line": 4
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          77,
                          78
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 4
                          },
                          "start": {
                            "column": 25,
                            "line": 4
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "range": [
                          79,
                          87
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
                      },
                      "range": [
                        77,
                        87
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 4
                        },
                        "start": {
                          "column": 25,
                          "line": 4
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      77,
                      89
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 4
                      },
                      "start": {
                        "column": 25,
                        "line": 4
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
                      "name": "v",
                      "optional": false,
                      "range": [
                        72,
                        73
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 4
                        },
                        "start": {
                          "column": 20,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    72,
                    89
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 4
                    },
                    "start": {
                      "column": 20,
                      "line": 4
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 4
                  },
                  "start": {
                    "column": 13,
                    "line": 4
                  }
                }
              },
              "range": [
                65,
                89
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 4
              },
              "start": {
                "column": 39,
                "line": 4
              }
            },
            "range": [
              91,
              97
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Show",
                "optional": false,
                "range": [
                  93,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 4
                  },
                  "start": {
                    "column": 41,
                    "line": 4
                  }
                }
              },
              "range": [
                93,
                97
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 4
                },
                "start": {
                  "column": 41,
                  "line": 4
                }
              }
            }
          },
          "range": [
            63,
            97
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 4
            },
            "start": {
              "column": 11,
              "line": 4
            }
          }
        }
      ],
      "range": [
        52,
        101
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          164,
          166
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 5
          },
          "start": {
            "column": 62,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          111,
          113
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
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
                "type": "Literal",
                "raw": "\"show\"",
                "value": "show",
                "range": [
                  116,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 5
                  },
                  "start": {
                    "column": 14,
                    "line": 5
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "AssignmentPattern",
                "range": [
                  124,
                  154
                ],
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "showRename",
                  "optional": false,
                  "range": [
                    124,
                    134
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 5
                    },
                    "start": {
                      "column": 22,
                      "line": 5
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          142,
                          143
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 5
                          },
                          "start": {
                            "column": 40,
                            "line": 5
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "range": [
                          144,
                          152
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 5
                          },
                          "start": {
                            "column": 42,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        142,
                        152
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 5
                        },
                        "start": {
                          "column": 40,
                          "line": 5
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      142,
                      154
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 5
                      },
                      "start": {
                        "column": 40,
                        "line": 5
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
                      "name": "v",
                      "optional": false,
                      "range": [
                        137,
                        138
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 5
                        },
                        "start": {
                          "column": 35,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    137,
                    154
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
                },
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 5
                  },
                  "start": {
                    "column": 22,
                    "line": 5
                  }
                }
              },
              "range": [
                116,
                154
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 5
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 60,
                "line": 5
              },
              "start": {
                "column": 54,
                "line": 5
              }
            },
            "range": [
              156,
              162
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Show",
                "optional": false,
                "range": [
                  158,
                  162
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 5
                  },
                  "start": {
                    "column": 56,
                    "line": 5
                  }
                }
              },
              "range": [
                158,
                162
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 5
                },
                "start": {
                  "column": 56,
                  "line": 5
                }
              }
            }
          },
          "range": [
            114,
            162
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 5
            },
            "start": {
              "column": 12,
              "line": 5
            }
          }
        }
      ],
      "range": [
        102,
        166
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          231,
          233
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 6
          },
          "start": {
            "column": 64,
            "line": 6
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          176,
          178
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
          }
        }
      },
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "computed": true,
              "key": {
                "type": "Literal",
                "raw": "\"show\"",
                "value": "show",
                "range": [
                  182,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 6
                  },
                  "start": {
                    "column": 15,
                    "line": 6
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "AssignmentPattern",
                "range": [
                  191,
                  221
                ],
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "showRename",
                  "optional": false,
                  "range": [
                    191,
                    201
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 6
                    },
                    "start": {
                      "column": 24,
                      "line": 6
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          209,
                          210
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 6
                          },
                          "start": {
                            "column": 42,
                            "line": 6
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "range": [
                          211,
                          219
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 6
                          },
                          "start": {
                            "column": 44,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        209,
                        219
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 6
                        },
                        "start": {
                          "column": 42,
                          "line": 6
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      209,
                      221
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
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "range": [
                        204,
                        205
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 6
                        },
                        "start": {
                          "column": 37,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "range": [
                    204,
                    221
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 6
                    },
                    "start": {
                      "column": 37,
                      "line": 6
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 6
                  },
                  "start": {
                    "column": 24,
                    "line": 6
                  }
                }
              },
              "range": [
                181,
                221
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 6
                },
                "start": {
                  "column": 14,
                  "line": 6
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 62,
                "line": 6
              },
              "start": {
                "column": 56,
                "line": 6
              }
            },
            "range": [
              223,
              229
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Show",
                "optional": false,
                "range": [
                  225,
                  229
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 6
                  },
                  "start": {
                    "column": 58,
                    "line": 6
                  }
                }
              },
              "range": [
                225,
                229
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 6
                },
                "start": {
                  "column": 58,
                  "line": 6
                }
              }
            }
          },
          "range": [
            179,
            229
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
        }
      ],
      "range": [
        167,
        233
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          252,
          272
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "range": [
                258,
                264
              ],
              "loc": {
                "end": {
                  "column": 10,
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
                  "column": 16,
                  "line": 9
                },
                "start": {
                  "column": 10,
                  "line": 9
                }
              },
              "range": [
                264,
                270
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Show",
                  "optional": false,
                  "range": [
                    266,
                    270
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 9
                    },
                    "start": {
                      "column": 12,
                      "line": 9
                    }
                  }
                },
                "range": [
                  266,
                  270
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 9
                  },
                  "start": {
                    "column": 12,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              258,
              270
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 9
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
            "line": 10
          },
          "start": {
            "column": 17,
            "line": 8
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Nested",
        "optional": false,
        "range": [
          245,
          251
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 8
          },
          "start": {
            "column": 10,
            "line": 8
          }
        }
      },
      "range": [
        235,
        272
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          335,
          337
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 11
          },
          "start": {
            "column": 62,
            "line": 11
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff",
        "optional": false,
        "range": [
          282,
          284
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
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
                "name": "nested",
                "optional": false,
                "range": [
                  287,
                  293
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 11
                  },
                  "start": {
                    "column": 14,
                    "line": 11
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "range": [
                  287,
                  323
                ],
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "range": [
                    287,
                    293
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 11
                    },
                    "start": {
                      "column": 14,
                      "line": 11
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "show",
                        "optional": false,
                        "range": [
                          298,
                          302
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 11
                          },
                          "start": {
                            "column": 25,
                            "line": 11
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
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                309,
                                310
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 11
                                },
                                "start": {
                                  "column": 36,
                                  "line": 11
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toString",
                              "optional": false,
                              "range": [
                                311,
                                319
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 11
                                },
                                "start": {
                                  "column": 38,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              309,
                              319
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 11
                              },
                              "start": {
                                "column": 36,
                                "line": 11
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            309,
                            321
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 11
                            },
                            "start": {
                              "column": 36,
                              "line": 11
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
                            "name": "v",
                            "optional": false,
                            "range": [
                              304,
                              305
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 11
                              },
                              "start": {
                                "column": 31,
                                "line": 11
                              }
                            }
                          }
                        ],
                        "range": [
                          304,
                          321
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 11
                          },
                          "start": {
                            "column": 31,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        298,
                        321
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 11
                        },
                        "start": {
                          "column": 25,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "range": [
                    296,
                    323
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 11
                    },
                    "start": {
                      "column": 23,
                      "line": 11
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 11
                  },
                  "start": {
                    "column": 14,
                    "line": 11
                  }
                }
              },
              "range": [
                287,
                323
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 60,
                "line": 11
              },
              "start": {
                "column": 52,
                "line": 11
              }
            },
            "range": [
              325,
              333
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Nested",
                "optional": false,
                "range": [
                  327,
                  333
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 11
                  },
                  "start": {
                    "column": 54,
                    "line": 11
                  }
                }
              },
              "range": [
                327,
                333
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 11
                },
                "start": {
                  "column": 54,
                  "line": 11
                }
              }
            }
          },
          "range": [
            285,
            333
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 11
            },
            "start": {
              "column": 12,
              "line": 11
            }
          }
        }
      ],
      "range": [
        273,
        337
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          356,
          387
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "range": [
                362,
                366
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 14
                },
                "start": {
                  "column": 4,
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
                  "column": 26,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              },
              "range": [
                366,
                384
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      369,
                      375
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 14
                      },
                      "start": {
                        "column": 11,
                        "line": 14
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      377,
                      383
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 14
                      },
                      "start": {
                        "column": 19,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  368,
                  384
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 14
                  },
                  "start": {
                    "column": 10,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              362,
              385
            ],
            "loc": {
              "end": {
                "column": 27,
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
            "column": 17,
            "line": 13
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tuples",
        "optional": false,
        "range": [
          349,
          355
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 13
          },
          "start": {
            "column": 10,
            "line": 13
          }
        }
      },
      "range": [
        339,
        387
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          435,
          437
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 16
          },
          "start": {
            "column": 47,
            "line": 16
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "range": [
          397,
          398
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
                "name": "prop",
                "optional": false,
                "range": [
                  401,
                  405
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 16
                  },
                  "start": {
                    "column": 13,
                    "line": 16
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "range": [
                  401,
                  423
                ],
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "range": [
                    401,
                    405
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 16
                    },
                    "start": {
                      "column": 13,
                      "line": 16
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        409,
                        416
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 16
                        },
                        "start": {
                          "column": 21,
                          "line": 16
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "1234",
                      "value": 1234,
                      "range": [
                        418,
                        422
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 16
                        },
                        "start": {
                          "column": 30,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "range": [
                    408,
                    423
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 16
                    },
                    "start": {
                      "column": 20,
                      "line": 16
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 16
                  },
                  "start": {
                    "column": 13,
                    "line": 16
                  }
                }
              },
              "range": [
                401,
                423
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 16
                },
                "start": {
                  "column": 13,
                  "line": 16
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 16
              },
              "start": {
                "column": 37,
                "line": 16
              }
            },
            "range": [
              425,
              433
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tuples",
                "optional": false,
                "range": [
                  427,
                  433
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 16
                  },
                  "start": {
                    "column": 39,
                    "line": 16
                  }
                }
              },
              "range": [
                427,
                433
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 16
                },
                "start": {
                  "column": 39,
                  "line": 16
                }
              }
            }
          },
          "range": [
            399,
            433
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 16
            },
            "start": {
              "column": 11,
              "line": 16
            }
          }
        }
      ],
      "range": [
        388,
        437
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          461,
          489
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "range": [
                467,
                471
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
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
                  "line": 19
                },
                "start": {
                  "column": 8,
                  "line": 19
                }
              },
              "range": [
                471,
                486
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"foo\"",
                      "value": "foo",
                      "range": [
                        473,
                        478
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 19
                        },
                        "start": {
                          "column": 10,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      473,
                      478
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 19
                      },
                      "start": {
                        "column": 10,
                        "line": 19
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"bar\"",
                      "value": "bar",
                      "range": [
                        481,
                        486
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 19
                        },
                        "start": {
                          "column": 18,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      481,
                      486
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 19
                      },
                      "start": {
                        "column": 18,
                        "line": 19
                      }
                    }
                  }
                ],
                "range": [
                  473,
                  486
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 19
                  },
                  "start": {
                    "column": 10,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              467,
              487
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
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
            "column": 22,
            "line": 18
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringUnion",
        "optional": false,
        "range": [
          449,
          460
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 18
          },
          "start": {
            "column": 10,
            "line": 18
          }
        }
      },
      "range": [
        439,
        489
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          532,
          534
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 21
          },
          "start": {
            "column": 42,
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
        "name": "h",
        "optional": false,
        "range": [
          499,
          500
        ],
        "loc": {
          "end": {
            "column": 10,
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
                "name": "prop",
                "optional": false,
                "range": [
                  503,
                  507
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 21
                  },
                  "start": {
                    "column": 13,
                    "line": 21
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "range": [
                  503,
                  515
                ],
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "range": [
                    503,
                    507
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 21
                    },
                    "start": {
                      "column": 13,
                      "line": 21
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "raw": "\"foo\"",
                  "value": "foo",
                  "range": [
                    510,
                    515
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 21
                    },
                    "start": {
                      "column": 20,
                      "line": 21
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 21
                  },
                  "start": {
                    "column": 13,
                    "line": 21
                  }
                }
              },
              "range": [
                503,
                515
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 21
                },
                "start": {
                  "column": 13,
                  "line": 21
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 21
              },
              "start": {
                "column": 27,
                "line": 21
              }
            },
            "range": [
              517,
              530
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringUnion",
                "optional": false,
                "range": [
                  519,
                  530
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 21
                  },
                  "start": {
                    "column": 29,
                    "line": 21
                  }
                }
              },
              "range": [
                519,
                530
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 21
                },
                "start": {
                  "column": 29,
                  "line": 21
                }
              }
            }
          },
          "range": [
            501,
            530
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 21
            },
            "start": {
              "column": 11,
              "line": 21
            }
          }
        }
      ],
      "range": [
        490,
        534
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          561,
          603
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringIdentity",
              "optional": false,
              "range": [
                567,
                581
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 24
                    },
                    "start": {
                      "column": 20,
                      "line": 24
                    }
                  },
                  "range": [
                    583,
                    591
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      585,
                      591
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 24
                      },
                      "start": {
                        "column": 22,
                        "line": 24
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
                    "column": 28,
                    "line": 24
                  },
                  "start": {
                    "column": 19,
                    "line": 24
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 24
                },
                "start": {
                  "column": 29,
                  "line": 24
                }
              },
              "range": [
                592,
                600
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  594,
                  600
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 24
                  },
                  "start": {
                    "column": 31,
                    "line": 24
                  }
                }
              }
            },
            "static": false,
            "range": [
              567,
              601
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
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
            "column": 25,
            "line": 23
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringIdentity",
        "optional": false,
        "range": [
          546,
          560
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 23
          },
          "start": {
            "column": 10,
            "line": 23
          }
        }
      },
      "range": [
        536,
        603
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 23
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
                  "name": "stringIdentity",
                  "optional": false,
                  "range": [
                    610,
                    624
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 26
                    },
                    "start": {
                      "column": 6,
                      "line": 26
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "AssignmentPattern",
                  "range": [
                    626,
                    641
                  ],
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "range": [
                      626,
                      628
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 26
                      },
                      "start": {
                        "column": 22,
                        "line": 26
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "range": [
                        638,
                        641
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 26
                        },
                        "start": {
                          "column": 34,
                          "line": 26
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
                          631,
                          634
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 26
                          },
                          "start": {
                            "column": 27,
                            "line": 26
                          }
                        }
                      }
                    ],
                    "range": [
                      631,
                      641
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 26
                      },
                      "start": {
                        "column": 27,
                        "line": 26
                      }
                    }
                  },
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 26
                    },
                    "start": {
                      "column": 22,
                      "line": 26
                    }
                  }
                },
                "range": [
                  610,
                  641
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 26
                  },
                  "start": {
                    "column": 6,
                    "line": 26
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 55,
                  "line": 26
                },
                "start": {
                  "column": 39,
                  "line": 26
                }
              },
              "range": [
                643,
                659
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringIdentity",
                  "optional": false,
                  "range": [
                    645,
                    659
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 26
                    },
                    "start": {
                      "column": 41,
                      "line": 26
                    }
                  }
                },
                "range": [
                  645,
                  659
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 26
                  },
                  "start": {
                    "column": 41,
                    "line": 26
                  }
                }
              }
            },
            "range": [
              608,
              659
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
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
                  "name": "stringIdentity",
                  "optional": false,
                  "range": [
                    664,
                    678
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 26
                    },
                    "start": {
                      "column": 60,
                      "line": 26
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      685,
                      686
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 26
                      },
                      "start": {
                        "column": 81,
                        "line": 26
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        680,
                        681
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 26
                        },
                        "start": {
                          "column": 76,
                          "line": 26
                        }
                      }
                    }
                  ],
                  "range": [
                    680,
                    686
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 26
                    },
                    "start": {
                      "column": 76,
                      "line": 26
                    }
                  }
                },
                "range": [
                  664,
                  686
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 26
                  },
                  "start": {
                    "column": 60,
                    "line": 26
                  }
                }
              }
            ],
            "range": [
              662,
              687
            ],
            "loc": {
              "end": {
                "column": 83,
                "line": 26
              },
              "start": {
                "column": 58,
                "line": 26
              }
            }
          },
          "range": [
            608,
            687
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        604,
        688
      ],
      "loc": {
        "end": {
          "column": 84,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 29
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
