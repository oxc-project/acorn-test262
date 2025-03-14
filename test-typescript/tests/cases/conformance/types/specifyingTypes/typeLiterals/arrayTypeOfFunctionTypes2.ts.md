arrayTypeOfFunctionTypes2.ts
```json
{
  "type": "Program",
  "start": 43,
  "end": 285,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 68,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 68,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 68,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 50,
                "end": 68,
                "abstract": false,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 57,
                  "end": 68,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 60,
                    "end": 68,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 60,
                      "end": 66
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
      "start": 70,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 78,
            "end": 82,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 80,
              "end": 81,
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
      "start": 84,
      "end": 101,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 100,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 90,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 93,
            "end": 100,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
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
      "start": 102,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 115,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 109,
            "decorators": [],
            "name": "r2b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 112,
            "end": 115,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
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
      "start": 118,
      "end": 146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 145,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 145,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 145,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 126,
                "end": 145,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 126,
                  "end": 143,
                  "members": [
                    {
                      "type": "TSConstructSignatureDeclaration",
                      "start": 128,
                      "end": 141,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 133,
                        "end": 141,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 135,
                          "end": 141
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
      "start": 147,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 153,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 156,
            "end": 160,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 158,
              "end": 159,
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
      "start": 162,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 179,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 168,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 171,
            "end": 179,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 175,
              "end": 177,
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
      "start": 181,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 199,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 188,
            "decorators": [],
            "name": "r4b",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 191,
            "end": 199,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 195,
              "end": 197,
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
      "start": 202,
      "end": 234,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 233,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 233,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 208,
              "end": 233,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 210,
                "end": 233,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 215,
                  "end": 233,
                  "params": [
                    {
                      "type": "TSConstructorType",
                      "start": 216,
                      "end": 232,
                      "abstract": false,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 223,
                        "end": 232,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 226,
                          "end": 232
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 215,
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
      "start": 235,
      "end": 250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 249,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 241,
            "decorators": [],
            "name": "r5",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 244,
            "end": 249,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 244,
              "end": 246,
              "decorators": [],
              "name": "x2",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 247,
              "end": 248,
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
      "start": 251,
      "end": 269,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 268,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 257,
            "decorators": [],
            "name": "r6",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 260,
            "end": 268,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 264,
              "end": 266,
              "decorators": [],
              "name": "r5",
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
      "start": 270,
      "end": 285,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 284,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 277,
            "decorators": [],
            "name": "r6b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 280,
            "end": 284,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 280,
              "end": 282,
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
    }
  ],
  "sourceType": "script"
}
```
