__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 268,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 189,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 189,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 40,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 31,
              "name": "size",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 39,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 33,
                "end": 39
              }
            },
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 45,
            "end": 57,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "name": "t",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 56,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 63,
            "end": 118,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 74,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 74,
              "end": 118,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 75,
                  "end": 84,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 76,
                    "end": 84,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 78,
                      "end": 84
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 86,
                "end": 118,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 97,
                    "end": 111,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 97,
                      "end": 110,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 97,
                        "end": 106,
                        "object": {
                          "type": "ThisExpression",
                          "start": 97,
                          "end": 101
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 102,
                          "end": 106,
                          "name": "size",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 110,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 124,
            "end": 186,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 136,
              "name": "clone",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 136,
              "end": 186,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 139,
                "end": 186,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 150,
                    "end": 179,
                    "argument": {
                      "type": "NewExpression",
                      "start": 157,
                      "end": 178,
                      "callee": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 164,
                        "name": "Bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 168,
                          "end": 177,
                          "object": {
                            "type": "ThisExpression",
                            "start": 168,
                            "end": 172
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 173,
                            "end": 177,
                            "name": "size",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 164,
                        "end": 167,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 165,
                            "end": 166,
                            "typeName": {
                              "type": "Identifier",
                              "start": 165,
                              "end": 166,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 12,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 191,
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 209,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 209,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 196,
              "end": 209,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 198,
                "end": 209,
                "typeName": {
                  "type": "Identifier",
                  "start": 198,
                  "end": 201,
                  "name": "Bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 201,
                  "end": 209,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 202,
                      "end": 208
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
      "start": 212,
      "end": 231,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 230,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 218,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 221,
            "end": 230,
            "callee": {
              "type": "MemberExpression",
              "start": 221,
              "end": 228,
              "object": {
                "type": "Identifier",
                "start": 221,
                "end": 222,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 223,
                "end": 228,
                "name": "clone",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
      "start": 232,
      "end": 252,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 251,
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 251,
            "name": "b3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 238,
              "end": 251,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 240,
                "end": 251,
                "typeName": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 243,
                  "name": "Bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 243,
                  "end": 251,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 244,
                      "end": 250
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
      "type": "ExpressionStatement",
      "start": 253,
      "end": 260,
      "expression": {
        "type": "AssignmentExpression",
        "start": 253,
        "end": 259,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 253,
          "end": 254,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 257,
          "end": 259,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 261,
      "end": 268,
      "expression": {
        "type": "AssignmentExpression",
        "start": 261,
        "end": 267,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 261,
          "end": 262,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 265,
          "end": 267,
          "name": "b3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
