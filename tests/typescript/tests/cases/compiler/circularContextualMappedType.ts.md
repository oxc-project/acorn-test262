__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 319,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 23,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Func",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 15,
        "end": 22,
        "typeParameters": null,
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 25,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 36,
        "decorators": [],
        "name": "Mapped",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 42,
        "end": 72,
        "key": {
          "type": "Identifier",
          "start": 45,
          "end": 46,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 60,
          "end": 70,
          "typeName": {
            "type": "Identifier",
            "start": 60,
            "end": 64,
            "decorators": [],
            "name": "Func",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 64,
            "end": 70,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 65,
                "end": 69,
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 75,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 101,
        "decorators": [],
        "name": "reproduce",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 126,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 152,
        "decorators": [],
        "name": "reproduce",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 152,
        "end": 155,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 153,
            "end": 154,
            "name": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
              "typeName": {
                "type": "Identifier",
                "start": 165,
                "end": 171,
                "decorators": [],
                "name": "Mapped",
                "optional": false,
                "typeAnnotation": null
              },
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 180,
      "end": 226,
      "expression": {
        "type": "CallExpression",
        "start": 180,
        "end": 225,
        "callee": {
          "type": "Identifier",
          "start": 180,
          "end": 189,
          "decorators": [],
          "name": "reproduce",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 198,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 202,
                  "end": 222,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                          "value": 123,
                          "raw": "123"
                        }
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 228,
      "end": 267,
      "expression": {
        "type": "CallExpression",
        "start": 228,
        "end": 266,
        "callee": {
          "type": "Identifier",
          "start": 228,
          "end": 237,
          "decorators": [],
          "name": "reproduce",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 242,
                  "end": 246,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 246,
                  "end": 263,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                          "value": 123,
                          "raw": "123"
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 269,
      "end": 319,
      "expression": {
        "type": "CallExpression",
        "start": 269,
        "end": 318,
        "callee": {
          "type": "Identifier",
          "start": 269,
          "end": 278,
          "decorators": [],
          "name": "reproduce",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 287,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 289,
                  "end": 315,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                          "value": 123,
                          "raw": "123"
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
