__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 291,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 37,
        "name": "Array",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 37,
        "end": 40,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 38,
            "end": 39,
            "name": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
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
        "start": 41,
        "end": 124,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 47,
            "end": 122,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 60,
              "name": "equalsShallow",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 60,
              "end": 63,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 61,
                  "end": 62,
                  "name": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 62,
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
            "params": [
              {
                "type": "Identifier",
                "start": 64,
                "end": 86,
                "name": "this",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 68,
                  "end": 86,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 70,
                    "end": 86,
                    "typeName": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 83,
                      "name": "ReadonlyArray",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 83,
                      "end": 86,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 84,
                          "end": 85,
                          "typeName": {
                            "type": "Identifier",
                            "start": 84,
                            "end": 85,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 88,
                "end": 111,
                "name": "other",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 93,
                  "end": 111,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 95,
                    "end": 111,
                    "typeName": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 108,
                      "name": "ReadonlyArray",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 108,
                      "end": 111,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 109,
                          "end": 110,
                          "typeName": {
                            "type": "Identifier",
                            "start": 109,
                            "end": 110,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 121,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 114,
                "end": 121
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 192,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 192,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 192,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 143,
                "end": 192,
                "types": [
                  {
                    "type": "TSArrayType",
                    "start": 143,
                    "end": 162,
                    "elementType": {
                      "type": "TSUnionType",
                      "start": 144,
                      "end": 159,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 144,
                          "end": 150
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 153,
                          "end": 159
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 165,
                    "end": 171,
                    "elementType": {
                      "type": "TSNullKeyword",
                      "start": 165,
                      "end": 169
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 174,
                    "end": 185,
                    "elementType": {
                      "type": "TSUndefinedKeyword",
                      "start": 174,
                      "end": 183
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 188,
                    "end": 192,
                    "elementType": {
                      "type": "TSTypeLiteral",
                      "start": 188,
                      "end": 190,
                      "members": []
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 194,
      "end": 261,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 260,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 260,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 209,
              "end": 260,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 211,
                "end": 260,
                "types": [
                  {
                    "type": "TSArrayType",
                    "start": 211,
                    "end": 230,
                    "elementType": {
                      "type": "TSUnionType",
                      "start": 212,
                      "end": 227,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 212,
                          "end": 218
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 221,
                          "end": 227
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 233,
                    "end": 239,
                    "elementType": {
                      "type": "TSNullKeyword",
                      "start": 233,
                      "end": 237
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 242,
                    "end": 253,
                    "elementType": {
                      "type": "TSUndefinedKeyword",
                      "start": 242,
                      "end": 251
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 256,
                    "end": 260,
                    "elementType": {
                      "type": "TSTypeLiteral",
                      "start": 256,
                      "end": 258,
                      "members": []
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 263,
      "end": 290,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 289,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 268,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 271,
            "end": 289,
            "callee": {
              "type": "MemberExpression",
              "start": 271,
              "end": 286,
              "object": {
                "type": "Identifier",
                "start": 271,
                "end": 272,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 273,
                "end": 286,
                "name": "equalsShallow",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 287,
                "end": 288,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
