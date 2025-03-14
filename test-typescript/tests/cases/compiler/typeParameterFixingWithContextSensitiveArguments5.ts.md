typeParameterFixingWithContextSensitiveArguments5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 215,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 102,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 77,
        "end": 102,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 79,
            "end": 100,
            "argument": {
              "type": "ArrayExpression",
              "start": 86,
              "end": 99,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 87,
                  "end": 89,
                  "decorators": [],
                  "name": "t1",
                  "optional": false
                },
                {
                  "type": "CallExpression",
                  "start": 91,
                  "end": 98,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 95,
                      "end": 97,
                      "decorators": [],
                      "name": "t1",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 94,
                    "decorators": [],
                    "name": "pf2",
                    "optional": false
                  },
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 17,
          "end": 22,
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 19,
            "end": 22,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 21,
              "end": 22,
              "typeName": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 24,
          "end": 29,
          "decorators": [],
          "name": "u1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 29,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 28,
              "end": 29,
              "typeName": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 31,
          "end": 48,
          "decorators": [],
          "name": "pf1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 34,
            "end": 48,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 36,
              "end": 48,
              "params": [
                {
                  "type": "Identifier",
                  "start": 37,
                  "end": 42,
                  "decorators": [],
                  "name": "u2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 39,
                    "end": 42,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 41,
                      "end": 42,
                      "typeName": {
                        "type": "Identifier",
                        "start": 41,
                        "end": 42,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 44,
                "end": 48,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 47,
                  "end": 48,
                  "typeName": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 48,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 50,
          "end": 67,
          "decorators": [],
          "name": "pf2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 53,
            "end": 67,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 55,
              "end": 67,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 61,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 58,
                    "end": 61,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 60,
                      "end": 61,
                      "typeName": {
                        "type": "Identifier",
                        "start": 60,
                        "end": 61,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 63,
                "end": 67,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 66,
                  "end": 67,
                  "typeName": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 68,
        "end": 76,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 70,
          "end": 76,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 71,
              "end": 72,
              "typeName": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 74,
              "end": 75,
              "typeName": {
                "type": "Identifier",
                "start": 74,
                "end": 75,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
      "type": "TSInterfaceDeclaration",
      "start": 103,
      "end": 124,
      "body": {
        "type": "TSInterfaceBody",
        "start": 115,
        "end": 124,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 117,
            "end": 122,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 121,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 120,
                "end": 121,
                "typeName": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "decorators": [],
                  "name": "A",
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
        "start": 113,
        "end": 114,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 125,
      "end": 158,
      "body": {
        "type": "TSInterfaceBody",
        "start": 147,
        "end": 158,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 149,
            "end": 156,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 155,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 152,
                "end": 155
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 145,
          "end": 146,
          "expression": {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 136,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 160,
      "end": 175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 164,
          "end": 168,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 164,
            "end": 168,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 165,
              "end": 168,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 167,
                "end": 168,
                "typeName": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 168,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 174,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 174,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 171,
              "end": 174,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 173,
                "end": 174,
                "typeName": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 174,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 177,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 214,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 182,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 185,
            "end": 214,
            "arguments": [
              {
                "type": "Identifier",
                "start": 187,
                "end": 188,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 190,
                "end": 191,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 193,
                "end": 203,
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "start": 199,
                  "end": 203,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 201,
                    "decorators": [],
                    "name": "u2",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 203,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 193,
                    "end": 195,
                    "decorators": [],
                    "name": "u2",
                    "optional": false
                  }
                ]
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 205,
                "end": 213,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 213,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 205,
                    "end": 207,
                    "decorators": [],
                    "name": "t2",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
