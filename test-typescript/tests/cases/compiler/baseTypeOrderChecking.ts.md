__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    212
  ],
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "someVariable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              },
              "range": [
                16,
                32
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    24,
                    32
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Class2",
                        "optional": false,
                        "range": [
                          25,
                          31
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 1
                          },
                          "start": {
                            "column": 25,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        25,
                        31
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 1
                        },
                        "start": {
                          "column": 25,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 1
                    },
                    "start": {
                      "column": 24,
                      "line": 1
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Class4",
                  "optional": false,
                  "range": [
                    18,
                    24
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 1
                    },
                    "start": {
                      "column": 18,
                      "line": 1
                    }
                  }
                },
                "range": [
                  18,
                  32
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 1
                  },
                  "start": {
                    "column": 18,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              32
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            4,
            32
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        0,
        33
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 1
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
          52,
          56
        ],
        "body": [],
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
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Class1",
        "optional": false,
        "range": [
          44,
          50
        ],
        "loc": {
          "end": {
            "column": 12,
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
        38,
        56
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          90,
          94
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Class2",
        "optional": false,
        "range": [
          67,
          73
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 13
          },
          "start": {
            "column": 6,
            "line": 13
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Class1",
        "optional": false,
        "range": [
          82,
          88
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 13
          },
          "start": {
            "column": 21,
            "line": 13
          }
        }
      },
      "range": [
        61,
        94
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          116,
          167
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "memberVariable",
              "optional": false,
              "range": [
                141,
                155
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 25
                },
                "start": {
                  "column": 22,
                  "line": 25
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
                  "column": 44,
                  "line": 25
                },
                "start": {
                  "column": 36,
                  "line": 25
                }
              },
              "range": [
                155,
                163
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Class2",
                  "optional": false,
                  "range": [
                    157,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 25
                    },
                    "start": {
                      "column": 38,
                      "line": 25
                    }
                  }
                },
                "range": [
                  157,
                  163
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 25
                  },
                  "start": {
                    "column": 38,
                    "line": 25
                  }
                }
              }
            },
            "value": null,
            "range": [
              134,
              164
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 25
              },
              "start": {
                "column": 15,
                "line": 25
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Class3",
        "optional": false,
        "range": [
          105,
          111
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 21
          },
          "start": {
            "column": 6,
            "line": 21
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 21
          },
          "start": {
            "column": 12,
            "line": 21
          }
        },
        "range": [
          111,
          114
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
                112,
                113
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 21
                },
                "start": {
                  "column": 13,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              112,
              113
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 21
              },
              "start": {
                "column": 13,
                "line": 21
              }
            }
          }
        ]
      },
      "range": [
        99,
        167
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          207,
          211
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Class4",
        "optional": false,
        "range": [
          178,
          184
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 31
          },
          "start": {
            "column": 6,
            "line": 31
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Class3",
        "optional": false,
        "range": [
          196,
          202
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 31
          },
          "start": {
            "column": 24,
            "line": 31
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          202,
          205
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
                203,
                204
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 31
                },
                "start": {
                  "column": 31,
                  "line": 31
                }
              }
            },
            "range": [
              203,
              204
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 31
              },
              "start": {
                "column": 31,
                "line": 31
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 31
          },
          "start": {
            "column": 30,
            "line": 31
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 31
          },
          "start": {
            "column": 12,
            "line": 31
          }
        },
        "range": [
          184,
          187
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
                185,
                186
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 31
                },
                "start": {
                  "column": 13,
                  "line": 31
                }
              }
            },
            "out": false,
            "range": [
              185,
              186
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 31
              },
              "start": {
                "column": 13,
                "line": 31
              }
            }
          }
        ]
      },
      "range": [
        172,
        211
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 36
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
