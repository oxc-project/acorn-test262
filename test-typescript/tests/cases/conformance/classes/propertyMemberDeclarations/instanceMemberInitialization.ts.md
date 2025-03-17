__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 241,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 22,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 22,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 20,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 18,
              "end": 19,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 39,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 32,
            "end": 39,
            "callee": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "C",
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
      "type": "ExpressionStatement",
      "start": 41,
      "end": 49,
      "expression": {
        "type": "AssignmentExpression",
        "start": 41,
        "end": 48,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 41,
          "end": 44,
          "object": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 43,
            "end": 44,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 47,
          "end": 48,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 66,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 56,
            "name": "c2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 59,
            "end": 66,
            "callee": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "name": "C",
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
      "start": 68,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 76,
            "end": 88,
            "left": {
              "type": "MemberExpression",
              "start": 76,
              "end": 79,
              "object": {
                "type": "Identifier",
                "start": 76,
                "end": 77,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "MemberExpression",
              "start": 84,
              "end": 88,
              "object": {
                "type": "Identifier",
                "start": 84,
                "end": 86,
                "name": "c2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 87,
                "end": 88,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 104,
      "end": 241,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 115,
        "name": "MyMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 122,
        "end": 241,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 128,
            "end": 187,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 139,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 139,
              "end": 187,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 140,
                  "end": 183,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 183,
                    "name": "Map_",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 161,
                      "end": 183,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 163,
                        "end": 183,
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "start": 165,
                            "end": 181,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 168,
                              "end": 174,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 169,
                                  "end": 170,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 169,
                                    "end": 170,
                                    "name": "K",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "start": 172,
                                  "end": 173,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 172,
                                    "end": 173,
                                    "name": "V",
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
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 176,
                              "end": 181,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 178,
                                "end": 181
                              }
                            }
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": true,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 185,
                "end": 187,
                "body": []
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
            "type": "PropertyDefinition",
            "start": 192,
            "end": 239,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 214,
              "name": "store",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "NewExpression",
              "start": 217,
              "end": 238,
              "callee": {
                "type": "MemberExpression",
                "start": 221,
                "end": 230,
                "object": {
                  "type": "ThisExpression",
                  "start": 221,
                  "end": 225
                },
                "property": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 230,
                  "name": "Map_",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 230,
                "end": 236,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 231,
                    "end": 232,
                    "typeName": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 232,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 234,
                    "end": 235,
                    "typeName": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 235,
                      "name": "V",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 115,
        "end": 121,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 116,
            "end": 117,
            "name": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 119,
            "end": 120,
            "name": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "name": "V",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
