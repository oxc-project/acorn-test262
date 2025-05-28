__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 4,
  "end": 651,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 4,
      "end": 258,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 21,
        "decorators": [],
        "name": "ko",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 258,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 32,
            "end": 187,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 39,
              "end": 187,
              "id": {
                "type": "Identifier",
                "start": 49,
                "end": 59,
                "decorators": [],
                "name": "Observable",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 59,
                "end": 62,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 60,
                    "end": 61,
                    "name": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 61,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 63,
                "end": 187,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 77,
                    "end": 83,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 79,
                      "end": 82,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 81,
                        "end": 82,
                        "typeName": {
                          "type": "Identifier",
                          "start": 81,
                          "end": 82,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 96,
                    "end": 112,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 97,
                        "end": 105,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 102,
                          "end": 105,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 104,
                            "end": 105,
                            "typeName": {
                              "type": "Identifier",
                              "start": 104,
                              "end": 105,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 106,
                      "end": 111,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 108,
                        "end": 111
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 125,
                    "end": 135,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 126,
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 126,
                      "end": 134,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 128,
                        "end": 134
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 148,
                    "end": 159,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 149,
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 149,
                      "end": 158,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 151,
                        "end": 158
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 172,
                    "end": 177,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 173,
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 173,
                      "end": 176,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 175,
                        "end": 176,
                        "typeName": {
                          "type": "Identifier",
                          "start": 175,
                          "end": 176,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 196,
            "end": 251,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 203,
              "end": 251,
              "id": {
                "type": "Identifier",
                "start": 212,
                "end": 222,
                "decorators": [],
                "name": "observable",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 222,
                "end": 225,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 223,
                    "end": 224,
                    "name": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 224,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 226,
                  "end": 234,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 231,
                    "end": 234,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 233,
                      "end": 234,
                      "typeName": {
                        "type": "Identifier",
                        "start": 233,
                        "end": 234,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 235,
                "end": 250,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 237,
                  "end": 250,
                  "typeName": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 247,
                    "decorators": [],
                    "name": "Observable",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 247,
                    "end": 250,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 248,
                        "end": 249,
                        "typeName": {
                          "type": "Identifier",
                          "start": 248,
                          "end": 249,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "body": null,
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 348,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 347,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 269,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 272,
            "end": 347,
            "properties": [
              {
                "type": "Property",
                "start": 282,
                "end": 308,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 286,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "CallExpression",
                  "start": 288,
                  "end": 308,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 288,
                    "end": 301,
                    "object": {
                      "type": "Identifier",
                      "start": 288,
                      "end": 290,
                      "decorators": [],
                      "name": "ko",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 291,
                      "end": 301,
                      "decorators": [],
                      "name": "observable",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 302,
                      "end": 307,
                      "value": "Bob",
                      "raw": "\"Bob\""
                    }
                  ],
                  "optional": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 318,
                "end": 340,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 321,
                  "decorators": [],
                  "name": "age",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "CallExpression",
                  "start": 323,
                  "end": 340,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 323,
                    "end": 336,
                    "object": {
                      "type": "Identifier",
                      "start": 323,
                      "end": 325,
                      "decorators": [],
                      "name": "ko",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 326,
                      "end": 336,
                      "decorators": [],
                      "name": "observable",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 337,
                      "end": 339,
                      "value": 37,
                      "raw": "37"
                    }
                  ],
                  "optional": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 354,
      "end": 380,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 379,
          "id": {
            "type": "Identifier",
            "start": 358,
            "end": 361,
            "decorators": [],
            "name": "x_v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 364,
            "end": 379,
            "object": {
              "type": "CallExpression",
              "start": 364,
              "end": 372,
              "callee": {
                "type": "MemberExpression",
                "start": 364,
                "end": 370,
                "object": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 365,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 370,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 373,
              "end": 379,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 408,
      "end": 428,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 412,
          "end": 427,
          "id": {
            "type": "Identifier",
            "start": 412,
            "end": 417,
            "decorators": [],
            "name": "age_v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 420,
            "end": 427,
            "callee": {
              "type": "MemberExpression",
              "start": 420,
              "end": 425,
              "object": {
                "type": "Identifier",
                "start": 420,
                "end": 421,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 422,
                "end": 425,
                "decorators": [],
                "name": "age",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 456,
      "end": 486,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 460,
          "end": 485,
          "id": {
            "type": "Identifier",
            "start": 460,
            "end": 466,
            "decorators": [],
            "name": "name_v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 469,
            "end": 485,
            "callee": {
              "type": "MemberExpression",
              "start": 469,
              "end": 475,
              "object": {
                "type": "Identifier",
                "start": 469,
                "end": 470,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 471,
                "end": 475,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 476,
                "end": 484,
                "value": "Robert",
                "raw": "\"Robert\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 511,
      "end": 531,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 515,
          "end": 530,
          "id": {
            "type": "Identifier",
            "start": 515,
            "end": 519,
            "decorators": [],
            "name": "zz_v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 522,
            "end": 530,
            "object": {
              "type": "MemberExpression",
              "start": 522,
              "end": 528,
              "object": {
                "type": "Identifier",
                "start": 522,
                "end": 523,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 524,
                "end": 528,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 529,
              "end": 530,
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 559,
      "end": 579,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 563,
          "end": 578,
          "id": {
            "type": "Identifier",
            "start": 563,
            "end": 567,
            "decorators": [],
            "name": "yy_v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 570,
            "end": 578,
            "object": {
              "type": "MemberExpression",
              "start": 570,
              "end": 576,
              "object": {
                "type": "Identifier",
                "start": 570,
                "end": 571,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 572,
                "end": 576,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 577,
              "end": 578,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 608,
      "end": 628,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 612,
          "end": 627,
          "id": {
            "type": "Identifier",
            "start": 612,
            "end": 616,
            "decorators": [],
            "name": "rr_v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 619,
            "end": 627,
            "object": {
              "type": "MemberExpression",
              "start": 619,
              "end": 625,
              "object": {
                "type": "Identifier",
                "start": 619,
                "end": 620,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 621,
                "end": 625,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 626,
              "end": 627,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
