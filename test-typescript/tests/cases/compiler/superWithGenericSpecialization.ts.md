__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 234,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 24,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 24,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 22,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 21,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 20,
                "end": 21,
                "typeName": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 26,
      "end": 172,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 55,
        "end": 172,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 61,
            "end": 66,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 65,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 64,
                "end": 65,
                "typeName": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 71,
            "end": 170,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 82,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 82,
              "end": 170,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 85,
                "end": 170,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 95,
                    "end": 103,
                    "expression": {
                      "type": "CallExpression",
                      "start": 95,
                      "end": 102,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 95,
                        "end": 100
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 33,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 45,
        "end": 46,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 46,
        "end": 54,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 47,
            "end": 53
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 33,
        "end": 36,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 34,
            "end": 35,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 174,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 190,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 190,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 190,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 181,
                "end": 190,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 182,
                  "end": 190,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 183,
                      "end": 189
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "decorators": [],
                  "name": "D",
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
      "start": 192,
      "end": 212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 211,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 205,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 205,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 199,
                "end": 205
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 208,
            "end": 211,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 208,
              "end": 209,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 210,
              "end": 211,
              "decorators": [],
              "name": "x",
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
      "start": 213,
      "end": 234,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 233,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 227,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 227,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 221,
                "end": 227
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 230,
            "end": 233,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 230,
              "end": 231,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "decorators": [],
              "name": "y",
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
