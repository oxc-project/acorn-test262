partiallyAnnotatedFunctionInferenceError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 249,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 26,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 26,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 24,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 16,
              "decorators": [],
              "name": "test",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 24,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 18,
                "end": 24
              }
            },
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
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 28,
      "end": 65,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 65,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 63,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 55,
              "decorators": [],
              "name": "test2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 63,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 57,
                "end": 63
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 44,
        "end": 45,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 67,
      "end": 135,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 93,
        "decorators": [],
        "name": "testError",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 107,
          "end": 131,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 108,
            "end": 131,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 110,
              "end": 131,
              "params": [
                {
                  "type": "Identifier",
                  "start": 111,
                  "end": 115,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 112,
                    "end": 115,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 114,
                      "end": 115,
                      "typeName": {
                        "type": "Identifier",
                        "start": 114,
                        "end": 115,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 117,
                  "end": 122,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 119,
                    "end": 122,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 121,
                      "end": 122,
                      "typeName": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 122,
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
                "start": 124,
                "end": 131,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 127,
                  "end": 131
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 132,
        "end": 135,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 134,
          "end": 135,
          "typeName": {
            "type": "Identifier",
            "start": 134,
            "end": 135,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 93,
        "end": 106,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 94,
            "end": 105,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 104,
              "end": 105,
              "typeName": {
                "type": "Identifier",
                "start": 104,
                "end": 105,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
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
      "type": "ExpressionStatement",
      "start": 150,
      "end": 182,
      "expression": {
        "type": "CallExpression",
        "start": 150,
        "end": 182,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 160,
            "end": 181,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 179,
              "end": 181,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 161,
                "end": 166,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 163,
                  "end": 166,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 165,
                    "end": 166,
                    "typeName": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 166,
                      "decorators": [],
                      "name": "D",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 168,
                "end": 170,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 172,
                "end": 174,
                "decorators": [],
                "name": "t3",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 150,
          "end": 159,
          "decorators": [],
          "name": "testError",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 183,
      "end": 215,
      "expression": {
        "type": "CallExpression",
        "start": 183,
        "end": 215,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 193,
            "end": 214,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 212,
              "end": 214,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 194,
                "end": 196,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 198,
                "end": 203,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": {
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
                      "name": "D",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 205,
                "end": 207,
                "decorators": [],
                "name": "t3",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 183,
          "end": 192,
          "decorators": [],
          "name": "testError",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 248,
      "expression": {
        "type": "CallExpression",
        "start": 216,
        "end": 248,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 226,
            "end": 247,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 245,
              "end": 247,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 227,
                "end": 229,
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 231,
                "end": 233,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 235,
                "end": 240,
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 237,
                  "end": 240,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 239,
                    "end": 240,
                    "typeName": {
                      "type": "Identifier",
                      "start": 239,
                      "end": 240,
                      "decorators": [],
                      "name": "D",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 216,
          "end": 225,
          "decorators": [],
          "name": "testError",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
