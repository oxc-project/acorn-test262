__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    1735
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          72,
          111
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 4
                    },
                    "start": {
                      "column": 17,
                      "line": 4
                    }
                  },
                  "range": [
                    91,
                    99
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      93,
                      99
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 4
                      },
                      "start": {
                        "column": 19,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  88,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 4
                  },
                  "start": {
                    "column": 14,
                    "line": 4
                  }
                }
              }
            ],
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 4
                },
                "start": {
                  "column": 26,
                  "line": 4
                }
              },
              "range": [
                100,
                108
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  102,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 4
                  },
                  "start": {
                    "column": 28,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              78,
              109
            ],
            "loc": {
              "end": {
                "column": 35,
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
        "name": "Obj1",
        "optional": false,
        "range": [
          67,
          71
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
        57,
        111
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res1",
        "optional": false,
        "range": [
          117,
          121
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            128,
            146
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj1",
                "optional": false,
                "range": [
                  129,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 6
                  },
                  "start": {
                    "column": 17,
                    "line": 6
                  }
                }
              },
              "range": [
                129,
                133
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 6
                },
                "start": {
                  "column": 17,
                  "line": 6
                }
              }
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj1",
                  "optional": false,
                  "range": [
                    141,
                    145
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 6
                    },
                    "start": {
                      "column": 29,
                      "line": 6
                    }
                  }
                },
                "range": [
                  141,
                  145
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 6
                  },
                  "start": {
                    "column": 29,
                    "line": 6
                  }
                }
              },
              "range": [
                135,
                145
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 6
                },
                "start": {
                  "column": 23,
                  "line": 6
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 6
            },
            "start": {
              "column": 16,
              "line": 6
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "range": [
            124,
            128
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 6
            },
            "start": {
              "column": 12,
              "line": 6
            }
          }
        },
        "range": [
          124,
          146
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 6
          },
          "start": {
            "column": 12,
            "line": 6
          }
        }
      },
      "range": [
        112,
        146
      ],
      "loc": {
        "end": {
          "column": 34,
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
          163,
          229
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "concreteProp",
              "optional": false,
              "range": [
                169,
                181
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
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 9
                },
                "start": {
                  "column": 16,
                  "line": 9
                }
              },
              "range": [
                181,
                190
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'hello'",
                  "value": "hello",
                  "range": [
                    183,
                    190
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 9
                    },
                    "start": {
                      "column": 18,
                      "line": 9
                    }
                  }
                },
                "range": [
                  183,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 9
                  },
                  "start": {
                    "column": 18,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              169,
              191
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 10
                    },
                    "start": {
                      "column": 17,
                      "line": 10
                    }
                  },
                  "range": [
                    209,
                    217
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      211,
                      217
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 10
                      },
                      "start": {
                        "column": 19,
                        "line": 10
                      }
                    }
                  }
                },
                "range": [
                  206,
                  217
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 10
                  },
                  "start": {
                    "column": 14,
                    "line": 10
                  }
                }
              }
            ],
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 10
                },
                "start": {
                  "column": 26,
                  "line": 10
                }
              },
              "range": [
                218,
                226
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  220,
                  226
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 10
                  },
                  "start": {
                    "column": 28,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              196,
              227
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
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
            "column": 15,
            "line": 8
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj2",
        "optional": false,
        "range": [
          158,
          162
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 8
          },
          "start": {
            "column": 10,
            "line": 8
          }
        }
      },
      "range": [
        148,
        229
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res2",
        "optional": false,
        "range": [
          235,
          239
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 12
          },
          "start": {
            "column": 5,
            "line": 12
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            246,
            264
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj2",
                "optional": false,
                "range": [
                  247,
                  251
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 12
                  },
                  "start": {
                    "column": 17,
                    "line": 12
                  }
                }
              },
              "range": [
                247,
                251
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 12
                },
                "start": {
                  "column": 17,
                  "line": 12
                }
              }
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj2",
                  "optional": false,
                  "range": [
                    259,
                    263
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 12
                    },
                    "start": {
                      "column": 29,
                      "line": 12
                    }
                  }
                },
                "range": [
                  259,
                  263
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 12
                  },
                  "start": {
                    "column": 29,
                    "line": 12
                  }
                }
              },
              "range": [
                253,
                263
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 12
                },
                "start": {
                  "column": 23,
                  "line": 12
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 12
            },
            "start": {
              "column": 16,
              "line": 12
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "range": [
            242,
            246
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 12
            },
            "start": {
              "column": 12,
              "line": 12
            }
          }
        },
        "range": [
          242,
          264
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 12
          },
          "start": {
            "column": 12,
            "line": 12
          }
        }
      },
      "range": [
        230,
        264
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          281,
          355
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 15
                    },
                    "start": {
                      "column": 17,
                      "line": 15
                    }
                  },
                  "range": [
                    300,
                    308
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      302,
                      308
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 15
                      },
                      "start": {
                        "column": 19,
                        "line": 15
                      }
                    }
                  }
                },
                "range": [
                  297,
                  308
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 15
                  },
                  "start": {
                    "column": 14,
                    "line": 15
                  }
                }
              }
            ],
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 15
                },
                "start": {
                  "column": 26,
                  "line": 15
                }
              },
              "range": [
                309,
                317
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  311,
                  317
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 15
                  },
                  "start": {
                    "column": 28,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              287,
              318
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 16
                    },
                    "start": {
                      "column": 17,
                      "line": 16
                    }
                  },
                  "range": [
                    336,
                    344
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      338,
                      344
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 16
                      },
                      "start": {
                        "column": 19,
                        "line": 16
                      }
                    }
                  }
                },
                "range": [
                  333,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 16
                  },
                  "start": {
                    "column": 14,
                    "line": 16
                  }
                }
              }
            ],
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 16
                },
                "start": {
                  "column": 26,
                  "line": 16
                }
              },
              "range": [
                345,
                352
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'foo'",
                  "value": "foo",
                  "range": [
                    347,
                    352
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 16
                    },
                    "start": {
                      "column": 28,
                      "line": 16
                    }
                  }
                },
                "range": [
                  347,
                  352
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 16
                  },
                  "start": {
                    "column": 28,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              323,
              353
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 15,
            "line": 14
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj3",
        "optional": false,
        "range": [
          276,
          280
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 14
          },
          "start": {
            "column": 10,
            "line": 14
          }
        }
      },
      "range": [
        266,
        355
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res3",
        "optional": false,
        "range": [
          361,
          365
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 18
          },
          "start": {
            "column": 5,
            "line": 18
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            372,
            390
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj3",
                "optional": false,
                "range": [
                  373,
                  377
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 18
                  },
                  "start": {
                    "column": 17,
                    "line": 18
                  }
                }
              },
              "range": [
                373,
                377
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 18
                },
                "start": {
                  "column": 17,
                  "line": 18
                }
              }
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj3",
                  "optional": false,
                  "range": [
                    385,
                    389
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 18
                    },
                    "start": {
                      "column": 29,
                      "line": 18
                    }
                  }
                },
                "range": [
                  385,
                  389
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 18
                  },
                  "start": {
                    "column": 29,
                    "line": 18
                  }
                }
              },
              "range": [
                379,
                389
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 18
                },
                "start": {
                  "column": 23,
                  "line": 18
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 18
            },
            "start": {
              "column": 16,
              "line": 18
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "range": [
            368,
            372
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 18
            },
            "start": {
              "column": 12,
              "line": 18
            }
          }
        },
        "range": [
          368,
          390
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 18
          },
          "start": {
            "column": 12,
            "line": 18
          }
        }
      },
      "range": [
        356,
        390
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          407,
          472
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  },
                  "range": [
                    417,
                    425
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      419,
                      425
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 21
                      },
                      "start": {
                        "column": 10,
                        "line": 21
                      }
                    }
                  }
                },
                "range": [
                  414,
                  425
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 21
                  },
                  "start": {
                    "column": 5,
                    "line": 21
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 21
                },
                "start": {
                  "column": 17,
                  "line": 21
                }
              },
              "range": [
                426,
                434
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  428,
                  434
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 21
                  },
                  "start": {
                    "column": 19,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              413,
              435
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 22
                    },
                    "start": {
                      "column": 17,
                      "line": 22
                    }
                  },
                  "range": [
                    453,
                    461
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      455,
                      461
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 22
                      },
                      "start": {
                        "column": 19,
                        "line": 22
                      }
                    }
                  }
                },
                "range": [
                  450,
                  461
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 22
                  },
                  "start": {
                    "column": 14,
                    "line": 22
                  }
                }
              }
            ],
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 22
                },
                "start": {
                  "column": 26,
                  "line": 22
                }
              },
              "range": [
                462,
                469
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'foo'",
                  "value": "foo",
                  "range": [
                    464,
                    469
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 22
                    },
                    "start": {
                      "column": 28,
                      "line": 22
                    }
                  }
                },
                "range": [
                  464,
                  469
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 22
                  },
                  "start": {
                    "column": 28,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              440,
              470
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 22
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
            "line": 23
          },
          "start": {
            "column": 15,
            "line": 20
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj4",
        "optional": false,
        "range": [
          402,
          406
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 20
          },
          "start": {
            "column": 10,
            "line": 20
          }
        }
      },
      "range": [
        392,
        472
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res4",
        "optional": false,
        "range": [
          478,
          482
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 24
          },
          "start": {
            "column": 5,
            "line": 24
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            489,
            507
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj4",
                "optional": false,
                "range": [
                  490,
                  494
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 24
                  },
                  "start": {
                    "column": 17,
                    "line": 24
                  }
                }
              },
              "range": [
                490,
                494
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 24
                },
                "start": {
                  "column": 17,
                  "line": 24
                }
              }
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj4",
                  "optional": false,
                  "range": [
                    502,
                    506
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 24
                    },
                    "start": {
                      "column": 29,
                      "line": 24
                    }
                  }
                },
                "range": [
                  502,
                  506
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 24
                  },
                  "start": {
                    "column": 29,
                    "line": 24
                  }
                }
              },
              "range": [
                496,
                506
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 24
                },
                "start": {
                  "column": 23,
                  "line": 24
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 24
            },
            "start": {
              "column": 16,
              "line": 24
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "range": [
            485,
            489
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 24
            },
            "start": {
              "column": 12,
              "line": 24
            }
          }
        },
        "range": [
          485,
          507
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 24
          },
          "start": {
            "column": 12,
            "line": 24
          }
        }
      },
      "range": [
        473,
        507
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          524,
          589
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 27
                    },
                    "start": {
                      "column": 17,
                      "line": 27
                    }
                  },
                  "range": [
                    543,
                    551
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      545,
                      551
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 27
                      },
                      "start": {
                        "column": 19,
                        "line": 27
                      }
                    }
                  }
                },
                "range": [
                  540,
                  551
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 27
                  },
                  "start": {
                    "column": 14,
                    "line": 27
                  }
                }
              }
            ],
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 27
                },
                "start": {
                  "column": 26,
                  "line": 27
                }
              },
              "range": [
                552,
                560
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  554,
                  560
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 27
                  },
                  "start": {
                    "column": 28,
                    "line": 27
                  }
                }
              }
            },
            "range": [
              530,
              561
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  },
                  "range": [
                    570,
                    578
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      572,
                      578
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 28
                      },
                      "start": {
                        "column": 10,
                        "line": 28
                      }
                    }
                  }
                },
                "range": [
                  567,
                  578
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 28
                  },
                  "start": {
                    "column": 5,
                    "line": 28
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 28
                },
                "start": {
                  "column": 17,
                  "line": 28
                }
              },
              "range": [
                579,
                586
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'foo'",
                  "value": "foo",
                  "range": [
                    581,
                    586
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 28
                    },
                    "start": {
                      "column": 19,
                      "line": 28
                    }
                  }
                },
                "range": [
                  581,
                  586
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 28
                  },
                  "start": {
                    "column": 19,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              566,
              587
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
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
            "column": 15,
            "line": 26
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj5",
        "optional": false,
        "range": [
          519,
          523
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 26
          },
          "start": {
            "column": 10,
            "line": 26
          }
        }
      },
      "range": [
        509,
        589
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
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
        "name": "Res5",
        "optional": false,
        "range": [
          595,
          599
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 30
          },
          "start": {
            "column": 5,
            "line": 30
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            606,
            624
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj5",
                "optional": false,
                "range": [
                  607,
                  611
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 30
                  },
                  "start": {
                    "column": 17,
                    "line": 30
                  }
                }
              },
              "range": [
                607,
                611
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 30
                },
                "start": {
                  "column": 17,
                  "line": 30
                }
              }
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj5",
                  "optional": false,
                  "range": [
                    619,
                    623
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 30
                    },
                    "start": {
                      "column": 29,
                      "line": 30
                    }
                  }
                },
                "range": [
                  619,
                  623
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 30
                  },
                  "start": {
                    "column": 29,
                    "line": 30
                  }
                }
              },
              "range": [
                613,
                623
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 30
                },
                "start": {
                  "column": 23,
                  "line": 30
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 30
            },
            "start": {
              "column": 16,
              "line": 30
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "range": [
            602,
            606
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 30
            },
            "start": {
              "column": 12,
              "line": 30
            }
          }
        },
        "range": [
          602,
          624
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 30
          },
          "start": {
            "column": 12,
            "line": 30
          }
        }
      },
      "range": [
        590,
        624
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Identity",
        "optional": false,
        "range": [
          631,
          639
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 32
          },
          "start": {
            "column": 5,
            "line": 32
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
              "name": "T",
              "optional": false,
              "range": [
                659,
                660
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 32
                },
                "start": {
                  "column": 33,
                  "line": 32
                }
              }
            },
            "range": [
              659,
              660
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 32
              },
              "start": {
                "column": 33,
                "line": 32
              }
            }
          },
          "range": [
            653,
            660
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 32
            },
            "start": {
              "column": 27,
              "line": 32
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            648,
            649
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 32
            },
            "start": {
              "column": 22,
              "line": 32
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                665,
                666
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 32
                },
                "start": {
                  "column": 39,
                  "line": 32
                }
              }
            },
            "range": [
              665,
              666
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 32
              },
              "start": {
                "column": 39,
                "line": 32
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                663,
                664
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 32
                },
                "start": {
                  "column": 37,
                  "line": 32
                }
              }
            },
            "range": [
              663,
              664
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 32
              },
              "start": {
                "column": 37,
                "line": 32
              }
            }
          },
          "range": [
            663,
            667
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 32
            },
            "start": {
              "column": 37,
              "line": 32
            }
          }
        },
        "range": [
          645,
          670
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 32
          },
          "start": {
            "column": 19,
            "line": 32
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 32
          },
          "start": {
            "column": 13,
            "line": 32
          }
        },
        "range": [
          639,
          642
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
                640,
                641
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 32
                },
                "start": {
                  "column": 14,
                  "line": 32
                }
              }
            },
            "out": false,
            "range": [
              640,
              641
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 32
              },
              "start": {
                "column": 14,
                "line": 32
              }
            }
          }
        ]
      },
      "range": [
        626,
        670
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          687,
          733
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 35
                    },
                    "start": {
                      "column": 17,
                      "line": 35
                    }
                  },
                  "range": [
                    706,
                    722
                  ],
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "tail": false,
                        "value": {
                          "cooked": "wow",
                          "raw": "wow"
                        },
                        "range": [
                          708,
                          714
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 35
                          },
                          "start": {
                            "column": 19,
                            "line": 35
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
                          720,
                          722
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 35
                          },
                          "start": {
                            "column": 31,
                            "line": 35
                          }
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          714,
                          720
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 35
                          },
                          "start": {
                            "column": 25,
                            "line": 35
                          }
                        }
                      }
                    ],
                    "range": [
                      708,
                      722
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
                  }
                },
                "range": [
                  703,
                  722
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 35
                  },
                  "start": {
                    "column": 14,
                    "line": 35
                  }
                }
              }
            ],
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 35
                },
                "start": {
                  "column": 34,
                  "line": 35
                }
              },
              "range": [
                723,
                730
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'foo'",
                  "value": "foo",
                  "range": [
                    725,
                    730
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 35
                    },
                    "start": {
                      "column": 36,
                      "line": 35
                    }
                  }
                },
                "range": [
                  725,
                  730
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 35
                  },
                  "start": {
                    "column": 36,
                    "line": 35
                  }
                }
              }
            },
            "range": [
              693,
              731
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 15,
            "line": 34
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj6",
        "optional": false,
        "range": [
          682,
          686
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 34
          },
          "start": {
            "column": 10,
            "line": 34
          }
        }
      },
      "range": [
        672,
        733
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res6",
        "optional": false,
        "range": [
          739,
          743
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 37
          },
          "start": {
            "column": 5,
            "line": 37
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            754,
            760
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj6",
                "optional": false,
                "range": [
                  755,
                  759
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 37
                  },
                  "start": {
                    "column": 21,
                    "line": 37
                  }
                }
              },
              "range": [
                755,
                759
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 37
                },
                "start": {
                  "column": 21,
                  "line": 37
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 37
            },
            "start": {
              "column": 20,
              "line": 37
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Identity",
          "optional": false,
          "range": [
            746,
            754
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 37
            },
            "start": {
              "column": 12,
              "line": 37
            }
          }
        },
        "range": [
          746,
          760
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 37
          },
          "start": {
            "column": 12,
            "line": 37
          }
        }
      },
      "range": [
        734,
        760
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          777,
          850
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 40
                    },
                    "start": {
                      "column": 8,
                      "line": 40
                    }
                  },
                  "range": [
                    787,
                    795
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      789,
                      795
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 40
                      },
                      "start": {
                        "column": 10,
                        "line": 40
                      }
                    }
                  }
                },
                "range": [
                  784,
                  795
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 40
                  },
                  "start": {
                    "column": 5,
                    "line": 40
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 40
                },
                "start": {
                  "column": 17,
                  "line": 40
                }
              },
              "range": [
                796,
                804
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  798,
                  804
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 40
                  },
                  "start": {
                    "column": 19,
                    "line": 40
                  }
                }
              }
            },
            "range": [
              783,
              805
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 41
                    },
                    "start": {
                      "column": 17,
                      "line": 41
                    }
                  },
                  "range": [
                    823,
                    839
                  ],
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "tail": false,
                        "value": {
                          "cooked": "wow",
                          "raw": "wow"
                        },
                        "range": [
                          825,
                          831
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 41
                          },
                          "start": {
                            "column": 19,
                            "line": 41
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
                          837,
                          839
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 41
                          },
                          "start": {
                            "column": 31,
                            "line": 41
                          }
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          831,
                          837
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 41
                          },
                          "start": {
                            "column": 25,
                            "line": 41
                          }
                        }
                      }
                    ],
                    "range": [
                      825,
                      839
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 41
                      },
                      "start": {
                        "column": 19,
                        "line": 41
                      }
                    }
                  }
                },
                "range": [
                  820,
                  839
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 41
                  },
                  "start": {
                    "column": 14,
                    "line": 41
                  }
                }
              }
            ],
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 41
                },
                "start": {
                  "column": 34,
                  "line": 41
                }
              },
              "range": [
                840,
                847
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'foo'",
                  "value": "foo",
                  "range": [
                    842,
                    847
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 41
                    },
                    "start": {
                      "column": 36,
                      "line": 41
                    }
                  }
                },
                "range": [
                  842,
                  847
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 41
                  },
                  "start": {
                    "column": 36,
                    "line": 41
                  }
                }
              }
            },
            "range": [
              810,
              848
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 15,
            "line": 39
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj7",
        "optional": false,
        "range": [
          772,
          776
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 39
          },
          "start": {
            "column": 10,
            "line": 39
          }
        }
      },
      "range": [
        762,
        850
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res7",
        "optional": false,
        "range": [
          856,
          860
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 43
          },
          "start": {
            "column": 5,
            "line": 43
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            871,
            877
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj7",
                "optional": false,
                "range": [
                  872,
                  876
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 43
                  },
                  "start": {
                    "column": 21,
                    "line": 43
                  }
                }
              },
              "range": [
                872,
                876
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 43
                },
                "start": {
                  "column": 21,
                  "line": 43
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 43
            },
            "start": {
              "column": 20,
              "line": 43
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Identity",
          "optional": false,
          "range": [
            863,
            871
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 43
            },
            "start": {
              "column": 12,
              "line": 43
            }
          }
        },
        "range": [
          863,
          877
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 43
          },
          "start": {
            "column": 12,
            "line": 43
          }
        }
      },
      "range": [
        851,
        877
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          894,
          967
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 46
                    },
                    "start": {
                      "column": 17,
                      "line": 46
                    }
                  },
                  "range": [
                    913,
                    921
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      915,
                      921
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 46
                      },
                      "start": {
                        "column": 19,
                        "line": 46
                      }
                    }
                  }
                },
                "range": [
                  910,
                  921
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 46
                  },
                  "start": {
                    "column": 14,
                    "line": 46
                  }
                }
              }
            ],
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 46
                },
                "start": {
                  "column": 26,
                  "line": 46
                }
              },
              "range": [
                922,
                930
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  924,
                  930
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 46
                  },
                  "start": {
                    "column": 28,
                    "line": 46
                  }
                }
              }
            },
            "range": [
              900,
              931
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
                    }
                  },
                  "range": [
                    940,
                    956
                  ],
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "tail": false,
                        "value": {
                          "cooked": "wow",
                          "raw": "wow"
                        },
                        "range": [
                          942,
                          948
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 47
                          },
                          "start": {
                            "column": 10,
                            "line": 47
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
                          954,
                          956
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 47
                          },
                          "start": {
                            "column": 22,
                            "line": 47
                          }
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          948,
                          954
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 47
                          },
                          "start": {
                            "column": 16,
                            "line": 47
                          }
                        }
                      }
                    ],
                    "range": [
                      942,
                      956
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 47
                      },
                      "start": {
                        "column": 10,
                        "line": 47
                      }
                    }
                  }
                },
                "range": [
                  937,
                  956
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 47
                  },
                  "start": {
                    "column": 5,
                    "line": 47
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 47
                },
                "start": {
                  "column": 25,
                  "line": 47
                }
              },
              "range": [
                957,
                964
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'foo'",
                  "value": "foo",
                  "range": [
                    959,
                    964
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 47
                    },
                    "start": {
                      "column": 27,
                      "line": 47
                    }
                  }
                },
                "range": [
                  959,
                  964
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 47
                  },
                  "start": {
                    "column": 27,
                    "line": 47
                  }
                }
              }
            },
            "range": [
              936,
              965
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 15,
            "line": 45
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj8",
        "optional": false,
        "range": [
          889,
          893
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 45
          },
          "start": {
            "column": 10,
            "line": 45
          }
        }
      },
      "range": [
        879,
        967
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res8",
        "optional": false,
        "range": [
          973,
          977
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 49
          },
          "start": {
            "column": 5,
            "line": 49
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            988,
            994
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj8",
                "optional": false,
                "range": [
                  989,
                  993
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 49
                  },
                  "start": {
                    "column": 21,
                    "line": 49
                  }
                }
              },
              "range": [
                989,
                993
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 49
                },
                "start": {
                  "column": 21,
                  "line": 49
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 49
            },
            "start": {
              "column": 20,
              "line": 49
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Identity",
          "optional": false,
          "range": [
            980,
            988
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 49
            },
            "start": {
              "column": 12,
              "line": 49
            }
          }
        },
        "range": [
          980,
          994
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 49
          },
          "start": {
            "column": 12,
            "line": 49
          }
        }
      },
      "range": [
        968,
        994
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrippingPick",
        "optional": false,
        "range": [
          1001,
          1014
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 51
          },
          "start": {
            "column": 5,
            "line": 51
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              1057,
              1058
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 51
              },
              "start": {
                "column": 61,
                "line": 51
              }
            }
          },
          "range": [
            1057,
            1058
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 51
            },
            "start": {
              "column": 61,
              "line": 51
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            1052,
            1053
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 51
            },
            "start": {
              "column": 56,
              "line": 51
            }
          }
        },
        "nameType": null,
        "readonly": "-",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                1063,
                1064
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 51
                },
                "start": {
                  "column": 67,
                  "line": 51
                }
              }
            },
            "range": [
              1063,
              1064
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 51
              },
              "start": {
                "column": 67,
                "line": 51
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1061,
                1062
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 51
                },
                "start": {
                  "column": 65,
                  "line": 51
                }
              }
            },
            "range": [
              1061,
              1062
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 51
              },
              "start": {
                "column": 65,
                "line": 51
              }
            }
          },
          "range": [
            1061,
            1065
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 51
            },
            "start": {
              "column": 65,
              "line": 51
            }
          }
        },
        "range": [
          1039,
          1068
        ],
        "loc": {
          "end": {
            "column": 72,
            "line": 51
          },
          "start": {
            "column": 43,
            "line": 51
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 51
          },
          "start": {
            "column": 18,
            "line": 51
          }
        },
        "range": [
          1014,
          1036
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
                1015,
                1016
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 51
                },
                "start": {
                  "column": 19,
                  "line": 51
                }
              }
            },
            "out": false,
            "range": [
              1015,
              1016
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 51
              },
              "start": {
                "column": 19,
                "line": 51
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
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
                    1034,
                    1035
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 51
                    },
                    "start": {
                      "column": 38,
                      "line": 51
                    }
                  }
                },
                "range": [
                  1034,
                  1035
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 51
                  },
                  "start": {
                    "column": 38,
                    "line": 51
                  }
                }
              },
              "range": [
                1028,
                1035
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 51
                },
                "start": {
                  "column": 32,
                  "line": 51
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                1018,
                1019
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 51
                },
                "start": {
                  "column": 22,
                  "line": 51
                }
              }
            },
            "out": false,
            "range": [
              1018,
              1035
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 51
              },
              "start": {
                "column": 22,
                "line": 51
              }
            }
          }
        ]
      },
      "range": [
        996,
        1068
      ],
      "loc": {
        "end": {
          "column": 72,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1085,
          1124
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 54
                    },
                    "start": {
                      "column": 17,
                      "line": 54
                    }
                  },
                  "range": [
                    1104,
                    1112
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1106,
                      1112
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 54
                      },
                      "start": {
                        "column": 19,
                        "line": 54
                      }
                    }
                  }
                },
                "range": [
                  1101,
                  1112
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 54
                  },
                  "start": {
                    "column": 14,
                    "line": 54
                  }
                }
              }
            ],
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 54
                },
                "start": {
                  "column": 26,
                  "line": 54
                }
              },
              "range": [
                1113,
                1121
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1115,
                  1121
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 54
                  },
                  "start": {
                    "column": 28,
                    "line": 54
                  }
                }
              }
            },
            "range": [
              1091,
              1122
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 55
          },
          "start": {
            "column": 15,
            "line": 53
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj9",
        "optional": false,
        "range": [
          1080,
          1084
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 53
          },
          "start": {
            "column": 10,
            "line": 53
          }
        }
      },
      "range": [
        1070,
        1124
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res9",
        "optional": false,
        "range": [
          1130,
          1134
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 56
          },
          "start": {
            "column": 5,
            "line": 56
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1150,
            1168
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj9",
                "optional": false,
                "range": [
                  1151,
                  1155
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 56
                  },
                  "start": {
                    "column": 26,
                    "line": 56
                  }
                }
              },
              "range": [
                1151,
                1155
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 56
                },
                "start": {
                  "column": 26,
                  "line": 56
                }
              }
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj9",
                  "optional": false,
                  "range": [
                    1163,
                    1167
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 56
                    },
                    "start": {
                      "column": 38,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1163,
                  1167
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 56
                  },
                  "start": {
                    "column": 38,
                    "line": 56
                  }
                }
              },
              "range": [
                1157,
                1167
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 56
                },
                "start": {
                  "column": 32,
                  "line": 56
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 56
            },
            "start": {
              "column": 25,
              "line": 56
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "StrippingPick",
          "optional": false,
          "range": [
            1137,
            1150
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 56
            },
            "start": {
              "column": 12,
              "line": 56
            }
          }
        },
        "range": [
          1137,
          1168
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 56
          },
          "start": {
            "column": 12,
            "line": 56
          }
        }
      },
      "range": [
        1125,
        1168
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1186,
          1260
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 59
                    },
                    "start": {
                      "column": 17,
                      "line": 59
                    }
                  },
                  "range": [
                    1205,
                    1213
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1207,
                      1213
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 59
                      },
                      "start": {
                        "column": 19,
                        "line": 59
                      }
                    }
                  }
                },
                "range": [
                  1202,
                  1213
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 59
                  },
                  "start": {
                    "column": 14,
                    "line": 59
                  }
                }
              }
            ],
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 59
                },
                "start": {
                  "column": 26,
                  "line": 59
                }
              },
              "range": [
                1214,
                1222
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1216,
                  1222
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 59
                  },
                  "start": {
                    "column": 28,
                    "line": 59
                  }
                }
              }
            },
            "range": [
              1192,
              1223
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 60
                    },
                    "start": {
                      "column": 17,
                      "line": 60
                    }
                  },
                  "range": [
                    1241,
                    1249
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      1243,
                      1249
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 60
                      },
                      "start": {
                        "column": 19,
                        "line": 60
                      }
                    }
                  }
                },
                "range": [
                  1238,
                  1249
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 60
                  },
                  "start": {
                    "column": 14,
                    "line": 60
                  }
                }
              }
            ],
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 60
                },
                "start": {
                  "column": 26,
                  "line": 60
                }
              },
              "range": [
                1250,
                1257
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'foo'",
                  "value": "foo",
                  "range": [
                    1252,
                    1257
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 60
                    },
                    "start": {
                      "column": 28,
                      "line": 60
                    }
                  }
                },
                "range": [
                  1252,
                  1257
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 60
                  },
                  "start": {
                    "column": 28,
                    "line": 60
                  }
                }
              }
            },
            "range": [
              1228,
              1258
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 16,
            "line": 58
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj10",
        "optional": false,
        "range": [
          1180,
          1185
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 58
          },
          "start": {
            "column": 10,
            "line": 58
          }
        }
      },
      "range": [
        1170,
        1260
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 58
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res10",
        "optional": false,
        "range": [
          1266,
          1271
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 62
          },
          "start": {
            "column": 5,
            "line": 62
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1287,
            1307
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj10",
                "optional": false,
                "range": [
                  1288,
                  1293
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 62
                  },
                  "start": {
                    "column": 27,
                    "line": 62
                  }
                }
              },
              "range": [
                1288,
                1293
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 62
                },
                "start": {
                  "column": 27,
                  "line": 62
                }
              }
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj10",
                  "optional": false,
                  "range": [
                    1301,
                    1306
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 62
                    },
                    "start": {
                      "column": 40,
                      "line": 62
                    }
                  }
                },
                "range": [
                  1301,
                  1306
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 62
                  },
                  "start": {
                    "column": 40,
                    "line": 62
                  }
                }
              },
              "range": [
                1295,
                1306
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 62
                },
                "start": {
                  "column": 34,
                  "line": 62
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 62
            },
            "start": {
              "column": 26,
              "line": 62
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "StrippingPick",
          "optional": false,
          "range": [
            1274,
            1287
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 62
            },
            "start": {
              "column": 13,
              "line": 62
            }
          }
        },
        "range": [
          1274,
          1307
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 62
          },
          "start": {
            "column": 13,
            "line": 62
          }
        }
      },
      "range": [
        1261,
        1307
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 62
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1325,
          1390
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 65
                    },
                    "start": {
                      "column": 8,
                      "line": 65
                    }
                  },
                  "range": [
                    1335,
                    1343
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1337,
                      1343
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 65
                      },
                      "start": {
                        "column": 10,
                        "line": 65
                      }
                    }
                  }
                },
                "range": [
                  1332,
                  1343
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 65
                  },
                  "start": {
                    "column": 5,
                    "line": 65
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 65
                },
                "start": {
                  "column": 17,
                  "line": 65
                }
              },
              "range": [
                1344,
                1352
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1346,
                  1352
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 65
                  },
                  "start": {
                    "column": 19,
                    "line": 65
                  }
                }
              }
            },
            "range": [
              1331,
              1353
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 66
                    },
                    "start": {
                      "column": 17,
                      "line": 66
                    }
                  },
                  "range": [
                    1371,
                    1379
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      1373,
                      1379
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 66
                      },
                      "start": {
                        "column": 19,
                        "line": 66
                      }
                    }
                  }
                },
                "range": [
                  1368,
                  1379
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 66
                  },
                  "start": {
                    "column": 14,
                    "line": 66
                  }
                }
              }
            ],
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 66
                },
                "start": {
                  "column": 26,
                  "line": 66
                }
              },
              "range": [
                1380,
                1387
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'foo'",
                  "value": "foo",
                  "range": [
                    1382,
                    1387
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 66
                    },
                    "start": {
                      "column": 28,
                      "line": 66
                    }
                  }
                },
                "range": [
                  1382,
                  1387
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 66
                  },
                  "start": {
                    "column": 28,
                    "line": 66
                  }
                }
              }
            },
            "range": [
              1358,
              1388
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 67
          },
          "start": {
            "column": 16,
            "line": 64
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj11",
        "optional": false,
        "range": [
          1319,
          1324
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 64
          },
          "start": {
            "column": 10,
            "line": 64
          }
        }
      },
      "range": [
        1309,
        1390
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 64
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res11",
        "optional": false,
        "range": [
          1396,
          1401
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 68
          },
          "start": {
            "column": 5,
            "line": 68
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1417,
            1437
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj11",
                "optional": false,
                "range": [
                  1418,
                  1423
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 68
                  },
                  "start": {
                    "column": 27,
                    "line": 68
                  }
                }
              },
              "range": [
                1418,
                1423
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 68
                },
                "start": {
                  "column": 27,
                  "line": 68
                }
              }
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj11",
                  "optional": false,
                  "range": [
                    1431,
                    1436
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 68
                    },
                    "start": {
                      "column": 40,
                      "line": 68
                    }
                  }
                },
                "range": [
                  1431,
                  1436
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 68
                  },
                  "start": {
                    "column": 40,
                    "line": 68
                  }
                }
              },
              "range": [
                1425,
                1436
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 68
                },
                "start": {
                  "column": 34,
                  "line": 68
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 68
            },
            "start": {
              "column": 26,
              "line": 68
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "StrippingPick",
          "optional": false,
          "range": [
            1404,
            1417
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 68
            },
            "start": {
              "column": 13,
              "line": 68
            }
          }
        },
        "range": [
          1404,
          1437
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 68
          },
          "start": {
            "column": 13,
            "line": 68
          }
        }
      },
      "range": [
        1391,
        1437
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 68
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1455,
          1520
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 71
                    },
                    "start": {
                      "column": 17,
                      "line": 71
                    }
                  },
                  "range": [
                    1474,
                    1482
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1476,
                      1482
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 71
                      },
                      "start": {
                        "column": 19,
                        "line": 71
                      }
                    }
                  }
                },
                "range": [
                  1471,
                  1482
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 71
                  },
                  "start": {
                    "column": 14,
                    "line": 71
                  }
                }
              }
            ],
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 71
                },
                "start": {
                  "column": 26,
                  "line": 71
                }
              },
              "range": [
                1483,
                1491
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1485,
                  1491
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 71
                  },
                  "start": {
                    "column": 28,
                    "line": 71
                  }
                }
              }
            },
            "range": [
              1461,
              1492
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 71
              },
              "start": {
                "column": 4,
                "line": 71
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 72
                    },
                    "start": {
                      "column": 8,
                      "line": 72
                    }
                  },
                  "range": [
                    1501,
                    1509
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      1503,
                      1509
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 72
                      },
                      "start": {
                        "column": 10,
                        "line": 72
                      }
                    }
                  }
                },
                "range": [
                  1498,
                  1509
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 72
                  },
                  "start": {
                    "column": 5,
                    "line": 72
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 72
                },
                "start": {
                  "column": 17,
                  "line": 72
                }
              },
              "range": [
                1510,
                1517
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'foo'",
                  "value": "foo",
                  "range": [
                    1512,
                    1517
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 72
                    },
                    "start": {
                      "column": 19,
                      "line": 72
                    }
                  }
                },
                "range": [
                  1512,
                  1517
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 72
                  },
                  "start": {
                    "column": 19,
                    "line": 72
                  }
                }
              }
            },
            "range": [
              1497,
              1518
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 73
          },
          "start": {
            "column": 16,
            "line": 70
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj12",
        "optional": false,
        "range": [
          1449,
          1454
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 70
          },
          "start": {
            "column": 10,
            "line": 70
          }
        }
      },
      "range": [
        1439,
        1520
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 70
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res12",
        "optional": false,
        "range": [
          1526,
          1531
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 74
          },
          "start": {
            "column": 5,
            "line": 74
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1547,
            1567
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj12",
                "optional": false,
                "range": [
                  1548,
                  1553
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 74
                  },
                  "start": {
                    "column": 27,
                    "line": 74
                  }
                }
              },
              "range": [
                1548,
                1553
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 74
                },
                "start": {
                  "column": 27,
                  "line": 74
                }
              }
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj12",
                  "optional": false,
                  "range": [
                    1561,
                    1566
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 74
                    },
                    "start": {
                      "column": 40,
                      "line": 74
                    }
                  }
                },
                "range": [
                  1561,
                  1566
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 74
                  },
                  "start": {
                    "column": 40,
                    "line": 74
                  }
                }
              },
              "range": [
                1555,
                1566
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 74
                },
                "start": {
                  "column": 34,
                  "line": 74
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 74
            },
            "start": {
              "column": 26,
              "line": 74
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "StrippingPick",
          "optional": false,
          "range": [
            1534,
            1547
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 74
            },
            "start": {
              "column": 13,
              "line": 74
            }
          }
        },
        "range": [
          1534,
          1567
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 74
          },
          "start": {
            "column": 13,
            "line": 74
          }
        }
      },
      "range": [
        1521,
        1567
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 74
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrippingIdentity",
        "optional": false,
        "range": [
          1574,
          1591
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 76
          },
          "start": {
            "column": 5,
            "line": 76
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
              "name": "T",
              "optional": false,
              "range": [
                1621,
                1622
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 76
                },
                "start": {
                  "column": 52,
                  "line": 76
                }
              }
            },
            "range": [
              1621,
              1622
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 76
              },
              "start": {
                "column": 52,
                "line": 76
              }
            }
          },
          "range": [
            1615,
            1622
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 76
            },
            "start": {
              "column": 46,
              "line": 76
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            1610,
            1611
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 76
            },
            "start": {
              "column": 41,
              "line": 76
            }
          }
        },
        "nameType": null,
        "readonly": "-",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                1627,
                1628
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 76
                },
                "start": {
                  "column": 58,
                  "line": 76
                }
              }
            },
            "range": [
              1627,
              1628
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 76
              },
              "start": {
                "column": 58,
                "line": 76
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1625,
                1626
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 76
                },
                "start": {
                  "column": 56,
                  "line": 76
                }
              }
            },
            "range": [
              1625,
              1626
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 76
              },
              "start": {
                "column": 56,
                "line": 76
              }
            }
          },
          "range": [
            1625,
            1629
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 76
            },
            "start": {
              "column": 56,
              "line": 76
            }
          }
        },
        "range": [
          1597,
          1632
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 76
          },
          "start": {
            "column": 28,
            "line": 76
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 76
          },
          "start": {
            "column": 22,
            "line": 76
          }
        },
        "range": [
          1591,
          1594
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
                1592,
                1593
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 76
                },
                "start": {
                  "column": 23,
                  "line": 76
                }
              }
            },
            "out": false,
            "range": [
              1592,
              1593
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 76
              },
              "start": {
                "column": 23,
                "line": 76
              }
            }
          }
        ]
      },
      "range": [
        1569,
        1632
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 76
        },
        "start": {
          "column": 0,
          "line": 76
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1650,
          1696
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 79
                    },
                    "start": {
                      "column": 17,
                      "line": 79
                    }
                  },
                  "range": [
                    1669,
                    1685
                  ],
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "tail": false,
                        "value": {
                          "cooked": "wow",
                          "raw": "wow"
                        },
                        "range": [
                          1671,
                          1677
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 79
                          },
                          "start": {
                            "column": 19,
                            "line": 79
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
                          1683,
                          1685
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 79
                          },
                          "start": {
                            "column": 31,
                            "line": 79
                          }
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          1677,
                          1683
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 79
                          },
                          "start": {
                            "column": 25,
                            "line": 79
                          }
                        }
                      }
                    ],
                    "range": [
                      1671,
                      1685
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 79
                      },
                      "start": {
                        "column": 19,
                        "line": 79
                      }
                    }
                  }
                },
                "range": [
                  1666,
                  1685
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 79
                  },
                  "start": {
                    "column": 14,
                    "line": 79
                  }
                }
              }
            ],
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 79
                },
                "start": {
                  "column": 34,
                  "line": 79
                }
              },
              "range": [
                1686,
                1693
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'foo'",
                  "value": "foo",
                  "range": [
                    1688,
                    1693
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 79
                    },
                    "start": {
                      "column": 36,
                      "line": 79
                    }
                  }
                },
                "range": [
                  1688,
                  1693
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 79
                  },
                  "start": {
                    "column": 36,
                    "line": 79
                  }
                }
              }
            },
            "range": [
              1656,
              1694
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 79
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 80
          },
          "start": {
            "column": 16,
            "line": 78
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj13",
        "optional": false,
        "range": [
          1644,
          1649
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 78
          },
          "start": {
            "column": 10,
            "line": 78
          }
        }
      },
      "range": [
        1634,
        1696
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 78
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res13",
        "optional": false,
        "range": [
          1702,
          1707
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 81
          },
          "start": {
            "column": 5,
            "line": 81
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1727,
            1734
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj13",
                "optional": false,
                "range": [
                  1728,
                  1733
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 81
                  },
                  "start": {
                    "column": 31,
                    "line": 81
                  }
                }
              },
              "range": [
                1728,
                1733
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 81
                },
                "start": {
                  "column": 31,
                  "line": 81
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 81
            },
            "start": {
              "column": 30,
              "line": 81
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "StrippingIdentity",
          "optional": false,
          "range": [
            1710,
            1727
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 81
            },
            "start": {
              "column": 13,
              "line": 81
            }
          }
        },
        "range": [
          1710,
          1734
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 81
          },
          "start": {
            "column": 13,
            "line": 81
          }
        }
      },
      "range": [
        1697,
        1734
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 81
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 82
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
