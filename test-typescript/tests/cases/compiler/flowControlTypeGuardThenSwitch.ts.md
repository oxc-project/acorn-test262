__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    514
  ],
  "body": [
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          10,
          27
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                16,
                17
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "range": [
              16,
              17
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                23,
                24
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "range": [
              23,
              24
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 3
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
            "line": 4
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Kind",
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
      "range": [
        0,
        27
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
          44,
          63
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
                50,
                54
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
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
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              },
              "range": [
                54,
                60
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Kind",
                  "optional": false,
                  "range": [
                    56,
                    60
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 7
                    },
                    "start": {
                      "column": 10,
                      "line": 7
                    }
                  }
                },
                "range": [
                  56,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 7
                  },
                  "start": {
                    "column": 10,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              50,
              61
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 15,
            "line": 6
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
          39,
          43
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 6
          },
          "start": {
            "column": 10,
            "line": 6
          }
        }
      },
      "range": [
        29,
        63
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
          90,
          125
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
                96,
                100
              ],
              "loc": {
                "end": {
                  "column": 8,
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
                  "column": 16,
                  "line": 11
                },
                "start": {
                  "column": 8,
                  "line": 11
                }
              },
              "range": [
                100,
                108
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Kind",
                    "optional": false,
                    "range": [
                      102,
                      106
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 11
                      },
                      "start": {
                        "column": 10,
                        "line": 11
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      107,
                      108
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 11
                      },
                      "start": {
                        "column": 15,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    102,
                    108
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 11
                    },
                    "start": {
                      "column": 10,
                      "line": 11
                    }
                  }
                },
                "range": [
                  102,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 11
                  },
                  "start": {
                    "column": 10,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              96,
              109
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "yar",
              "optional": false,
              "range": [
                114,
                117
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
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
                  "column": 12,
                  "line": 12
                },
                "start": {
                  "column": 7,
                  "line": 12
                }
              },
              "range": [
                117,
                122
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  119,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 12
                  },
                  "start": {
                    "column": 9,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              114,
              123
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 25,
            "line": 10
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
              85,
              89
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 10
              },
              "start": {
                "column": 20,
                "line": 10
              }
            }
          },
          "range": [
            85,
            89
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 10
            },
            "start": {
              "column": 20,
              "line": 10
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          75,
          76
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 10
          },
          "start": {
            "column": 10,
            "line": 10
          }
        }
      },
      "range": [
        65,
        125
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          152,
          187
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
                158,
                162
              ],
              "loc": {
                "end": {
                  "column": 8,
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
                  "column": 16,
                  "line": 16
                },
                "start": {
                  "column": 8,
                  "line": 16
                }
              },
              "range": [
                162,
                170
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Kind",
                    "optional": false,
                    "range": [
                      164,
                      168
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
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      169,
                      170
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 16
                      },
                      "start": {
                        "column": 15,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    164,
                    170
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 16
                    },
                    "start": {
                      "column": 10,
                      "line": 16
                    }
                  }
                },
                "range": [
                  164,
                  170
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 16
                  },
                  "start": {
                    "column": 10,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              158,
              171
            ],
            "loc": {
              "end": {
                "column": 17,
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
              "name": "gar",
              "optional": false,
              "range": [
                176,
                179
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
                  "column": 12,
                  "line": 17
                },
                "start": {
                  "column": 7,
                  "line": 17
                }
              },
              "range": [
                179,
                184
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  181,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 12,
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
              176,
              185
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 25,
            "line": 15
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
              147,
              151
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 15
              },
              "start": {
                "column": 20,
                "line": 15
              }
            }
          },
          "range": [
            147,
            151
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 15
            },
            "start": {
              "column": 20,
              "line": 15
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          137,
          138
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 15
          },
          "start": {
            "column": 10,
            "line": 15
          }
        }
      },
      "range": [
        127,
        187
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
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
        "name": "Both",
        "optional": false,
        "range": [
          194,
          198
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 20
          },
          "start": {
            "column": 5,
            "line": 20
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
                201,
                202
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 20
                },
                "start": {
                  "column": 12,
                  "line": 20
                }
              }
            },
            "range": [
              201,
              202
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 20
              },
              "start": {
                "column": 12,
                "line": 20
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
                205,
                206
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 20
                },
                "start": {
                  "column": 16,
                  "line": 20
                }
              }
            },
            "range": [
              205,
              206
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 20
              },
              "start": {
                "column": 16,
                "line": 20
              }
            }
          }
        ],
        "range": [
          201,
          206
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 20
          },
          "start": {
            "column": 12,
            "line": 20
          }
        }
      },
      "range": [
        189,
        207
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                257,
                261
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 22
                },
                "start": {
                  "column": 11,
                  "line": 22
                }
              }
            },
            "range": [
              250,
              262
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "range": [
          244,
          264
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 36,
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
        "name": "isBoth",
        "optional": false,
        "range": [
          217,
          223
        ],
        "loc": {
          "end": {
            "column": 15,
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
                "column": 23,
                "line": 21
              },
              "start": {
                "column": 17,
                "line": 21
              }
            },
            "range": [
              225,
              231
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "range": [
                  227,
                  231
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 21
                  },
                  "start": {
                    "column": 19,
                    "line": 21
                  }
                }
              },
              "range": [
                227,
                231
              ],
              "loc": {
                "end": {
                  "column": 23,
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
            224,
            231
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 21
            },
            "start": {
              "column": 16,
              "line": 21
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 35,
            "line": 21
          },
          "start": {
            "column": 24,
            "line": 21
          }
        },
        "range": [
          232,
          243
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
              234,
              235
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 35,
                "line": 21
              },
              "start": {
                "column": 31,
                "line": 21
              }
            },
            "range": [
              239,
              243
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Both",
                "optional": false,
                "range": [
                  239,
                  243
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 21
                  },
                  "start": {
                    "column": 31,
                    "line": 21
                  }
                }
              },
              "range": [
                239,
                243
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 21
                },
                "start": {
                  "column": 31,
                  "line": 21
                }
              }
            }
          },
          "range": [
            234,
            243
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 21
            },
            "start": {
              "column": 26,
              "line": 21
            }
          }
        }
      },
      "range": [
        208,
        264
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 21
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 25
                },
                "start": {
                  "column": 7,
                  "line": 25
                }
              },
              "range": [
                273,
                279
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "range": [
                    275,
                    279
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 25
                    },
                    "start": {
                      "column": 9,
                      "line": 25
                    }
                  }
                },
                "range": [
                  275,
                  279
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 25
                  },
                  "start": {
                    "column": 9,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              270,
              279
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "range": [
              282,
              291
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 25
              },
              "start": {
                "column": 16,
                "line": 25
              }
            }
          },
          "range": [
            270,
            291
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        266,
        292
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myA",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 29
                              },
                              "start": {
                                "column": 21,
                                "line": 29
                              }
                            },
                            "range": [
                              378,
                              381
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "range": [
                                  380,
                                  381
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 29
                                  }
                                }
                              },
                              "range": [
                                380,
                                381
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 29
                                },
                                "start": {
                                  "column": 23,
                                  "line": 29
                                }
                              }
                            }
                          },
                          "range": [
                            375,
                            381
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 29
                            },
                            "start": {
                              "column": 18,
                              "line": 29
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "range": [
                            384,
                            387
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 29
                            },
                            "start": {
                              "column": 27,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          375,
                          387
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 29
                          },
                          "start": {
                            "column": 18,
                            "line": 29
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      369,
                      388
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 29
                      },
                      "start": {
                        "column": 12,
                        "line": 29
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      427,
                      433
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 30
                      },
                      "start": {
                        "column": 12,
                        "line": 30
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
                    "name": "Kind",
                    "optional": false,
                    "range": [
                      349,
                      353
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 28
                      },
                      "start": {
                        "column": 13,
                        "line": 28
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      354,
                      355
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 28
                      },
                      "start": {
                        "column": 18,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    349,
                    355
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 28
                    },
                    "start": {
                      "column": 13,
                      "line": 28
                    }
                  }
                },
                "range": [
                  344,
                  433
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 30
                  },
                  "start": {
                    "column": 8,
                    "line": 28
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myB",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 32
                              },
                              "start": {
                                "column": 21,
                                "line": 32
                              }
                            },
                            "range": [
                              476,
                              479
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "range": [
                                  478,
                                  479
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 32
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 32
                                  }
                                }
                              },
                              "range": [
                                478,
                                479
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 32
                                },
                                "start": {
                                  "column": 23,
                                  "line": 32
                                }
                              }
                            }
                          },
                          "range": [
                            473,
                            479
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 32
                            },
                            "start": {
                              "column": 18,
                              "line": 32
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "range": [
                            482,
                            485
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 32
                            },
                            "start": {
                              "column": 27,
                              "line": 32
                            }
                          }
                        },
                        "range": [
                          473,
                          485
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 32
                          },
                          "start": {
                            "column": 18,
                            "line": 32
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      467,
                      486
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 32
                      },
                      "start": {
                        "column": 12,
                        "line": 32
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      499,
                      505
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 33
                      },
                      "start": {
                        "column": 12,
                        "line": 33
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
                    "name": "Kind",
                    "optional": false,
                    "range": [
                      447,
                      451
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 31
                      },
                      "start": {
                        "column": 13,
                        "line": 31
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      452,
                      453
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 31
                      },
                      "start": {
                        "column": 18,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    447,
                    453
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 31
                    },
                    "start": {
                      "column": 13,
                      "line": 31
                    }
                  }
                },
                "range": [
                  442,
                  505
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 33
                  },
                  "start": {
                    "column": 8,
                    "line": 31
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
                "name": "foo",
                "optional": false,
                "range": [
                  324,
                  327
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 27
                  },
                  "start": {
                    "column": 12,
                    "line": 27
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
                  328,
                  332
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 27
                  },
                  "start": {
                    "column": 16,
                    "line": 27
                  }
                }
              },
              "range": [
                324,
                332
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 27
                },
                "start": {
                  "column": 12,
                  "line": 27
                }
              }
            },
            "range": [
              316,
              511
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          }
        ],
        "range": [
          310,
          513
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 17,
            "line": 26
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              304,
              307
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 26
              },
              "start": {
                "column": 11,
                "line": 26
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isBoth",
          "optional": false,
          "range": [
            297,
            303
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        },
        "optional": false,
        "range": [
          297,
          308
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 26
          },
          "start": {
            "column": 4,
            "line": 26
          }
        }
      },
      "range": [
        293,
        513
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
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
      "line": 36
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
