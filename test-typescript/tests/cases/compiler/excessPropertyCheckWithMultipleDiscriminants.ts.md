excessPropertyCheckWithMultipleDiscriminants.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 2823,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 57,
      "body": {
        "type": "TSInterfaceBody",
        "start": 40,
        "end": 57,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 46,
            "end": 55,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 51,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 54,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 53,
                "end": 54,
                "typeName": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 54,
                  "decorators": [],
                  "name": "T",
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
        "start": 32,
        "end": 36,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 36,
        "end": 39,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 37,
            "end": 38,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 59,
      "end": 143,
      "body": {
        "type": "TSInterfaceBody",
        "start": 94,
        "end": 143,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 100,
            "end": 116,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 104,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 115,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 106,
                "end": 115,
                "literal": {
                  "type": "Literal",
                  "start": 106,
                  "end": 115,
                  "raw": "\"integer\"",
                  "value": "integer"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 121,
            "end": 141,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 131,
              "decorators": [],
              "name": "multipleOf",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 140,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 134,
                "end": 140
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 81,
          "end": 93,
          "expression": {
            "type": "Identifier",
            "start": 81,
            "end": 85,
            "decorators": [],
            "name": "Base",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 85,
            "end": 93,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 86,
                "end": 92
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 72,
        "decorators": [],
        "name": "Int",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 145,
      "end": 205,
      "body": {
        "type": "TSInterfaceBody",
        "start": 182,
        "end": 205,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 188,
            "end": 203,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 188,
              "end": 192,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 192,
              "end": 202,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 194,
                "end": 202,
                "literal": {
                  "type": "Literal",
                  "start": 194,
                  "end": 202,
                  "raw": "\"number\"",
                  "value": "number"
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
          "start": 169,
          "end": 181,
          "expression": {
            "type": "Identifier",
            "start": 169,
            "end": 173,
            "decorators": [],
            "name": "Base",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 173,
            "end": 181,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 174,
                "end": 180
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 160,
        "decorators": [],
        "name": "Float",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 207,
      "end": 286,
      "body": {
        "type": "TSInterfaceBody",
        "start": 242,
        "end": 286,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 248,
            "end": 263,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 248,
              "end": 252,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 252,
              "end": 262,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 254,
                "end": 262,
                "literal": {
                  "type": "Literal",
                  "start": 254,
                  "end": 262,
                  "raw": "\"string\"",
                  "value": "string"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 268,
            "end": 284,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 268,
              "end": 274,
              "decorators": [],
              "name": "format",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 275,
              "end": 283,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 277,
                "end": 283
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 229,
          "end": 241,
          "expression": {
            "type": "Identifier",
            "start": 229,
            "end": 233,
            "decorators": [],
            "name": "Base",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 233,
            "end": 241,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 234,
                "end": 240
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 220,
        "decorators": [],
        "name": "Str",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 288,
      "end": 349,
      "body": {
        "type": "TSInterfaceBody",
        "start": 325,
        "end": 349,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 331,
            "end": 347,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 331,
              "end": 335,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 335,
              "end": 346,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 337,
                "end": 346,
                "literal": {
                  "type": "Literal",
                  "start": 337,
                  "end": 346,
                  "raw": "\"boolean\"",
                  "value": "boolean"
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
          "start": 311,
          "end": 324,
          "expression": {
            "type": "Identifier",
            "start": 311,
            "end": 315,
            "decorators": [],
            "name": "Base",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 315,
            "end": 324,
            "params": [
              {
                "type": "TSBooleanKeyword",
                "start": 316,
                "end": 323
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 298,
        "end": 302,
        "decorators": [],
        "name": "Bool",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 351,
      "end": 393,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 356,
        "end": 365,
        "decorators": [],
        "name": "Primitive",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 368,
        "end": 392,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 368,
            "end": 371,
            "typeName": {
              "type": "Identifier",
              "start": 368,
              "end": 371,
              "decorators": [],
              "name": "Int",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 374,
            "end": 379,
            "typeName": {
              "type": "Identifier",
              "start": 374,
              "end": 379,
              "decorators": [],
              "name": "Float",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 382,
            "end": 385,
            "typeName": {
              "type": "Identifier",
              "start": 382,
              "end": 385,
              "decorators": [],
              "name": "Str",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 388,
            "end": 392,
            "typeName": {
              "type": "Identifier",
              "start": 388,
              "end": 392,
              "decorators": [],
              "name": "Bool",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 395,
      "end": 514,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 401,
          "end": 514,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 401,
            "end": 415,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 404,
              "end": 415,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 406,
                "end": 415,
                "typeName": {
                  "type": "Identifier",
                  "start": 406,
                  "end": 415,
                  "decorators": [],
                  "name": "Primitive",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 418,
            "end": 514,
            "properties": [
              {
                "type": "Property",
                "start": 424,
                "end": 438,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 428,
                  "decorators": [],
                  "name": "type",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 430,
                  "end": 438,
                  "raw": "\"number\"",
                  "value": "number"
                }
              },
              {
                "type": "Property",
                "start": 444,
                "end": 453,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 444,
                  "end": 449,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 451,
                  "end": 453,
                  "raw": "10",
                  "value": 10
                }
              },
              {
                "type": "Property",
                "start": 459,
                "end": 472,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 459,
                  "end": 469,
                  "decorators": [],
                  "name": "multipleOf",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 471,
                  "end": 472,
                  "raw": "5",
                  "value": 5
                }
              },
              {
                "type": "Property",
                "start": 497,
                "end": 512,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 497,
                  "end": 503,
                  "decorators": [],
                  "name": "format",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 505,
                  "end": 512,
                  "raw": "\"what?\"",
                  "value": "what?"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 517,
      "end": 654,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 522,
        "end": 543,
        "decorators": [],
        "name": "DisjointDiscriminants",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 546,
        "end": 653,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 546,
            "end": 582,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 548,
                "end": 559,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 548,
                  "end": 550,
                  "decorators": [],
                  "name": "p1",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 550,
                  "end": 558,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 552,
                    "end": 558,
                    "literal": {
                      "type": "Literal",
                      "start": 552,
                      "end": 558,
                      "raw": "'left'",
                      "value": "left"
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 560,
                "end": 569,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 560,
                  "end": 562,
                  "decorators": [],
                  "name": "p2",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 562,
                  "end": 568,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 564,
                    "end": 568,
                    "literal": {
                      "type": "Literal",
                      "start": 564,
                      "end": 568,
                      "raw": "true",
                      "value": true
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 570,
                "end": 580,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 570,
                  "end": 572,
                  "decorators": [],
                  "name": "p3",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 572,
                  "end": 580,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 574,
                    "end": 580
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 585,
            "end": 623,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 587,
                "end": 599,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 587,
                  "end": 589,
                  "decorators": [],
                  "name": "p1",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 589,
                  "end": 598,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 591,
                    "end": 598,
                    "literal": {
                      "type": "Literal",
                      "start": 591,
                      "end": 598,
                      "raw": "'right'",
                      "value": "right"
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 600,
                "end": 610,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 600,
                  "end": 602,
                  "decorators": [],
                  "name": "p2",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 602,
                  "end": 609,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 604,
                    "end": 609,
                    "literal": {
                      "type": "Literal",
                      "start": 604,
                      "end": 609,
                      "raw": "false",
                      "value": false
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 611,
                "end": 621,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 611,
                  "end": 613,
                  "decorators": [],
                  "name": "p4",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 613,
                  "end": 621,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 615,
                    "end": 621
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 626,
            "end": 653,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 628,
                "end": 639,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 628,
                  "end": 630,
                  "decorators": [],
                  "name": "p1",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 630,
                  "end": 638,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 632,
                    "end": 638,
                    "literal": {
                      "type": "Literal",
                      "start": 632,
                      "end": 638,
                      "raw": "'left'",
                      "value": "left"
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 640,
                "end": 651,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 640,
                  "end": 642,
                  "decorators": [],
                  "name": "p2",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 642,
                  "end": 651,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 644,
                    "end": 651
                  }
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 732,
      "end": 828,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 738,
          "end": 827,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 738,
            "end": 762,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 739,
              "end": 762,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 741,
                "end": 762,
                "typeName": {
                  "type": "Identifier",
                  "start": 741,
                  "end": 762,
                  "decorators": [],
                  "name": "DisjointDiscriminants",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 765,
            "end": 827,
            "properties": [
              {
                "type": "Property",
                "start": 771,
                "end": 781,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 771,
                  "end": 773,
                  "decorators": [],
                  "name": "p1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 775,
                  "end": 781,
                  "raw": "'left'",
                  "value": "left"
                }
              },
              {
                "type": "Property",
                "start": 787,
                "end": 796,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 787,
                  "end": 789,
                  "decorators": [],
                  "name": "p2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 791,
                  "end": 796,
                  "raw": "false",
                  "value": false
                }
              },
              {
                "type": "Property",
                "start": 802,
                "end": 808,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 802,
                  "end": 804,
                  "decorators": [],
                  "name": "p3",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 806,
                  "end": 808,
                  "raw": "42",
                  "value": 42
                }
              },
              {
                "type": "Property",
                "start": 814,
                "end": 825,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 814,
                  "end": 816,
                  "decorators": [],
                  "name": "p4",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 818,
                  "end": 825,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 894,
      "end": 989,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 900,
          "end": 988,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 900,
            "end": 924,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 901,
              "end": 924,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 903,
                "end": 924,
                "typeName": {
                  "type": "Identifier",
                  "start": 903,
                  "end": 924,
                  "decorators": [],
                  "name": "DisjointDiscriminants",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 927,
            "end": 988,
            "properties": [
              {
                "type": "Property",
                "start": 933,
                "end": 943,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 933,
                  "end": 935,
                  "decorators": [],
                  "name": "p1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 937,
                  "end": 943,
                  "raw": "'left'",
                  "value": "left"
                }
              },
              {
                "type": "Property",
                "start": 949,
                "end": 957,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 949,
                  "end": 951,
                  "decorators": [],
                  "name": "p2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 953,
                  "end": 957,
                  "raw": "true",
                  "value": true
                }
              },
              {
                "type": "Property",
                "start": 963,
                "end": 969,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 963,
                  "end": 965,
                  "decorators": [],
                  "name": "p3",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 967,
                  "end": 969,
                  "raw": "42",
                  "value": 42
                }
              },
              {
                "type": "Property",
                "start": 975,
                "end": 986,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 975,
                  "end": 977,
                  "decorators": [],
                  "name": "p4",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 979,
                  "end": 986,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1064,
      "end": 1161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1070,
          "end": 1160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1070,
            "end": 1094,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1071,
              "end": 1094,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1073,
                "end": 1094,
                "typeName": {
                  "type": "Identifier",
                  "start": 1073,
                  "end": 1094,
                  "decorators": [],
                  "name": "DisjointDiscriminants",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1097,
            "end": 1160,
            "properties": [
              {
                "type": "Property",
                "start": 1103,
                "end": 1114,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1103,
                  "end": 1105,
                  "decorators": [],
                  "name": "p1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1107,
                  "end": 1114,
                  "raw": "'right'",
                  "value": "right"
                }
              },
              {
                "type": "Property",
                "start": 1120,
                "end": 1129,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1120,
                  "end": 1122,
                  "decorators": [],
                  "name": "p2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1124,
                  "end": 1129,
                  "raw": "false",
                  "value": false
                }
              },
              {
                "type": "Property",
                "start": 1135,
                "end": 1141,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1135,
                  "end": 1137,
                  "decorators": [],
                  "name": "p3",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1139,
                  "end": 1141,
                  "raw": "42",
                  "value": 42
                }
              },
              {
                "type": "Property",
                "start": 1147,
                "end": 1158,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1147,
                  "end": 1149,
                  "decorators": [],
                  "name": "p4",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1151,
                  "end": 1158,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1185,
      "end": 1253,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1202,
        "end": 1253,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1208,
            "end": 1236,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1208,
              "end": 1212,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1212,
              "end": 1235,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1214,
                "end": 1235,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 1214,
                    "end": 1217,
                    "literal": {
                      "type": "Literal",
                      "start": 1214,
                      "end": 1217,
                      "raw": "\"A\"",
                      "value": "A"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 1220,
                    "end": 1223,
                    "literal": {
                      "type": "Literal",
                      "start": 1220,
                      "end": 1223,
                      "raw": "\"B\"",
                      "value": "B"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 1226,
                    "end": 1229,
                    "literal": {
                      "type": "Literal",
                      "start": 1226,
                      "end": 1229,
                      "raw": "\"C\"",
                      "value": "C"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 1232,
                    "end": 1235,
                    "literal": {
                      "type": "Literal",
                      "start": 1232,
                      "end": 1235,
                      "raw": "\"D\"",
                      "value": "D"
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1241,
            "end": 1251,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1241,
              "end": 1242,
              "decorators": [],
              "name": "n",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1242,
              "end": 1250,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1244,
                "end": 1250
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1195,
        "end": 1201,
        "decorators": [],
        "name": "Common",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1254,
      "end": 1300,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1266,
        "end": 1300,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1272,
            "end": 1282,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1272,
              "end": 1276,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1276,
              "end": 1281,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1278,
                "end": 1281,
                "literal": {
                  "type": "Literal",
                  "start": 1278,
                  "end": 1281,
                  "raw": "\"A\"",
                  "value": "A"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1287,
            "end": 1298,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1287,
              "end": 1288,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1289,
              "end": 1297,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1291,
                "end": 1297
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1264,
        "end": 1265,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1301,
      "end": 1347,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1313,
        "end": 1347,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1319,
            "end": 1329,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1319,
              "end": 1323,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1323,
              "end": 1328,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1325,
                "end": 1328,
                "literal": {
                  "type": "Literal",
                  "start": 1325,
                  "end": 1328,
                  "raw": "\"B\"",
                  "value": "B"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1334,
            "end": 1345,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1334,
              "end": 1335,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1336,
              "end": 1344,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1338,
                "end": 1344
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1311,
        "end": 1312,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1349,
      "end": 1424,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1354,
        "end": 1384,
        "decorators": [],
        "name": "CommonWithOverlappingOptionals",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1387,
        "end": 1423,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1387,
            "end": 1393,
            "typeName": {
              "type": "Identifier",
              "start": 1387,
              "end": 1393,
              "decorators": [],
              "name": "Common",
              "optional": false
            }
          },
          {
            "type": "TSIntersectionType",
            "start": 1397,
            "end": 1407,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 1397,
                "end": 1403,
                "typeName": {
                  "type": "Identifier",
                  "start": 1397,
                  "end": 1403,
                  "decorators": [],
                  "name": "Common",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 1406,
                "end": 1407,
                "typeName": {
                  "type": "Identifier",
                  "start": 1406,
                  "end": 1407,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "TSIntersectionType",
            "start": 1412,
            "end": 1422,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 1412,
                "end": 1418,
                "typeName": {
                  "type": "Identifier",
                  "start": 1412,
                  "end": 1418,
                  "decorators": [],
                  "name": "Common",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 1421,
                "end": 1422,
                "typeName": {
                  "type": "Identifier",
                  "start": 1421,
                  "end": 1422,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1490,
      "end": 1600,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1496,
          "end": 1600,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1496,
            "end": 1530,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1498,
              "end": 1530,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1500,
                "end": 1530,
                "typeName": {
                  "type": "Identifier",
                  "start": 1500,
                  "end": 1530,
                  "decorators": [],
                  "name": "CommonWithOverlappingOptionals",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1533,
            "end": 1600,
            "properties": [
              {
                "type": "Property",
                "start": 1539,
                "end": 1548,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1539,
                  "end": 1543,
                  "decorators": [],
                  "name": "type",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1545,
                  "end": 1548,
                  "raw": "\"A\"",
                  "value": "A"
                }
              },
              {
                "type": "Property",
                "start": 1554,
                "end": 1558,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1554,
                  "end": 1555,
                  "decorators": [],
                  "name": "n",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1557,
                  "end": 1558,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 1564,
                "end": 1568,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1564,
                  "end": 1565,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1567,
                  "end": 1568,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 1574,
                "end": 1578,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1574,
                  "end": 1575,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1577,
                  "end": 1578,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1602,
      "end": 1663,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1607,
        "end": 1645,
        "decorators": [],
        "name": "CommonWithDisjointOverlappingOptionals",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1648,
        "end": 1662,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1648,
            "end": 1654,
            "typeName": {
              "type": "Identifier",
              "start": 1648,
              "end": 1654,
              "decorators": [],
              "name": "Common",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 1657,
            "end": 1658,
            "typeName": {
              "type": "Identifier",
              "start": 1657,
              "end": 1658,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 1661,
            "end": 1662,
            "typeName": {
              "type": "Identifier",
              "start": 1661,
              "end": 1662,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1760,
      "end": 1878,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1766,
          "end": 1878,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1766,
            "end": 1808,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1768,
              "end": 1808,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1770,
                "end": 1808,
                "typeName": {
                  "type": "Identifier",
                  "start": 1770,
                  "end": 1808,
                  "decorators": [],
                  "name": "CommonWithDisjointOverlappingOptionals",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1811,
            "end": 1878,
            "properties": [
              {
                "type": "Property",
                "start": 1817,
                "end": 1826,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1817,
                  "end": 1821,
                  "decorators": [],
                  "name": "type",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1823,
                  "end": 1826,
                  "raw": "\"A\"",
                  "value": "A"
                }
              },
              {
                "type": "Property",
                "start": 1832,
                "end": 1836,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1832,
                  "end": 1833,
                  "decorators": [],
                  "name": "n",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1835,
                  "end": 1836,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 1842,
                "end": 1846,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1842,
                  "end": 1843,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1845,
                  "end": 1846,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 1852,
                "end": 1856,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1852,
                  "end": 1853,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1855,
                  "end": 1856,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1970,
      "end": 2104,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1977,
        "end": 2104,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1982,
          "end": 1995,
          "decorators": [],
          "name": "BaseAttribute",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 2001,
          "end": 2103,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 2007,
              "end": 2033,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2007,
                "end": 2011,
                "decorators": [],
                "name": "type",
                "optional": false
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2012,
                "end": 2032,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 2014,
                  "end": 2032,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2014,
                      "end": 2020
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 2023,
                      "end": 2032
                    }
                  ]
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 2038,
              "end": 2069,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2038,
                "end": 2046,
                "decorators": [],
                "name": "required",
                "optional": false
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2047,
                "end": 2068,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 2049,
                  "end": 2068,
                  "types": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 2049,
                      "end": 2056
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 2059,
                      "end": 2068
                    }
                  ]
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 2074,
              "end": 2101,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2074,
                "end": 2084,
                "decorators": [],
                "name": "defaultsTo",
                "optional": false
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2085,
                "end": 2100,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 2087,
                  "end": 2100,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 2087,
                      "end": 2088,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2087,
                        "end": 2088,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 2091,
                      "end": 2100
                    }
                  ]
                }
              }
            }
          ]
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1995,
          "end": 1998,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1996,
              "end": 1997,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1996,
                "end": 1997,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2106,
      "end": 2210,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2113,
        "end": 2210,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 2118,
          "end": 2127,
          "decorators": [],
          "name": "Attribute",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 2134,
          "end": 2210,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 2136,
              "end": 2142
            },
            {
              "type": "TSTypeReference",
              "start": 2149,
              "end": 2164,
              "typeName": {
                "type": "Identifier",
                "start": 2149,
                "end": 2164,
                "decorators": [],
                "name": "StringAttribute",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 2171,
              "end": 2186,
              "typeName": {
                "type": "Identifier",
                "start": 2171,
                "end": 2186,
                "decorators": [],
                "name": "NumberAttribute",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 2193,
              "end": 2210,
              "typeName": {
                "type": "Identifier",
                "start": 2193,
                "end": 2210,
                "decorators": [],
                "name": "OneToOneAttribute",
                "optional": false
              }
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2212,
      "end": 2293,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2219,
        "end": 2293,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 2224,
          "end": 2234,
          "decorators": [],
          "name": "Attribute2",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 2241,
          "end": 2293,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 2243,
              "end": 2249
            },
            {
              "type": "TSTypeReference",
              "start": 2256,
              "end": 2271,
              "typeName": {
                "type": "Identifier",
                "start": 2256,
                "end": 2271,
                "decorators": [],
                "name": "StringAttribute",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 2278,
              "end": 2293,
              "typeName": {
                "type": "Identifier",
                "start": 2278,
                "end": 2293,
                "decorators": [],
                "name": "NumberAttribute",
                "optional": false
              }
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2295,
      "end": 2373,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2302,
        "end": 2373,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 2307,
          "end": 2322,
          "decorators": [],
          "name": "StringAttribute",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 2325,
          "end": 2372,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 2325,
              "end": 2346,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2338,
                "end": 2346,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2339,
                    "end": 2345
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2325,
                "end": 2338,
                "decorators": [],
                "name": "BaseAttribute",
                "optional": false
              }
            },
            {
              "type": "TSTypeLiteral",
              "start": 2349,
              "end": 2372,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2355,
                  "end": 2370,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2355,
                    "end": 2359,
                    "decorators": [],
                    "name": "type",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2359,
                    "end": 2369,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 2361,
                      "end": 2369,
                      "literal": {
                        "type": "Literal",
                        "start": 2361,
                        "end": 2369,
                        "raw": "'string'",
                        "value": "string"
                      }
                    }
                  }
                }
              ]
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2375,
      "end": 2494,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2382,
        "end": 2494,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 2387,
          "end": 2402,
          "decorators": [],
          "name": "NumberAttribute",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 2405,
          "end": 2493,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 2405,
              "end": 2426,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2418,
                "end": 2426,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2419,
                    "end": 2425
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2405,
                "end": 2418,
                "decorators": [],
                "name": "BaseAttribute",
                "optional": false
              }
            },
            {
              "type": "TSTypeLiteral",
              "start": 2429,
              "end": 2493,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2435,
                  "end": 2450,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2435,
                    "end": 2439,
                    "decorators": [],
                    "name": "type",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2439,
                    "end": 2449,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 2441,
                      "end": 2449,
                      "literal": {
                        "type": "Literal",
                        "start": 2441,
                        "end": 2449,
                        "raw": "'number'",
                        "value": "number"
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2455,
                  "end": 2491,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2455,
                    "end": 2468,
                    "decorators": [],
                    "name": "autoIncrement",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2469,
                    "end": 2490,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2471,
                      "end": 2490,
                      "types": [
                        {
                          "type": "TSBooleanKeyword",
                          "start": 2471,
                          "end": 2478
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 2481,
                          "end": 2490
                        }
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2496,
      "end": 2572,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2503,
        "end": 2572,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 2508,
          "end": 2525,
          "decorators": [],
          "name": "OneToOneAttribute",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 2528,
          "end": 2571,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 2528,
              "end": 2546,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2541,
                "end": 2546,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 2542,
                    "end": 2545
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2528,
                "end": 2541,
                "decorators": [],
                "name": "BaseAttribute",
                "optional": false
              }
            },
            {
              "type": "TSTypeLiteral",
              "start": 2549,
              "end": 2571,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2555,
                  "end": 2569,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2555,
                    "end": 2560,
                    "decorators": [],
                    "name": "model",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2560,
                    "end": 2568,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2562,
                      "end": 2568
                    }
                  }
                }
              ]
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 2620,
      "end": 2719,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2626,
          "end": 2718,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2626,
            "end": 2647,
            "decorators": [],
            "name": "attributes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2636,
              "end": 2647,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2638,
                "end": 2647,
                "typeName": {
                  "type": "Identifier",
                  "start": 2638,
                  "end": 2647,
                  "decorators": [],
                  "name": "Attribute",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2650,
            "end": 2718,
            "properties": [
              {
                "type": "Property",
                "start": 2656,
                "end": 2670,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2656,
                  "end": 2660,
                  "decorators": [],
                  "name": "type",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 2662,
                  "end": 2670,
                  "raw": "'string'",
                  "value": "string"
                }
              },
              {
                "type": "Property",
                "start": 2676,
                "end": 2695,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2676,
                  "end": 2689,
                  "decorators": [],
                  "name": "autoIncrement",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 2691,
                  "end": 2695,
                  "raw": "true",
                  "value": true
                }
              },
              {
                "type": "Property",
                "start": 2701,
                "end": 2715,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2701,
                  "end": 2709,
                  "decorators": [],
                  "name": "required",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 2711,
                  "end": 2715,
                  "raw": "true",
                  "value": true
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 2721,
      "end": 2822,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2727,
          "end": 2821,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2727,
            "end": 2750,
            "decorators": [],
            "name": "attributes2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2738,
              "end": 2750,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2740,
                "end": 2750,
                "typeName": {
                  "type": "Identifier",
                  "start": 2740,
                  "end": 2750,
                  "decorators": [],
                  "name": "Attribute2",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2753,
            "end": 2821,
            "properties": [
              {
                "type": "Property",
                "start": 2759,
                "end": 2773,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2759,
                  "end": 2763,
                  "decorators": [],
                  "name": "type",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 2765,
                  "end": 2773,
                  "raw": "'string'",
                  "value": "string"
                }
              },
              {
                "type": "Property",
                "start": 2779,
                "end": 2798,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2779,
                  "end": 2792,
                  "decorators": [],
                  "name": "autoIncrement",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 2794,
                  "end": 2798,
                  "raw": "true",
                  "value": true
                }
              },
              {
                "type": "Property",
                "start": 2804,
                "end": 2818,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2804,
                  "end": 2812,
                  "decorators": [],
                  "name": "required",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 2814,
                  "end": 2818,
                  "raw": "true",
                  "value": true
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
