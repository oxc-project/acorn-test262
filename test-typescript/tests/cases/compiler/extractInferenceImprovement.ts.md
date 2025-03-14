__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    74,
    601
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
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "range": [
                  170,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 3
                  },
                  "start": {
                    "column": 11,
                    "line": 3
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
                  174,
                  177
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 3
                  },
                  "start": {
                    "column": 15,
                    "line": 3
                  }
                }
              },
              "range": [
                170,
                178
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "range": [
              163,
              179
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          157,
          181
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 83,
            "line": 2
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getProperty2",
        "optional": false,
        "range": [
          83,
          95
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
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
                "column": 50,
                "line": 2
              },
              "start": {
                "column": 47,
                "line": 2
              }
            },
            "range": [
              121,
              124
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  123,
                  124
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 2
                  },
                  "start": {
                    "column": 49,
                    "line": 2
                  }
                }
              },
              "range": [
                123,
                124
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 2
                },
                "start": {
                  "column": 49,
                  "line": 2
                }
              }
            }
          },
          "range": [
            118,
            124
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 2
            },
            "start": {
              "column": 44,
              "line": 2
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 75,
                "line": 2
              },
              "start": {
                "column": 55,
                "line": 2
              }
            },
            "range": [
              129,
              149
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  138,
                  149
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        139,
                        140
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 2
                        },
                        "start": {
                          "column": 65,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      139,
                      140
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 2
                      },
                      "start": {
                        "column": 65,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      142,
                      148
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 2
                      },
                      "start": {
                        "column": 68,
                        "line": 2
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 2
                  },
                  "start": {
                    "column": 64,
                    "line": 2
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Extract",
                "optional": false,
                "range": [
                  131,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 2
                  },
                  "start": {
                    "column": 57,
                    "line": 2
                  }
                }
              },
              "range": [
                131,
                149
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 2
                },
                "start": {
                  "column": 57,
                  "line": 2
                }
              }
            }
          },
          "range": [
            126,
            149
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 2
            },
            "start": {
              "column": 52,
              "line": 2
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 82,
            "line": 2
          },
          "start": {
            "column": 76,
            "line": 2
          }
        },
        "range": [
          150,
          156
        ],
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                154,
                155
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 2
                },
                "start": {
                  "column": 80,
                  "line": 2
                }
              }
            },
            "range": [
              154,
              155
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 2
              },
              "start": {
                "column": 80,
                "line": 2
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
                152,
                153
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 2
                },
                "start": {
                  "column": 78,
                  "line": 2
                }
              }
            },
            "range": [
              152,
              153
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 2
              },
              "start": {
                "column": 78,
                "line": 2
              }
            }
          },
          "range": [
            152,
            156
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 2
            },
            "start": {
              "column": 78,
              "line": 2
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 43,
            "line": 2
          },
          "start": {
            "column": 21,
            "line": 2
          }
        },
        "range": [
          95,
          117
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
                96,
                97
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 22,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              96,
              97
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 2
              },
              "start": {
                "column": 22,
                "line": 2
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
                    115,
                    116
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 2
                    },
                    "start": {
                      "column": 41,
                      "line": 2
                    }
                  }
                },
                "range": [
                  115,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 2
                  },
                  "start": {
                    "column": 41,
                    "line": 2
                  }
                }
              },
              "range": [
                109,
                116
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 2
                },
                "start": {
                  "column": 35,
                  "line": 2
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
                99,
                100
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 25,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              99,
              116
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 2
              },
              "start": {
                "column": 25,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        74,
        181
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
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
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "range": [
                  279,
                  282
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 7
                  },
                  "start": {
                    "column": 11,
                    "line": 7
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
                  283,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 7
                  },
                  "start": {
                    "column": 15,
                    "line": 7
                  }
                }
              },
              "range": [
                279,
                287
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "range": [
              272,
              288
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
        "range": [
          266,
          290
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 83,
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
        "name": "getProperty3",
        "optional": false,
        "range": [
          192,
          204
        ],
        "loc": {
          "end": {
            "column": 21,
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
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 67,
                "line": 6
              },
              "start": {
                "column": 64,
                "line": 6
              }
            },
            "range": [
              247,
              250
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  249,
                  250
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 6
                  },
                  "start": {
                    "column": 66,
                    "line": 6
                  }
                }
              },
              "range": [
                249,
                250
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 6
                },
                "start": {
                  "column": 66,
                  "line": 6
                }
              }
            }
          },
          "range": [
            244,
            250
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 6
            },
            "start": {
              "column": 61,
              "line": 6
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 75,
                "line": 6
              },
              "start": {
                "column": 72,
                "line": 6
              }
            },
            "range": [
              255,
              258
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  257,
                  258
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 6
                  },
                  "start": {
                    "column": 74,
                    "line": 6
                  }
                }
              },
              "range": [
                257,
                258
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 6
                },
                "start": {
                  "column": 74,
                  "line": 6
                }
              }
            }
          },
          "range": [
            252,
            258
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 6
            },
            "start": {
              "column": 69,
              "line": 6
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 82,
            "line": 6
          },
          "start": {
            "column": 76,
            "line": 6
          }
        },
        "range": [
          259,
          265
        ],
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                263,
                264
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 6
                },
                "start": {
                  "column": 80,
                  "line": 6
                }
              }
            },
            "range": [
              263,
              264
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 6
              },
              "start": {
                "column": 80,
                "line": 6
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
                261,
                262
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 6
                },
                "start": {
                  "column": 78,
                  "line": 6
                }
              }
            },
            "range": [
              261,
              262
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 6
              },
              "start": {
                "column": 78,
                "line": 6
              }
            }
          },
          "range": [
            261,
            265
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 6
            },
            "start": {
              "column": 78,
              "line": 6
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 60,
            "line": 6
          },
          "start": {
            "column": 21,
            "line": 6
          }
        },
        "range": [
          204,
          243
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
                205,
                206
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
            "out": false,
            "range": [
              205,
              206
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
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  225,
                  242
                ],
                "params": [
                  {
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
                          232,
                          233
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 6
                          },
                          "start": {
                            "column": 49,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        232,
                        233
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 6
                        },
                        "start": {
                          "column": 49,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      226,
                      233
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 6
                      },
                      "start": {
                        "column": 43,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      235,
                      241
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 6
                      },
                      "start": {
                        "column": 52,
                        "line": 6
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 6
                  },
                  "start": {
                    "column": 42,
                    "line": 6
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Extract",
                "optional": false,
                "range": [
                  218,
                  225
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 6
                  },
                  "start": {
                    "column": 35,
                    "line": 6
                  }
                }
              },
              "range": [
                218,
                242
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 6
                },
                "start": {
                  "column": 35,
                  "line": 6
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
                208,
                209
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 6
                },
                "start": {
                  "column": 25,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              208,
              242
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 6
              },
              "start": {
                "column": 25,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        183,
        290
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
              298,
              299
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "range": [
                302,
                308
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 10
                },
                "start": {
                  "column": 10,
                  "line": 10
                }
              }
            },
            "optional": false,
            "range": [
              302,
              310
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 10
              },
              "start": {
                "column": 10,
                "line": 10
              }
            }
          },
          "range": [
            298,
            310
          ],
          "loc": {
            "end": {
              "column": 18,
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
        292,
        311
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 10
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
          329,
          388
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "first",
              "optional": false,
              "range": [
                335,
                340
              ],
              "loc": {
                "end": {
                  "column": 9,
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
                  "column": 17,
                  "line": 12
                },
                "start": {
                  "column": 9,
                  "line": 12
                }
              },
              "range": [
                340,
                348
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  342,
                  348
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 12
                  },
                  "start": {
                    "column": 11,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              335,
              349
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "second",
              "optional": false,
              "range": [
                354,
                360
              ],
              "loc": {
                "end": {
                  "column": 10,
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
                  "column": 18,
                  "line": 13
                },
                "start": {
                  "column": 10,
                  "line": 13
                }
              },
              "range": [
                360,
                368
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  362,
                  368
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 13
                  },
                  "start": {
                    "column": 12,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              354,
              369
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "range": [
                375,
                376
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 14
                },
                "start": {
                  "column": 5,
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
                  "column": 15,
                  "line": 14
                },
                "start": {
                  "column": 7,
                  "line": 14
                }
              },
              "range": [
                377,
                385
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  379,
                  385
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 14
                  },
                  "start": {
                    "column": 9,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              374,
              386
            ],
            "loc": {
              "end": {
                "column": 16,
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
            "line": 11
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrNum",
        "optional": false,
        "range": [
          322,
          328
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
        312,
        388
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 16
                },
                "start": {
                  "column": 9,
                  "line": 16
                }
              },
              "range": [
                398,
                406
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StrNum",
                  "optional": false,
                  "range": [
                    400,
                    406
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 16
                    },
                    "start": {
                      "column": 11,
                      "line": 16
                    }
                  }
                },
                "range": [
                  400,
                  406
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 16
                  },
                  "start": {
                    "column": 11,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              395,
              406
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 16
              },
              "start": {
                "column": 6,
                "line": 16
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                409,
                411
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 16
                },
                "start": {
                  "column": 20,
                  "line": 16
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                415,
                418
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 16
                },
                "start": {
                  "column": 26,
                  "line": 16
                }
              }
            },
            "range": [
              409,
              418
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 16
              },
              "start": {
                "column": 20,
                "line": 16
              }
            }
          },
          "range": [
            395,
            418
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 16
            },
            "start": {
              "column": 6,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        389,
        419
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "prop",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 18
                },
                "start": {
                  "column": 8,
                  "line": 18
                }
              },
              "range": [
                429,
                437
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  431,
                  437
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 18
                  },
                  "start": {
                    "column": 10,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              425,
              437
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": null,
          "range": [
            425,
            437
          ],
          "loc": {
            "end": {
              "column": 16,
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
        421,
        438
      ],
      "loc": {
        "end": {
          "column": 17,
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
          "name": "prop",
          "optional": false,
          "range": [
            455,
            459
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                475,
                478
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 21
                },
                "start": {
                  "column": 20,
                  "line": 21
                }
              }
            },
            {
              "type": "Literal",
              "raw": "'first'",
              "value": "first",
              "range": [
                480,
                487
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 21
                },
                "start": {
                  "column": 25,
                  "line": 21
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getProperty2",
            "optional": false,
            "range": [
              462,
              474
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 21
              },
              "start": {
                "column": 7,
                "line": 21
              }
            }
          },
          "optional": false,
          "range": [
            462,
            488
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 21
            },
            "start": {
              "column": 7,
              "line": 21
            }
          }
        },
        "range": [
          455,
          488
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        455,
        489
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
          "name": "prop",
          "optional": false,
          "range": [
            491,
            495
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                511,
                514
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 23
                },
                "start": {
                  "column": 20,
                  "line": 23
                }
              }
            },
            {
              "type": "Literal",
              "raw": "'first'",
              "value": "first",
              "range": [
                516,
                523
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 23
                },
                "start": {
                  "column": 25,
                  "line": 23
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getProperty3",
            "optional": false,
            "range": [
              498,
              510
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 23
              },
              "start": {
                "column": 7,
                "line": 23
              }
            }
          },
          "optional": false,
          "range": [
            498,
            524
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 23
            },
            "start": {
              "column": 7,
              "line": 23
            }
          }
        },
        "range": [
          491,
          524
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        491,
        525
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
          "name": "prop",
          "optional": false,
          "range": [
            542,
            546
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                562,
                565
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 26
                },
                "start": {
                  "column": 20,
                  "line": 26
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "range": [
                567,
                568
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 26
                },
                "start": {
                  "column": 25,
                  "line": 26
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getProperty2",
            "optional": false,
            "range": [
              549,
              561
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 26
              },
              "start": {
                "column": 7,
                "line": 26
              }
            }
          },
          "optional": false,
          "range": [
            549,
            569
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 26
            },
            "start": {
              "column": 7,
              "line": 26
            }
          }
        },
        "range": [
          542,
          569
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        542,
        570
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
          "name": "prop",
          "optional": false,
          "range": [
            572,
            576
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 28
            },
            "start": {
              "column": 0,
              "line": 28
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                592,
                595
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 28
                },
                "start": {
                  "column": 20,
                  "line": 28
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "range": [
                597,
                598
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 28
                },
                "start": {
                  "column": 25,
                  "line": 28
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getProperty3",
            "optional": false,
            "range": [
              579,
              591
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 28
              },
              "start": {
                "column": 7,
                "line": 28
              }
            }
          },
          "optional": false,
          "range": [
            579,
            599
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 28
            },
            "start": {
              "column": 7,
              "line": 28
            }
          }
        },
        "range": [
          572,
          599
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        572,
        600
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
      "line": 2
    }
  },
  "hashbang": null
}
```
