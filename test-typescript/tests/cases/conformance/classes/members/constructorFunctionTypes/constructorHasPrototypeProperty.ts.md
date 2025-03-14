constructorHasPrototypeProperty.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 477,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 189,
      "body": {
        "type": "TSModuleBlock",
        "start": 18,
        "end": 189,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 24,
            "end": 60,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 32,
              "end": 60,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 42,
                  "end": 54,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 45,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 45,
                    "end": 53,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 47,
                      "end": 53
                    }
                  },
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "ClassDeclaration",
            "start": 66,
            "end": 112,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 84,
              "end": 112,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 94,
                  "end": 106,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 97,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 97,
                    "end": 105,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 99,
                      "end": 105
                    }
                  },
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "D",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 118,
            "end": 138,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 122,
                "end": 137,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "decorators": [],
                  "name": "r",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 126,
                  "end": 137,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 127,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 137,
                    "decorators": [],
                    "name": "prototype",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 143,
            "end": 149,
            "expression": {
              "type": "MemberExpression",
              "start": 143,
              "end": 148,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 143,
                "end": 144,
                "decorators": [],
                "name": "r",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 145,
                "end": 148,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 154,
            "end": 175,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 158,
                "end": 174,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 160,
                  "decorators": [],
                  "name": "r2",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 163,
                  "end": 174,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 164,
                    "decorators": [],
                    "name": "D",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 174,
                    "decorators": [],
                    "name": "prototype",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 180,
            "end": 187,
            "expression": {
              "type": "MemberExpression",
              "start": 180,
              "end": 186,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 180,
                "end": 182,
                "decorators": [],
                "name": "r2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 183,
                "end": 186,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 17,
        "decorators": [],
        "name": "NonGeneric",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 191,
      "end": 477,
      "body": {
        "type": "TSModuleBlock",
        "start": 206,
        "end": 477,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 212,
            "end": 264,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 225,
              "end": 264,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 235,
                  "end": 242,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 238,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 238,
                    "end": 241,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 240,
                      "end": 241,
                      "typeName": {
                        "type": "Identifier",
                        "start": 240,
                        "end": 241,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "value": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 251,
                  "end": 258,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 254,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 254,
                    "end": 257,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 256,
                      "end": 257,
                      "typeName": {
                        "type": "Identifier",
                        "start": 256,
                        "end": 257,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  },
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 218,
              "end": 219,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 219,
              "end": 224,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 220,
                  "end": 221,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 221,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 222,
                  "end": 223,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 222,
                    "end": 223,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 270,
            "end": 338,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 298,
              "end": 338,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 308,
                  "end": 315,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 308,
                    "end": 311,
                    "decorators": [],
                    "name": "baz",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 311,
                    "end": 314,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 313,
                      "end": 314,
                      "typeName": {
                        "type": "Identifier",
                        "start": 313,
                        "end": 314,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "value": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 324,
                  "end": 332,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 324,
                    "end": 328,
                    "decorators": [],
                    "name": "bing",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 328,
                    "end": 331,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 330,
                      "end": 331,
                      "typeName": {
                        "type": "Identifier",
                        "start": 330,
                        "end": 331,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  },
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 276,
              "end": 277,
              "decorators": [],
              "name": "D",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 292,
              "end": 297,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 293,
                  "end": 294,
                  "typeName": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 294,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 295,
                  "end": 296,
                  "typeName": {
                    "type": "Identifier",
                    "start": 295,
                    "end": 296,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 277,
              "end": 282,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 278,
                  "end": 279,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 278,
                    "end": 279,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 280,
                  "end": 281,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 280,
                    "end": 281,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 344,
            "end": 364,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 348,
                "end": 363,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 348,
                  "end": 349,
                  "decorators": [],
                  "name": "r",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 352,
                  "end": 363,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 352,
                    "end": 353,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 354,
                    "end": 363,
                    "decorators": [],
                    "name": "prototype",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 384,
            "end": 399,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 388,
                "end": 398,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 388,
                  "end": 390,
                  "decorators": [],
                  "name": "ra",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 393,
                  "end": 398,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 393,
                    "end": 394,
                    "decorators": [],
                    "name": "r",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 395,
                    "end": 398,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 411,
            "end": 432,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 415,
                "end": 431,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 415,
                  "end": 417,
                  "decorators": [],
                  "name": "r2",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 420,
                  "end": 431,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 420,
                    "end": 421,
                    "decorators": [],
                    "name": "D",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 422,
                    "end": 431,
                    "decorators": [],
                    "name": "prototype",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 452,
            "end": 468,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 456,
                "end": 467,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 456,
                  "end": 458,
                  "decorators": [],
                  "name": "rb",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 461,
                  "end": 467,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 461,
                    "end": 463,
                    "decorators": [],
                    "name": "r2",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 464,
                    "end": 467,
                    "decorators": [],
                    "name": "baz",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 205,
        "decorators": [],
        "name": "Generic",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
