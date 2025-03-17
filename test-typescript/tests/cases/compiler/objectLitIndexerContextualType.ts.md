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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 20,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 22,
                    "end": 28
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 52,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 31,
                "end": 52,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 32,
                    "end": 41,
                    "name": "s",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 33,
                      "end": 41,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 35,
                        "end": 41
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 112,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
        "name": "J",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 77,
                  "end": 85,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 79,
                    "end": 85
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 109,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 88,
                "end": 109,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 89,
                    "end": 98,
                    "name": "s",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 90,
                      "end": 98,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 92,
                        "end": 98
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 122,
            "name": "x",
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
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 132,
            "name": "y",
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
                  "name": "J",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
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
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 144,
                "end": 145,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 147,
                "end": 157,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 147,
                    "end": 148,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BinaryExpression",
                  "start": 152,
                  "end": 157,
                  "left": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 153,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 157,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeParameters": null,
                "returnType": null
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
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
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
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
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 188,
                "end": 189,
                "value": 0,
                "raw": "0"
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 191,
                "end": 201,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BinaryExpression",
                  "start": 196,
                  "end": 201,
                  "left": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 197,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 201,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeParameters": null,
                "returnType": null
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
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
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
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
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 232,
                "end": 233,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 235,
                "end": 245,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 235,
                    "end": 236,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BinaryExpression",
                  "start": 240,
                  "end": 245,
                  "left": {
                    "type": "Identifier",
                    "start": 240,
                    "end": 241,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "start": 244,
                    "end": 245,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeParameters": null,
                "returnType": null
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
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
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
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
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 276,
                "end": 277,
                "value": 0,
                "raw": "0"
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 279,
                "end": 289,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 279,
                    "end": 280,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BinaryExpression",
                  "start": 284,
                  "end": 289,
                  "left": {
                    "type": "Identifier",
                    "start": 284,
                    "end": 285,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 289,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeParameters": null,
                "returnType": null
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
