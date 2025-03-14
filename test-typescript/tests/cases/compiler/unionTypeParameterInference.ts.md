__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    30,
    189
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          47,
          59
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
                49,
                53
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
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
                  "line": 3
                },
                "start": {
                  "column": 23,
                  "line": 3
                }
              },
              "range": [
                53,
                56
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    55,
                    56
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 3
                    },
                    "start": {
                      "column": 25,
                      "line": 3
                    }
                  }
                },
                "range": [
                  55,
                  56
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 3
                  },
                  "start": {
                    "column": 25,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              49,
              57
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 3
              },
              "start": {
                "column": 19,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          40,
          43
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 3
          },
          "start": {
            "column": 13,
            "line": 3
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
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
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
                "column": 15,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        30,
        59
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
        "name": "lift",
        "optional": false,
        "range": [
          78,
          82
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 5
          },
          "start": {
            "column": 17,
            "line": 5
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
                "column": 42,
                "line": 5
              },
              "start": {
                "column": 30,
                "line": 5
              }
            },
            "range": [
              91,
              103
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      93,
                      94
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 5
                      },
                      "start": {
                        "column": 32,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    93,
                    94
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 5
                    },
                    "start": {
                      "column": 32,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      100,
                      103
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            101,
                            102
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
                        "range": [
                          101,
                          102
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
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 5
                      },
                      "start": {
                        "column": 39,
                        "line": 5
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "range": [
                      97,
                      100
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 5
                      },
                      "start": {
                        "column": 36,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    97,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 5
                    },
                    "start": {
                      "column": 36,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                93,
                103
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 5
                },
                "start": {
                  "column": 32,
                  "line": 5
                }
              }
            }
          },
          "range": [
            86,
            103
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 5
            },
            "start": {
              "column": 25,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 51,
            "line": 5
          },
          "start": {
            "column": 43,
            "line": 5
          }
        },
        "range": [
          104,
          112
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              109,
              112
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    110,
                    111
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 5
                    },
                    "start": {
                      "column": 49,
                      "line": 5
                    }
                  }
                },
                "range": [
                  110,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 5
                  },
                  "start": {
                    "column": 49,
                    "line": 5
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 5
              },
              "start": {
                "column": 48,
                "line": 5
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              106,
              109
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 5
              },
              "start": {
                "column": 45,
                "line": 5
              }
            }
          },
          "range": [
            106,
            112
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 5
            },
            "start": {
              "column": 45,
              "line": 5
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 5
          },
          "start": {
            "column": 21,
            "line": 5
          }
        },
        "range": [
          82,
          85
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                83,
                84
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 5
                },
                "start": {
                  "column": 22,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              83,
              84
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 5
              },
              "start": {
                "column": 22,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        61,
        113
      ],
      "loc": {
        "end": {
          "column": 52,
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
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "range": [
                      174,
                      179
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 8
                      },
                      "start": {
                        "column": 16,
                        "line": 8
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lift",
                  "optional": false,
                  "range": [
                    169,
                    173
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 8
                    },
                    "start": {
                      "column": 11,
                      "line": 8
                    }
                  }
                },
                "optional": false,
                "range": [
                  169,
                  180
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "range": [
                  181,
                  185
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 8
                  },
                  "start": {
                    "column": 23,
                    "line": 8
                  }
                }
              },
              "range": [
                169,
                185
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "range": [
              162,
              186
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          156,
          188
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 41,
            "line": 7
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unlift",
        "optional": false,
        "range": [
          124,
          130
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
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
                "column": 36,
                "line": 7
              },
              "start": {
                "column": 24,
                "line": 7
              }
            },
            "range": [
              139,
              151
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      141,
                      142
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 7
                      },
                      "start": {
                        "column": 26,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    141,
                    142
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 7
                    },
                    "start": {
                      "column": 26,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      148,
                      151
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            149,
                            150
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 7
                            },
                            "start": {
                              "column": 34,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          149,
                          150
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 7
                          },
                          "start": {
                            "column": 34,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 7
                      },
                      "start": {
                        "column": 33,
                        "line": 7
                      }
                    }
                  },
                  "typeName": {
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
                        "column": 33,
                        "line": 7
                      },
                      "start": {
                        "column": 30,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    145,
                    151
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 7
                    },
                    "start": {
                      "column": 30,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                141,
                151
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 7
                },
                "start": {
                  "column": 26,
                  "line": 7
                }
              }
            }
          },
          "range": [
            134,
            151
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 7
            },
            "start": {
              "column": 19,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 40,
            "line": 7
          },
          "start": {
            "column": 37,
            "line": 7
          }
        },
        "range": [
          152,
          155
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              154,
              155
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 7
              },
              "start": {
                "column": 39,
                "line": 7
              }
            }
          },
          "range": [
            154,
            155
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 7
            },
            "start": {
              "column": 39,
              "line": 7
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 7
          },
          "start": {
            "column": 15,
            "line": 7
          }
        },
        "range": [
          130,
          133
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                131,
                132
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
            "out": false,
            "range": [
              131,
              132
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
          }
        ]
      },
      "range": [
        115,
        188
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
