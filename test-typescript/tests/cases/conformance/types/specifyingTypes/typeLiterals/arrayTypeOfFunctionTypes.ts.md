__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 43,
  "end": 289,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 64,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 64,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 50,
                "end": 64,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 53,
                  "end": 64,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 56,
                    "end": 64,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 56,
                      "end": 62
                    }
                  }
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
      "start": 66,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 78,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 74,
            "end": 78,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 76,
              "end": 77,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 80,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 92,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 86,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 89,
            "end": 92,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "r",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 111,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 101,
            "decorators": [],
            "name": "r2b",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 104,
            "end": 111,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "r",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 139,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 138,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 138,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 138,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 122,
                "end": 138,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 122,
                  "end": 136,
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 124,
                      "end": 134,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 126,
                        "end": 134,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 128,
                          "end": 134
                        }
                      }
                    }
                  ]
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
      "start": 140,
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 154,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 146,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 149,
            "end": 154,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 149,
              "end": 151,
              "decorators": [],
              "name": "x2",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 152,
              "end": 153,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 170,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 169,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 162,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 165,
            "end": 169,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 165,
              "end": 167,
              "decorators": [],
              "name": "r3",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 189,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 178,
            "decorators": [],
            "name": "r4b",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 181,
            "end": 189,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 185,
              "end": 187,
              "decorators": [],
              "name": "r3",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 228,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 228,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 207,
              "end": 228,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 209,
                "end": 228,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 214,
                  "end": 228,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 215,
                      "end": 227,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 218,
                        "end": 227,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 221,
                          "end": 227
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 214,
                  "decorators": [],
                  "name": "Array",
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
      "start": 230,
      "end": 245,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 234,
          "end": 244,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 234,
            "end": 236,
            "decorators": [],
            "name": "r5",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 239,
            "end": 244,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 239,
              "end": 241,
              "decorators": [],
              "name": "x2",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 242,
              "end": 243,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 246,
      "end": 260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 259,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 252,
            "decorators": [],
            "name": "r6",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 255,
            "end": 259,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 255,
              "end": 257,
              "decorators": [],
              "name": "r5",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 261,
      "end": 280,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 265,
          "end": 279,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 265,
            "end": 268,
            "decorators": [],
            "name": "r6b",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 271,
            "end": 279,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 275,
              "end": 277,
              "decorators": [],
              "name": "r5",
              "optional": false
            }
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
