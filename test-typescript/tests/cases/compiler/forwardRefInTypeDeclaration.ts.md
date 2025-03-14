forwardRefInTypeDeclaration.ts
```json
{
  "type": "Program",
  "start": 35,
  "end": 665,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 59,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 59,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 59,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 50,
                "end": 59,
                "exprName": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 59,
                  "decorators": [],
                  "name": "s1",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 75,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 69,
            "decorators": [],
            "name": "s1",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 72,
            "end": 75,
            "raw": "\"x\"",
            "value": "x"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 123,
      "end": 155,
      "body": {
        "type": "TSInterfaceBody",
        "start": 138,
        "end": 155,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 140,
            "end": 153,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 143,
              "decorators": [],
              "name": "s2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 152,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 146,
                "end": 152
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 137,
        "decorators": [],
        "name": "Foo2",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 171,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 170,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 164,
            "decorators": [],
            "name": "s2",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 167,
            "end": 170,
            "raw": "\"x\"",
            "value": "x"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 200,
      "end": 229,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 209,
        "decorators": [],
        "name": "Foo3",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 212,
        "end": 229,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 214,
            "end": 227,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 217,
              "decorators": [],
              "name": "s3",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 218,
              "end": 226,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 220,
                "end": 226
              }
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 230,
      "end": 245,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 244,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 238,
            "decorators": [],
            "name": "s3",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 241,
            "end": 244,
            "raw": "\"x\"",
            "value": "x"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 271,
      "end": 308,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 285,
          "end": 308,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 285,
            "end": 308,
            "decorators": [],
            "name": "foo4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 289,
              "end": 308,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 291,
                "end": 308,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 293,
                    "end": 306,
                    "computed": true,
                    "key": {
                      "type": "Identifier",
                      "start": 294,
                      "end": 296,
                      "decorators": [],
                      "name": "s4",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 297,
                      "end": 305,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 299,
                        "end": 305
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
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 309,
      "end": 324,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 315,
          "end": 323,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 315,
            "end": 317,
            "decorators": [],
            "name": "s4",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 320,
            "end": 323,
            "raw": "\"x\"",
            "value": "x"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 352,
      "end": 388,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 371,
        "end": 388,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 373,
            "end": 386,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 374,
              "end": 376,
              "decorators": [],
              "name": "s5",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 377,
              "end": 385,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 379,
                "end": 385
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 366,
        "end": 370,
        "decorators": [],
        "name": "Foo5",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 389,
      "end": 404,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 395,
          "end": 403,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 395,
            "end": 397,
            "decorators": [],
            "name": "s5",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 400,
            "end": 403,
            "raw": "\"x\"",
            "value": "x"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 433,
      "end": 522,
      "body": {
        "type": "TSInterfaceBody",
        "start": 448,
        "end": 522,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 450,
            "end": 467,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 451,
              "end": 457,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 451,
                "end": 455,
                "decorators": [],
                "name": "Cls1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 456,
                "end": 457,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 458,
              "end": 466,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 460,
                "end": 466
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 468,
            "end": 485,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 469,
              "end": 475,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 469,
                "end": 473,
                "decorators": [],
                "name": "Cls2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 474,
                "end": 475,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 476,
              "end": 484,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 478,
                "end": 484
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 486,
            "end": 503,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 487,
              "end": 493,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 487,
                "end": 491,
                "decorators": [],
                "name": "obj1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 492,
                "end": 493,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 494,
              "end": 502,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 496,
                "end": 502
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 504,
            "end": 520,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 505,
              "end": 511,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 505,
                "end": 509,
                "decorators": [],
                "name": "obj2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 510,
                "end": 511,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 512,
              "end": 520,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 514,
                "end": 520
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 443,
        "end": 447,
        "decorators": [],
        "name": "Foo6",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 523,
      "end": 560,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 542,
        "end": 560,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 544,
            "end": 558,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 551,
              "end": 552,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 552,
              "end": 557,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 554,
                "end": 557,
                "literal": {
                  "type": "Literal",
                  "start": 554,
                  "end": 557,
                  "raw": "\"a\"",
                  "value": "a"
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 537,
        "end": 541,
        "decorators": [],
        "name": "Cls1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 561,
      "end": 600,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 572,
        "end": 600,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 574,
            "end": 598,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 581,
              "end": 582,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "TSAsExpression",
              "start": 585,
              "end": 597,
              "expression": {
                "type": "Literal",
                "start": 585,
                "end": 588,
                "raw": "\"b\"",
                "value": "b"
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 592,
                "end": 597,
                "typeName": {
                  "type": "Identifier",
                  "start": 592,
                  "end": 597,
                  "decorators": [],
                  "name": "const",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 567,
        "end": 571,
        "decorators": [],
        "name": "Cls2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 601,
      "end": 631,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 615,
          "end": 631,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 615,
            "end": 631,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 619,
              "end": 631,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 621,
                "end": 631,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 623,
                    "end": 629,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 623,
                      "end": 624,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 624,
                      "end": 629,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 626,
                        "end": 629,
                        "literal": {
                          "type": "Literal",
                          "start": 626,
                          "end": 629,
                          "raw": "'c'",
                          "value": "c"
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
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 632,
      "end": 664,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 638,
          "end": 664,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 638,
            "end": 642,
            "decorators": [],
            "name": "obj2",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 645,
            "end": 664,
            "expression": {
              "type": "ObjectExpression",
              "start": 645,
              "end": 655,
              "properties": [
                {
                  "type": "Property",
                  "start": 647,
                  "end": 653,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 647,
                    "end": 648,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 650,
                    "end": 653,
                    "raw": "'d'",
                    "value": "d"
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 659,
              "end": 664,
              "typeName": {
                "type": "Identifier",
                "start": 659,
                "end": 664,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
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
