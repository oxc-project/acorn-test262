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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 77,
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 55,
                      "end": 56,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 56,
                      "end": 63,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 57,
                        "end": 63
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 65,
                    "end": 75,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 66,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 66,
                      "end": 74,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 68,
                        "end": 74
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 96,
      "end": 113,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 112,
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 109,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 125,
      "expression": {
        "type": "AssignmentExpression",
        "start": 114,
        "end": 124,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 114,
          "end": 120,
          "object": {
            "type": "Identifier",
            "start": 114,
            "end": 118,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 123,
          "end": 124,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 126,
      "end": 139,
      "expression": {
        "type": "AssignmentExpression",
        "start": 126,
        "end": 138,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 126,
          "end": 132,
          "object": {
            "type": "Identifier",
            "start": 126,
            "end": 130,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 131,
            "end": 132,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 135,
          "end": 138,
          "value": "0",
          "raw": "\"0\""
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 160,
      "end": 198,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 164,
          "end": 197,
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
                    "typeParameters": null,
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
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 184,
                    "end": 195,
                    "typeParameters": null,
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 240,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 239,
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
                    "typeParameters": null,
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 258,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 257,
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
            "callee": {
              "type": "Identifier",
              "start": 252,
              "end": 255,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 276,
      "end": 292,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 280,
          "end": 291,
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
                    "typeParameters": null,
                    "params": [],
                    "returnType": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 293,
      "end": 311,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 297,
          "end": 310,
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
            "callee": {
              "type": "Identifier",
              "start": 304,
              "end": 308,
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 312,
      "end": 325,
      "expression": {
        "type": "AssignmentExpression",
        "start": 312,
        "end": 324,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 312,
          "end": 320,
          "object": {
            "type": "Identifier",
            "start": 312,
            "end": 316,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 317,
            "end": 320,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 323,
          "end": 324,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
