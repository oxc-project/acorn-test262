__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 525,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "fee",
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
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 78,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 24,
            "end": 33,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 28,
                "end": 32,
                "id": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 32,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 29,
                    "end": 32,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 31,
                      "end": 32,
                      "typeName": {
                        "type": "Identifier",
                        "start": 31,
                        "end": 32,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
            "start": 38,
            "end": 45,
            "expression": {
              "type": "MemberExpression",
              "start": 38,
              "end": 44,
              "object": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 40,
                "end": 44,
                "decorators": [],
                "name": "blah",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 59,
            "end": 70,
            "expression": {
              "type": "MemberExpression",
              "start": 59,
              "end": 69,
              "object": {
                "type": "Identifier",
                "start": 59,
                "end": 60,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 61,
                "end": 69,
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 80,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 93,
        "decorators": [],
        "name": "fee2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 93,
        "end": 108,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 94,
            "end": 107,
            "name": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSAnyKeyword",
              "start": 104,
              "end": 107
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 111,
        "end": 168,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 117,
            "end": 126,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 121,
                "end": 125,
                "id": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 125,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 122,
                    "end": 125,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 124,
                      "end": 125,
                      "typeName": {
                        "type": "Identifier",
                        "start": 124,
                        "end": 125,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
            "start": 131,
            "end": 138,
            "expression": {
              "type": "MemberExpression",
              "start": 131,
              "end": 137,
              "object": {
                "type": "Identifier",
                "start": 131,
                "end": 132,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 133,
                "end": 137,
                "decorators": [],
                "name": "blah",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 149,
            "end": 160,
            "expression": {
              "type": "MemberExpression",
              "start": 149,
              "end": 159,
              "object": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 151,
                "end": 159,
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 170,
      "end": 271,
      "id": {
        "type": "Identifier",
        "start": 179,
        "end": 180,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 180,
        "end": 195,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 181,
            "end": 194,
            "name": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSAnyKeyword",
              "start": 191,
              "end": 194
            },
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
          "start": 196,
          "end": 200,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 197,
            "end": 200,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 199,
              "end": 200,
              "typeName": {
                "type": "Identifier",
                "start": 199,
                "end": 200,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 202,
        "end": 271,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 208,
            "end": 219,
            "expression": {
              "type": "MemberExpression",
              "start": 208,
              "end": 218,
              "object": {
                "type": "Identifier",
                "start": 208,
                "end": 209,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 210,
                "end": 218,
                "decorators": [],
                "name": "children",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 224,
            "end": 228,
            "expression": {
              "type": "CallExpression",
              "start": 224,
              "end": 227,
              "callee": {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 233,
            "end": 241,
            "expression": {
              "type": "NewExpression",
              "start": 233,
              "end": 240,
              "callee": {
                "type": "Identifier",
                "start": 237,
                "end": 238,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 246,
            "end": 253,
            "expression": {
              "type": "MemberExpression",
              "start": 246,
              "end": 252,
              "object": {
                "type": "Identifier",
                "start": 246,
                "end": 247,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 248,
                "end": 251,
                "value": 100,
                "raw": "100"
              },
              "optional": false,
              "computed": true
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 258,
            "end": 269,
            "expression": {
              "type": "MemberExpression",
              "start": 258,
              "end": 268,
              "object": {
                "type": "Identifier",
                "start": 258,
                "end": 259,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 260,
                "end": 267,
                "value": "hello",
                "raw": "'hello'"
              },
              "optional": false,
              "computed": true
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 300,
      "end": 348,
      "id": {
        "type": "Identifier",
        "start": 305,
        "end": 309,
        "decorators": [],
        "name": "Tree",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 309,
        "end": 312,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 310,
            "end": 311,
            "name": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
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
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 315,
        "end": 348,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 315,
            "end": 316,
            "typeName": {
              "type": "Identifier",
              "start": 315,
              "end": 316,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 319,
            "end": 348,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 325,
                "end": 346,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 325,
                  "end": 333,
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 334,
                  "end": 345,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 336,
                    "end": 345,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 336,
                      "end": 343,
                      "typeName": {
                        "type": "Identifier",
                        "start": 336,
                        "end": 340,
                        "decorators": [],
                        "name": "Tree",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 340,
                        "end": 343,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 341,
                            "end": 342,
                            "typeName": {
                              "type": "Identifier",
                              "start": 341,
                              "end": 342,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 350,
      "end": 525,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 356,
        "end": 363,
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 364,
        "end": 525,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 370,
            "end": 523,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 384,
              "end": 396,
              "decorators": [],
              "name": "displayTree1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 396,
              "end": 523,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 396,
                "end": 417,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 397,
                    "end": 416,
                    "name": {
                      "type": "Identifier",
                      "start": 397,
                      "end": 398,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 407,
                      "end": 416,
                      "typeName": {
                        "type": "Identifier",
                        "start": 407,
                        "end": 411,
                        "decorators": [],
                        "name": "Tree",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 411,
                        "end": 416,
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 412,
                            "end": 415
                          }
                        ]
                      }
                    },
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
                  "start": 418,
                  "end": 425,
                  "decorators": [],
                  "name": "tree",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 422,
                    "end": 425,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 424,
                      "end": 425,
                      "typeName": {
                        "type": "Identifier",
                        "start": 424,
                        "end": 425,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 427,
                "end": 523,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 503,
                    "end": 517,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 503,
                      "end": 516,
                      "object": {
                        "type": "Identifier",
                        "start": 503,
                        "end": 507,
                        "decorators": [],
                        "name": "tree",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 508,
                        "end": 516,
                        "decorators": [],
                        "name": "children",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
