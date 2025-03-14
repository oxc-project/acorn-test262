__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 244,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 139,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 139,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 53,
            "end": 84,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 64,
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
              "start": 64,
              "end": 84,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 81,
                "end": 84,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 65,
                  "end": 79,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 79,
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 76,
                      "end": 79,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 78,
                        "end": 79,
                        "typeName": {
                          "type": "Identifier",
                          "start": 78,
                          "end": 79,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 89,
            "end": 137,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 92,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 92,
              "end": 137,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 112,
                "end": 137,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 122,
                    "end": 131,
                    "argument": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 130,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 106,
                  "end": 110,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 110,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 109,
                      "end": 110,
                      "typeName": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 110,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 92,
                "end": 105,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 93,
                    "end": 104,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 103,
                      "end": 104,
                      "typeName": {
                        "type": "Identifier",
                        "start": 103,
                        "end": 104,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 94,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 30,
        "end": 46,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 31,
            "end": 45,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 41,
              "end": 45,
              "typeName": {
                "type": "Identifier",
                "start": 41,
                "end": 45,
                "decorators": [],
                "name": "Date",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
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
      "type": "TSInterfaceDeclaration",
      "start": 141,
      "end": 188,
      "body": {
        "type": "TSInterfaceBody",
        "start": 168,
        "end": 188,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 174,
            "end": 186,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 174,
              "end": 177,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 185,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 179,
                "end": 185
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 163,
          "end": 167,
          "expression": {
            "type": "Identifier",
            "start": 163,
            "end": 167,
            "decorators": [],
            "name": "Date",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 154,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 190,
      "end": 208,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 194,
          "end": 207,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 200,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 195,
              "end": 200,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 197,
                "end": 200,
                "typeName": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 200,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 203,
            "end": 207,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 209,
      "end": 226,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 213,
          "end": 225,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 213,
            "end": 214,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 217,
            "end": 225,
            "arguments": [
              {
                "type": "Identifier",
                "start": 223,
                "end": 224,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
              "decorators": [],
              "name": "C",
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
      "start": 227,
      "end": 244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 243,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 232,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 235,
            "end": 243,
            "arguments": [
              {
                "type": "Identifier",
                "start": 241,
                "end": 242,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 235,
              "end": 240,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 235,
                "end": 236,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 237,
                "end": 240,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            "optional": false
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
