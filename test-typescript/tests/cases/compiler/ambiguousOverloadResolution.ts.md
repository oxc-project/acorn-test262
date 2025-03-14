__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    177
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          11
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 8,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
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
      "range": [
        0,
        11
      ],
      "loc": {
        "end": {
          "column": 11,
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
          30,
          44
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
              "name": "x",
              "optional": false,
              "range": [
                32,
                33
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 20,
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
                  "column": 29,
                  "line": 2
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              },
              "range": [
                33,
                41
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  35,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 2
                  },
                  "start": {
                    "column": 23,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              32,
              42
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 2
              },
              "start": {
                "column": 20,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 2
          },
          "start": {
            "column": 18,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          18,
          19
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          28,
          29
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 2
          },
          "start": {
            "column": 16,
            "line": 2
          }
        }
      },
      "range": [
        12,
        44
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
        "name": "f",
        "optional": false,
        "range": [
          63,
          64
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
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 23,
                "line": 4
              },
              "start": {
                "column": 20,
                "line": 4
              }
            },
            "range": [
              66,
              69
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  68,
                  69
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 4
                  },
                  "start": {
                    "column": 22,
                    "line": 4
                  }
                }
              },
              "range": [
                68,
                69
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 4
                },
                "start": {
                  "column": 22,
                  "line": 4
                }
              }
            }
          },
          "range": [
            65,
            69
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 4
            },
            "start": {
              "column": 19,
              "line": 4
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 29,
                "line": 4
              },
              "start": {
                "column": 26,
                "line": 4
              }
            },
            "range": [
              72,
              75
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  74,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 4
                  },
                  "start": {
                    "column": 28,
                    "line": 4
                  }
                }
              },
              "range": [
                74,
                75
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 4
                },
                "start": {
                  "column": 28,
                  "line": 4
                }
              }
            }
          },
          "range": [
            71,
            75
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 4
            },
            "start": {
              "column": 25,
              "line": 4
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 38,
            "line": 4
          },
          "start": {
            "column": 30,
            "line": 4
          }
        },
        "range": [
          76,
          84
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            78,
            84
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 4
            },
            "start": {
              "column": 32,
              "line": 4
            }
          }
        }
      },
      "range": [
        46,
        85
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
        "name": "f",
        "optional": false,
        "range": [
          103,
          104
        ],
        "loc": {
          "end": {
            "column": 18,
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
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
              106,
              109
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  108,
                  109
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
              "range": [
                108,
                109
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
          },
          "range": [
            105,
            109
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 5
            },
            "start": {
              "column": 19,
              "line": 5
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 29,
                "line": 5
              },
              "start": {
                "column": 26,
                "line": 5
              }
            },
            "range": [
              112,
              115
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  114,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 5
                  },
                  "start": {
                    "column": 28,
                    "line": 5
                  }
                }
              },
              "range": [
                114,
                115
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 5
                },
                "start": {
                  "column": 28,
                  "line": 5
                }
              }
            }
          },
          "range": [
            111,
            115
          ],
          "loc": {
            "end": {
              "column": 29,
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
            "column": 38,
            "line": 5
          },
          "start": {
            "column": 30,
            "line": 5
          }
        },
        "range": [
          116,
          124
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            118,
            124
          ],
          "loc": {
            "end": {
              "column": 38,
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
        125
      ],
      "loc": {
        "end": {
          "column": 39,
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 7
                },
                "start": {
                  "column": 5,
                  "line": 7
                }
              },
              "range": [
                132,
                135
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "range": [
                    134,
                    135
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 7
                    },
                    "start": {
                      "column": 7,
                      "line": 7
                    }
                  }
                },
                "range": [
                  134,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 7
                  },
                  "start": {
                    "column": 7,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              131,
              135
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            131,
            135
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        127,
        136
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 7
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
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 8
                },
                "start": {
                  "column": 5,
                  "line": 8
                }
              },
              "range": [
                142,
                150
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  144,
                  150
                ],
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
              }
            },
            "range": [
              141,
              150
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
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  155,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 8
                  },
                  "start": {
                    "column": 18,
                    "line": 8
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  158,
                  159
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 8
                  },
                  "start": {
                    "column": 21,
                    "line": 8
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                153,
                154
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 8
                },
                "start": {
                  "column": 16,
                  "line": 8
                }
              }
            },
            "optional": false,
            "range": [
              153,
              160
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 8
              },
              "start": {
                "column": 16,
                "line": 8
              }
            }
          },
          "range": [
            141,
            160
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        137,
        161
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 40,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
