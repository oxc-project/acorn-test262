__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 182,
  "end": 473,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 182,
      "end": 221,
      "body": {
        "type": "TSInterfaceBody",
        "start": 200,
        "end": 221,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 206,
            "end": 219,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 206,
              "end": 209,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 210,
                "end": 214,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 211,
                  "end": 214,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 213,
                    "end": 214,
                    "typeName": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 214,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 218,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 217,
                "end": 218,
                "typeName": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 218,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 196,
        "decorators": [],
        "name": "IFoo",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 196,
        "end": 199,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 197,
            "end": 198,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
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
      "type": "ClassDeclaration",
      "start": 222,
      "end": 320,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 252,
        "end": 320,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 267,
            "end": 318,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 267,
              "end": 270,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 270,
              "end": 318,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 290,
                "end": 318,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 300,
                    "end": 312,
                    "argument": {
                      "type": "Literal",
                      "start": 307,
                      "end": 311,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 271,
                  "end": 280,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 272,
                    "end": 280,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 274,
                      "end": 280
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 281,
                "end": 289,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 283,
                  "end": 289
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
        "start": 228,
        "end": 229,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 244,
          "end": 251,
          "expression": {
            "type": "Identifier",
            "start": 244,
            "end": 248,
            "decorators": [],
            "name": "IFoo",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 248,
            "end": 251,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 249,
                "end": 250,
                "typeName": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 250,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 229,
        "end": 232,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 230,
            "end": 231,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 230,
              "end": 231,
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
      "start": 322,
      "end": 362,
      "body": {
        "type": "TSInterfaceBody",
        "start": 341,
        "end": 362,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 347,
            "end": 360,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 347,
              "end": 350,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 351,
                "end": 355,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 352,
                  "end": 355,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 354,
                    "end": 355,
                    "typeName": {
                      "type": "Identifier",
                      "start": 354,
                      "end": 355,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 356,
              "end": 359,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 358,
                "end": 359,
                "typeName": {
                  "type": "Identifier",
                  "start": 358,
                  "end": 359,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 332,
        "end": 337,
        "decorators": [],
        "name": "IFoo2",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 337,
        "end": 340,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 338,
            "end": 339,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 338,
              "end": 339,
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
      "type": "ClassDeclaration",
      "start": 363,
      "end": 473,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 395,
        "end": 473,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 410,
            "end": 471,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 410,
              "end": 413,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 413,
              "end": 471,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 443,
                "end": 471,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 453,
                    "end": 465,
                    "argument": {
                      "type": "Literal",
                      "start": 460,
                      "end": 464,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 423,
                  "end": 433,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 424,
                    "end": 433,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 426,
                      "end": 433,
                      "typeName": {
                        "type": "Identifier",
                        "start": 426,
                        "end": 433,
                        "decorators": [],
                        "name": "Tstring",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 434,
                "end": 442,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 436,
                  "end": 442
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 413,
                "end": 422,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 414,
                    "end": 421,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 414,
                      "end": 421,
                      "decorators": [],
                      "name": "Tstring",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 369,
        "end": 371,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 386,
          "end": 394,
          "expression": {
            "type": "Identifier",
            "start": 386,
            "end": 391,
            "decorators": [],
            "name": "IFoo2",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 391,
            "end": 394,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 392,
                "end": 393,
                "typeName": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 393,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 371,
        "end": 374,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 372,
            "end": 373,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 372,
              "end": 373,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
