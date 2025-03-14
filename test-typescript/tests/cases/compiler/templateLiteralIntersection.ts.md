__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    56,
    556
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
            "name": "a",
            "optional": false,
            "range": [
              62,
              63
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
          "init": {
            "type": "Literal",
            "raw": "'a'",
            "value": "a",
            "range": [
              66,
              69
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 2
              },
              "start": {
                "column": 10,
                "line": 2
              }
            }
          },
          "range": [
            62,
            69
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        56,
        69
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          76,
          77
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            87,
            88
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 4
            },
            "start": {
              "column": 16,
              "line": 4
            }
          }
        },
        "range": [
          80,
          88
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "range": [
        71,
        88
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MixA",
        "optional": false,
        "range": [
          94,
          98
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
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
              "name": "A",
              "optional": false,
              "range": [
                101,
                102
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 5
                },
                "start": {
                  "column": 12,
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
                "column": 13,
                "line": 5
              },
              "start": {
                "column": 12,
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    106,
                    109
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
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 5
                    },
                    "start": {
                      "column": 20,
                      "line": 5
                    }
                  },
                  "range": [
                    109,
                    117
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      111,
                      117
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
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
                  106,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 5
                  },
                  "start": {
                    "column": 17,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              105,
              118
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 5
              },
              "start": {
                "column": 16,
                "line": 5
              }
            }
          }
        ],
        "range": [
          101,
          118
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 5
          },
          "start": {
            "column": 12,
            "line": 5
          }
        }
      },
      "range": [
        89,
        118
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OriginA1",
        "optional": false,
        "range": [
          125,
          133
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              136,
              139
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 7
              },
              "start": {
                "column": 16,
                "line": 7
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              140,
              142
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 7
              },
              "start": {
                "column": 20,
                "line": 7
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                139,
                140
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 7
                },
                "start": {
                  "column": 19,
                  "line": 7
                }
              }
            },
            "range": [
              139,
              140
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 7
              },
              "start": {
                "column": 19,
                "line": 7
              }
            }
          }
        ],
        "range": [
          136,
          142
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 7
          },
          "start": {
            "column": 16,
            "line": 7
          }
        }
      },
      "range": [
        120,
        142
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OriginA2",
        "optional": false,
        "range": [
          148,
          156
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              159,
              162
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 8
              },
              "start": {
                "column": 16,
                "line": 8
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              166,
              168
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 8
              },
              "start": {
                "column": 23,
                "line": 8
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixA",
              "optional": false,
              "range": [
                162,
                166
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 8
                },
                "start": {
                  "column": 19,
                  "line": 8
                }
              }
            },
            "range": [
              162,
              166
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 8
              },
              "start": {
                "column": 19,
                "line": 8
              }
            }
          }
        ],
        "range": [
          159,
          168
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 8
          },
          "start": {
            "column": 16,
            "line": 8
          }
        }
      },
      "range": [
        143,
        168
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          175,
          176
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 10
          },
          "start": {
            "column": 5,
            "line": 10
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              179,
              182
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 10
              },
              "start": {
                "column": 9,
                "line": 10
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              190,
              192
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 10
              },
              "start": {
                "column": 20,
                "line": 10
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                189,
                190
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 10
                },
                "start": {
                  "column": 19,
                  "line": 10
                }
              }
            },
            "range": [
              182,
              190
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 10
              },
              "start": {
                "column": 12,
                "line": 10
              }
            }
          }
        ],
        "range": [
          179,
          192
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "range": [
        170,
        192
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MixB",
        "optional": false,
        "range": [
          198,
          202
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 11
          },
          "start": {
            "column": 5,
            "line": 11
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
              "name": "B",
              "optional": false,
              "range": [
                205,
                206
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 11
                },
                "start": {
                  "column": 12,
                  "line": 11
                }
              }
            },
            "range": [
              205,
              206
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 11
              },
              "start": {
                "column": 12,
                "line": 11
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    211,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 11
                    },
                    "start": {
                      "column": 18,
                      "line": 11
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
                      "line": 11
                    },
                    "start": {
                      "column": 21,
                      "line": 11
                    }
                  },
                  "range": [
                    214,
                    222
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      216,
                      222
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 11
                      },
                      "start": {
                        "column": 23,
                        "line": 11
                      }
                    }
                  }
                },
                "range": [
                  211,
                  222
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 11
                  },
                  "start": {
                    "column": 18,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              209,
              224
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 11
              },
              "start": {
                "column": 16,
                "line": 11
              }
            }
          }
        ],
        "range": [
          205,
          224
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 11
          },
          "start": {
            "column": 12,
            "line": 11
          }
        }
      },
      "range": [
        193,
        224
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OriginB1",
        "optional": false,
        "range": [
          231,
          239
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 13
          },
          "start": {
            "column": 5,
            "line": 13
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              242,
              245
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 13
              },
              "start": {
                "column": 16,
                "line": 13
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              246,
              248
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 13
              },
              "start": {
                "column": 20,
                "line": 13
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                245,
                246
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 13
                },
                "start": {
                  "column": 19,
                  "line": 13
                }
              }
            },
            "range": [
              245,
              246
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 13
              },
              "start": {
                "column": 19,
                "line": 13
              }
            }
          }
        ],
        "range": [
          242,
          248
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 13
          },
          "start": {
            "column": 16,
            "line": 13
          }
        }
      },
      "range": [
        226,
        248
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OriginB2",
        "optional": false,
        "range": [
          254,
          262
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
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              265,
              268
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 14
              },
              "start": {
                "column": 16,
                "line": 14
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              272,
              274
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 14
              },
              "start": {
                "column": 23,
                "line": 14
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixB",
              "optional": false,
              "range": [
                268,
                272
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 14
                },
                "start": {
                  "column": 19,
                  "line": 14
                }
              }
            },
            "range": [
              268,
              272
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 14
              },
              "start": {
                "column": 19,
                "line": 14
              }
            }
          }
        ],
        "range": [
          265,
          274
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 14
          },
          "start": {
            "column": 16,
            "line": 14
          }
        }
      },
      "range": [
        249,
        274
      ],
      "loc": {
        "end": {
          "column": 25,
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
        "name": "MixC",
        "optional": false,
        "range": [
          281,
          285
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 16
          },
          "start": {
            "column": 5,
            "line": 16
          }
        }
      },
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    290,
                    293
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 16
                    },
                    "start": {
                      "column": 14,
                      "line": 16
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
                      "column": 25,
                      "line": 16
                    },
                    "start": {
                      "column": 17,
                      "line": 16
                    }
                  },
                  "range": [
                    293,
                    301
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      295,
                      301
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 16
                      },
                      "start": {
                        "column": 19,
                        "line": 16
                      }
                    }
                  }
                },
                "range": [
                  290,
                  301
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 16
                  },
                  "start": {
                    "column": 14,
                    "line": 16
                  }
                }
              }
            ],
            "range": [
              288,
              303
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 16
              },
              "start": {
                "column": 12,
                "line": 16
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                306,
                307
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 16
                },
                "start": {
                  "column": 30,
                  "line": 16
                }
              }
            },
            "range": [
              306,
              307
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 16
              },
              "start": {
                "column": 30,
                "line": 16
              }
            }
          }
        ],
        "range": [
          288,
          307
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 16
          },
          "start": {
            "column": 12,
            "line": 16
          }
        }
      },
      "range": [
        276,
        307
      ],
      "loc": {
        "end": {
          "column": 31,
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
        "name": "OriginC",
        "optional": false,
        "range": [
          314,
          321
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 18
          },
          "start": {
            "column": 5,
            "line": 18
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              324,
              327
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 18
              },
              "start": {
                "column": 15,
                "line": 18
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              331,
              333
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 18
              },
              "start": {
                "column": 22,
                "line": 18
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixC",
              "optional": false,
              "range": [
                327,
                331
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 18
                },
                "start": {
                  "column": 18,
                  "line": 18
                }
              }
            },
            "range": [
              327,
              331
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 18
              },
              "start": {
                "column": 18,
                "line": 18
              }
            }
          }
        ],
        "range": [
          324,
          333
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 18
          },
          "start": {
            "column": 15,
            "line": 18
          }
        }
      },
      "range": [
        309,
        333
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MixD",
        "optional": false,
        "range": [
          340,
          344
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 20
          },
          "start": {
            "column": 5,
            "line": 20
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              369,
              372
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              391,
              393
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 21
              },
              "start": {
                "column": 26,
                "line": 21
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    372,
                    373
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 21
                    },
                    "start": {
                      "column": 7,
                      "line": 21
                    }
                  }
                },
                "range": [
                  372,
                  373
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 21
                  },
                  "start": {
                    "column": 7,
                    "line": 21
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        378,
                        381
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 21
                        },
                        "start": {
                          "column": 13,
                          "line": 21
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
                          "line": 21
                        },
                        "start": {
                          "column": 16,
                          "line": 21
                        }
                      },
                      "range": [
                        381,
                        389
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          383,
                          389
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 21
                          },
                          "start": {
                            "column": 18,
                            "line": 21
                          }
                        }
                      }
                    },
                    "range": [
                      378,
                      389
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 21
                      },
                      "start": {
                        "column": 13,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  376,
                  391
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 21
                  },
                  "start": {
                    "column": 11,
                    "line": 21
                  }
                }
              }
            ],
            "range": [
              372,
              391
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 21
              },
              "start": {
                "column": 7,
                "line": 21
              }
            }
          }
        ],
        "range": [
          369,
          393
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 21
          },
          "start": {
            "column": 4,
            "line": 21
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 20
          },
          "start": {
            "column": 9,
            "line": 20
          }
        },
        "range": [
          344,
          362
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                355,
                361
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 20
                },
                "start": {
                  "column": 20,
                  "line": 20
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
                345,
                346
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 20
                },
                "start": {
                  "column": 10,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              345,
              361
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 20
              },
              "start": {
                "column": 10,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        335,
        393
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OriginD",
        "optional": false,
        "range": [
          399,
          406
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 22
          },
          "start": {
            "column": 5,
            "line": 22
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              409,
              412
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 22
              },
              "start": {
                "column": 15,
                "line": 22
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              455,
              457
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 22
              },
              "start": {
                "column": 61,
                "line": 22
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    416,
                    437
                  ],
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "range": [
                              417,
                              418
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 22
                              },
                              "start": {
                                "column": 23,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            417,
                            418
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 22
                            },
                            "start": {
                              "column": 23,
                              "line": 22
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
                                "name": "foo",
                                "optional": false,
                                "range": [
                                  423,
                                  426
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 22
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
                                    "column": 40,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 22
                                  }
                                },
                                "range": [
                                  426,
                                  434
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    428,
                                    434
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 40,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 34,
                                      "line": 22
                                    }
                                  }
                                }
                              },
                              "range": [
                                423,
                                434
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 22
                                },
                                "start": {
                                  "column": 29,
                                  "line": 22
                                }
                              }
                            }
                          ],
                          "range": [
                            421,
                            436
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 22
                            },
                            "start": {
                              "column": 27,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "range": [
                        417,
                        436
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 22
                        },
                        "start": {
                          "column": 23,
                          "line": 22
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 22
                    },
                    "start": {
                      "column": 22,
                      "line": 22
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MixD",
                  "optional": false,
                  "range": [
                    412,
                    416
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 22
                    },
                    "start": {
                      "column": 18,
                      "line": 22
                    }
                  }
                },
                "range": [
                  412,
                  437
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 22
                  },
                  "start": {
                    "column": 18,
                    "line": 22
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        442,
                        445
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 22
                        },
                        "start": {
                          "column": 48,
                          "line": 22
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
                          "column": 59,
                          "line": 22
                        },
                        "start": {
                          "column": 51,
                          "line": 22
                        }
                      },
                      "range": [
                        445,
                        453
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          447,
                          453
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 22
                          },
                          "start": {
                            "column": 53,
                            "line": 22
                          }
                        }
                      }
                    },
                    "range": [
                      442,
                      453
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 22
                      },
                      "start": {
                        "column": 48,
                        "line": 22
                      }
                    }
                  }
                ],
                "range": [
                  440,
                  455
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 22
                  },
                  "start": {
                    "column": 46,
                    "line": 22
                  }
                }
              }
            ],
            "range": [
              412,
              455
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 22
              },
              "start": {
                "column": 18,
                "line": 22
              }
            }
          }
        ],
        "range": [
          409,
          457
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 22
          },
          "start": {
            "column": 15,
            "line": 22
          }
        }
      },
      "range": [
        394,
        458
      ],
      "loc": {
        "end": {
          "column": 64,
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
        "name": "E",
        "optional": false,
        "range": [
          465,
          466
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 24
          },
          "start": {
            "column": 5,
            "line": 24
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              469,
              472
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 24
              },
              "start": {
                "column": 9,
                "line": 24
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              478,
              480
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 24
              },
              "start": {
                "column": 18,
                "line": 24
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    472,
                    473
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 24
                    },
                    "start": {
                      "column": 12,
                      "line": 24
                    }
                  }
                },
                "range": [
                  472,
                  473
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 24
                  },
                  "start": {
                    "column": 12,
                    "line": 24
                  }
                }
              },
              {
                "type": "TSTypeLiteral",
                "members": [],
                "range": [
                  476,
                  478
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 24
                  },
                  "start": {
                    "column": 16,
                    "line": 24
                  }
                }
              }
            ],
            "range": [
              472,
              478
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 24
              },
              "start": {
                "column": 12,
                "line": 24
              }
            }
          }
        ],
        "range": [
          469,
          480
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 24
          },
          "start": {
            "column": 9,
            "line": 24
          }
        }
      },
      "range": [
        460,
        481
      ],
      "loc": {
        "end": {
          "column": 21,
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
        "name": "MixE",
        "optional": false,
        "range": [
          487,
          491
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 25
          },
          "start": {
            "column": 5,
            "line": 25
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
              "name": "E",
              "optional": false,
              "range": [
                494,
                495
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 25
                },
                "start": {
                  "column": 12,
                  "line": 25
                }
              }
            },
            "range": [
              494,
              495
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 25
              },
              "start": {
                "column": 12,
                "line": 25
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              498,
              500
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 25
              },
              "start": {
                "column": 16,
                "line": 25
              }
            }
          }
        ],
        "range": [
          494,
          500
        ],
        "loc": {
          "end": {
            "column": 18,
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
        500
      ],
      "loc": {
        "end": {
          "column": 18,
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
        "name": "OriginE",
        "optional": false,
        "range": [
          506,
          513
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 26
          },
          "start": {
            "column": 5,
            "line": 26
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              516,
              519
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 26
              },
              "start": {
                "column": 15,
                "line": 26
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              523,
              525
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 26
              },
              "start": {
                "column": 22,
                "line": 26
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixE",
              "optional": false,
              "range": [
                519,
                523
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 26
                },
                "start": {
                  "column": 18,
                  "line": 26
                }
              }
            },
            "range": [
              519,
              523
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 26
              },
              "start": {
                "column": 18,
                "line": 26
              }
            }
          }
        ],
        "range": [
          516,
          525
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 26
          },
          "start": {
            "column": 15,
            "line": 26
          }
        }
      },
      "range": [
        501,
        525
      ],
      "loc": {
        "end": {
          "column": 24,
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
        "name": "OriginF",
        "optional": false,
        "range": [
          532,
          539
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 28
          },
          "start": {
            "column": 5,
            "line": 28
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              542,
              545
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 28
              },
              "start": {
                "column": 15,
                "line": 28
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "foo",
              "raw": "foo"
            },
            "range": [
              546,
              552
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 28
              },
              "start": {
                "column": 19,
                "line": 28
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              553,
              555
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 28
              },
              "start": {
                "column": 26,
                "line": 28
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                545,
                546
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 28
                },
                "start": {
                  "column": 18,
                  "line": 28
                }
              }
            },
            "range": [
              545,
              546
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 28
              },
              "start": {
                "column": 18,
                "line": 28
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                552,
                553
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
            },
            "range": [
              552,
              553
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
        "range": [
          542,
          555
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 28
          },
          "start": {
            "column": 15,
            "line": 28
          }
        }
      },
      "range": [
        527,
        556
      ],
      "loc": {
        "end": {
          "column": 29,
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
      "column": 29,
      "line": 28
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
