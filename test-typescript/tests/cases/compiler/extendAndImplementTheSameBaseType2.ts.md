__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    258
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          11,
          72
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
              "name": "foo",
              "optional": false,
              "range": [
                17,
                20
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 2
                },
                "start": {
                  "column": 4,
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
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              },
              "range": [
                20,
                28
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  22,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              17,
              28
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                33,
                36
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
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
                36,
                70
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
                        59,
                        63
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 4
                        },
                        "start": {
                          "column": 15,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      52,
                      64
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  42,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 13,
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
                    "column": 12,
                    "line": 3
                  },
                  "start": {
                    "column": 9,
                    "line": 3
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
                    "name": "T",
                    "optional": false,
                    "range": [
                      40,
                      41
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 3
                      },
                      "start": {
                        "column": 11,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    40,
                    41
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 3
                    },
                    "start": {
                      "column": 11,
                      "line": 3
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 7,
                  "line": 3
                }
              }
            },
            "range": [
              33,
              70
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
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
            "line": 6
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        },
        "range": [
          7,
          10
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
                8,
                9
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 1
                },
                "start": {
                  "column": 8,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              8,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        72
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
          120,
          137
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "range": [
                126,
                129
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                129,
                135
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  132,
                  135
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
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 8
                },
                "start": {
                  "column": 7,
                  "line": 8
                }
              }
            },
            "range": [
              126,
              135
            ],
            "loc": {
              "end": {
                "column": 13,
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
            "column": 47,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "range": [
          79,
          80
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "range": [
              110,
              111
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 7
              },
              "start": {
                "column": 37,
                "line": 7
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              111,
              119
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  112,
                  118
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 7
                  },
                  "start": {
                    "column": 39,
                    "line": 7
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 7
              },
              "start": {
                "column": 38,
                "line": 7
              }
            }
          },
          "range": [
            110,
            119
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 7
            },
            "start": {
              "column": 37,
              "line": 7
            }
          }
        }
      ],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          89,
          90
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 7
          },
          "start": {
            "column": 16,
            "line": 7
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          90,
          98
        ],
        "params": [
          {
            "type": "TSStringKeyword",
            "range": [
              91,
              97
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 7
              },
              "start": {
                "column": 18,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 7
          },
          "start": {
            "column": 17,
            "line": 7
          }
        }
      },
      "range": [
        73,
        137
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 11
                },
                "start": {
                  "column": 5,
                  "line": 11
                }
              },
              "range": [
                144,
                147
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "range": [
                    146,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 11
                    },
                    "start": {
                      "column": 7,
                      "line": 11
                    }
                  }
                },
                "range": [
                  146,
                  147
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 11
                  },
                  "start": {
                    "column": 7,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              143,
              147
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
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "range": [
                154,
                155
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
              150,
              157
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 11
              },
              "start": {
                "column": 11,
                "line": 11
              }
            }
          },
          "range": [
            143,
            157
          ],
          "loc": {
            "end": {
              "column": 18,
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
        139,
        158
      ],
      "loc": {
        "end": {
          "column": 19,
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
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 12
                },
                "start": {
                  "column": 5,
                  "line": 12
                }
              },
              "range": [
                164,
                172
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  166,
                  172
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 12
                  },
                  "start": {
                    "column": 7,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              163,
              172
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
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "range": [
                175,
                176
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 12
                },
                "start": {
                  "column": 16,
                  "line": 12
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
                177,
                180
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 12
                },
                "start": {
                  "column": 18,
                  "line": 12
                }
              }
            },
            "range": [
              175,
              180
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 12
              },
              "start": {
                "column": 16,
                "line": 12
              }
            }
          },
          "range": [
            163,
            180
          ],
          "loc": {
            "end": {
              "column": 21,
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
        159,
        181
      ],
      "loc": {
        "end": {
          "column": 22,
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 13
                },
                "start": {
                  "column": 6,
                  "line": 13
                }
              },
              "range": [
                188,
                196
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  190,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 14,
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
              186,
              196
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
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "range": [
                199,
                200
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 13
                },
                "start": {
                  "column": 17,
                  "line": 13
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
                201,
                204
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 13
                },
                "start": {
                  "column": 19,
                  "line": 13
                }
              }
            },
            "range": [
              199,
              204
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 13
              },
              "start": {
                "column": 17,
                "line": 13
              }
            }
          },
          "range": [
            186,
            204
          ],
          "loc": {
            "end": {
              "column": 22,
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
        182,
        205
      ],
      "loc": {
        "end": {
          "column": 23,
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 15
                },
                "start": {
                  "column": 6,
                  "line": 15
                }
              },
              "range": [
                213,
                221
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  215,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              211,
              221
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
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  224,
                  225
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 15
                  },
                  "start": {
                    "column": 17,
                    "line": 15
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
                  226,
                  229
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 15
                  },
                  "start": {
                    "column": 19,
                    "line": 15
                  }
                }
              },
              "range": [
                224,
                229
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 15
                },
                "start": {
                  "column": 17,
                  "line": 15
                }
              }
            },
            "optional": false,
            "range": [
              224,
              231
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 15
              },
              "start": {
                "column": 17,
                "line": 15
              }
            }
          },
          "range": [
            211,
            231
          ],
          "loc": {
            "end": {
              "column": 24,
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
        207,
        232
      ],
      "loc": {
        "end": {
          "column": 25,
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 16
                },
                "start": {
                  "column": 6,
                  "line": 16
                }
              },
              "range": [
                239,
                247
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  241,
                  247
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              237,
              247
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  250,
                  251
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 16
                  },
                  "start": {
                    "column": 17,
                    "line": 16
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
                  252,
                  255
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 16
                  },
                  "start": {
                    "column": 19,
                    "line": 16
                  }
                }
              },
              "range": [
                250,
                255
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 16
                },
                "start": {
                  "column": 17,
                  "line": 16
                }
              }
            },
            "optional": false,
            "range": [
              250,
              257
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 16
              },
              "start": {
                "column": 17,
                "line": 16
              }
            }
          },
          "range": [
            237,
            257
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        233,
        258
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 25,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
