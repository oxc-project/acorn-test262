__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 229,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 30,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 30,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 28,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 27,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 26,
                "end": 27,
                "typeName": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
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
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
      "start": 38,
      "end": 81,
      "body": {
        "type": "TSInterfaceBody",
        "start": 66,
        "end": 81,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 72,
            "end": 79,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 75,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 78,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 77,
                "end": 78,
                "typeName": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
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
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 61,
          "end": 65,
          "expression": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "decorators": [],
            "name": "B",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 62,
            "end": 65,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 63,
                "end": 64,
                "typeName": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 64,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 49,
        "end": 52,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 50,
            "end": 51,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
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
      "start": 89,
      "end": 141,
      "body": {
        "type": "TSInterfaceBody",
        "start": 126,
        "end": 141,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 132,
            "end": 139,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 135,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 138,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 137,
                "end": 138,
                "typeName": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 138,
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
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 113,
          "end": 125,
          "expression": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "decorators": [],
            "name": "B",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 114,
            "end": 125,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 115,
                "end": 124,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 116,
                  "end": 124,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 117,
                      "end": 123
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 101,
        "decorators": [],
        "name": "A2",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 101,
        "end": 104,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 102,
            "end": 103,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
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
      "start": 143,
      "end": 173,
      "body": {
        "type": "TSInterfaceBody",
        "start": 158,
        "end": 173,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 164,
            "end": 171,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 164,
              "end": 167,
              "decorators": [],
              "name": "bam",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 170,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 169,
                "end": 170,
                "typeName": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 170,
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
        "start": 153,
        "end": 154,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 154,
        "end": 157,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 155,
            "end": 156,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
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
      "start": 181,
      "end": 229,
      "body": {
        "type": "TSInterfaceBody",
        "start": 213,
        "end": 229,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 219,
            "end": 227,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 223,
              "decorators": [],
              "name": "bing",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 223,
              "end": 226,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 225,
                "end": 226,
                "typeName": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 226,
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
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 205,
          "end": 212,
          "expression": {
            "type": "Identifier",
            "start": 205,
            "end": 206,
            "decorators": [],
            "name": "B",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 206,
            "end": 212,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 207,
                "end": 211,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 208,
                  "end": 211,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 209,
                      "end": 210,
                      "typeName": {
                        "type": "Identifier",
                        "start": 209,
                        "end": 210,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 208,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 193,
        "decorators": [],
        "name": "A3",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 193,
        "end": 196,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 194,
            "end": 195,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 194,
              "end": 195,
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
