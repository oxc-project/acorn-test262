inferObjectTypeFromStringLiteralToKeyof.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 234,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 49,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 27,
        "decorators": [],
        "name": "inference1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 31,
          "end": 44,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 44,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 37,
              "end": 44,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 43,
                "end": 44,
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "returnType": {
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 27,
        "end": 30,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 28,
            "end": 29,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
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
      "start": 50,
      "end": 110,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 77,
        "decorators": [],
        "name": "inference2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 81,
          "end": 90,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 87,
            "end": 90,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 89,
              "end": 90,
              "typeName": {
                "type": "Identifier",
                "start": 89,
                "end": 90,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 92,
          "end": 105,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 96,
            "end": 105,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 98,
              "end": 105,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 104,
                "end": 105,
                "typeName": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 106,
        "end": 109,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 108,
          "end": 109,
          "typeName": {
            "type": "Identifier",
            "start": 108,
            "end": 109,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 77,
        "end": 80,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 78,
            "end": 79,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
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
      "type": "VariableDeclaration",
      "start": 111,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 137,
            "decorators": [],
            "name": "two",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 137,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 128,
                "end": 137,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 128,
                    "end": 131,
                    "literal": {
                      "type": "Literal",
                      "start": 128,
                      "end": 131,
                      "raw": "\"a\"",
                      "value": "a"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 134,
                    "end": 137,
                    "literal": {
                      "type": "Literal",
                      "start": 134,
                      "end": 137,
                      "raw": "\"d\"",
                      "value": "d"
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 164,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 149,
            "end": 164,
            "arguments": [
              {
                "type": "Identifier",
                "start": 160,
                "end": 163,
                "decorators": [],
                "name": "two",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 149,
              "end": 159,
              "decorators": [],
              "name": "inference1",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 232,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 173,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 176,
            "end": 232,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 187,
                "end": 226,
                "properties": [
                  {
                    "type": "Property",
                    "start": 189,
                    "end": 193,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 189,
                      "end": 190,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 192,
                      "end": 193,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "Property",
                    "start": 195,
                    "end": 199,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 195,
                      "end": 196,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 198,
                      "end": 199,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  {
                    "type": "Property",
                    "start": 201,
                    "end": 205,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 201,
                      "end": 202,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 204,
                      "end": 205,
                      "raw": "3",
                      "value": 3
                    }
                  },
                  {
                    "type": "Property",
                    "start": 207,
                    "end": 224,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 208,
                      "decorators": [],
                      "name": "d",
                      "optional": false
                    },
                    "kind": "init",
                    "method": true,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 208,
                      "end": 224,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 212,
                        "end": 224,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 214,
                            "end": 222,
                            "argument": {
                              "type": "Identifier",
                              "start": 221,
                              "end": 222,
                              "decorators": [],
                              "name": "n",
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
                          "start": 209,
                          "end": 210,
                          "decorators": [],
                          "name": "n",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "type": "Identifier",
                "start": 228,
                "end": 231,
                "decorators": [],
                "name": "two",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 176,
              "end": 186,
              "decorators": [],
              "name": "inference2",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
