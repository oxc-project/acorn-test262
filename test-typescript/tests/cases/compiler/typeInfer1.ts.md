__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 263,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 82,
      "body": {
        "type": "TSInterfaceBody",
        "start": 23,
        "end": 82,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 29,
            "end": 50,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 34,
              "decorators": [],
              "name": "Write",
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
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 36,
                  "end": 43,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 37,
                    "end": 43
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 49,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 45,
                "end": 49
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 55,
            "end": 80,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 64,
              "decorators": [],
              "name": "WriteLine",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 65,
                "end": 73,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 66,
                  "end": 73,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 67,
                    "end": 73
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 79,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 75,
                "end": 79
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 22,
        "decorators": [],
        "name": "ITextWriter2",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 191,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 103,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 103,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 91,
                "end": 103,
                "typeName": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 103,
                  "decorators": [],
                  "name": "ITextWriter2",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 106,
            "end": 191,
            "properties": [
              {
                "type": "Property",
                "start": 112,
                "end": 146,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 117,
                  "decorators": [],
                  "name": "Write",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 119,
                  "end": 146,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 144,
                    "end": 146,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 129,
                      "end": 137,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 130,
                        "end": 137,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 131,
                          "end": 137
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 138,
                    "end": 143,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 139,
                      "end": 143
                    }
                  }
                }
              },
              {
                "type": "Property",
                "start": 152,
                "end": 189,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 161,
                  "decorators": [],
                  "name": "WriteLine",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 163,
                  "end": 189,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 187,
                    "end": 189,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 172,
                      "end": 180,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 173,
                        "end": 180,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 174,
                          "end": 180
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 181,
                    "end": 186,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 182,
                      "end": 186
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 193,
      "end": 263,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 197,
          "end": 263,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 197,
            "end": 219,
            "decorators": [],
            "name": "yyyyyyyy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 205,
              "end": 219,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 207,
                "end": 219,
                "typeName": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 219,
                  "decorators": [],
                  "name": "ITextWriter2",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 222,
            "end": 263,
            "properties": [
              {
                "type": "Property",
                "start": 228,
                "end": 261,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 231,
                  "decorators": [],
                  "name": "Moo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 233,
                  "end": 261,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 244,
                    "end": 261,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 246,
                        "end": 259,
                        "argument": {
                          "type": "Literal",
                          "start": 253,
                          "end": 258,
                          "raw": "\"cow\"",
                          "value": "cow"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              }
            ]
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
