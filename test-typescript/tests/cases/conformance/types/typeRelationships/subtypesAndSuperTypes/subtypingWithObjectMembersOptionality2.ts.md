subtypingWithObjectMembersOptionality2.ts
```json
{
  "type": "Program",
  "start": 74,
  "end": 515,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 74,
      "end": 105,
      "body": {
        "type": "TSInterfaceBody",
        "start": 89,
        "end": 105,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 91,
            "end": 103,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 94,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 102,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 96,
                "end": 102
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 88,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 106,
      "end": 153,
      "body": {
        "type": "TSInterfaceBody",
        "start": 137,
        "end": 153,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 139,
            "end": 151,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 150,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 144,
                "end": 150
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 132,
          "end": 136,
          "expression": {
            "type": "Identifier",
            "start": 132,
            "end": 136,
            "decorators": [],
            "name": "Base",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 123,
        "decorators": [],
        "name": "Derived",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 155,
      "end": 185,
      "body": {
        "type": "TSInterfaceBody",
        "start": 167,
        "end": 185,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 173,
            "end": 183,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 176,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 182,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 178,
                "end": 182,
                "typeName": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 182,
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 166,
        "decorators": [],
        "name": "T",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 187,
      "end": 239,
      "body": {
        "type": "TSInterfaceBody",
        "start": 209,
        "end": 239,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 215,
            "end": 228,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 218,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 228,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 221,
                "end": 228,
                "typeName": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 228,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 207,
          "end": 208,
          "expression": {
            "type": "Identifier",
            "start": 207,
            "end": 208,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 198,
        "decorators": [],
        "name": "S",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 241,
      "end": 270,
      "body": {
        "type": "TSInterfaceBody",
        "start": 254,
        "end": 270,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 260,
            "end": 268,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 260,
              "end": 261,
              "raw": "1",
              "value": 1
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 261,
              "end": 267,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 263,
                "end": 267,
                "typeName": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 267,
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 253,
        "decorators": [],
        "name": "T2",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 272,
      "end": 325,
      "body": {
        "type": "TSInterfaceBody",
        "start": 296,
        "end": 325,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 302,
            "end": 314,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 302,
              "end": 303,
              "raw": "1",
              "value": 1
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 304,
              "end": 313,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 306,
                "end": 313,
                "typeName": {
                  "type": "Identifier",
                  "start": 306,
                  "end": 313,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 293,
          "end": 295,
          "expression": {
            "type": "Identifier",
            "start": 293,
            "end": 295,
            "decorators": [],
            "name": "T2",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 282,
        "end": 284,
        "decorators": [],
        "name": "S2",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 327,
      "end": 358,
      "body": {
        "type": "TSInterfaceBody",
        "start": 340,
        "end": 358,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 346,
            "end": 356,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 346,
              "end": 349,
              "raw": "'1'",
              "value": "1"
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 349,
              "end": 355,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 351,
                "end": 355,
                "typeName": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 355,
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 337,
        "end": 339,
        "decorators": [],
        "name": "T3",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 360,
      "end": 415,
      "body": {
        "type": "TSInterfaceBody",
        "start": 384,
        "end": 415,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 390,
            "end": 404,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 390,
              "end": 393,
              "raw": "'1'",
              "value": "1"
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 394,
              "end": 403,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 396,
                "end": 403,
                "typeName": {
                  "type": "Identifier",
                  "start": 396,
                  "end": 403,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 381,
          "end": 383,
          "expression": {
            "type": "Identifier",
            "start": 381,
            "end": 383,
            "decorators": [],
            "name": "T3",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 370,
        "end": 372,
        "decorators": [],
        "name": "S3",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 440,
      "end": 461,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 444,
          "end": 461,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 444,
            "end": 461,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 445,
              "end": 461,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 447,
                "end": 461,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 449,
                    "end": 459,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 449,
                      "end": 452,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 452,
                      "end": 458,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 454,
                        "end": 458,
                        "typeName": {
                          "type": "Identifier",
                          "start": 454,
                          "end": 458,
                          "decorators": [],
                          "name": "Base",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 462,
      "end": 487,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 466,
          "end": 487,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 466,
            "end": 487,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 467,
              "end": 487,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 469,
                "end": 487,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 471,
                    "end": 485,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 471,
                      "end": 474,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 475,
                      "end": 484,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 477,
                        "end": 484,
                        "typeName": {
                          "type": "Identifier",
                          "start": 477,
                          "end": 484,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 488,
      "end": 509,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 492,
          "end": 508,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 492,
            "end": 493,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 496,
            "end": 508,
            "alternate": {
              "type": "Identifier",
              "start": 507,
              "end": 508,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "consequent": {
              "type": "Identifier",
              "start": 503,
              "end": 504,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "test": {
              "type": "Literal",
              "start": 496,
              "end": 500,
              "raw": "true",
              "value": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
