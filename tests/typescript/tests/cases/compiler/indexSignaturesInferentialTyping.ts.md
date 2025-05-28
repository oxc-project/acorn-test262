__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 296,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 40,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 42,
                      "end": 43,
                      "typeName": {
                        "type": "Identifier",
                        "start": 42,
                        "end": 43,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
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
          "typeName": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 72,
      "end": 143,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 84,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 84,
        "end": 87,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 85,
            "end": 86,
            "name": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
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
          "typeName": {
            "type": "Identifier",
            "start": 120,
            "end": 121,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
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
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 174,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 173,
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
            "callee": {
              "type": "Identifier",
              "start": 154,
              "end": 157,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "start": 160,
                      "end": 161,
                      "value": 0,
                      "raw": "0"
                    },
                    "value": {
                      "type": "Literal",
                      "start": 163,
                      "end": 164,
                      "value": 0,
                      "raw": "0"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 166,
                    "end": 170,
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "start": 166,
                      "end": 167,
                      "value": 1,
                      "raw": "1"
                    },
                    "value": {
                      "type": "Literal",
                      "start": 169,
                      "end": 170,
                      "value": 1,
                      "raw": "1"
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 206,
      "end": 235,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 234,
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
            "callee": {
              "type": "Identifier",
              "start": 215,
              "end": 218,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "start": 221,
                      "end": 222,
                      "value": 0,
                      "raw": "0"
                    },
                    "value": {
                      "type": "Literal",
                      "start": 224,
                      "end": 225,
                      "value": 0,
                      "raw": "0"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 227,
                    "end": 231,
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "start": 227,
                      "end": 228,
                      "value": 1,
                      "raw": "1"
                    },
                    "value": {
                      "type": "Literal",
                      "start": 230,
                      "end": 231,
                      "value": 1,
                      "raw": "1"
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 236,
      "end": 270,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 269,
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
            "callee": {
              "type": "Identifier",
              "start": 245,
              "end": 248,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 251,
                      "end": 255,
                      "decorators": [],
                      "name": "zero",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 257,
                      "end": 258,
                      "value": 0,
                      "raw": "0"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 260,
                    "end": 266,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 263,
                      "decorators": [],
                      "name": "one",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 265,
                      "end": 266,
                      "value": 1,
                      "raw": "1"
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
