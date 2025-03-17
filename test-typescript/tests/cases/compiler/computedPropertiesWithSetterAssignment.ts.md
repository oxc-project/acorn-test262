__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 300,
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 10,
            "end": 18,
            "callee": {
              "type": "Identifier",
              "start": 10,
              "end": 16,
              "name": "Symbol",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 21,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 37,
        "name": "Props",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 44,
          "end": 51,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 48,
            "end": 51,
            "value": "k",
            "raw": "'k'"
          },
          "computed": false
        }
      ],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 38,
        "end": 54,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 44,
            "end": 51,
            "id": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "name": "k",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 48,
              "end": 51,
              "value": "k",
              "raw": "'k'"
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 56,
      "end": 194,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 69,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 70,
        "end": 194,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 76,
            "end": 97,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "name": "k",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 85,
                "end": 96,
                "typeName": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 88,
                  "name": "Set",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 102,
            "end": 129,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "name": "k",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 108,
                "end": 127,
                "name": "v",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 109,
                  "end": 127,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 111,
                    "end": 127,
                    "typeName": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 119,
                      "name": "Iterable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 135,
            "end": 158,
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "name": "k",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 157,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 146,
                "end": 157,
                "typeName": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 149,
                  "name": "Set",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 163,
            "end": 192,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
              "name": "k",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 171,
                "end": 190,
                "name": "v",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 172,
                  "end": 190,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 174,
                    "end": 190,
                    "typeName": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 182,
                      "name": "Iterable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 218,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 213,
              "end": 218,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 215,
                "end": 218,
                "typeName": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 218,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 221,
      "end": 237,
      "expression": {
        "type": "AssignmentExpression",
        "start": 221,
        "end": 236,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 221,
          "end": 226,
          "object": {
            "type": "Identifier",
            "start": 221,
            "end": 224,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 225,
            "end": 226,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
              "value": "foo",
              "raw": "'foo'"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 238,
      "end": 257,
      "expression": {
        "type": "AssignmentExpression",
        "start": 238,
        "end": 256,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 238,
          "end": 246,
          "object": {
            "type": "Identifier",
            "start": 238,
            "end": 241,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 242,
            "end": 245,
            "value": "k",
            "raw": "'k'"
          },
          "computed": true,
          "optional": false
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
              "value": "foo",
              "raw": "'foo'"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 258,
      "end": 281,
      "expression": {
        "type": "AssignmentExpression",
        "start": 258,
        "end": 280,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 258,
          "end": 270,
          "object": {
            "type": "Identifier",
            "start": 258,
            "end": 261,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "MemberExpression",
            "start": 262,
            "end": 269,
            "object": {
              "type": "Identifier",
              "start": 262,
              "end": 267,
              "name": "Props",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "name": "k",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": true,
          "optional": false
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
              "value": "foo",
              "raw": "'foo'"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 282,
      "end": 299,
      "expression": {
        "type": "AssignmentExpression",
        "start": 282,
        "end": 298,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 282,
          "end": 288,
          "object": {
            "type": "Identifier",
            "start": 282,
            "end": 285,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 286,
            "end": 287,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
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
              "value": "foo",
              "raw": "'foo'"
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
