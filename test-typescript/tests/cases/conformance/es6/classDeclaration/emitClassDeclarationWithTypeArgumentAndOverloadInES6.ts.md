emitClassDeclarationWithTypeArgumentAndOverloadInES6.ts
```json
{
  "type": "Program",
  "start": 17,
  "end": 333,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 333,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 28,
        "end": 333,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 34,
            "end": 39,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 38,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 37,
                "end": 38,
                "typeName": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 44,
            "end": 49,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
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
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 55,
            "end": 74,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 66,
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
              "start": 66,
              "end": 74,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 67,
                  "end": 73,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 68,
                    "end": 73,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 70,
                      "end": 73
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 79,
            "end": 103,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 90,
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
              "start": 90,
              "end": 103,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 91,
                  "end": 97,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 92,
                    "end": 97,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 94,
                      "end": 97
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 98,
                  "end": 102,
                  "decorators": [],
                  "name": "b",
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
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 108,
            "end": 140,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 119,
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
              "start": 119,
              "end": 140,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 126,
                "end": 140,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 128,
                    "end": 139,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 128,
                      "end": 138,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 128,
                        "end": 134,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 128,
                          "end": 132
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 134,
                          "decorators": [],
                          "name": "B",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 138,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 120,
                  "end": 124,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 121,
                    "end": 124,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 123,
                      "end": 124,
                      "typeName": {
                        "type": "Identifier",
                        "start": 123,
                        "end": 124,
                        "decorators": [],
                        "name": "T",
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
            "start": 146,
            "end": 155,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 146,
              "end": 149,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 149,
              "end": 155,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 150,
                  "end": 154,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 151,
                    "end": 154,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 153,
                      "end": 154,
                      "typeName": {
                        "type": "Identifier",
                        "start": 153,
                        "end": 154,
                        "decorators": [],
                        "name": "T",
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
            "start": 160,
            "end": 171,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 160,
              "end": 163,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 163,
              "end": 171,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 164,
                  "end": 170,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 165,
                    "end": 170,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 167,
                      "end": 170
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 176,
            "end": 190,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 179,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 179,
              "end": 190,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 180,
                  "end": 189,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 181,
                    "end": 189,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 183,
                      "end": 189
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 195,
            "end": 234,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 195,
              "end": 198,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 198,
              "end": 234,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 204,
                "end": 234,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 214,
                    "end": 228,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 221,
                      "end": 227,
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
                        "end": 227,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
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
                "start": 200,
                "end": 203,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 202,
                  "end": 203,
                  "typeName": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 203,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 240,
            "end": 282,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 244,
              "end": 246,
              "decorators": [],
              "name": "BB",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 246,
              "end": 282,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 252,
                "end": 282,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 262,
                    "end": 276,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 269,
                      "end": 275,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 269,
                        "end": 273
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 274,
                        "end": 275,
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      }
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
                "start": 248,
                "end": 251,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 250,
                  "end": 251,
                  "typeName": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 251,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 287,
            "end": 331,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 291,
              "end": 297,
              "decorators": [],
              "name": "BBWith",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 297,
              "end": 331,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 304,
                "end": 331,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 314,
                    "end": 325,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 314,
                      "end": 324,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 314,
                        "end": 320,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 314,
                          "end": 318
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 319,
                          "end": 320,
                          "decorators": [],
                          "name": "B",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 323,
                        "end": 324,
                        "decorators": [],
                        "name": "c",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 298,
                  "end": 302,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 299,
                    "end": 302,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 301,
                      "end": 302,
                      "typeName": {
                        "type": "Identifier",
                        "start": 301,
                        "end": 302,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
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
        "start": 23,
        "end": 24,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 24,
        "end": 27,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 25,
            "end": 26,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
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
