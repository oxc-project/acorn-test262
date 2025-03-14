__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    210
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          42,
          66
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Parent",
              "optional": false,
              "range": [
                50,
                56
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
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
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 9,
                  "line": 4
                }
              },
              "range": [
                57,
                63
              ],
              "typeAnnotation": {
                "type": "TSThisType",
                "range": [
                  59,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              50,
              64
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 20,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ITreeItem",
        "optional": false,
        "range": [
          32,
          41
        ],
        "loc": {
          "end": {
            "column": 19,
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
        66
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NodeWithId",
        "optional": false,
        "range": [
          73,
          83
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ITreeItem",
              "optional": false,
              "range": [
                86,
                95
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 7
                },
                "start": {
                  "column": 18,
                  "line": 7
                }
              }
            },
            "range": [
              86,
              95
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 7
              },
              "start": {
                "column": 18,
                "line": 7
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
                  "name": "Id",
                  "optional": false,
                  "range": [
                    100,
                    102
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 7
                    },
                    "start": {
                      "column": 32,
                      "line": 7
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
                      "column": 43,
                      "line": 7
                    },
                    "start": {
                      "column": 35,
                      "line": 7
                    }
                  },
                  "range": [
                    103,
                    111
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      105,
                      111
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 7
                      },
                      "start": {
                        "column": 37,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  100,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 7
                  },
                  "start": {
                    "column": 32,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              98,
              113
            ],
            "loc": {
              "end": {
                "column": 45,
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
          86,
          113
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 7
          },
          "start": {
            "column": 18,
            "line": 7
          }
        }
      },
      "range": [
        68,
        114
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          155,
          158
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 39,
            "line": 9
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMaxId",
        "optional": false,
        "range": [
          125,
          133
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 9
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 9
              },
              "start": {
                "column": 23,
                "line": 9
              }
            },
            "range": [
              139,
              153
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NodeWithId",
                  "optional": false,
                  "range": [
                    141,
                    151
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 9
                    },
                    "start": {
                      "column": 25,
                      "line": 9
                    }
                  }
                },
                "range": [
                  141,
                  151
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 9
                  },
                  "start": {
                    "column": 25,
                    "line": 9
                  }
                }
              },
              "range": [
                141,
                153
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 9
                },
                "start": {
                  "column": 25,
                  "line": 9
                }
              }
            }
          },
          "range": [
            134,
            153
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 9
            },
            "start": {
              "column": 18,
              "line": 9
            }
          }
        }
      ],
      "range": [
        116,
        158
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
            "name": "nodes",
            "optional": false,
            "range": [
              166,
              171
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                174,
                176
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 12
                },
                "start": {
                  "column": 14,
                  "line": 12
                }
              }
            },
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ITreeItem",
                  "optional": false,
                  "range": [
                    180,
                    189
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 12
                    },
                    "start": {
                      "column": 20,
                      "line": 12
                    }
                  }
                },
                "range": [
                  180,
                  189
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 12
                  },
                  "start": {
                    "column": 20,
                    "line": 12
                  }
                }
              },
              "range": [
                180,
                191
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 12
                },
                "start": {
                  "column": 20,
                  "line": 12
                }
              }
            },
            "range": [
              174,
              191
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 12
              },
              "start": {
                "column": 14,
                "line": 12
              }
            }
          },
          "range": [
            166,
            191
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
        160,
        192
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nodes",
            "optional": false,
            "range": [
              202,
              207
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 13
              },
              "start": {
                "column": 9,
                "line": 13
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMaxId",
          "optional": false,
          "range": [
            193,
            201
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "optional": false,
        "range": [
          193,
          208
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        193,
        209
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
