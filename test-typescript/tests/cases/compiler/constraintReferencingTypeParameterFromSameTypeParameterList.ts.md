__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 46,
  "end": 439,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 46,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 67,
        "name": "IComparable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 67,
        "end": 70,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 68,
            "end": 69,
            "name": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
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
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 71,
        "end": 74,
        "body": []
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 75,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 85,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 117,
        "end": 120,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 85,
        "end": 114,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 86,
            "end": 87,
            "name": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
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
            "start": 89,
            "end": 113,
            "name": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 99,
              "end": 113,
              "typeName": {
                "type": "Identifier",
                "start": 99,
                "end": 110,
                "name": "IComparable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 110,
                "end": 113,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 111,
                    "end": 112,
                    "typeName": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 112,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 122,
      "end": 220,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 134,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 134,
        "end": 159,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 135,
            "end": 136,
            "name": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
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
            "start": 138,
            "end": 158,
            "name": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 148,
              "end": 158,
              "typeName": {
                "type": "Identifier",
                "start": 148,
                "end": 150,
                "name": "I1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 150,
                "end": 158,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 151,
                    "end": 152,
                    "typeName": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 152,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 154,
                    "end": 157
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 160,
        "end": 220,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 221,
      "end": 253,
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 233,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 233,
        "end": 249,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 234,
            "end": 235,
            "name": {
              "type": "Identifier",
              "start": 234,
              "end": 235,
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
            "start": 237,
            "end": 248,
            "name": {
              "type": "Identifier",
              "start": 237,
              "end": 238,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 247,
              "end": 248,
              "typeName": {
                "type": "Identifier",
                "start": 247,
                "end": 248,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 250,
        "end": 253,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 255,
      "end": 293,
      "id": {
        "type": "Identifier",
        "start": 265,
        "end": 267,
        "name": "I4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 267,
        "end": 289,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 268,
            "end": 269,
            "name": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
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
            "start": 271,
            "end": 288,
            "name": {
              "type": "Identifier",
              "start": 271,
              "end": 272,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSFunctionType",
              "start": 281,
              "end": 288,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 284,
                "end": 288,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 287,
                  "end": 288,
                  "typeName": {
                    "type": "Identifier",
                    "start": 287,
                    "end": 288,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 290,
        "end": 293,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 307,
      "end": 375,
      "id": {
        "type": "Identifier",
        "start": 317,
        "end": 319,
        "name": "I3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 319,
        "end": 340,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 320,
            "end": 321,
            "name": {
              "type": "Identifier",
              "start": 320,
              "end": 321,
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
            "start": 323,
            "end": 339,
            "name": {
              "type": "Identifier",
              "start": 323,
              "end": 324,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 333,
              "end": 339
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 341,
        "end": 375,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 347,
            "end": 373,
            "key": {
              "type": "Identifier",
              "start": 347,
              "end": 354,
              "name": "method1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 354,
              "end": 370,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 355,
                  "end": 356,
                  "name": {
                    "type": "Identifier",
                    "start": 355,
                    "end": 356,
                    "name": "X",
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
                  "start": 358,
                  "end": 369,
                  "name": {
                    "type": "Identifier",
                    "start": 358,
                    "end": 359,
                    "name": "Y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 368,
                    "end": 369,
                    "typeName": {
                      "type": "Identifier",
                      "start": 368,
                      "end": 369,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 377,
      "end": 437,
      "id": {
        "type": "Identifier",
        "start": 386,
        "end": 389,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 434,
        "end": 437,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 389,
        "end": 431,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 390,
            "end": 391,
            "name": {
              "type": "Identifier",
              "start": 390,
              "end": 391,
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
            "start": 393,
            "end": 430,
            "name": {
              "type": "Identifier",
              "start": 393,
              "end": 394,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSFunctionType",
              "start": 403,
              "end": 430,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 403,
                "end": 416,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 404,
                    "end": 415,
                    "name": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 405,
                      "name": "V",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 414,
                      "end": 415,
                      "typeName": {
                        "type": "Identifier",
                        "start": 414,
                        "end": 415,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
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
                  "start": 417,
                  "end": 421,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 418,
                    "end": 421,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 420,
                      "end": 421,
                      "typeName": {
                        "type": "Identifier",
                        "start": 420,
                        "end": 421,
                        "name": "V",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 423,
                "end": 430,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 426,
                  "end": 430
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
