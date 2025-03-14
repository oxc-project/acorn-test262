genericTypeWithNonGenericBaseMisMatch.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 227,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 46,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 46,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 15,
            "end": 44,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 44,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 18,
                "end": 44,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 19,
                    "end": 35,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 20,
                      "end": 35,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 22,
                        "end": 35,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 24,
                            "end": 33,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 24,
                              "end": 25,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 25,
                              "end": 33,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 27,
                                "end": 33
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 37,
                  "end": 44,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 40,
                    "end": 44
                  }
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
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 47,
      "end": 115,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 115,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 96,
            "end": 113,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
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
              "start": 97,
              "end": 113,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 110,
                "end": 113,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 98,
                  "end": 102,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 99,
                    "end": 102,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 101,
                      "end": 102,
                      "typeName": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 102,
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
                "start": 103,
                "end": 109,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 105,
                  "end": 109
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
        "start": 53,
        "end": 54,
        "decorators": [],
        "name": "X",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 91,
          "end": 92,
          "expression": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "decorators": [],
            "name": "I",
            "optional": false
          }
        }
      ],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 54,
        "end": 79,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 55,
            "end": 78,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 65,
              "end": 78,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 67,
                  "end": 76,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 68,
                    "end": 76,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 70,
                      "end": 76
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
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
      "type": "VariableDeclaration",
      "start": 116,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 146,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 121,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 124,
            "end": 146,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "decorators": [],
              "name": "X",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 129,
              "end": 144,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 130,
                  "end": 143,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 132,
                      "end": 141,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 132,
                        "end": 133,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 133,
                        "end": 141,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 135,
                          "end": 141
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 156,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 156,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 155,
                "end": 156,
                "typeName": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 159,
            "end": 160,
            "decorators": [],
            "name": "x",
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
