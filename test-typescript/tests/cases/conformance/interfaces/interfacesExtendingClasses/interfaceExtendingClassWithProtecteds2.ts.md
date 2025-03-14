__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    350
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          10,
          38
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                26,
                27
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
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              },
              "range": [
                27,
                35
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  29,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 2
                  },
                  "start": {
                    "column": 17,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              16,
              36
            ],
            "loc": {
              "end": {
                "column": 24,
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
            "column": 10,
            "line": 1
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
          6,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        38
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          50,
          78
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                66,
                67
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 14,
                  "line": 6
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
                  "column": 23,
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              },
              "range": [
                67,
                75
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  69,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 6
                  },
                  "start": {
                    "column": 17,
                    "line": 6
                  }
                }
              }
            },
            "value": null,
            "range": [
              56,
              76
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
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
            "column": 10,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "range": [
          46,
          49
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        40,
        78
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          110,
          122
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 30,
            "line": 9
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
            "name": "Foo",
            "optional": false,
            "range": [
              101,
              104
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 9
              },
              "start": {
                "column": 21,
                "line": 9
              }
            }
          },
          "range": [
            101,
            104
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 9
            },
            "start": {
              "column": 21,
              "line": 9
            }
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "range": [
              106,
              109
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 9
              },
              "start": {
                "column": 26,
                "line": 9
              }
            }
          },
          "range": [
            106,
            109
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 9
            },
            "start": {
              "column": 26,
              "line": 9
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I3",
        "optional": false,
        "range": [
          90,
          92
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 9
          },
          "start": {
            "column": 10,
            "line": 9
          }
        }
      },
      "range": [
        80,
        122
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
          154,
          181
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                169,
                170
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
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 13
                },
                "start": {
                  "column": 5,
                  "line": 13
                }
              },
              "range": [
                170,
                178
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  172,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 13
                  },
                  "start": {
                    "column": 7,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              169,
              179
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 13
              },
              "start": {
                "column": 4,
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
            "column": 30,
            "line": 12
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
            "name": "Foo",
            "optional": false,
            "range": [
              145,
              148
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 12
              },
              "start": {
                "column": 21,
                "line": 12
              }
            }
          },
          "range": [
            145,
            148
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 12
            },
            "start": {
              "column": 21,
              "line": 12
            }
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "range": [
              150,
              153
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 12
              },
              "start": {
                "column": 26,
                "line": 12
              }
            }
          },
          "range": [
            150,
            153
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 12
            },
            "start": {
              "column": 26,
              "line": 12
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I4",
        "optional": false,
        "range": [
          134,
          136
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 12
          },
          "start": {
            "column": 10,
            "line": 12
          }
        }
      },
      "range": [
        124,
        181
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          193,
          221
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                209,
                210
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
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 17
                },
                "start": {
                  "column": 15,
                  "line": 17
                }
              },
              "range": [
                210,
                218
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  212,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 17
                  },
                  "start": {
                    "column": 17,
                    "line": 17
                  }
                }
              }
            },
            "value": null,
            "range": [
              199,
              219
            ],
            "loc": {
              "end": {
                "column": 24,
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
            "column": 10,
            "line": 16
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "range": [
          189,
          192
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 16
          },
          "start": {
            "column": 6,
            "line": 16
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        183,
        221
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
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
          253,
          271
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "range": [
                259,
                260
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 4,
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
                  "column": 13,
                  "line": 21
                },
                "start": {
                  "column": 5,
                  "line": 21
                }
              },
              "range": [
                260,
                268
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  262,
                  268
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 21
                  },
                  "start": {
                    "column": 7,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              259,
              269
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 21
              },
              "start": {
                "column": 4,
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
            "column": 30,
            "line": 20
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
            "name": "Foo",
            "optional": false,
            "range": [
              244,
              247
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 20
              },
              "start": {
                "column": 21,
                "line": 20
              }
            }
          },
          "range": [
            244,
            247
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 20
            },
            "start": {
              "column": 21,
              "line": 20
            }
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Baz",
            "optional": false,
            "range": [
              249,
              252
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 20
              },
              "start": {
                "column": 26,
                "line": 20
              }
            }
          },
          "range": [
            249,
            252
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 20
            },
            "start": {
              "column": 26,
              "line": 20
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I5",
        "optional": false,
        "range": [
          233,
          235
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 20
          },
          "start": {
            "column": 10,
            "line": 20
          }
        }
      },
      "range": [
        223,
        271
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 20
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 9,
                  "line": 24
                },
                "start": {
                  "column": 5,
                  "line": 24
                }
              },
              "range": [
                278,
                282
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I5",
                  "optional": false,
                  "range": [
                    280,
                    282
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 24
                    },
                    "start": {
                      "column": 7,
                      "line": 24
                    }
                  }
                },
                "range": [
                  280,
                  282
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 24
                  },
                  "start": {
                    "column": 7,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              277,
              282
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": null,
          "range": [
            277,
            282
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        273,
        283
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 25
                },
                "start": {
                  "column": 5,
                  "line": 25
                }
              },
              "range": [
                289,
                297
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  291,
                  297
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 25
                  },
                  "start": {
                    "column": 7,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              288,
              297
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                300,
                301
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 25
                },
                "start": {
                  "column": 16,
                  "line": 25
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "range": [
                302,
                303
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 25
                },
                "start": {
                  "column": 18,
                  "line": 25
                }
              }
            },
            "range": [
              300,
              303
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 25
              },
              "start": {
                "column": 16,
                "line": 25
              }
            }
          },
          "range": [
            288,
            303
          ],
          "loc": {
            "end": {
              "column": 19,
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
      "kind": "var",
      "range": [
        284,
        304
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
            "name": "r2",
            "optional": false,
            "range": [
              309,
              311
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                314,
                315
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 26
                },
                "start": {
                  "column": 9,
                  "line": 26
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                316,
                317
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 26
                },
                "start": {
                  "column": 11,
                  "line": 26
                }
              }
            },
            "range": [
              314,
              317
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 26
              },
              "start": {
                "column": 9,
                "line": 26
              }
            }
          },
          "range": [
            309,
            317
          ],
          "loc": {
            "end": {
              "column": 12,
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
      "kind": "var",
      "range": [
        305,
        318
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
            "name": "r3",
            "optional": false,
            "range": [
              332,
              334
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                337,
                338
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 27
                },
                "start": {
                  "column": 9,
                  "line": 27
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                339,
                340
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 27
                },
                "start": {
                  "column": 11,
                  "line": 27
                }
              }
            },
            "range": [
              337,
              340
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 27
              },
              "start": {
                "column": 9,
                "line": 27
              }
            }
          },
          "range": [
            332,
            340
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        328,
        341
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 22,
      "line": 27
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
