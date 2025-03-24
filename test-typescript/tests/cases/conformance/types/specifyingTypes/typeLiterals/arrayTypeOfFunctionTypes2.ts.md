__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 68,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 68,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 50,
                "end": 68,
                "abstract": false,
                "typeParameters": null,
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
      "start": 70,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 82,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 78,
            "end": 82,
            "object": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 80,
              "end": 81,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 90,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 93,
            "end": 100,
            "callee": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "name": "r",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 109,
            "name": "r2b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 112,
            "end": 115,
            "callee": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "name": "r",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 145,
            "name": "x2",
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
                      "typeParameters": null,
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
      "start": 147,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 160,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 153,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 156,
            "end": 160,
            "object": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 158,
              "end": 159,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 168,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 171,
            "end": 179,
            "callee": {
              "type": "Identifier",
              "start": 175,
              "end": 177,
              "name": "r3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 188,
            "name": "r4b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 191,
            "end": 199,
            "callee": {
              "type": "Identifier",
              "start": 195,
              "end": 197,
              "name": "r3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 233,
            "name": "x3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 208,
              "end": 233,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 210,
                "end": 233,
                "typeName": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 215,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                      "typeParameters": null,
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
                }
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
      "start": 235,
      "end": 250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 249,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 241,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 244,
            "end": 249,
            "object": {
              "type": "Identifier",
              "start": 244,
              "end": 246,
              "name": "x2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 247,
              "end": 248,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 257,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 260,
            "end": 268,
            "callee": {
              "type": "Identifier",
              "start": 264,
              "end": 266,
              "name": "r5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 277,
            "name": "r6b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 280,
            "end": 284,
            "callee": {
              "type": "Identifier",
              "start": 280,
              "end": 282,
              "name": "r5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
