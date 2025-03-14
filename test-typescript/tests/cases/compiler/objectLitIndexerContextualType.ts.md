__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 310,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 55,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 55,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 18,
            "end": 53,
            "parameters": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 28,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 20,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 22,
                    "end": 28
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 52,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 31,
                "end": 52,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 32,
                    "end": 41,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 33,
                      "end": 41,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 35,
                        "end": 41
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 43,
                  "end": 52,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 46,
                    "end": 52
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
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 112,
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 112,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 75,
            "end": 110,
            "parameters": [
              {
                "type": "Identifier",
                "start": 76,
                "end": 85,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 77,
                  "end": 85,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 79,
                    "end": 85
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 109,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 88,
                "end": 109,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 89,
                    "end": 98,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 90,
                      "end": 98,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 92,
                        "end": 98
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 100,
                  "end": 109,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 103,
                    "end": 109
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
        "start": 67,
        "end": 68,
        "decorators": [],
        "name": "J",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 122,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 122,
            "decorators": [],
            "name": "x",
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
                  "name": "I",
                  "optional": false
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
      "start": 124,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 132,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 132,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 132,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 131,
                "end": 132,
                "typeName": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 132,
                  "decorators": [],
                  "name": "J",
                  "optional": false
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
      "type": "ExpressionStatement",
      "start": 134,
      "end": 177,
      "expression": {
        "type": "AssignmentExpression",
        "start": 134,
        "end": 176,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 134,
          "end": 135,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 138,
          "end": 176,
          "properties": [
            {
              "type": "Property",
              "start": 144,
              "end": 157,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 144,
                "end": 145,
                "decorators": [],
                "name": "s",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 147,
                "end": 157,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 152,
                  "end": 157,
                  "operator": "*",
                  "left": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 153,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 157,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 147,
                    "end": 148,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  }
                ]
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 178,
      "end": 221,
      "expression": {
        "type": "AssignmentExpression",
        "start": 178,
        "end": 220,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 178,
          "end": 179,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 182,
          "end": 220,
          "properties": [
            {
              "type": "Property",
              "start": 188,
              "end": 201,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 188,
                "end": 189,
                "raw": "0",
                "value": 0
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 191,
                "end": 201,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 196,
                  "end": 201,
                  "operator": "*",
                  "left": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 197,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 201,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  }
                ]
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 222,
      "end": 265,
      "expression": {
        "type": "AssignmentExpression",
        "start": 222,
        "end": 264,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 222,
          "end": 223,
          "decorators": [],
          "name": "y",
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 226,
          "end": 264,
          "properties": [
            {
              "type": "Property",
              "start": 232,
              "end": 245,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 232,
                "end": 233,
                "decorators": [],
                "name": "s",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 235,
                "end": 245,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 240,
                  "end": 245,
                  "operator": "*",
                  "left": {
                    "type": "Identifier",
                    "start": 240,
                    "end": 241,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 244,
                    "end": 245,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 235,
                    "end": 236,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  }
                ]
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 266,
      "end": 309,
      "expression": {
        "type": "AssignmentExpression",
        "start": 266,
        "end": 308,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 266,
          "end": 267,
          "decorators": [],
          "name": "y",
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 270,
          "end": 308,
          "properties": [
            {
              "type": "Property",
              "start": 276,
              "end": 289,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 276,
                "end": 277,
                "raw": "0",
                "value": 0
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 279,
                "end": 289,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 284,
                  "end": 289,
                  "operator": "*",
                  "left": {
                    "type": "Identifier",
                    "start": 284,
                    "end": 285,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 289,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 279,
                    "end": 280,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  }
                ]
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
