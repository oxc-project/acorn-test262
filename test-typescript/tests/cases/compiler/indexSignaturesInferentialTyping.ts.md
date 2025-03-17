__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 297,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 71,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 71,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 52,
            "end": 69,
            "argument": {
              "type": "Identifier",
              "start": 59,
              "end": 68,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 16,
          "end": 45,
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 45,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 23,
              "end": 45,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 25,
                  "end": 43,
                  "accessibility": null,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 26,
                      "end": 39,
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 31,
                        "end": 39,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 33,
                          "end": 39
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 40,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 42,
                      "end": 43,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 42,
                        "end": 43,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 46,
        "end": 49,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 48,
          "end": 49,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 72,
      "end": 143,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 122,
        "end": 143,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 124,
            "end": 141,
            "argument": {
              "type": "Identifier",
              "start": 131,
              "end": 140,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 84,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 88,
          "end": 117,
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 93,
            "end": 117,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 95,
              "end": 117,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 97,
                  "end": 115,
                  "accessibility": null,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 98,
                      "end": 111,
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 103,
                        "end": 111,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 105,
                          "end": 111
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 112,
                    "end": 115,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 114,
                      "end": 115,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 114,
                        "end": 115,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 118,
        "end": 121,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 120,
          "end": 121,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 120,
            "end": 121,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 84,
        "end": 87,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 85,
            "end": 86,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 174,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 173,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 151,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 154,
            "end": 173,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 158,
                "end": 172,
                "properties": [
                  {
                    "type": "Property",
                    "start": 160,
                    "end": 164,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 160,
                      "end": 161,
                      "raw": "0",
                      "value": 0
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 163,
                      "end": 164,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "Property",
                    "start": 166,
                    "end": 170,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 166,
                      "end": 167,
                      "raw": "1",
                      "value": 1
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 169,
                      "end": 170,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 154,
              "end": 157,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 206,
      "end": 235,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 234,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 212,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 215,
            "end": 234,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 219,
                "end": 233,
                "properties": [
                  {
                    "type": "Property",
                    "start": 221,
                    "end": 225,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 221,
                      "end": 222,
                      "raw": "0",
                      "value": 0
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 224,
                      "end": 225,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "Property",
                    "start": 227,
                    "end": 231,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 227,
                      "end": 228,
                      "raw": "1",
                      "value": 1
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 230,
                      "end": 231,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 215,
              "end": 218,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 236,
      "end": 270,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 269,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 242,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 245,
            "end": 269,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 249,
                "end": 268,
                "properties": [
                  {
                    "type": "Property",
                    "start": 251,
                    "end": 258,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 251,
                      "end": 255,
                      "decorators": [],
                      "name": "zero",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 257,
                      "end": 258,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "Property",
                    "start": 260,
                    "end": 266,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 263,
                      "decorators": [],
                      "name": "one",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 265,
                      "end": 266,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 245,
              "end": 248,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
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
