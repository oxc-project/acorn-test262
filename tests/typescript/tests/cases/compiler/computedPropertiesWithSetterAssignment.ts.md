__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 299,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 18,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 10,
            "end": 18,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 10,
              "end": 16,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 21,
      "end": 54,
      "body": {
        "type": "TSEnumBody",
        "start": 38,
        "end": 54,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 44,
            "end": 51,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 48,
              "end": 51,
              "raw": "'k'",
              "value": "k"
            }
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 37,
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 56,
      "end": 194,
      "body": {
        "type": "TSInterfaceBody",
        "start": 70,
        "end": 194,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 76,
            "end": 97,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 85,
                "end": 96,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 88,
                  "end": 96,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 89,
                      "end": 95
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 88,
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 102,
            "end": 129,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 108,
                "end": 127,
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 109,
                  "end": 127,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 111,
                    "end": 127,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 119,
                      "end": 127,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 120,
                          "end": 126
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 119,
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 135,
            "end": 158,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 157,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 146,
                "end": 157,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 149,
                  "end": 157,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 150,
                      "end": 156
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 149,
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 163,
            "end": 192,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 171,
                "end": 190,
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 172,
                  "end": 190,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 174,
                    "end": 190,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 182,
                      "end": 190,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 183,
                          "end": 189
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 182,
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 69,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 196,
      "end": 219,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 218,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 218,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 213,
              "end": 218,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 215,
                "end": 218,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 218,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 221,
      "end": 237,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 221,
        "end": 236,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 221,
          "end": 226,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 221,
            "end": 224,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 225,
            "end": 226,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ArrayExpression",
          "start": 229,
          "end": 236,
          "elements": [
            {
              "type": "Literal",
              "start": 230,
              "end": 235,
              "raw": "'foo'",
              "value": "foo"
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 238,
      "end": 257,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 238,
        "end": 256,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 238,
          "end": 246,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 238,
            "end": 241,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 242,
            "end": 245,
            "raw": "'k'",
            "value": "k"
          }
        },
        "right": {
          "type": "ArrayExpression",
          "start": 249,
          "end": 256,
          "elements": [
            {
              "type": "Literal",
              "start": 250,
              "end": 255,
              "raw": "'foo'",
              "value": "foo"
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 258,
      "end": 281,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 258,
        "end": 280,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 258,
          "end": 270,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 258,
            "end": 261,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "start": 262,
            "end": 269,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 262,
              "end": 267,
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "start": 273,
          "end": 280,
          "elements": [
            {
              "type": "Literal",
              "start": 274,
              "end": 279,
              "raw": "'foo'",
              "value": "foo"
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 282,
      "end": 299,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 282,
        "end": 298,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 282,
          "end": 288,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 282,
            "end": 285,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 286,
            "end": 287,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ArrayExpression",
          "start": 291,
          "end": 298,
          "elements": [
            {
              "type": "Literal",
              "start": 292,
              "end": 297,
              "raw": "'foo'",
              "value": "foo"
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
