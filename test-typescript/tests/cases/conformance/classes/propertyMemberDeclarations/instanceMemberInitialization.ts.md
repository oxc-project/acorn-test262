__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 241,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 22,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 22,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 20,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 18,
              "end": 19,
              "raw": "1",
              "value": 1
            }
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
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 32,
            "end": 39,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 41,
      "end": 49,
      "expression": {
        "type": "AssignmentExpression",
        "start": 41,
        "end": 48,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 41,
          "end": 44,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 43,
            "end": 44,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 47,
          "end": 48,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 66,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 56,
            "decorators": [],
            "name": "c2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 59,
            "end": 66,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 68,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 88,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 76,
            "end": 88,
            "operator": "===",
            "left": {
              "type": "MemberExpression",
              "start": 76,
              "end": 79,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 76,
                "end": 77,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            },
            "right": {
              "type": "MemberExpression",
              "start": 84,
              "end": 88,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 84,
                "end": 86,
                "decorators": [],
                "name": "c2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 87,
                "end": 88,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 104,
      "end": 241,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 122,
        "end": 241,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 128,
            "end": 187,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 139,
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
              "start": 139,
              "end": 187,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 185,
                "end": 187,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 140,
                  "end": 183,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 183,
                    "decorators": [],
                    "name": "Map_",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 161,
                      "end": 183,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 163,
                        "end": 183,
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "start": 165,
                            "end": 181,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 176,
                              "end": 181,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 178,
                                "end": 181
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 168,
                              "end": 174,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 169,
                                  "end": 170,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 169,
                                    "end": 170,
                                    "decorators": [],
                                    "name": "K",
                                    "optional": false
                                  },
                                  "out": false
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "start": 172,
                                  "end": 173,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 172,
                                    "end": 173,
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false
                                  },
                                  "out": false
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 192,
            "end": 239,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 214,
              "decorators": [],
              "name": "store",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "value": {
              "type": "NewExpression",
              "start": 217,
              "end": 238,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 221,
                "end": 230,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 221,
                  "end": 225
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 230,
                  "decorators": [],
                  "name": "Map_",
                  "optional": false
                }
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 230,
                "end": 236,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 231,
                    "end": 232,
                    "typeName": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 232,
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 234,
                    "end": 235,
                    "typeName": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 235,
                      "decorators": [],
                      "name": "V",
                      "optional": false
                    }
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
        "start": 110,
        "end": 115,
        "decorators": [],
        "name": "MyMap",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 115,
        "end": 121,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 116,
            "end": 117,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 119,
            "end": 120,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "V",
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
