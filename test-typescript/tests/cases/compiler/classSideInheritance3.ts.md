classSideInheritance3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 327,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 53,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 53,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 51,
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
              "type": "FunctionExpression",
              "start": 25,
              "end": 51,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 44,
                "end": 51,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 26,
                  "end": 42,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
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
                        "type": "TSStringKeyword",
                        "start": 36,
                        "end": 42
                      }
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
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 54,
      "end": 149,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 72,
        "end": 149,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 147,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 89,
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
              "start": 89,
              "end": 147,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 122,
                "end": 147,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 132,
                    "end": 141,
                    "expression": {
                      "type": "CallExpression",
                      "start": 132,
                      "end": 140,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 138,
                          "end": 139,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 132,
                        "end": 137
                      },
                      "optional": false
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
                  "start": 90,
                  "end": 99,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 91,
                    "end": 99,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 93,
                      "end": 99
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "start": 101,
                  "end": 120,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 120,
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 112,
                      "end": 120,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 114,
                        "end": 120
                      }
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
        "start": 60,
        "end": 61,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 70,
        "end": 71,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 150,
      "end": 224,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 168,
        "end": 224,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 174,
            "end": 222,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 174,
              "end": 185,
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
              "start": 185,
              "end": 222,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 197,
                "end": 222,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 207,
                    "end": 216,
                    "expression": {
                      "type": "CallExpression",
                      "start": 207,
                      "end": 215,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 213,
                          "end": 214,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 207,
                        "end": 212
                      },
                      "optional": false
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
                  "start": 186,
                  "end": 195,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 187,
                    "end": 195,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 189,
                      "end": 195
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
        "start": 156,
        "end": 157,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 166,
        "end": 167,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 226,
      "end": 247,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 230,
          "end": 246,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 230,
            "end": 242,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 232,
              "end": 242,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 234,
                "end": 242,
                "exprName": {
                  "type": "Identifier",
                  "start": 241,
                  "end": 242,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 245,
            "end": 246,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 257,
      "end": 290,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 261,
          "end": 289,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 261,
            "end": 285,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 263,
              "end": 285,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 265,
                "end": 285,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 270,
                    "end": 279,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 271,
                      "end": 279,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 273,
                        "end": 279
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 281,
                  "end": 285,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 284,
                    "end": 285,
                    "typeName": {
                      "type": "Identifier",
                      "start": 284,
                      "end": 285,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 288,
            "end": 289,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 300,
      "end": 321,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 304,
          "end": 320,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 304,
            "end": 316,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 306,
              "end": 316,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 308,
                "end": 316,
                "exprName": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 316,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 319,
            "end": 320,
            "decorators": [],
            "name": "C",
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
