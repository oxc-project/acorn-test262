__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 251,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 81,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 56,
        "end": 81,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 62,
            "end": 79,
            "argument": {
              "type": "Identifier",
              "start": 69,
              "end": 78,
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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "fn",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 15,
          "end": 19,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 19,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 18,
              "end": 19,
              "typeName": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "decorators": [],
                "name": "Y",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 21,
          "end": 51,
          "decorators": [],
          "name": "set",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 51,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 26,
              "end": 51,
              "params": [
                {
                  "type": "Identifier",
                  "start": 27,
                  "end": 31,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 28,
                    "end": 31,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 30,
                      "end": 31,
                      "typeName": {
                        "type": "Identifier",
                        "start": 30,
                        "end": 31,
                        "decorators": [],
                        "name": "Y",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 33,
                  "end": 42,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 34,
                    "end": 42,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 36,
                      "end": 42
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 44,
                "end": 51,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 47,
                  "end": 51
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 52,
        "end": 55,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 54,
          "end": 55,
          "typeName": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
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
              "name": "a",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 82,
      "end": 107,
      "body": {
        "type": "TSInterfaceBody",
        "start": 94,
        "end": 107,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 96,
            "end": 105,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 105,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 99,
                "end": 105
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "decorators": [],
        "name": "Y",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 109,
      "end": 251,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 117,
        "end": 251,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 123,
            "end": 249,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 134,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 134,
              "end": 249,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 242,
                "end": 249,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 144,
                  "end": 148,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 145,
                    "end": 148,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 147,
                      "end": 148,
                      "typeName": {
                        "type": "Identifier",
                        "start": 147,
                        "end": 148,
                        "decorators": [],
                        "name": "Y",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "start": 158,
                  "end": 193,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "start": 165,
                    "end": 193,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 166,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "right": {
                      "type": "CallExpression",
                      "start": 169,
                      "end": 193,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 172,
                          "end": 173,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 175,
                          "end": 192,
                          "async": false,
                          "body": {
                            "type": "AssignmentExpression",
                            "start": 185,
                            "end": 192,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 185,
                              "end": 188,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 185,
                                "end": 186,
                                "decorators": [],
                                "name": "y",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 187,
                                "end": 188,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 191,
                              "end": 192,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 176,
                              "end": 177,
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 179,
                              "end": 180,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 169,
                        "end": 171,
                        "decorators": [],
                        "name": "fn",
                        "optional": false
                      },
                      "optional": false
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 116,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
