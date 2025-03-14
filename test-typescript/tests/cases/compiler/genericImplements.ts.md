genericImplements.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 389,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 14,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 14,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 12,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "EmptyStatement",
      "start": 14,
      "end": 15
    },
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 30,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 24,
        "end": 30,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 26,
            "end": 28,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 23,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "EmptyStatement",
      "start": 30,
      "end": 31
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 32,
      "end": 72,
      "body": {
        "type": "TSInterfaceBody",
        "start": 44,
        "end": 72,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 50,
            "end": 70,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 69,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 68,
                "end": 69,
                "typeName": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 51,
              "end": 64,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 52,
                  "end": 63,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 62,
                    "end": 63,
                    "typeName": {
                      "type": "Identifier",
                      "start": 62,
                      "end": 63,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 53,
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
        "start": 42,
        "end": 43,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 103,
      "end": 175,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 124,
        "end": 175,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 132,
            "end": 173,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 133,
              "end": 173,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 152,
                "end": 173,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 154,
                    "end": 171,
                    "argument": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 170,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 148,
                "end": 151,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 150,
                  "end": 151,
                  "typeName": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 151,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 133,
                "end": 146,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 134,
                    "end": 145,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 144,
                      "end": 145,
                      "typeName": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 145,
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 135,
                      "decorators": [],
                      "name": "T",
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
        "start": 109,
        "end": 110,
        "decorators": [],
        "name": "X",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 122,
          "end": 123,
          "expression": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "decorators": [],
            "name": "I",
            "optional": false
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 206,
      "end": 276,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 227,
        "end": 276,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 233,
            "end": 274,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 234,
              "end": 274,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 253,
                "end": 274,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 255,
                    "end": 272,
                    "argument": {
                      "type": "Identifier",
                      "start": 262,
                      "end": 271,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 249,
                "end": 252,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 251,
                  "end": 252,
                  "typeName": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 252,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 234,
                "end": 247,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 235,
                    "end": 246,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 245,
                      "end": 246,
                      "typeName": {
                        "type": "Identifier",
                        "start": 245,
                        "end": 246,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 235,
                      "end": 236,
                      "decorators": [],
                      "name": "T",
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
        "start": 212,
        "end": 213,
        "decorators": [],
        "name": "Y",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 225,
          "end": 226,
          "expression": {
            "type": "Identifier",
            "start": 225,
            "end": 226,
            "decorators": [],
            "name": "I",
            "optional": false
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 307,
      "end": 367,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 328,
        "end": 367,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 334,
            "end": 365,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 334,
              "end": 335,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 335,
              "end": 365,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 344,
                "end": 365,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 346,
                    "end": 363,
                    "argument": {
                      "type": "Identifier",
                      "start": 353,
                      "end": 362,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 340,
                "end": 343,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 342,
                  "end": 343,
                  "typeName": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 343,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 335,
                "end": 338,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 336,
                    "end": 337,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 336,
                      "end": 337,
                      "decorators": [],
                      "name": "T",
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
        "start": 313,
        "end": 314,
        "decorators": [],
        "name": "Z",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 326,
          "end": 327,
          "expression": {
            "type": "Identifier",
            "start": 326,
            "end": 327,
            "decorators": [],
            "name": "I",
            "optional": false
          }
        }
      ],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
