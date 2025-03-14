__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    201
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          34,
          108
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                40,
                43
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
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 4
                    },
                    "start": {
                      "column": 15,
                      "line": 4
                    }
                  },
                  "range": [
                    51,
                    54
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        53,
                        54
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 4
                        },
                        "start": {
                          "column": 17,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      53,
                      54
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 4
                      },
                      "start": {
                        "column": 17,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  47,
                  54
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 4
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 4
                    },
                    "start": {
                      "column": 23,
                      "line": 4
                    }
                  },
                  "range": [
                    59,
                    68
                  ],
                  "typeAnnotation": {
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
                          67,
                          68
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 4
                          },
                          "start": {
                            "column": 31,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        67,
                        68
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 4
                        },
                        "start": {
                          "column": 31,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      61,
                      68
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 4
                      },
                      "start": {
                        "column": 25,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  56,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 4
                  },
                  "start": {
                    "column": 20,
                    "line": 4
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 4
                },
                "start": {
                  "column": 33,
                  "line": 4
                }
              },
              "range": [
                69,
                75
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  71,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 4
                  },
                  "start": {
                    "column": 35,
                    "line": 4
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 4
                },
                "start": {
                  "column": 7,
                  "line": 4
                }
              },
              "range": [
                43,
                46
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
                      44,
                      45
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
                  "out": false,
                  "range": [
                    44,
                    45
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
                }
              ]
            },
            "range": [
              40,
              76
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                81,
                82
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
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
                  "line": 5
                },
                "start": {
                  "column": 5,
                  "line": 5
                }
              },
              "range": [
                82,
                90
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  84,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 5
                  },
                  "start": {
                    "column": 7,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              81,
              91
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
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
                96,
                97
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
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
                  "line": 6
                },
                "start": {
                  "column": 5,
                  "line": 6
                }
              },
              "range": [
                97,
                105
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  99,
                  105
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 6
                  },
                  "start": {
                    "column": 7,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              96,
              106
            ],
            "loc": {
              "end": {
                "column": 14,
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
            "column": 12,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "range": [
          32,
          33
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        22,
        108
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 9
                },
                "start": {
                  "column": 19,
                  "line": 9
                }
              },
              "range": [
                129,
                144
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "range": [
                        131,
                        132
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 9
                        },
                        "start": {
                          "column": 21,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      131,
                      132
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 9
                      },
                      "start": {
                        "column": 21,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      135,
                      144
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 9
                      },
                      "start": {
                        "column": 25,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  131,
                  144
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 9
                  },
                  "start": {
                    "column": 21,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              124,
              144
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 9
              },
              "start": {
                "column": 14,
                "line": 9
              }
            }
          },
          "init": null,
          "range": [
            124,
            144
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 9
            },
            "start": {
              "column": 14,
              "line": 9
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        110,
        145
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      175,
                      178
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 12
                      },
                      "start": {
                        "column": 15,
                        "line": 12
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
                    "name": "value",
                    "optional": false,
                    "range": [
                      164,
                      169
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
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      171,
                      174
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 12
                      },
                      "start": {
                        "column": 11,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    164,
                    174
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 12
                    },
                    "start": {
                      "column": 4,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "range": [
                  164,
                  179
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              "range": [
                164,
                179
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              164,
              180
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          158,
          182
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 11,
            "line": 11
          }
        }
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "value",
        "optional": false,
        "range": [
          151,
          156
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 11
          },
          "start": {
            "column": 4,
            "line": 11
          }
        }
      },
      "range": [
        147,
        182
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "\"a\"",
              "value": "a",
              "range": [
                195,
                198
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 15
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
              "name": "value",
              "optional": false,
              "range": [
                184,
                189
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 0,
                  "line": 15
                }
              }
            },
            "optional": true,
            "property": {
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
                  "column": 10,
                  "line": 15
                },
                "start": {
                  "column": 7,
                  "line": 15
                }
              }
            },
            "range": [
              184,
              194
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 15
              },
              "start": {
                "column": 0,
                "line": 15
              }
            }
          },
          "optional": false,
          "range": [
            184,
            199
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "range": [
          184,
          199
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        184,
        200
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
