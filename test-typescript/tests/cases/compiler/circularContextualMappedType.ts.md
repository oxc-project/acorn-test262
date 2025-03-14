circularContextualMappedType.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 320,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 23,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Func",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 15,
        "end": 22,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 18,
          "end": 22,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 21,
            "end": 22,
            "typeName": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 12,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
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
      "type": "TSTypeAliasDeclaration",
      "start": 25,
      "end": 73,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 36,
        "decorators": [],
        "name": "Mapped",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 42,
        "end": 72,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 50,
          "end": 57,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 56,
            "end": 57,
            "typeName": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 45,
          "end": 46,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 60,
          "end": 70,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 64,
            "end": 70,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 65,
                "end": 69,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 67,
                  "end": 68,
                  "typeName": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 65,
                  "end": 66,
                  "typeName": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 60,
            "end": 64,
            "decorators": [],
            "name": "Func",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 36,
        "end": 39,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 37,
            "end": 38,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
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
      "type": "TSDeclareFunction",
      "start": 75,
      "end": 125,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 101,
        "decorators": [],
        "name": "reproduce",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 102,
          "end": 117,
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 109,
            "end": 117,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 111,
              "end": 117
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 118,
        "end": 124,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 120,
          "end": 124
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 126,
      "end": 178,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 152,
        "decorators": [],
        "name": "reproduce",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 156,
          "end": 174,
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 163,
            "end": 174,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 165,
              "end": 174,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 171,
                "end": 174,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 172,
                    "end": 173,
                    "typeName": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 173,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 165,
                "end": 171,
                "decorators": [],
                "name": "Mapped",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 175,
        "end": 178,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 177,
          "end": 178,
          "typeName": {
            "type": "Identifier",
            "start": 177,
            "end": 178,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 152,
        "end": 155,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 153,
            "end": 154,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
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
      "start": 180,
      "end": 226,
      "expression": {
        "type": "CallExpression",
        "start": 180,
        "end": 225,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 190,
            "end": 224,
            "properties": [
              {
                "type": "Property",
                "start": 194,
                "end": 222,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 198,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 202,
                  "end": 222,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 208,
                    "end": 222,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 210,
                        "end": 220,
                        "argument": {
                          "type": "Literal",
                          "start": 217,
                          "end": 220,
                          "raw": "123",
                          "value": 123
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 180,
          "end": 189,
          "decorators": [],
          "name": "reproduce",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 228,
      "end": 267,
      "expression": {
        "type": "CallExpression",
        "start": 228,
        "end": 266,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 238,
            "end": 265,
            "properties": [
              {
                "type": "Property",
                "start": 242,
                "end": 263,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 242,
                  "end": 246,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 246,
                  "end": 263,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 249,
                    "end": 263,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 251,
                        "end": 261,
                        "argument": {
                          "type": "Literal",
                          "start": 258,
                          "end": 261,
                          "raw": "123",
                          "value": 123
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
        ],
        "callee": {
          "type": "Identifier",
          "start": 228,
          "end": 237,
          "decorators": [],
          "name": "reproduce",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 269,
      "end": 319,
      "expression": {
        "type": "CallExpression",
        "start": 269,
        "end": 318,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 279,
            "end": 317,
            "properties": [
              {
                "type": "Property",
                "start": 283,
                "end": 315,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 287,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 289,
                  "end": 315,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 301,
                    "end": 315,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 303,
                        "end": 313,
                        "argument": {
                          "type": "Literal",
                          "start": 310,
                          "end": 313,
                          "raw": "123",
                          "value": 123
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
        ],
        "callee": {
          "type": "Identifier",
          "start": 269,
          "end": 278,
          "decorators": [],
          "name": "reproduce",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
