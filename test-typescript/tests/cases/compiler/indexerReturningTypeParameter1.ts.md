__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 207,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 58,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 58,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 56,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 25,
              "decorators": [],
              "name": "groupBy",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 55,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 32,
                "end": 55,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 34,
                    "end": 53,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 35,
                        "end": 46,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 38,
                          "end": 46,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 40,
                            "end": 46
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 47,
                      "end": 52,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 49,
                        "end": 52,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 49,
                          "end": 50,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 49,
                            "end": 50,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ]
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 25,
              "end": 28,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 26,
                  "end": 27,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
        "end": 11,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 67,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 67,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 67,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 66,
                "end": 67,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 69,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 88,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 77,
            "end": 88,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 77,
              "end": 86,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 79,
                "end": 86,
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 91,
      "end": 173,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 99,
        "end": 173,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 105,
            "end": 171,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 112,
              "decorators": [],
              "name": "groupBy",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 112,
              "end": 171,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 143,
                "end": 171,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 153,
                    "end": 165,
                    "argument": {
                      "type": "Literal",
                      "start": 160,
                      "end": 164,
                      "raw": "null",
                      "value": null,
                      "regex": null,
                      "bigint": null
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
                "start": 117,
                "end": 142,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 119,
                  "end": 142,
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "start": 121,
                      "end": 140,
                      "accessibility": null,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 122,
                          "end": 133,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 125,
                            "end": 133,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 127,
                              "end": 133
                            }
                          }
                        }
                      ],
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 134,
                        "end": 139,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 136,
                          "end": 139,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 136,
                            "end": 137,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 136,
                              "end": 137,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 112,
                "end": 115,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 113,
                    "end": 114,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 114,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
        "start": 97,
        "end": 98,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 174,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 183,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 183,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 180,
              "end": 183,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 182,
                "end": 183,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 183,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 185,
      "end": 207,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 206,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 191,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 194,
            "end": 206,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 194,
              "end": 204,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 194,
                "end": 196,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 197,
                "end": 204,
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
