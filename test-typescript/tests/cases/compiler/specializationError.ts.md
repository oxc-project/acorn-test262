__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 209,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 53,
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 53,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 27,
            "end": 51,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 31,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 35,
                "end": 43,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 40,
                  "end": 43,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 42,
                    "end": 43,
                    "typeName": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
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
              "start": 44,
              "end": 50,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 46,
                "end": 50
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 31,
              "end": 34,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 32,
                  "end": 33,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "decorators": [],
        "name": "Promise",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 17,
        "end": 20,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 18,
            "end": 19,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
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
      "start": 55,
      "end": 208,
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 208,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 75,
            "end": 111,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 78,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 79,
                "end": 92,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 84,
                  "end": 92,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 86,
                    "end": 92,
                    "literal": {
                      "type": "Literal",
                      "start": 86,
                      "end": 92,
                      "raw": "\"Menu\"",
                      "value": "Menu"
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 110,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 95,
                "end": 110,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 102,
                  "end": 110,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 103,
                      "end": 109
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 102,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 116,
            "end": 167,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 119,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 123,
                "end": 136,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 128,
                  "end": 136,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 130,
                    "end": 136
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 138,
                "end": 153,
                "decorators": [],
                "name": "element",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 145,
                  "end": 153,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 147,
                    "end": 153
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 166,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 156,
                "end": 166,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 163,
                  "end": 166,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 164,
                      "end": 165,
                      "typeName": {
                        "type": "Identifier",
                        "start": 164,
                        "end": 165,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 163,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 119,
              "end": 122,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 120,
                  "end": 121,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 121,
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
            "type": "TSMethodSignature",
            "start": 172,
            "end": 206,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 175,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 179,
                "end": 192,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 184,
                  "end": 192,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 186,
                    "end": 192
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 205,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 195,
                "end": 205,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 202,
                  "end": 205,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 203,
                      "end": 204,
                      "typeName": {
                        "type": "Identifier",
                        "start": 203,
                        "end": 204,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 202,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 175,
              "end": 178,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 176,
                  "end": 177,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 177,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 68,
        "decorators": [],
        "name": "Bar",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
