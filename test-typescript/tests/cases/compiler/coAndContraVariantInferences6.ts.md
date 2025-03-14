__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    921
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          78,
          101
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                82,
                87
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 4
                },
                "start": {
                  "column": 2,
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
                  "column": 18,
                  "line": 4
                },
                "start": {
                  "column": 7,
                  "line": 4
                }
              },
              "range": [
                87,
                98
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"A\"",
                      "value": "A",
                      "range": [
                        89,
                        92
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 4
                        },
                        "start": {
                          "column": 9,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      89,
                      92
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 4
                      },
                      "start": {
                        "column": 9,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"B\"",
                      "value": "B",
                      "range": [
                        95,
                        98
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 4
                        },
                        "start": {
                          "column": 15,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      95,
                      98
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 4
                      },
                      "start": {
                        "column": 15,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  89,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
              82,
              99
            ],
            "loc": {
              "end": {
                "column": 19,
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
            "column": 21,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExactProps",
        "optional": false,
        "range": [
          67,
          77
        ],
        "loc": {
          "end": {
            "column": 20,
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
        101
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
          138,
          181
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  },
                  "range": [
                    148,
                    151
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        150,
                        151
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 7
                        },
                        "start": {
                          "column": 10,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      150,
                      151
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
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
                  143,
                  151
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 7
                  },
                  "start": {
                    "column": 3,
                    "line": 7
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 7
                },
                "start": {
                  "column": 12,
                  "line": 7
                }
              },
              "range": [
                152,
                178
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        166,
                        171
                      ],
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            167,
                            170
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 7
                            },
                            "start": {
                              "column": 27,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 7
                        },
                        "start": {
                          "column": 26,
                          "line": 7
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReactElement",
                      "optional": false,
                      "range": [
                        154,
                        166
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 7
                        },
                        "start": {
                          "column": 14,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      154,
                      171
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 7
                      },
                      "start": {
                        "column": 14,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      174,
                      178
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 7
                      },
                      "start": {
                        "column": 34,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  154,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 7
                  },
                  "start": {
                    "column": 14,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              142,
              179
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 7
              },
              "start": {
                "column": 2,
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
            "column": 36,
            "line": 6
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FunctionComponent",
        "optional": false,
        "range": [
          112,
          129
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 6
          },
          "start": {
            "column": 10,
            "line": 6
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 6
          },
          "start": {
            "column": 27,
            "line": 6
          }
        },
        "range": [
          129,
          137
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                134,
                136
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 6
                },
                "start": {
                  "column": 32,
                  "line": 6
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                130,
                131
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 6
                },
                "start": {
                  "column": 28,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              130,
              136
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 6
              },
              "start": {
                "column": 28,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        102,
        181
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          209,
          237
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                213,
                224
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 13,
                  "line": 10
                },
                "start": {
                  "column": 2,
                  "line": 10
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                224,
                235
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 10
                      },
                      "start": {
                        "column": 19,
                        "line": 10
                      }
                    },
                    "range": [
                      230,
                      233
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "range": [
                          232,
                          233
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 10
                          },
                          "start": {
                            "column": 21,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        232,
                        233
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 10
                        },
                        "start": {
                          "column": 21,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    225,
                    233
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 10
                    },
                    "start": {
                      "column": 14,
                      "line": 10
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 10
                },
                "start": {
                  "column": 13,
                  "line": 10
                }
              }
            },
            "range": [
              213,
              235
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 10
              },
              "start": {
                "column": 2,
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
            "column": 27,
            "line": 9
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "range": [
          196,
          205
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 9
          },
          "start": {
            "column": 14,
            "line": 9
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 9
          },
          "start": {
            "column": 23,
            "line": 9
          }
        },
        "range": [
          205,
          208
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                206,
                207
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 9
                },
                "start": {
                  "column": 24,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              206,
              207
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 9
              },
              "start": {
                "column": 24,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        182,
        237
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          271,
          306
        ],
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 13
                    },
                    "start": {
                      "column": 12,
                      "line": 13
                    }
                  },
                  "range": [
                    285,
                    288
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        287,
                        288
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 13
                        },
                        "start": {
                          "column": 14,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      287,
                      288
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 13
                      },
                      "start": {
                        "column": 14,
                        "line": 13
                      }
                    }
                  }
                },
                "range": [
                  280,
                  288
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 13
                  },
                  "start": {
                    "column": 7,
                    "line": 13
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 13
                },
                "start": {
                  "column": 16,
                  "line": 13
                }
              },
              "range": [
                289,
                303
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    300,
                    303
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "range": [
                          301,
                          302
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 13
                          },
                          "start": {
                            "column": 28,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        301,
                        302
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 13
                        },
                        "start": {
                          "column": 28,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 13
                    },
                    "start": {
                      "column": 27,
                      "line": 13
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "range": [
                    291,
                    300
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 13
                    },
                    "start": {
                      "column": 18,
                      "line": 13
                    }
                  }
                },
                "range": [
                  291,
                  303
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 13
                  },
                  "start": {
                    "column": 18,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              275,
              304
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 13
              },
              "start": {
                "column": 2,
                "line": 13
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 33,
            "line": 12
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentClass",
        "optional": false,
        "range": [
          248,
          262
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 12
          },
          "start": {
            "column": 10,
            "line": 12
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 32,
            "line": 12
          },
          "start": {
            "column": 24,
            "line": 12
          }
        },
        "range": [
          262,
          270
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                267,
                269
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 12
                },
                "start": {
                  "column": 29,
                  "line": 12
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                263,
                264
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 12
                },
                "start": {
                  "column": 25,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              263,
              269
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 12
              },
              "start": {
                "column": 25,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        238,
        306
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
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
          431,
          445
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
                435,
                439
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 21
                },
                "start": {
                  "column": 2,
                  "line": 21
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
                  "column": 9,
                  "line": 21
                },
                "start": {
                  "column": 6,
                  "line": 21
                }
              },
              "range": [
                439,
                442
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    441,
                    442
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                },
                "range": [
                  441,
                  442
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              435,
              443
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 21
              },
              "start": {
                "column": 2,
                "line": 21
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 2,
            "line": 20
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactElement",
        "optional": false,
        "range": [
          318,
          330
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 16
          },
          "start": {
            "column": 10,
            "line": 16
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 22,
            "line": 16
          }
        },
        "range": [
          330,
          430
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    344,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 17
                    },
                    "start": {
                      "column": 12,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      374,
                      379
                    ],
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          375,
                          378
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 17
                          },
                          "start": {
                            "column": 43,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 17
                      },
                      "start": {
                        "column": 42,
                        "line": 17
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "JSXElementConstructor",
                    "optional": false,
                    "range": [
                      353,
                      374
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 17
                      },
                      "start": {
                        "column": 21,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    353,
                    379
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 17
                    },
                    "start": {
                      "column": 21,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                344,
                379
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 17
                },
                "start": {
                  "column": 12,
                  "line": 17
                }
              }
            },
            "default": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    388,
                    394
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 18
                    },
                    "start": {
                      "column": 6,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      422,
                      427
                    ],
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          423,
                          426
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 19
                          },
                          "start": {
                            "column": 28,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 19
                      },
                      "start": {
                        "column": 27,
                        "line": 19
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "JSXElementConstructor",
                    "optional": false,
                    "range": [
                      401,
                      422
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 19
                      },
                      "start": {
                        "column": 6,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    401,
                    427
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 19
                    },
                    "start": {
                      "column": 6,
                      "line": 19
                    }
                  }
                }
              ],
              "range": [
                386,
                427
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 18
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
                334,
                335
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 17
                },
                "start": {
                  "column": 2,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              334,
              427
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 19
              },
              "start": {
                "column": 2,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        308,
        445
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
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
        "name": "JSXElementConstructor",
        "optional": false,
        "range": [
          452,
          473
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 24
          },
          "start": {
            "column": 5,
            "line": 24
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSFunctionType",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 25
                    },
                    "start": {
                      "column": 11,
                      "line": 25
                    }
                  },
                  "range": [
                    490,
                    493
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        492,
                        493
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 25
                        },
                        "start": {
                          "column": 13,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      492,
                      493
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 25
                      },
                      "start": {
                        "column": 13,
                        "line": 25
                      }
                    }
                  }
                },
                "range": [
                  485,
                  493
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 25
                  },
                  "start": {
                    "column": 6,
                    "line": 25
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 25
                },
                "start": {
                  "column": 16,
                  "line": 25
                }
              },
              "range": [
                495,
                522
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        510,
                        515
                      ],
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            511,
                            514
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 25
                            },
                            "start": {
                              "column": 32,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 25
                        },
                        "start": {
                          "column": 31,
                          "line": 25
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReactElement",
                      "optional": false,
                      "range": [
                        498,
                        510
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 25
                        },
                        "start": {
                          "column": 19,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      498,
                      515
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 25
                      },
                      "start": {
                        "column": 19,
                        "line": 25
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      518,
                      522
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 25
                      },
                      "start": {
                        "column": 39,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  498,
                  522
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 25
                  },
                  "start": {
                    "column": 19,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              484,
              522
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 25
              },
              "start": {
                "column": 5,
                "line": 25
              }
            }
          },
          {
            "type": "TSConstructorType",
            "abstract": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 26
                    },
                    "start": {
                      "column": 15,
                      "line": 26
                    }
                  },
                  "range": [
                    539,
                    542
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        541,
                        542
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 26
                        },
                        "start": {
                          "column": 17,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      541,
                      542
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 26
                      },
                      "start": {
                        "column": 17,
                        "line": 26
                      }
                    }
                  }
                },
                "range": [
                  534,
                  542
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 26
                  },
                  "start": {
                    "column": 10,
                    "line": 26
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 26
                },
                "start": {
                  "column": 20,
                  "line": 26
                }
              },
              "range": [
                544,
                561
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    556,
                    561
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        557,
                        560
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
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
                      "column": 37,
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
                  "name": "Component",
                  "optional": false,
                  "range": [
                    547,
                    556
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 26
                    },
                    "start": {
                      "column": 23,
                      "line": 26
                    }
                  }
                },
                "range": [
                  547,
                  561
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 26
                  },
                  "start": {
                    "column": 23,
                    "line": 26
                  }
                }
              }
            },
            "range": [
              529,
              561
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 26
              },
              "start": {
                "column": 5,
                "line": 26
              }
            }
          }
        ],
        "range": [
          481,
          562
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 26
          },
          "start": {
            "column": 2,
            "line": 25
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 24
          },
          "start": {
            "column": 26,
            "line": 24
          }
        },
        "range": [
          473,
          476
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                474,
                475
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 24
                },
                "start": {
                  "column": 27,
                  "line": 24
                }
              }
            },
            "out": false,
            "range": [
              474,
              475
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 24
              },
              "start": {
                "column": 27,
                "line": 24
              }
            }
          }
        ]
      },
      "range": [
        447,
        563
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 24
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
        "name": "createElementIsolated",
        "optional": false,
        "range": [
          582,
          603
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 28
          },
          "start": {
            "column": 17,
            "line": 28
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 29
              },
              "start": {
                "column": 6,
                "line": 29
              }
            },
            "range": [
              625,
              676
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      644,
                      647
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "range": [
                            645,
                            646
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 29
                            },
                            "start": {
                              "column": 26,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          645,
                          646
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 29
                          },
                          "start": {
                            "column": 26,
                            "line": 29
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 29
                      },
                      "start": {
                        "column": 25,
                        "line": 29
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FunctionComponent",
                    "optional": false,
                    "range": [
                      627,
                      644
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    627,
                    647
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 29
                    },
                    "start": {
                      "column": 8,
                      "line": 29
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      664,
                      667
                    ],
                    "params": [
                      {
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
                              "column": 47,
                              "line": 29
                            },
                            "start": {
                              "column": 46,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          665,
                          666
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 29
                          },
                          "start": {
                            "column": 46,
                            "line": 29
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 29
                      },
                      "start": {
                        "column": 45,
                        "line": 29
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ComponentClass",
                    "optional": false,
                    "range": [
                      650,
                      664
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 29
                      },
                      "start": {
                        "column": 31,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    650,
                    667
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 29
                    },
                    "start": {
                      "column": 31,
                      "line": 29
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    670,
                    676
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 29
                    },
                    "start": {
                      "column": 51,
                      "line": 29
                    }
                  }
                }
              ],
              "range": [
                627,
                676
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 29
                },
                "start": {
                  "column": 8,
                  "line": 29
                }
              }
            }
          },
          "range": [
            621,
            676
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 29
            },
            "start": {
              "column": 2,
              "line": 29
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 18,
                "line": 30
              },
              "start": {
                "column": 8,
                "line": 30
              }
            },
            "range": [
              686,
              696
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      688,
                      689
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 30
                      },
                      "start": {
                        "column": 10,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    688,
                    689
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 30
                    },
                    "start": {
                      "column": 10,
                      "line": 30
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    692,
                    696
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 30
                    },
                    "start": {
                      "column": 14,
                      "line": 30
                    }
                  }
                }
              ],
              "range": [
                688,
                696
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 30
                },
                "start": {
                  "column": 10,
                  "line": 30
                }
              }
            }
          },
          "range": [
            680,
            696
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 30
            },
            "start": {
              "column": 2,
              "line": 30
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 7,
            "line": 31
          },
          "start": {
            "column": 1,
            "line": 31
          }
        },
        "range": [
          699,
          705
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            701,
            705
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 31
            },
            "start": {
              "column": 3,
              "line": 31
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 52,
            "line": 28
          },
          "start": {
            "column": 38,
            "line": 28
          }
        },
        "range": [
          603,
          617
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                614,
                616
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 28
                },
                "start": {
                  "column": 49,
                  "line": 28
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                604,
                605
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 28
                },
                "start": {
                  "column": 39,
                  "line": 28
                }
              }
            },
            "out": false,
            "range": [
              604,
              616
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 28
              },
              "start": {
                "column": 39,
                "line": 28
              }
            }
          }
        ]
      },
      "range": [
        565,
        706
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 31
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
            "name": "WrapperIsolated",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 62,
                  "line": 33
                },
                "start": {
                  "column": 27,
                  "line": 33
                }
              },
              "range": [
                735,
                770
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    758,
                    770
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ExactProps",
                        "optional": false,
                        "range": [
                          759,
                          769
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 33
                          },
                          "start": {
                            "column": 51,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        759,
                        769
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 33
                        },
                        "start": {
                          "column": 51,
                          "line": 33
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 33
                    },
                    "start": {
                      "column": 50,
                      "line": 33
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JSXElementConstructor",
                  "optional": false,
                  "range": [
                    737,
                    758
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 33
                    },
                    "start": {
                      "column": 29,
                      "line": 33
                    }
                  }
                },
                "range": [
                  737,
                  770
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 33
                  },
                  "start": {
                    "column": 29,
                    "line": 33
                  }
                }
              }
            },
            "range": [
              720,
              770
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 33
              },
              "start": {
                "column": 12,
                "line": 33
              }
            }
          },
          "init": null,
          "range": [
            720,
            770
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 33
            },
            "start": {
              "column": 12,
              "line": 33
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        708,
        771
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "WrapperIsolated",
            "optional": false,
            "range": [
              794,
              809
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 34
              },
              "start": {
                "column": 22,
                "line": 34
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
                  "name": "value",
                  "optional": false,
                  "range": [
                    813,
                    818
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 34
                    },
                    "start": {
                      "column": 41,
                      "line": 34
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"C\"",
                  "value": "C",
                  "range": [
                    820,
                    823
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 34
                    },
                    "start": {
                      "column": 48,
                      "line": 34
                    }
                  }
                },
                "range": [
                  813,
                  823
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 34
                  },
                  "start": {
                    "column": 41,
                    "line": 34
                  }
                }
              }
            ],
            "range": [
              811,
              825
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 34
              },
              "start": {
                "column": 39,
                "line": 34
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createElementIsolated",
          "optional": false,
          "range": [
            772,
            793
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 34
            },
            "start": {
              "column": 0,
              "line": 34
            }
          }
        },
        "optional": false,
        "range": [
          772,
          826
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        772,
        827
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
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
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 36
                },
                "start": {
                  "column": 19,
                  "line": 36
                }
              },
              "range": [
                848,
                855
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    850,
                    853
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 36
                    },
                    "start": {
                      "column": 21,
                      "line": 36
                    }
                  }
                },
                "range": [
                  850,
                  855
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 36
                  },
                  "start": {
                    "column": 21,
                    "line": 36
                  }
                }
              }
            },
            "range": [
              843,
              855
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 36
              },
              "start": {
                "column": 14,
                "line": 36
              }
            }
          },
          "init": null,
          "range": [
            843,
            855
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 36
            },
            "start": {
              "column": 14,
              "line": 36
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        829,
        856
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
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
            "name": "stat",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 37
                },
                "start": {
                  "column": 18,
                  "line": 37
                }
              },
              "range": [
                875,
                880
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  877,
                  880
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 37
                  },
                  "start": {
                    "column": 20,
                    "line": 37
                  }
                }
              }
            },
            "range": [
              871,
              880
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 37
              },
              "start": {
                "column": 14,
                "line": 37
              }
            }
          },
          "init": null,
          "range": [
            871,
            880
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 37
            },
            "start": {
              "column": 14,
              "line": 37
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        857,
        881
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "range": [
              896,
              901
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 38
              },
              "start": {
                "column": 14,
                "line": 38
              }
            }
          },
          {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "stat",
              "optional": false,
              "range": [
                903,
                907
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 38
                },
                "start": {
                  "column": 21,
                  "line": 38
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "properties",
              "optional": false,
              "range": [
                908,
                918
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 38
                },
                "start": {
                  "column": 26,
                  "line": 38
                }
              }
            },
            "range": [
              903,
              918
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 38
              },
              "start": {
                "column": 21,
                "line": 38
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                882,
                884
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 38
                },
                "start": {
                  "column": 0,
                  "line": 38
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "push",
              "optional": false,
              "range": [
                885,
                889
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 38
                },
                "start": {
                  "column": 3,
                  "line": 38
                }
              }
            },
            "range": [
              882,
              889
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 38
              },
              "start": {
                "column": 0,
                "line": 38
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "apply",
            "optional": false,
            "range": [
              890,
              895
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 38
              },
              "start": {
                "column": 8,
                "line": 38
              }
            }
          },
          "range": [
            882,
            895
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 38
            },
            "start": {
              "column": 0,
              "line": 38
            }
          }
        },
        "optional": false,
        "range": [
          882,
          919
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 38
          },
          "start": {
            "column": 0,
            "line": 38
          }
        }
      },
      "range": [
        882,
        920
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 39
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
