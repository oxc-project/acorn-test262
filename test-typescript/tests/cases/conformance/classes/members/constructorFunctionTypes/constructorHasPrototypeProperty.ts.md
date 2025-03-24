__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 17,
        "name": "NonGeneric",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 18,
        "end": 189,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 24,
            "end": 60,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 32,
              "end": 60,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 42,
                  "end": 54,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 45,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 66,
            "end": 112,
            "id": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 84,
              "end": 112,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 94,
                  "end": 106,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 97,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
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
                "id": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 126,
                  "end": 137,
                  "object": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 127,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 137,
                    "name": "prototype",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 143,
            "end": 149,
            "expression": {
              "type": "MemberExpression",
              "start": 143,
              "end": 148,
              "object": {
                "type": "Identifier",
                "start": 143,
                "end": 144,
                "name": "r",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 145,
                "end": 148,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
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
                "id": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 160,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 163,
                  "end": 174,
                  "object": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 164,
                    "name": "D",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 174,
                    "name": "prototype",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 180,
            "end": 187,
            "expression": {
              "type": "MemberExpression",
              "start": 180,
              "end": 186,
              "object": {
                "type": "Identifier",
                "start": 180,
                "end": 182,
                "name": "r2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 183,
                "end": 186,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 191,
      "end": 477,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 205,
        "name": "Generic",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 206,
        "end": 477,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 212,
            "end": 264,
            "id": {
              "type": "Identifier",
              "start": 218,
              "end": 219,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 225,
              "end": 264,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 235,
                  "end": 242,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 238,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 251,
                  "end": 258,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 254,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 219,
              "end": 224,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 220,
                  "end": 221,
                  "name": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 221,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 222,
                  "end": 223,
                  "name": {
                    "type": "Identifier",
                    "start": 222,
                    "end": 223,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 270,
            "end": 338,
            "id": {
              "type": "Identifier",
              "start": 276,
              "end": 277,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 298,
              "end": 338,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 308,
                  "end": 315,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 308,
                    "end": 311,
                    "name": "baz",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 324,
                  "end": 332,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 324,
                    "end": 328,
                    "name": "bing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 277,
              "end": 282,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 278,
                  "end": 279,
                  "name": {
                    "type": "Identifier",
                    "start": 278,
                    "end": 279,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 280,
                  "end": 281,
                  "name": {
                    "type": "Identifier",
                    "start": 280,
                    "end": 281,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "implements": [],
            "abstract": false,
            "declare": false,
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 295,
                  "end": 296,
                  "typeName": {
                    "type": "Identifier",
                    "start": 295,
                    "end": 296,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
                "id": {
                  "type": "Identifier",
                  "start": 348,
                  "end": 349,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 352,
                  "end": 363,
                  "object": {
                    "type": "Identifier",
                    "start": 352,
                    "end": 353,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 354,
                    "end": 363,
                    "name": "prototype",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 388,
                  "end": 390,
                  "name": "ra",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 393,
                  "end": 398,
                  "object": {
                    "type": "Identifier",
                    "start": 393,
                    "end": 394,
                    "name": "r",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 395,
                    "end": 398,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 415,
                  "end": 417,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 420,
                  "end": 431,
                  "object": {
                    "type": "Identifier",
                    "start": 420,
                    "end": 421,
                    "name": "D",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 422,
                    "end": 431,
                    "name": "prototype",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 456,
                  "end": 458,
                  "name": "rb",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 461,
                  "end": 467,
                  "object": {
                    "type": "Identifier",
                    "start": 461,
                    "end": 463,
                    "name": "r2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 464,
                    "end": 467,
                    "name": "baz",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
