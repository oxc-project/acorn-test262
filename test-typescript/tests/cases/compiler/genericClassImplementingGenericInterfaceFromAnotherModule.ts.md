__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    114
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              17,
              45
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  42,
                  45
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 2
                  },
                  "start": {
                    "column": 29,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "range": [
                  34,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 2
                  },
                  "start": {
                    "column": 21,
                    "line": 2
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 2
                  },
                  "start": {
                    "column": 25,
                    "line": 2
                  }
                },
                "range": [
                  38,
                  41
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
                        39,
                        40
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 2
                        },
                        "start": {
                          "column": 26,
                          "line": 2
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      39,
                      40
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 2
                      },
                      "start": {
                        "column": 26,
                        "line": 2
                      }
                    }
                  }
                ]
              },
              "range": [
                24,
                45
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 32,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          11,
          47
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          7,
          10
        ],
        "decorators": [],
        "name": "foo",
        "optional": false,
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        47
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
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              65,
              111
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  108,
                  111
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 5
                  },
                  "start": {
                    "column": 47,
                    "line": 5
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
                  78,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 5
                  },
                  "start": {
                    "column": 17,
                    "line": 5
                  }
                }
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        96,
                        99
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 5
                        },
                        "start": {
                          "column": 35,
                          "line": 5
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "range": [
                        100,
                        104
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 5
                        },
                        "start": {
                          "column": 39,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      96,
                      104
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 5
                      },
                      "start": {
                        "column": 35,
                        "line": 5
                      }
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      104,
                      107
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            105,
                            106
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 5
                            },
                            "start": {
                              "column": 44,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          105,
                          106
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 5
                          },
                          "start": {
                            "column": 44,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 5
                      },
                      "start": {
                        "column": 43,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    96,
                    107
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 5
                    },
                    "start": {
                      "column": 35,
                      "line": 5
                    }
                  }
                }
              ],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 5
                  },
                  "start": {
                    "column": 20,
                    "line": 5
                  }
                },
                "range": [
                  81,
                  84
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
                        82,
                        83
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 5
                        },
                        "start": {
                          "column": 21,
                          "line": 5
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      82,
                      83
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 5
                      },
                      "start": {
                        "column": 21,
                        "line": 5
                      }
                    }
                  }
                ]
              },
              "range": [
                72,
                111
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 50,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          59,
          113
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 11,
            "line": 4
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          55,
          58
        ],
        "decorators": [],
        "name": "bar",
        "optional": false,
        "loc": {
          "end": {
            "column": 10,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "kind": "module",
      "range": [
        48,
        113
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
