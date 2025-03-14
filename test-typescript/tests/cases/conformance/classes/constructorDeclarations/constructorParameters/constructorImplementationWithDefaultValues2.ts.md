constructorImplementationWithDefaultValues2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 352,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 105,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 105,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 29,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 25,
              "end": 29,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 103,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 45,
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
              "start": 45,
              "end": 103,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 68,
                "end": 103,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 87,
                    "end": 97,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 91,
                        "end": 96,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 91,
                          "end": 92,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 96,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 46,
                  "end": 66,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "start": 53,
                    "end": 66,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 62,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 54,
                        "end": 62,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 56,
                          "end": 62
                        }
                      }
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 65,
                      "end": 66,
                      "raw": "1",
                      "value": 1
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
      "type": "ClassDeclaration",
      "start": 107,
      "end": 232,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 121,
        "end": 232,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 127,
            "end": 151,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 138,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 138,
              "end": 151,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 139,
                  "end": 143,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 140,
                    "end": 143,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 142,
                      "end": 143,
                      "typeName": {
                        "type": "Identifier",
                        "start": 142,
                        "end": 143,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 145,
                  "end": 149,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 146,
                    "end": 149,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 148,
                      "end": 149,
                      "typeName": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 149,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 156,
            "end": 230,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 167,
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
              "start": 167,
              "end": 230,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 195,
                "end": 230,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 214,
                    "end": 224,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 218,
                        "end": 223,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 218,
                          "end": 219,
                          "decorators": [],
                          "name": "z",
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 222,
                          "end": 223,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 168,
                  "end": 176,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 172,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 169,
                      "end": 172,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 171,
                        "end": 172,
                        "typeName": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 172,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 175,
                    "end": 176,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "start": 178,
                  "end": 193,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "start": 185,
                    "end": 193,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 185,
                      "end": 189,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 186,
                        "end": 189,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 188,
                          "end": 189,
                          "typeName": {
                            "type": "Identifier",
                            "start": 188,
                            "end": 189,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      }
                    },
                    "optional": false,
                    "right": {
                      "type": "Identifier",
                      "start": 192,
                      "end": 193,
                      "decorators": [],
                      "name": "x",
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
        "start": 113,
        "end": 114,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 114,
        "end": 120,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 115,
            "end": 116,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 118,
            "end": 119,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
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
      "type": "ClassDeclaration",
      "start": 234,
      "end": 352,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 258,
        "end": 352,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 264,
            "end": 279,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 264,
              "end": 275,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 275,
              "end": 279,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 276,
                  "end": 277,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 284,
            "end": 350,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 284,
              "end": 295,
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
              "start": 295,
              "end": 350,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 315,
                "end": 350,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 334,
                    "end": 344,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 338,
                        "end": 343,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 338,
                          "end": 339,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 342,
                          "end": 343,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 296,
                  "end": 313,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 296,
                    "end": 300,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 297,
                      "end": 300,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 299,
                        "end": 300,
                        "typeName": {
                          "type": "Identifier",
                          "start": 299,
                          "end": 300,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "NewExpression",
                    "start": 303,
                    "end": 313,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 307,
                      "end": 311,
                      "decorators": [],
                      "name": "Date",
                      "optional": false
                    }
                  }
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
        "start": 240,
        "end": 241,
        "decorators": [],
        "name": "E",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 241,
        "end": 257,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 242,
            "end": 256,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 252,
              "end": 256,
              "typeName": {
                "type": "Identifier",
                "start": 252,
                "end": 256,
                "decorators": [],
                "name": "Date",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 242,
              "end": 243,
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
  "sourceType": "script"
}
```
