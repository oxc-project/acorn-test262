__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    215
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "range": [
          7,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "'react'",
          "value": "react",
          "range": [
            23,
            30
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          }
        },
        "range": [
          15,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "range": [
        0,
        32
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          49,
          81
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                55,
                56
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              },
              "range": [
                56,
                64
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  58,
                  64
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 4
                  },
                  "start": {
                    "column": 7,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              55,
              65
            ],
            "loc": {
              "end": {
                "column": 14,
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
              "name": "b",
              "optional": false,
              "range": [
                70,
                71
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
                71,
                79
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  73,
                  79
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
              70,
              79
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Prop",
        "optional": false,
        "range": [
          44,
          48
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        34,
        81
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          145,
          169
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
              "name": "internalProp",
              "optional": false,
              "range": [
                151,
                163
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
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
                  "column": 19,
                  "line": 9
                },
                "start": {
                  "column": 16,
                  "line": 9
                }
              },
              "range": [
                163,
                166
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    165,
                    166
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 9
                    },
                    "start": {
                      "column": 18,
                      "line": 9
                    }
                  }
                },
                "range": [
                  165,
                  166
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 9
                  },
                  "start": {
                    "column": 18,
                    "line": 9
                  }
                }
              }
            },
            "value": null,
            "range": [
              151,
              167
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 62,
            "line": 8
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComp",
        "optional": false,
        "range": [
          97,
          103
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 8
          },
          "start": {
            "column": 14,
            "line": 8
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "range": [
            122,
            127
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 8
            },
            "start": {
              "column": 39,
              "line": 8
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "range": [
            128,
            137
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 8
            },
            "start": {
              "column": 45,
              "line": 8
            }
          }
        },
        "range": [
          122,
          137
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 8
          },
          "start": {
            "column": 39,
            "line": 8
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          137,
          144
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                138,
                139
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 8
                },
                "start": {
                  "column": 55,
                  "line": 8
                }
              }
            },
            "range": [
              138,
              139
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 8
              },
              "start": {
                "column": 55,
                "line": 8
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              141,
              143
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 8
              },
              "start": {
                "column": 58,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 8
          },
          "start": {
            "column": 54,
            "line": 8
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 8
          },
          "start": {
            "column": 20,
            "line": 8
          }
        },
        "range": [
          103,
          113
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Prop",
                "optional": false,
                "range": [
                  108,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 8
                  },
                  "start": {
                    "column": 25,
                    "line": 8
                  }
                }
              },
              "range": [
                108,
                112
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 8
                },
                "start": {
                  "column": 25,
                  "line": 8
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                104,
                105
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
            },
            "out": false,
            "range": [
              104,
              112
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 8
              },
              "start": {
                "column": 21,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        83,
        169
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 8
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
            "range": [
              175,
              176
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                179,
                189
              ],
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "MyComp",
                "range": [
                  180,
                  186
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 12
                  },
                  "start": {
                    "column": 9,
                    "line": 12
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 18,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            },
            "range": [
              179,
              189
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 12
              },
              "start": {
                "column": 8,
                "line": 12
              }
            }
          },
          "range": [
            175,
            189
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
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        171,
        189
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "x1",
            "optional": false,
            "range": [
              194,
              196
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                199,
                215
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "range": [
                      207,
                      208
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 13
                      },
                      "start": {
                        "column": 17,
                        "line": 13
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"hi\"",
                    "value": "hi",
                    "range": [
                      209,
                      213
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 13
                      },
                      "start": {
                        "column": 19,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    207,
                    213
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 13
                    },
                    "start": {
                      "column": 17,
                      "line": 13
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "MyComp",
                "range": [
                  200,
                  206
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 13
                  },
                  "start": {
                    "column": 10,
                    "line": 13
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 25,
                  "line": 13
                },
                "start": {
                  "column": 9,
                  "line": 13
                }
              }
            },
            "range": [
              199,
              215
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 13
              },
              "start": {
                "column": 9,
                "line": 13
              }
            }
          },
          "range": [
            194,
            215
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        190,
        215
      ],
      "loc": {
        "end": {
          "column": 25,
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
      "column": 25,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
