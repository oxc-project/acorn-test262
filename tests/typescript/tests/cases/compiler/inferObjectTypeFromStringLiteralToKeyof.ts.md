__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 233,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 27,
        "decorators": [],
        "name": "inference1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 27,
        "end": 30,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 28,
            "end": 29,
            "name": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "TSDeclareFunction",
      "start": 50,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 77,
        "decorators": [],
        "name": "inference2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 77,
        "end": 80,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 78,
            "end": 79,
            "name": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 111,
      "end": 138,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 137,
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
                      "value": "a",
                      "raw": "\"a\""
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
                      "value": "d",
                      "raw": "\"d\""
                    }
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 165,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 164,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 149,
            "end": 164,
            "callee": {
              "type": "Identifier",
              "start": 149,
              "end": 159,
              "decorators": [],
              "name": "inference1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 160,
                "end": 163,
                "decorators": [],
                "name": "two",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 233,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 232,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 173,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 176,
            "end": 232,
            "callee": {
              "type": "Identifier",
              "start": 176,
              "end": 186,
              "decorators": [],
              "name": "inference2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 189,
                      "end": 190,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 192,
                      "end": 193,
                      "value": 1,
                      "raw": "1"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 195,
                    "end": 199,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 195,
                      "end": 196,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 198,
                      "end": 199,
                      "value": 2,
                      "raw": "2"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 201,
                    "end": 205,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 201,
                      "end": 202,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 204,
                      "end": 205,
                      "value": 3,
                      "raw": "3"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 207,
                    "end": 224,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 208,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 208,
                      "end": 224,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 209,
                          "end": 210,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
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
                              "optional": false,
                              "typeAnnotation": null
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
              },
              {
                "type": "Identifier",
                "start": 228,
                "end": 231,
                "decorators": [],
                "name": "two",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
