__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    21,
    1712
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IDLMemberTypes",
        "optional": false,
        "range": [
          26,
          40
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
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
              "name": "OperationMemberType",
              "optional": false,
              "range": [
                43,
                62
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 3
                },
                "start": {
                  "column": 22,
                  "line": 3
                }
              }
            },
            "range": [
              43,
              62
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 3
              },
              "start": {
                "column": 22,
                "line": 3
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ConstantMemberType",
              "optional": false,
              "range": [
                65,
                83
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 3
                },
                "start": {
                  "column": 44,
                  "line": 3
                }
              }
            },
            "range": [
              65,
              83
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 3
              },
              "start": {
                "column": 44,
                "line": 3
              }
            }
          }
        ],
        "range": [
          43,
          83
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 3
          },
          "start": {
            "column": 22,
            "line": 3
          }
        }
      },
      "range": [
        21,
        84
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 3
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
          115,
          138
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "origin",
              "optional": false,
              "range": [
                121,
                127
              ],
              "loc": {
                "end": {
                  "column": 10,
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
                  "column": 18,
                  "line": 6
                },
                "start": {
                  "column": 10,
                  "line": 6
                }
              },
              "range": [
                127,
                135
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  129,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 6
                  },
                  "start": {
                    "column": 12,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              121,
              136
            ],
            "loc": {
              "end": {
                "column": 19,
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
            "column": 29,
            "line": 5
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IDLTypeDescription",
        "optional": false,
        "range": [
          96,
          114
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "range": [
        86,
        138
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
          164,
          198
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "members",
              "optional": false,
              "range": [
                170,
                177
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
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
                  "column": 29,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              },
              "range": [
                177,
                195
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IDLMemberTypes",
                    "optional": false,
                    "range": [
                      179,
                      193
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 10
                      },
                      "start": {
                        "column": 13,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    179,
                    193
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 10
                    },
                    "start": {
                      "column": 13,
                      "line": 10
                    }
                  }
                },
                "range": [
                  179,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 10
                  },
                  "start": {
                    "column": 13,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              170,
              196
            ],
            "loc": {
              "end": {
                "column": 30,
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
            "column": 24,
            "line": 9
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InterfaceType",
        "optional": false,
        "range": [
          150,
          163
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 9
          },
          "start": {
            "column": 10,
            "line": 9
          }
        }
      },
      "range": [
        140,
        198
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
          230,
          289
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
                236,
                240
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
                  "column": 21,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              },
              "range": [
                240,
                253
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"operation\"",
                  "value": "operation",
                  "range": [
                    242,
                    253
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 14
                    },
                    "start": {
                      "column": 10,
                      "line": 14
                    }
                  }
                },
                "range": [
                  242,
                  253
                ],
                "loc": {
                  "end": {
                    "column": 21,
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
              236,
              254
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "idlType",
              "optional": false,
              "range": [
                259,
                266
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
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
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              },
              "range": [
                266,
                286
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IDLTypeDescription",
                  "optional": false,
                  "range": [
                    268,
                    286
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 15
                    },
                    "start": {
                      "column": 13,
                      "line": 15
                    }
                  }
                },
                "range": [
                  268,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 15
                  },
                  "start": {
                    "column": 13,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              259,
              287
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 30,
            "line": 13
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OperationMemberType",
        "optional": false,
        "range": [
          210,
          229
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 13
          },
          "start": {
            "column": 10,
            "line": 13
          }
        }
      },
      "range": [
        200,
        289
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          320,
          363
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
                326,
                330
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
                  "column": 17,
                  "line": 19
                },
                "start": {
                  "column": 8,
                  "line": 19
                }
              },
              "range": [
                330,
                339
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"const\"",
                  "value": "const",
                  "range": [
                    332,
                    339
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 19
                    },
                    "start": {
                      "column": 10,
                      "line": 19
                    }
                  }
                },
                "range": [
                  332,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 17,
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
              326,
              340
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "idlType",
              "optional": false,
              "range": [
                345,
                352
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
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
                  "column": 19,
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 20
                }
              },
              "range": [
                352,
                360
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  354,
                  360
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 20
                  },
                  "start": {
                    "column": 13,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              345,
              361
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 29,
            "line": 18
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConstantMemberType",
        "optional": false,
        "range": [
          301,
          319
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 18
          },
          "start": {
            "column": 10,
            "line": 18
          }
        }
      },
      "range": [
        291,
        363
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
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
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "alternate": {
                    "type": "IfStatement",
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "memberType",
                                "optional": false,
                                "range": [
                                  634,
                                  644
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 29
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "idlType",
                                "optional": false,
                                "range": [
                                  645,
                                  652
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 29
                                  }
                                }
                              },
                              "range": [
                                634,
                                652
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 29
                                },
                                "start": {
                                  "column": 12,
                                  "line": 29
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "origin",
                              "optional": false,
                              "range": [
                                653,
                                659
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 29
                                },
                                "start": {
                                  "column": 31,
                                  "line": 29
                                }
                              }
                            },
                            "range": [
                              634,
                              659
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 29
                              },
                              "start": {
                                "column": 12,
                                "line": 29
                              }
                            }
                          },
                          "range": [
                            634,
                            660
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 29
                            },
                            "start": {
                              "column": 12,
                              "line": 29
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "memberType",
                                "optional": false,
                                "range": [
                                  685,
                                  695
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 30
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 30
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "idlType",
                                "optional": false,
                                "range": [
                                  696,
                                  703
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 30
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 30
                                  }
                                }
                              },
                              "range": [
                                685,
                                703
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 30
                                },
                                "start": {
                                  "column": 13,
                                  "line": 30
                                }
                              }
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IDLTypeDescription",
                                "optional": false,
                                "range": [
                                  707,
                                  725
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 30
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 30
                                  }
                                }
                              },
                              "range": [
                                707,
                                725
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 30
                                },
                                "start": {
                                  "column": 35,
                                  "line": 30
                                }
                              }
                            },
                            "range": [
                              685,
                              725
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 30
                              },
                              "start": {
                                "column": 13,
                                "line": 30
                              }
                            }
                          },
                          "range": [
                            684,
                            727
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 30
                            },
                            "start": {
                              "column": 12,
                              "line": 30
                            }
                          }
                        }
                      ],
                      "range": [
                        620,
                        737
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 31
                        },
                        "start": {
                          "column": 50,
                          "line": 28
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "memberType",
                          "optional": false,
                          "range": [
                            587,
                            597
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 28
                            },
                            "start": {
                              "column": 17,
                              "line": 28
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "range": [
                            598,
                            602
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 28
                            },
                            "start": {
                              "column": 28,
                              "line": 28
                            }
                          }
                        },
                        "range": [
                          587,
                          602
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 28
                          },
                          "start": {
                            "column": 17,
                            "line": 28
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "\"operation\"",
                        "value": "operation",
                        "range": [
                          607,
                          618
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 28
                          },
                          "start": {
                            "column": 37,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        587,
                        618
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 28
                        },
                        "start": {
                          "column": 17,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      583,
                      737
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 31
                      },
                      "start": {
                        "column": 13,
                        "line": 28
                      }
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "memberType",
                            "optional": false,
                            "range": [
                              529,
                              539
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 26
                              },
                              "start": {
                                "column": 12,
                                "line": 26
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "idlType",
                            "optional": false,
                            "range": [
                              540,
                              547
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 26
                              },
                              "start": {
                                "column": 23,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            529,
                            547
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 26
                            },
                            "start": {
                              "column": 12,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          529,
                          548
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 26
                          },
                          "start": {
                            "column": 12,
                            "line": 26
                          }
                        }
                      }
                    ],
                    "range": [
                      515,
                      569
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 27
                      },
                      "start": {
                        "column": 41,
                        "line": 25
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "memberType",
                        "optional": false,
                        "range": [
                          486,
                          496
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 25
                          },
                          "start": {
                            "column": 12,
                            "line": 25
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "range": [
                          497,
                          501
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 25
                          },
                          "start": {
                            "column": 23,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        486,
                        501
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 25
                        },
                        "start": {
                          "column": 12,
                          "line": 25
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"const\"",
                      "value": "const",
                      "range": [
                        506,
                        513
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 25
                        },
                        "start": {
                          "column": 32,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      486,
                      513
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 25
                      },
                      "start": {
                        "column": 12,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    482,
                    737
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 31
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                }
              ],
              "range": [
                472,
                743
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 32
                },
                "start": {
                  "column": 51,
                  "line": 24
                }
              }
            },
            "left": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "memberType",
                    "optional": false,
                    "range": [
                      436,
                      446
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 24
                      },
                      "start": {
                        "column": 15,
                        "line": 24
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    436,
                    446
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 24
                    },
                    "start": {
                      "column": 15,
                      "line": 24
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                430,
                446
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 24
                },
                "start": {
                  "column": 9,
                  "line": 24
                }
              }
            },
            "right": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "callbackType",
                "optional": false,
                "range": [
                  450,
                  462
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 24
                  },
                  "start": {
                    "column": 29,
                    "line": 24
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "members",
                "optional": false,
                "range": [
                  463,
                  470
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 24
                  },
                  "start": {
                    "column": 42,
                    "line": 24
                  }
                }
              },
              "range": [
                450,
                470
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 24
                },
                "start": {
                  "column": 29,
                  "line": 24
                }
              }
            },
            "range": [
              425,
              743
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          419,
          745
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 54,
            "line": 23
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "insertInterface",
        "optional": false,
        "range": [
          374,
          389
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 23
          },
          "start": {
            "column": 9,
            "line": 23
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callbackType",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 52,
                "line": 23
              },
              "start": {
                "column": 37,
                "line": 23
              }
            },
            "range": [
              402,
              417
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InterfaceType",
                "optional": false,
                "range": [
                  404,
                  417
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 23
                  },
                  "start": {
                    "column": 39,
                    "line": 23
                  }
                }
              },
              "range": [
                404,
                417
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 23
                },
                "start": {
                  "column": 39,
                  "line": 23
                }
              }
            }
          },
          "range": [
            390,
            417
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 23
            },
            "start": {
              "column": 25,
              "line": 23
            }
          }
        }
      ],
      "range": [
        365,
        745
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 23
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
            "type": "ForOfStatement",
            "await": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "memberType",
                              "optional": false,
                              "range": [
                                916,
                                926
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 38
                                },
                                "start": {
                                  "column": 12,
                                  "line": 38
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "idlType",
                              "optional": false,
                              "range": [
                                927,
                                934
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 38
                                },
                                "start": {
                                  "column": 23,
                                  "line": 38
                                }
                              }
                            },
                            "range": [
                              916,
                              934
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 38
                              },
                              "start": {
                                "column": 12,
                                "line": 38
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "origin",
                            "optional": false,
                            "range": [
                              935,
                              941
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 38
                              },
                              "start": {
                                "column": 31,
                                "line": 38
                              }
                            }
                          },
                          "range": [
                            916,
                            941
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 38
                            },
                            "start": {
                              "column": 12,
                              "line": 38
                            }
                          }
                        },
                        "range": [
                          916,
                          942
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 38
                          },
                          "start": {
                            "column": 12,
                            "line": 38
                          }
                        }
                      }
                    ],
                    "range": [
                      902,
                      963
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 39
                      },
                      "start": {
                        "column": 45,
                        "line": 37
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "memberType",
                        "optional": false,
                        "range": [
                          869,
                          879
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 37
                          },
                          "start": {
                            "column": 12,
                            "line": 37
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "range": [
                          880,
                          884
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 37
                          },
                          "start": {
                            "column": 23,
                            "line": 37
                          }
                        }
                      },
                      "range": [
                        869,
                        884
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 37
                        },
                        "start": {
                          "column": 12,
                          "line": 37
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"operation\"",
                      "value": "operation",
                      "range": [
                        889,
                        900
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 37
                        },
                        "start": {
                          "column": 32,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      869,
                      900
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 37
                      },
                      "start": {
                        "column": 12,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    865,
                    963
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 39
                    },
                    "start": {
                      "column": 8,
                      "line": 37
                    }
                  }
                }
              ],
              "range": [
                855,
                969
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 40
                },
                "start": {
                  "column": 51,
                  "line": 36
                }
              }
            },
            "left": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "memberType",
                    "optional": false,
                    "range": [
                      819,
                      829
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 36
                      },
                      "start": {
                        "column": 15,
                        "line": 36
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    819,
                    829
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 36
                    },
                    "start": {
                      "column": 15,
                      "line": 36
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                813,
                829
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 36
                },
                "start": {
                  "column": 9,
                  "line": 36
                }
              }
            },
            "right": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "callbackType",
                "optional": false,
                "range": [
                  833,
                  845
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 36
                  },
                  "start": {
                    "column": 29,
                    "line": 36
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "members",
                "optional": false,
                "range": [
                  846,
                  853
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 36
                  },
                  "start": {
                    "column": 42,
                    "line": 36
                  }
                }
              },
              "range": [
                833,
                853
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 36
                },
                "start": {
                  "column": 29,
                  "line": 36
                }
              }
            },
            "range": [
              808,
              969
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          }
        ],
        "range": [
          802,
          971
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 55,
            "line": 35
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "insertInterface2",
        "optional": false,
        "range": [
          756,
          772
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 35
          },
          "start": {
            "column": 9,
            "line": 35
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callbackType",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 35
              },
              "start": {
                "column": 38,
                "line": 35
              }
            },
            "range": [
              785,
              800
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InterfaceType",
                "optional": false,
                "range": [
                  787,
                  800
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 35
                  },
                  "start": {
                    "column": 40,
                    "line": 35
                  }
                }
              },
              "range": [
                787,
                800
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 35
                },
                "start": {
                  "column": 40,
                  "line": 35
                }
              }
            }
          },
          "range": [
            773,
            800
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 35
            },
            "start": {
              "column": 26,
              "line": 35
            }
          }
        }
      ],
      "range": [
        747,
        971
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 35
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
            "type": "IfStatement",
            "alternate": {
              "type": "IfStatement",
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "memberType",
                          "optional": false,
                          "range": [
                            1156,
                            1166
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 48
                            },
                            "start": {
                              "column": 8,
                              "line": 48
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "idlType",
                          "optional": false,
                          "range": [
                            1167,
                            1174
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 48
                            },
                            "start": {
                              "column": 19,
                              "line": 48
                            }
                          }
                        },
                        "range": [
                          1156,
                          1174
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 48
                          },
                          "start": {
                            "column": 8,
                            "line": 48
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "origin",
                        "optional": false,
                        "range": [
                          1175,
                          1181
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 48
                          },
                          "start": {
                            "column": 27,
                            "line": 48
                          }
                        }
                      },
                      "range": [
                        1156,
                        1181
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 48
                        },
                        "start": {
                          "column": 8,
                          "line": 48
                        }
                      }
                    },
                    "range": [
                      1156,
                      1182
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 48
                      },
                      "start": {
                        "column": 8,
                        "line": 48
                      }
                    }
                  }
                ],
                "range": [
                  1146,
                  1199
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 49
                  },
                  "start": {
                    "column": 46,
                    "line": 47
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "memberType",
                    "optional": false,
                    "range": [
                      1113,
                      1123
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 47
                      },
                      "start": {
                        "column": 13,
                        "line": 47
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "range": [
                      1124,
                      1128
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 47
                      },
                      "start": {
                        "column": 24,
                        "line": 47
                      }
                    }
                  },
                  "range": [
                    1113,
                    1128
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 47
                    },
                    "start": {
                      "column": 13,
                      "line": 47
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"operation\"",
                  "value": "operation",
                  "range": [
                    1133,
                    1144
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 47
                    },
                    "start": {
                      "column": 33,
                      "line": 47
                    }
                  }
                },
                "range": [
                  1113,
                  1144
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 47
                  },
                  "start": {
                    "column": 13,
                    "line": 47
                  }
                }
              },
              "range": [
                1109,
                1199
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 49
                },
                "start": {
                  "column": 9,
                  "line": 47
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "memberType",
                      "optional": false,
                      "range": [
                        1063,
                        1073
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 45
                        },
                        "start": {
                          "column": 8,
                          "line": 45
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "idlType",
                      "optional": false,
                      "range": [
                        1074,
                        1081
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 45
                        },
                        "start": {
                          "column": 19,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      1063,
                      1081
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 45
                      },
                      "start": {
                        "column": 8,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    1063,
                    1082
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 45
                    },
                    "start": {
                      "column": 8,
                      "line": 45
                    }
                  }
                }
              ],
              "range": [
                1053,
                1099
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 46
                },
                "start": {
                  "column": 37,
                  "line": 44
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "memberType",
                  "optional": false,
                  "range": [
                    1024,
                    1034
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 44
                    },
                    "start": {
                      "column": 8,
                      "line": 44
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "range": [
                    1035,
                    1039
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 44
                    },
                    "start": {
                      "column": 19,
                      "line": 44
                    }
                  }
                },
                "range": [
                  1024,
                  1039
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 44
                  },
                  "start": {
                    "column": 8,
                    "line": 44
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"const\"",
                "value": "const",
                "range": [
                  1044,
                  1051
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 44
                  },
                  "start": {
                    "column": 28,
                    "line": 44
                  }
                }
              },
              "range": [
                1024,
                1051
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 44
                },
                "start": {
                  "column": 8,
                  "line": 44
                }
              }
            },
            "range": [
              1020,
              1199
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          }
        ],
        "range": [
          1014,
          1201
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 41,
            "line": 43
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
          982,
          985
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 43
          },
          "start": {
            "column": 9,
            "line": 43
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "memberType",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 43
              },
              "start": {
                "column": 23,
                "line": 43
              }
            },
            "range": [
              996,
              1012
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IDLMemberTypes",
                "optional": false,
                "range": [
                  998,
                  1012
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 43
                  },
                  "start": {
                    "column": 25,
                    "line": 43
                  }
                }
              },
              "range": [
                998,
                1012
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 43
                },
                "start": {
                  "column": 25,
                  "line": 43
                }
              }
            }
          },
          "range": [
            986,
            1012
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 43
            },
            "start": {
              "column": 13,
              "line": 43
            }
          }
        }
      ],
      "range": [
        973,
        1201
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 50
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
          1252,
          1297
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
                1258,
                1262
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 55
                },
                "start": {
                  "column": 4,
                  "line": 55
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
                  "line": 55
                },
                "start": {
                  "column": 8,
                  "line": 55
                }
              },
              "range": [
                1262,
                1268
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    1264,
                    1268
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 55
                    },
                    "start": {
                      "column": 10,
                      "line": 55
                    }
                  }
                },
                "range": [
                  1264,
                  1268
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 55
                  },
                  "start": {
                    "column": 10,
                    "line": 55
                  }
                }
              }
            },
            "range": [
              1258,
              1269
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "range": [
                1274,
                1278
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 56
                },
                "start": {
                  "column": 4,
                  "line": 56
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
                  "column": 24,
                  "line": 56
                },
                "start": {
                  "column": 8,
                  "line": 56
                }
              },
              "range": [
                1278,
                1294
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        1282,
                        1283
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 56
                        },
                        "start": {
                          "column": 12,
                          "line": 56
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
                          "column": 21,
                          "line": 56
                        },
                        "start": {
                          "column": 13,
                          "line": 56
                        }
                      },
                      "range": [
                        1283,
                        1291
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1285,
                          1291
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 56
                          },
                          "start": {
                            "column": 15,
                            "line": 56
                          }
                        }
                      }
                    },
                    "range": [
                      1282,
                      1292
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 56
                      },
                      "start": {
                        "column": 12,
                        "line": 56
                      }
                    }
                  }
                ],
                "range": [
                  1280,
                  1294
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 56
                  },
                  "start": {
                    "column": 10,
                    "line": 56
                  }
                }
              }
            },
            "range": [
              1274,
              1295
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 12,
            "line": 54
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          1250,
          1251
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 54
          },
          "start": {
            "column": 10,
            "line": 54
          }
        }
      },
      "range": [
        1240,
        1297
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1311,
          1356
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
                1317,
                1321
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 60
                },
                "start": {
                  "column": 4,
                  "line": 60
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
                  "line": 60
                },
                "start": {
                  "column": 8,
                  "line": 60
                }
              },
              "range": [
                1321,
                1328
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    1323,
                    1328
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 60
                    },
                    "start": {
                      "column": 10,
                      "line": 60
                    }
                  }
                },
                "range": [
                  1323,
                  1328
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 60
                  },
                  "start": {
                    "column": 10,
                    "line": 60
                  }
                }
              }
            },
            "range": [
              1317,
              1329
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "range": [
                1334,
                1338
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 61
                },
                "start": {
                  "column": 4,
                  "line": 61
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
                  "column": 24,
                  "line": 61
                },
                "start": {
                  "column": 8,
                  "line": 61
                }
              },
              "range": [
                1338,
                1354
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        1342,
                        1343
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 61
                        },
                        "start": {
                          "column": 12,
                          "line": 61
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
                          "column": 21,
                          "line": 61
                        },
                        "start": {
                          "column": 13,
                          "line": 61
                        }
                      },
                      "range": [
                        1343,
                        1351
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1345,
                          1351
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 61
                          },
                          "start": {
                            "column": 15,
                            "line": 61
                          }
                        }
                      }
                    },
                    "range": [
                      1342,
                      1352
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 61
                      },
                      "start": {
                        "column": 12,
                        "line": 61
                      }
                    }
                  }
                ],
                "range": [
                  1340,
                  1354
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 61
                  },
                  "start": {
                    "column": 10,
                    "line": 61
                  }
                }
              }
            },
            "range": [
              1334,
              1354
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 62
          },
          "start": {
            "column": 12,
            "line": 59
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          1309,
          1310
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 59
          },
          "start": {
            "column": 10,
            "line": 59
          }
        }
      },
      "range": [
        1299,
        1356
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 59
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
            "type": "WhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1409,
                        1410
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 66
                        },
                        "start": {
                          "column": 8,
                          "line": 66
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
                        1411,
                        1415
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 66
                        },
                        "start": {
                          "column": 10,
                          "line": 66
                        }
                      }
                    },
                    "range": [
                      1409,
                      1415
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 66
                      },
                      "start": {
                        "column": 8,
                        "line": 66
                      }
                    }
                  },
                  "range": [
                    1409,
                    1416
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 66
                    },
                    "start": {
                      "column": 8,
                      "line": 66
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
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                1460,
                                1461
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 68
                                },
                                "start": {
                                  "column": 12,
                                  "line": 68
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
                                1462,
                                1466
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 68
                                },
                                "start": {
                                  "column": 14,
                                  "line": 68
                                }
                              }
                            },
                            "range": [
                              1460,
                              1466
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 68
                              },
                              "start": {
                                "column": 12,
                                "line": 68
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              1467,
                              1468
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 68
                              },
                              "start": {
                                "column": 19,
                                "line": 68
                              }
                            }
                          },
                          "range": [
                            1460,
                            1468
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 68
                            },
                            "start": {
                              "column": 12,
                              "line": 68
                            }
                          }
                        },
                        "range": [
                          1460,
                          1469
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 68
                          },
                          "start": {
                            "column": 12,
                            "line": 68
                          }
                        }
                      }
                    ],
                    "range": [
                      1446,
                      1479
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 69
                      },
                      "start": {
                        "column": 29,
                        "line": 67
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1429,
                          1430
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 67
                          },
                          "start": {
                            "column": 12,
                            "line": 67
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
                          1431,
                          1435
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 67
                          },
                          "start": {
                            "column": 14,
                            "line": 67
                          }
                        }
                      },
                      "range": [
                        1429,
                        1435
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 67
                        },
                        "start": {
                          "column": 12,
                          "line": 67
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "true",
                      "value": true,
                      "range": [
                        1440,
                        1444
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 67
                        },
                        "start": {
                          "column": 23,
                          "line": 67
                        }
                      }
                    },
                    "range": [
                      1429,
                      1444
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 67
                      },
                      "start": {
                        "column": 12,
                        "line": 67
                      }
                    }
                  },
                  "range": [
                    1425,
                    1479
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 69
                    },
                    "start": {
                      "column": 8,
                      "line": 67
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
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                1524,
                                1525
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 71
                                },
                                "start": {
                                  "column": 12,
                                  "line": 71
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
                                1526,
                                1530
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 71
                                },
                                "start": {
                                  "column": 14,
                                  "line": 71
                                }
                              }
                            },
                            "range": [
                              1524,
                              1530
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 71
                              },
                              "start": {
                                "column": 12,
                                "line": 71
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "range": [
                              1531,
                              1532
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 71
                              },
                              "start": {
                                "column": 19,
                                "line": 71
                              }
                            }
                          },
                          "range": [
                            1524,
                            1532
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 71
                            },
                            "start": {
                              "column": 12,
                              "line": 71
                            }
                          }
                        },
                        "range": [
                          1524,
                          1533
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 71
                          },
                          "start": {
                            "column": 12,
                            "line": 71
                          }
                        }
                      }
                    ],
                    "range": [
                      1510,
                      1543
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 72
                      },
                      "start": {
                        "column": 30,
                        "line": 70
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1492,
                          1493
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 70
                          },
                          "start": {
                            "column": 12,
                            "line": 70
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
                          1494,
                          1498
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 70
                          },
                          "start": {
                            "column": 14,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        1492,
                        1498
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 70
                        },
                        "start": {
                          "column": 12,
                          "line": 70
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "false",
                      "value": false,
                      "range": [
                        1503,
                        1508
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 70
                        },
                        "start": {
                          "column": 23,
                          "line": 70
                        }
                      }
                    },
                    "range": [
                      1492,
                      1508
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 70
                      },
                      "start": {
                        "column": 12,
                        "line": 70
                      }
                    }
                  },
                  "range": [
                    1488,
                    1543
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 72
                    },
                    "start": {
                      "column": 8,
                      "line": 70
                    }
                  }
                }
              ],
              "range": [
                1399,
                1549
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 73
                },
                "start": {
                  "column": 17,
                  "line": 65
                }
              }
            },
            "test": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                1393,
                1397
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 65
                },
                "start": {
                  "column": 11,
                  "line": 65
                }
              }
            },
            "range": [
              1386,
              1549
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          }
        ],
        "range": [
          1380,
          1551
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 74
          },
          "start": {
            "column": 22,
            "line": 64
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          1367,
          1369
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 64
          },
          "start": {
            "column": 9,
            "line": 64
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
                "line": 64
              },
              "start": {
                "column": 13,
                "line": 64
              }
            },
            "range": [
              1371,
              1378
            ],
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
                      1373,
                      1374
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 64
                      },
                      "start": {
                        "column": 15,
                        "line": 64
                      }
                    }
                  },
                  "range": [
                    1373,
                    1374
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 64
                    },
                    "start": {
                      "column": 15,
                      "line": 64
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
                      1377,
                      1378
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 64
                      },
                      "start": {
                        "column": 19,
                        "line": 64
                      }
                    }
                  },
                  "range": [
                    1377,
                    1378
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 64
                    },
                    "start": {
                      "column": 19,
                      "line": 64
                    }
                  }
                }
              ],
              "range": [
                1373,
                1378
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 64
                },
                "start": {
                  "column": 15,
                  "line": 64
                }
              }
            }
          },
          "range": [
            1370,
            1378
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 64
            },
            "start": {
              "column": 12,
              "line": 64
            }
          }
        }
      ],
      "range": [
        1358,
        1551
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 64
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
            "type": "WhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                1630,
                                1631
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 79
                                },
                                "start": {
                                  "column": 12,
                                  "line": 79
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
                                1632,
                                1636
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 79
                                },
                                "start": {
                                  "column": 14,
                                  "line": 79
                                }
                              }
                            },
                            "range": [
                              1630,
                              1636
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 79
                              },
                              "start": {
                                "column": 12,
                                "line": 79
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              1637,
                              1638
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 79
                              },
                              "start": {
                                "column": 19,
                                "line": 79
                              }
                            }
                          },
                          "range": [
                            1630,
                            1638
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 79
                            },
                            "start": {
                              "column": 12,
                              "line": 79
                            }
                          }
                        },
                        "range": [
                          1630,
                          1639
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 79
                          },
                          "start": {
                            "column": 12,
                            "line": 79
                          }
                        }
                      }
                    ],
                    "range": [
                      1616,
                      1649
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 80
                      },
                      "start": {
                        "column": 20,
                        "line": 78
                      }
                    }
                  },
                  "test": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1608,
                        1609
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 78
                        },
                        "start": {
                          "column": 12,
                          "line": 78
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
                        1610,
                        1614
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 78
                        },
                        "start": {
                          "column": 14,
                          "line": 78
                        }
                      }
                    },
                    "range": [
                      1608,
                      1614
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 78
                      },
                      "start": {
                        "column": 12,
                        "line": 78
                      }
                    }
                  },
                  "range": [
                    1604,
                    1649
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 80
                    },
                    "start": {
                      "column": 8,
                      "line": 78
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
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                1685,
                                1686
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 82
                                },
                                "start": {
                                  "column": 12,
                                  "line": 82
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
                                1687,
                                1691
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 82
                                },
                                "start": {
                                  "column": 14,
                                  "line": 82
                                }
                              }
                            },
                            "range": [
                              1685,
                              1691
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 82
                              },
                              "start": {
                                "column": 12,
                                "line": 82
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "range": [
                              1692,
                              1693
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 82
                              },
                              "start": {
                                "column": 19,
                                "line": 82
                              }
                            }
                          },
                          "range": [
                            1685,
                            1693
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 82
                            },
                            "start": {
                              "column": 12,
                              "line": 82
                            }
                          }
                        },
                        "range": [
                          1685,
                          1694
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 82
                          },
                          "start": {
                            "column": 12,
                            "line": 82
                          }
                        }
                      }
                    ],
                    "range": [
                      1671,
                      1704
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 83
                      },
                      "start": {
                        "column": 21,
                        "line": 81
                      }
                    }
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1663,
                          1664
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 81
                          },
                          "start": {
                            "column": 13,
                            "line": 81
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
                          1665,
                          1669
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 81
                          },
                          "start": {
                            "column": 15,
                            "line": 81
                          }
                        }
                      },
                      "range": [
                        1663,
                        1669
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 81
                        },
                        "start": {
                          "column": 13,
                          "line": 81
                        }
                      }
                    },
                    "operator": "!",
                    "prefix": true,
                    "range": [
                      1662,
                      1669
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 81
                      },
                      "start": {
                        "column": 12,
                        "line": 81
                      }
                    }
                  },
                  "range": [
                    1658,
                    1704
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 83
                    },
                    "start": {
                      "column": 8,
                      "line": 81
                    }
                  }
                }
              ],
              "range": [
                1594,
                1710
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 84
                },
                "start": {
                  "column": 17,
                  "line": 77
                }
              }
            },
            "test": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                1588,
                1592
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 77
                },
                "start": {
                  "column": 11,
                  "line": 77
                }
              }
            },
            "range": [
              1581,
              1710
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 84
              },
              "start": {
                "column": 4,
                "line": 77
              }
            }
          }
        ],
        "range": [
          1575,
          1712
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 85
          },
          "start": {
            "column": 22,
            "line": 76
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
          1562,
          1564
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 76
          },
          "start": {
            "column": 9,
            "line": 76
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
                "line": 76
              },
              "start": {
                "column": 13,
                "line": 76
              }
            },
            "range": [
              1566,
              1573
            ],
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
                      1568,
                      1569
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 76
                      },
                      "start": {
                        "column": 15,
                        "line": 76
                      }
                    }
                  },
                  "range": [
                    1568,
                    1569
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 76
                    },
                    "start": {
                      "column": 15,
                      "line": 76
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
                      1572,
                      1573
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 76
                      },
                      "start": {
                        "column": 19,
                        "line": 76
                      }
                    }
                  },
                  "range": [
                    1572,
                    1573
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 76
                    },
                    "start": {
                      "column": 19,
                      "line": 76
                    }
                  }
                }
              ],
              "range": [
                1568,
                1573
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 76
                },
                "start": {
                  "column": 15,
                  "line": 76
                }
              }
            }
          },
          "range": [
            1565,
            1573
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 76
            },
            "start": {
              "column": 12,
              "line": 76
            }
          }
        }
      ],
      "range": [
        1553,
        1712
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 85
        },
        "start": {
          "column": 0,
          "line": 76
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 85
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
