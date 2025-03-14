__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    307,
    721
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
            "name": "regexes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 6
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              },
              "range": [
                320,
                330
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "range": [
                      322,
                      328
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 6
                      },
                      "start": {
                        "column": 15,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    322,
                    328
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 6
                    },
                    "start": {
                      "column": 15,
                      "line": 6
                    }
                  }
                },
                "range": [
                  322,
                  330
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 6
                  },
                  "start": {
                    "column": 15,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              313,
              330
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "/[𝘈-𝘡][𝘡-𝘈]/",
                "regex": {
                  "flags": "",
                  "pattern": "[𝘈-𝘡][𝘡-𝘈]"
                },
                "value": null,
                "range": [
                  336,
                  352
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 7
                  },
                  "start": {
                    "column": 1,
                    "line": 7
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/[𝘈-𝘡][𝘡-𝘈]/u",
                "regex": {
                  "flags": "u",
                  "pattern": "[𝘈-𝘡][𝘡-𝘈]"
                },
                "value": null,
                "range": [
                  355,
                  372
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 8
                  },
                  "start": {
                    "column": 1,
                    "line": 8
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/[𝘈-𝘡][𝘡-𝘈]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[𝘈-𝘡][𝘡-𝘈]"
                },
                "value": null,
                "range": [
                  375,
                  392
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 9
                  },
                  "start": {
                    "column": 1,
                    "line": 9
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]/",
                "regex": {
                  "flags": "",
                  "pattern": "[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]"
                },
                "value": null,
                "range": [
                  396,
                  440
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 11
                  },
                  "start": {
                    "column": 1,
                    "line": 11
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]/u",
                "regex": {
                  "flags": "u",
                  "pattern": "[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]"
                },
                "value": null,
                "range": [
                  443,
                  488
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 12
                  },
                  "start": {
                    "column": 1,
                    "line": 12
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]"
                },
                "value": null,
                "range": [
                  491,
                  536
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 13
                  },
                  "start": {
                    "column": 1,
                    "line": 13
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]/",
                "regex": {
                  "flags": "",
                  "pattern": "[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]"
                },
                "value": null,
                "range": [
                  540,
                  596
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 15
                  },
                  "start": {
                    "column": 1,
                    "line": 15
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]/u",
                "regex": {
                  "flags": "u",
                  "pattern": "[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]"
                },
                "value": null,
                "range": [
                  599,
                  656
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 16
                  },
                  "start": {
                    "column": 1,
                    "line": 16
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]"
                },
                "value": null,
                "range": [
                  659,
                  716
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 17
                  },
                  "start": {
                    "column": 1,
                    "line": 17
                  }
                }
              }
            ],
            "range": [
              333,
              719
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 18
              },
              "start": {
                "column": 26,
                "line": 6
              }
            }
          },
          "range": [
            313,
            719
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 18
            },
            "start": {
              "column": 6,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        307,
        720
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 6
    }
  },
  "hashbang": null
}
```
