__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    675
  ],
  "body": [
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
              "name": "x",
              "optional": false,
              "range": [
                56,
                57
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 3
                },
                "start": {
                  "column": 34,
                  "line": 3
                }
              }
            },
            "range": [
              49,
              57
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
              },
              "start": {
                "column": 27,
                "line": 3
              }
            }
          }
        ],
        "range": [
          47,
          59
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 3
          },
          "start": {
            "column": 25,
            "line": 3
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
          31,
          34
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
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
                "column": 20,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            },
            "range": [
              39,
              42
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  41,
                  42
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 3
                  },
                  "start": {
                    "column": 19,
                    "line": 3
                  }
                }
              },
              "range": [
                41,
                42
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            }
          },
          "range": [
            38,
            42
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 3
            },
            "start": {
              "column": 16,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 24,
            "line": 3
          },
          "start": {
            "column": 21,
            "line": 3
          }
        },
        "range": [
          43,
          46
        ],
        "typeAnnotation": {
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
                "column": 24,
                "line": 3
              },
              "start": {
                "column": 23,
                "line": 3
              }
            }
          },
          "range": [
            45,
            46
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 3
            },
            "start": {
              "column": 23,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        },
        "range": [
          34,
          37
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
                35,
                36
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              35,
              36
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        59
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          74,
          106
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                76,
                87
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 26,
                  "line": 5
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                87,
                104
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  101,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 5
                  },
                  "start": {
                    "column": 40,
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 5
                        },
                        "start": {
                          "column": 35,
                          "line": 5
                        }
                      },
                      "range": [
                        96,
                        99
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            98,
                            99
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 5
                            },
                            "start": {
                              "column": 37,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          98,
                          99
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 5
                          },
                          "start": {
                            "column": 37,
                            "line": 5
                          }
                        }
                      }
                    },
                    "range": [
                      95,
                      99
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 5
                      },
                      "start": {
                        "column": 34,
                        "line": 5
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    88,
                    99
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 5
                    },
                    "start": {
                      "column": 27,
                      "line": 5
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 5
                },
                "start": {
                  "column": 26,
                  "line": 5
                }
              }
            },
            "range": [
              76,
              104
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 5
              },
              "start": {
                "column": 15,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 5
          },
          "start": {
            "column": 13,
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
          67,
          70
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        },
        "range": [
          70,
          73
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
                71,
                72
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              71,
              72
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 5
              },
              "start": {
                "column": 10,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        61,
        106
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "WhatFoo",
            "optional": false,
            "range": [
              158,
              165
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                168,
                171
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 9
                },
                "start": {
                  "column": 16,
                  "line": 9
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                171,
                174
              ],
              "params": [
                {
                  "type": "TSJSDocUnknownType",
                  "range": [
                    172,
                    173
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 9
                    },
                    "start": {
                      "column": 20,
                      "line": 9
                    }
                  },
                  "id": 0
                }
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 9
                },
                "start": {
                  "column": 19,
                  "line": 9
                }
              }
            },
            "range": [
              168,
              174
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 9
              },
              "start": {
                "column": 16,
                "line": 9
              }
            }
          },
          "range": [
            158,
            174
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        152,
        175
      ],
      "loc": {
        "end": {
          "column": 23,
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
            "name": "HuhFoo",
            "optional": false,
            "range": [
              182,
              188
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                191,
                194
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 10
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                194,
                203
              ],
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "range": [
                    195,
                    202
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 10
                    },
                    "start": {
                      "column": 19,
                      "line": 10
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 10
                      },
                      "start": {
                        "column": 18,
                        "line": 10
                      }
                    },
                    "range": [
                      194,
                      201
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        195,
                        201
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
                  "id": 0,
                  "postfix": true
                }
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 10
                },
                "start": {
                  "column": 18,
                  "line": 10
                }
              }
            },
            "range": [
              191,
              203
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 10
              },
              "start": {
                "column": 15,
                "line": 10
              }
            }
          },
          "range": [
            182,
            203
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        176,
        204
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
            "name": "NopeFoo",
            "optional": false,
            "range": [
              211,
              218
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 11
              }
            }
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                221,
                224
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 11
                },
                "start": {
                  "column": 16,
                  "line": 11
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                224,
                233
              ],
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "range": [
                    225,
                    232
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 11
                    },
                    "start": {
                      "column": 20,
                      "line": 11
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 11
                      },
                      "start": {
                        "column": 20,
                        "line": 11
                      }
                    },
                    "range": [
                      225,
                      232
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        226,
                        232
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 11
                        },
                        "start": {
                          "column": 21,
                          "line": 11
                        }
                      }
                    }
                  },
                  "id": 0,
                  "postfix": false
                }
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 11
                },
                "start": {
                  "column": 19,
                  "line": 11
                }
              }
            },
            "range": [
              221,
              233
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 11
              },
              "start": {
                "column": 16,
                "line": 11
              }
            }
          },
          "range": [
            211,
            233
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 11
            },
            "start": {
              "column": 6,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        205,
        234
      ],
      "loc": {
        "end": {
          "column": 29,
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
            "name": "ComeOnFoo",
            "optional": false,
            "range": [
              241,
              250
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            }
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                253,
                256
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
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                256,
                266
              ],
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "range": [
                    257,
                    265
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 12
                    },
                    "start": {
                      "column": 22,
                      "line": 12
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 12
                      },
                      "start": {
                        "column": 22,
                        "line": 12
                      }
                    },
                    "range": [
                      257,
                      265
                    ],
                    "typeAnnotation": {
                      "type": "TSJSDocNullableType",
                      "range": [
                        258,
                        265
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 12
                        },
                        "start": {
                          "column": 23,
                          "line": 12
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 12
                          },
                          "start": {
                            "column": 22,
                            "line": 12
                          }
                        },
                        "range": [
                          257,
                          264
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            258,
                            264
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 12
                            },
                            "start": {
                              "column": 23,
                              "line": 12
                            }
                          }
                        }
                      },
                      "id": 0,
                      "postfix": true
                    }
                  },
                  "id": 0,
                  "postfix": false
                }
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 12
                },
                "start": {
                  "column": 21,
                  "line": 12
                }
              }
            },
            "range": [
              253,
              266
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 12
              },
              "start": {
                "column": 18,
                "line": 12
              }
            }
          },
          "range": [
            241,
            266
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 12
            },
            "start": {
              "column": 6,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        235,
        267
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWhatFoo",
        "optional": false,
        "range": [
          274,
          282
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 14
          },
          "start": {
            "column": 5,
            "line": 14
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            292,
            295
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 14
            },
            "start": {
              "column": 23,
              "line": 14
            }
          }
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            295,
            298
          ],
          "params": [
            {
              "type": "TSJSDocUnknownType",
              "range": [
                296,
                297
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 14
                },
                "start": {
                  "column": 27,
                  "line": 14
                }
              },
              "id": 0
            }
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 14
            },
            "start": {
              "column": 26,
              "line": 14
            }
          }
        },
        "range": [
          285,
          298
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 14
          },
          "start": {
            "column": 16,
            "line": 14
          }
        }
      },
      "range": [
        269,
        299
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 14
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
        "name": "THuhFoo",
        "optional": false,
        "range": [
          305,
          312
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 15
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            322,
            325
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 15
            },
            "start": {
              "column": 22,
              "line": 15
            }
          }
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            325,
            334
          ],
          "params": [
            {
              "type": "TSJSDocNullableType",
              "range": [
                326,
                333
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 15
                },
                "start": {
                  "column": 26,
                  "line": 15
                }
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 15
                  },
                  "start": {
                    "column": 25,
                    "line": 15
                  }
                },
                "range": [
                  325,
                  332
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    326,
                    332
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 15
                    },
                    "start": {
                      "column": 26,
                      "line": 15
                    }
                  }
                }
              },
              "id": 0,
              "postfix": true
            }
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 15
            },
            "start": {
              "column": 25,
              "line": 15
            }
          }
        },
        "range": [
          315,
          334
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 15
          },
          "start": {
            "column": 15,
            "line": 15
          }
        }
      },
      "range": [
        300,
        335
      ],
      "loc": {
        "end": {
          "column": 35,
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
        "name": "TNopeFoo",
        "optional": false,
        "range": [
          341,
          349
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 16
          },
          "start": {
            "column": 5,
            "line": 16
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            359,
            362
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
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            362,
            371
          ],
          "params": [
            {
              "type": "TSJSDocNullableType",
              "range": [
                363,
                370
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 16
                },
                "start": {
                  "column": 27,
                  "line": 16
                }
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 16
                  },
                  "start": {
                    "column": 27,
                    "line": 16
                  }
                },
                "range": [
                  363,
                  370
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    364,
                    370
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 16
                    },
                    "start": {
                      "column": 28,
                      "line": 16
                    }
                  }
                }
              },
              "id": 0,
              "postfix": false
            }
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 16
            },
            "start": {
              "column": 26,
              "line": 16
            }
          }
        },
        "range": [
          352,
          371
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 16
          },
          "start": {
            "column": 16,
            "line": 16
          }
        }
      },
      "range": [
        336,
        372
      ],
      "loc": {
        "end": {
          "column": 36,
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
        "name": "TComeOnFoo",
        "optional": false,
        "range": [
          378,
          388
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 17
          },
          "start": {
            "column": 5,
            "line": 17
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            398,
            401
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
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            401,
            411
          ],
          "params": [
            {
              "type": "TSJSDocNullableType",
              "range": [
                402,
                410
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 17
                },
                "start": {
                  "column": 29,
                  "line": 17
                }
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 17
                  },
                  "start": {
                    "column": 29,
                    "line": 17
                  }
                },
                "range": [
                  402,
                  410
                ],
                "typeAnnotation": {
                  "type": "TSJSDocNullableType",
                  "range": [
                    403,
                    410
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 17
                    },
                    "start": {
                      "column": 30,
                      "line": 17
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 17
                      },
                      "start": {
                        "column": 29,
                        "line": 17
                      }
                    },
                    "range": [
                      402,
                      409
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        403,
                        409
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 17
                        },
                        "start": {
                          "column": 30,
                          "line": 17
                        }
                      }
                    }
                  },
                  "id": 0,
                  "postfix": true
                }
              },
              "id": 0,
              "postfix": false
            }
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 17
            },
            "start": {
              "column": 28,
              "line": 17
            }
          }
        },
        "range": [
          391,
          411
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 17
          },
          "start": {
            "column": 18,
            "line": 17
          }
        }
      },
      "range": [
        373,
        412
      ],
      "loc": {
        "end": {
          "column": 39,
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
            "name": "WhatBar",
            "optional": false,
            "range": [
              420,
              427
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 19
              },
              "start": {
                "column": 6,
                "line": 19
              }
            }
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "range": [
                430,
                433
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 19
                },
                "start": {
                  "column": 16,
                  "line": 19
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                433,
                436
              ],
              "params": [
                {
                  "type": "TSJSDocUnknownType",
                  "range": [
                    434,
                    435
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 19
                    },
                    "start": {
                      "column": 20,
                      "line": 19
                    }
                  },
                  "id": 0
                }
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 19
                },
                "start": {
                  "column": 19,
                  "line": 19
                }
              }
            },
            "range": [
              430,
              436
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 19
              },
              "start": {
                "column": 16,
                "line": 19
              }
            }
          },
          "range": [
            420,
            436
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 19
            },
            "start": {
              "column": 6,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        414,
        437
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "HuhBar",
            "optional": false,
            "range": [
              444,
              450
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 20
              },
              "start": {
                "column": 6,
                "line": 20
              }
            }
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "range": [
                453,
                456
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 20
                },
                "start": {
                  "column": 15,
                  "line": 20
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                456,
                465
              ],
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "range": [
                    457,
                    464
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 20
                    },
                    "start": {
                      "column": 19,
                      "line": 20
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 20
                      },
                      "start": {
                        "column": 18,
                        "line": 20
                      }
                    },
                    "range": [
                      456,
                      463
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        457,
                        463
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 20
                        },
                        "start": {
                          "column": 19,
                          "line": 20
                        }
                      }
                    }
                  },
                  "id": 0,
                  "postfix": true
                }
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 20
                },
                "start": {
                  "column": 18,
                  "line": 20
                }
              }
            },
            "range": [
              453,
              465
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 20
              },
              "start": {
                "column": 15,
                "line": 20
              }
            }
          },
          "range": [
            444,
            465
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 20
            },
            "start": {
              "column": 6,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        438,
        466
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 20
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
            "name": "NopeBar",
            "optional": false,
            "range": [
              473,
              480
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 21
              },
              "start": {
                "column": 6,
                "line": 21
              }
            }
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "range": [
                483,
                486
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 21
                },
                "start": {
                  "column": 16,
                  "line": 21
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                486,
                495
              ],
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "range": [
                    487,
                    494
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 21
                    },
                    "start": {
                      "column": 20,
                      "line": 21
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 21
                      },
                      "start": {
                        "column": 20,
                        "line": 21
                      }
                    },
                    "range": [
                      487,
                      494
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        488,
                        494
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 21
                        },
                        "start": {
                          "column": 21,
                          "line": 21
                        }
                      }
                    }
                  },
                  "id": 0,
                  "postfix": false
                }
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 21
                },
                "start": {
                  "column": 19,
                  "line": 21
                }
              }
            },
            "range": [
              483,
              495
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 21
              },
              "start": {
                "column": 16,
                "line": 21
              }
            }
          },
          "range": [
            473,
            495
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 21
            },
            "start": {
              "column": 6,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        467,
        496
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 21
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
            "name": "ComeOnBar",
            "optional": false,
            "range": [
              503,
              512
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 22
              },
              "start": {
                "column": 6,
                "line": 22
              }
            }
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "range": [
                515,
                518
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 22
                },
                "start": {
                  "column": 18,
                  "line": 22
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                518,
                528
              ],
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "range": [
                    519,
                    527
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 22
                    },
                    "start": {
                      "column": 22,
                      "line": 22
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 22
                      },
                      "start": {
                        "column": 22,
                        "line": 22
                      }
                    },
                    "range": [
                      519,
                      527
                    ],
                    "typeAnnotation": {
                      "type": "TSJSDocNullableType",
                      "range": [
                        520,
                        527
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 22
                        },
                        "start": {
                          "column": 23,
                          "line": 22
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 22
                          },
                          "start": {
                            "column": 22,
                            "line": 22
                          }
                        },
                        "range": [
                          519,
                          526
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            520,
                            526
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 22
                            },
                            "start": {
                              "column": 23,
                              "line": 22
                            }
                          }
                        }
                      },
                      "id": 0,
                      "postfix": true
                    }
                  },
                  "id": 0,
                  "postfix": false
                }
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 22
                },
                "start": {
                  "column": 21,
                  "line": 22
                }
              }
            },
            "range": [
              515,
              528
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 22
              },
              "start": {
                "column": 18,
                "line": 22
              }
            }
          },
          "range": [
            503,
            528
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 22
            },
            "start": {
              "column": 6,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        497,
        529
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWhatBar",
        "optional": false,
        "range": [
          536,
          544
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 24
          },
          "start": {
            "column": 5,
            "line": 24
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "range": [
            554,
            557
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 24
            },
            "start": {
              "column": 23,
              "line": 24
            }
          }
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            557,
            560
          ],
          "params": [
            {
              "type": "TSJSDocUnknownType",
              "range": [
                558,
                559
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
              },
              "id": 0
            }
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 24
            },
            "start": {
              "column": 26,
              "line": 24
            }
          }
        },
        "range": [
          547,
          560
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 24
          },
          "start": {
            "column": 16,
            "line": 24
          }
        }
      },
      "range": [
        531,
        561
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "THuhBar",
        "optional": false,
        "range": [
          567,
          574
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 25
          },
          "start": {
            "column": 5,
            "line": 25
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "range": [
            584,
            587
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 25
            },
            "start": {
              "column": 22,
              "line": 25
            }
          }
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            587,
            596
          ],
          "params": [
            {
              "type": "TSJSDocNullableType",
              "range": [
                588,
                595
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 25
                },
                "start": {
                  "column": 26,
                  "line": 25
                }
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 25
                  },
                  "start": {
                    "column": 25,
                    "line": 25
                  }
                },
                "range": [
                  587,
                  594
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    588,
                    594
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 25
                    },
                    "start": {
                      "column": 26,
                      "line": 25
                    }
                  }
                }
              },
              "id": 0,
              "postfix": true
            }
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 25
            },
            "start": {
              "column": 25,
              "line": 25
            }
          }
        },
        "range": [
          577,
          596
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 25
          },
          "start": {
            "column": 15,
            "line": 25
          }
        }
      },
      "range": [
        562,
        597
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TNopeBar",
        "optional": false,
        "range": [
          603,
          611
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 26
          },
          "start": {
            "column": 5,
            "line": 26
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "range": [
            621,
            624
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 26
            },
            "start": {
              "column": 23,
              "line": 26
            }
          }
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            624,
            633
          ],
          "params": [
            {
              "type": "TSJSDocNullableType",
              "range": [
                625,
                632
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 26
                },
                "start": {
                  "column": 27,
                  "line": 26
                }
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 26
                  },
                  "start": {
                    "column": 27,
                    "line": 26
                  }
                },
                "range": [
                  625,
                  632
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    626,
                    632
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 26
                    },
                    "start": {
                      "column": 28,
                      "line": 26
                    }
                  }
                }
              },
              "id": 0,
              "postfix": false
            }
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 26
            },
            "start": {
              "column": 26,
              "line": 26
            }
          }
        },
        "range": [
          614,
          633
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 26
          },
          "start": {
            "column": 16,
            "line": 26
          }
        }
      },
      "range": [
        598,
        634
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 26
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
        "name": "TComeOnBar",
        "optional": false,
        "range": [
          640,
          650
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 27
          },
          "start": {
            "column": 5,
            "line": 27
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "range": [
            660,
            663
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 27
            },
            "start": {
              "column": 25,
              "line": 27
            }
          }
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            663,
            673
          ],
          "params": [
            {
              "type": "TSJSDocNullableType",
              "range": [
                664,
                672
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 27
                },
                "start": {
                  "column": 29,
                  "line": 27
                }
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 27
                  },
                  "start": {
                    "column": 29,
                    "line": 27
                  }
                },
                "range": [
                  664,
                  672
                ],
                "typeAnnotation": {
                  "type": "TSJSDocNullableType",
                  "range": [
                    665,
                    672
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 27
                    },
                    "start": {
                      "column": 30,
                      "line": 27
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 27
                      },
                      "start": {
                        "column": 29,
                        "line": 27
                      }
                    },
                    "range": [
                      664,
                      671
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        665,
                        671
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 27
                        },
                        "start": {
                          "column": 30,
                          "line": 27
                        }
                      }
                    }
                  },
                  "id": 0,
                  "postfix": true
                }
              },
              "id": 0,
              "postfix": false
            }
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 27
            },
            "start": {
              "column": 28,
              "line": 27
            }
          }
        },
        "range": [
          653,
          673
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 27
          },
          "start": {
            "column": 18,
            "line": 27
          }
        }
      },
      "range": [
        635,
        674
      ],
      "loc": {
        "end": {
          "column": 39,
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
      "column": 0,
      "line": 28
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
