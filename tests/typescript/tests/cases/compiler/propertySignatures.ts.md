__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 43,
  "end": 325,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 77,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 77,
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 53,
                "end": 77,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 55,
                    "end": 64,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 55,
                      "end": 56,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 56,
                      "end": 63,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 57,
                        "end": 63
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 65,
                    "end": 75,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 66,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 66,
                      "end": 74,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 68,
                        "end": 74
                      }
                    }
                  }
                ]
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
      "start": 96,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 112,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 112,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 112,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 106,
                "end": 112,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 108,
                    "end": 110,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 109,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": null
                  }
                ]
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
      "type": "ExpressionStatement",
      "start": 114,
      "end": 125,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 114,
        "end": 124,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 114,
          "end": 120,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 114,
            "end": 118,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 123,
          "end": 124,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 126,
      "end": 139,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 126,
        "end": 138,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 126,
          "end": 132,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 126,
            "end": 130,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 131,
            "end": 132,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 135,
          "end": 138,
          "raw": "\"0\"",
          "value": "0"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 160,
      "end": 198,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 164,
          "end": 197,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 164,
            "end": 197,
            "decorators": [],
            "name": "foo3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 168,
              "end": 197,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 170,
                "end": 197,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 172,
                    "end": 183,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 174,
                      "end": 182,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 176,
                        "end": 182
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 184,
                    "end": 195,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 186,
                      "end": 194,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 188,
                        "end": 194
                      }
                    },
                    "typeParameters": null
                  }
                ]
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
      "start": 216,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 239,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 239,
            "decorators": [],
            "name": "foo4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 239,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 226,
                "end": 239,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 228,
                    "end": 237,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 230,
                      "end": 236,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 232,
                        "end": 236
                      }
                    },
                    "typeParameters": null
                  }
                ]
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
      "start": 241,
      "end": 258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 257,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 249,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 252,
            "end": 257,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 252,
              "end": 255,
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
      "start": 276,
      "end": 292,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 280,
          "end": 291,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 291,
            "decorators": [],
            "name": "foo5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 284,
              "end": 291,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 286,
                "end": 291,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 287,
                    "end": 290,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                ]
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
      "start": 293,
      "end": 311,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 297,
          "end": 310,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 297,
            "end": 301,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 304,
            "end": 310,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 304,
              "end": 308,
              "decorators": [],
              "name": "foo5",
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
      "type": "ExpressionStatement",
      "start": 312,
      "end": 325,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 312,
        "end": 324,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 312,
          "end": 320,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 312,
            "end": 316,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 317,
            "end": 320,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 323,
          "end": 324,
          "raw": "2",
          "value": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
