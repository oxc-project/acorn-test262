__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    219
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Kind",
        "optional": false,
        "range": [
          27,
          31
        ],
        "loc": {
          "end": {
            "column": 9,
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
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"one\"",
              "value": "one",
              "range": [
                34,
                39
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              }
            },
            "range": [
              34,
              39
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"two\"",
              "value": "two",
              "range": [
                42,
                47
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              }
            },
            "range": [
              42,
              47
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 3
              },
              "start": {
                "column": 20,
                "line": 3
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"three\"",
              "value": "three",
              "range": [
                50,
                57
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 3
                },
                "start": {
                  "column": 28,
                  "line": 3
                }
              }
            },
            "range": [
              50,
              57
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
              },
              "start": {
                "column": 28,
                "line": 3
              }
            }
          }
        ],
        "range": [
          34,
          57
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        }
      },
      "range": [
        22,
        58
      ],
      "loc": {
        "end": {
          "column": 36,
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
        "name": "getInterfaceFromString",
        "optional": false,
        "range": [
          77,
          99
        ],
        "loc": {
          "end": {
            "column": 39,
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
          "name": "options",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 96,
                "line": 5
              },
              "start": {
                "column": 64,
                "line": 5
              }
            },
            "range": [
              124,
              156
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "range": [
                          128,
                          132
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 5
                          },
                          "start": {
                            "column": 68,
                            "line": 5
                          }
                        }
                      },
                      "optional": true,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 76,
                            "line": 5
                          },
                          "start": {
                            "column": 73,
                            "line": 5
                          }
                        },
                        "range": [
                          133,
                          136
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              135,
                              136
                            ],
                            "loc": {
                              "end": {
                                "column": 76,
                                "line": 5
                              },
                              "start": {
                                "column": 75,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            135,
                            136
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 5
                            },
                            "start": {
                              "column": 75,
                              "line": 5
                            }
                          }
                        }
                      },
                      "range": [
                        128,
                        136
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 5
                        },
                        "start": {
                          "column": 68,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    126,
                    138
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 5
                    },
                    "start": {
                      "column": 66,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "range": [
                          143,
                          147
                        ],
                        "loc": {
                          "end": {
                            "column": 87,
                            "line": 5
                          },
                          "start": {
                            "column": 83,
                            "line": 5
                          }
                        }
                      },
                      "optional": true,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 94,
                            "line": 5
                          },
                          "start": {
                            "column": 88,
                            "line": 5
                          }
                        },
                        "range": [
                          148,
                          154
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Kind",
                            "optional": false,
                            "range": [
                              150,
                              154
                            ],
                            "loc": {
                              "end": {
                                "column": 94,
                                "line": 5
                              },
                              "start": {
                                "column": 90,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            150,
                            154
                          ],
                          "loc": {
                            "end": {
                              "column": 94,
                              "line": 5
                            },
                            "start": {
                              "column": 90,
                              "line": 5
                            }
                          }
                        }
                      },
                      "range": [
                        143,
                        154
                      ],
                      "loc": {
                        "end": {
                          "column": 94,
                          "line": 5
                        },
                        "start": {
                          "column": 83,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    141,
                    156
                  ],
                  "loc": {
                    "end": {
                      "column": 96,
                      "line": 5
                    },
                    "start": {
                      "column": 81,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                126,
                156
              ],
              "loc": {
                "end": {
                  "column": 96,
                  "line": 5
                },
                "start": {
                  "column": 66,
                  "line": 5
                }
              }
            }
          },
          "range": [
            116,
            156
          ],
          "loc": {
            "end": {
              "column": 96,
              "line": 5
            },
            "start": {
              "column": 56,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 100,
            "line": 5
          },
          "start": {
            "column": 97,
            "line": 5
          }
        },
        "range": [
          157,
          160
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              159,
              160
            ],
            "loc": {
              "end": {
                "column": 100,
                "line": 5
              },
              "start": {
                "column": 99,
                "line": 5
              }
            }
          },
          "range": [
            159,
            160
          ],
          "loc": {
            "end": {
              "column": 100,
              "line": 5
            },
            "start": {
              "column": 99,
              "line": 5
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 55,
            "line": 5
          },
          "start": {
            "column": 39,
            "line": 5
          }
        },
        "range": [
          99,
          115
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "range": [
                  110,
                  114
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 5
                  },
                  "start": {
                    "column": 50,
                    "line": 5
                  }
                }
              },
              "range": [
                110,
                114
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 5
                },
                "start": {
                  "column": 50,
                  "line": 5
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
                100,
                101
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
            "out": false,
            "range": [
              100,
              114
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 5
              },
              "start": {
                "column": 40,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        60,
        161
      ],
      "loc": {
        "end": {
          "column": 101,
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
            "name": "result",
            "optional": false,
            "range": [
              169,
              175
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "range": [
                        203,
                        207
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 7
                        },
                        "start": {
                          "column": 40,
                          "line": 7
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'two'",
                      "value": "two",
                      "range": [
                        209,
                        214
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 7
                        },
                        "start": {
                          "column": 46,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      203,
                      214
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 7
                      },
                      "start": {
                        "column": 40,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  201,
                  216
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 7
                  },
                  "start": {
                    "column": 38,
                    "line": 7
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getInterfaceFromString",
              "optional": false,
              "range": [
                178,
                200
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 7
                },
                "start": {
                  "column": 15,
                  "line": 7
                }
              }
            },
            "optional": false,
            "range": [
              178,
              217
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 7
              },
              "start": {
                "column": 15,
                "line": 7
              }
            }
          },
          "range": [
            169,
            217
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 7
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        163,
        218
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 7
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
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
