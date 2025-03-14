__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 258,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 72,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 72,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 28,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 70,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 36,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 70,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 42,
                "end": 70,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 52,
                    "end": 64,
                    "argument": {
                      "type": "Literal",
                      "start": 59,
                      "end": 63,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 38,
                "end": 41,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 40,
                  "end": 41,
                  "typeName": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
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
      "start": 73,
      "end": 137,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 137,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 126,
            "end": 135,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 129,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 129,
              "end": 135,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 132,
                "end": 135,
                "body": []
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
        "start": 79,
        "end": 80,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 110,
          "end": 119,
          "expression": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 111,
            "end": 119,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 112,
                "end": 118
              }
            ]
          }
        }
      ],
      "superClass": {
        "type": "Identifier",
        "start": 89,
        "end": 90,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 90,
        "end": 98,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 91,
            "end": 97
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 157,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 147,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 147,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 146,
                "end": 147,
                "typeName": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 147,
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 150,
            "end": 157,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "D",
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
      "start": 159,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 180,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 172,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 164,
              "end": 172,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 166,
                "end": 172
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 175,
            "end": 180,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 177,
              "end": 180,
              "decorators": [],
              "name": "foo",
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
      "start": 182,
      "end": 205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 186,
          "end": 204,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 186,
            "end": 196,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 188,
              "end": 196,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 190,
                "end": 196
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 199,
            "end": 204,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 199,
              "end": 200,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 201,
              "end": 204,
              "decorators": [],
              "name": "foo",
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
      "start": 207,
      "end": 232,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 231,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 221,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 213,
              "end": 221,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 215,
                "end": 221
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 224,
            "end": 231,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 224,
              "end": 229,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 226,
                "end": 229,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 233,
      "end": 258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 237,
          "end": 257,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 247,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 239,
              "end": 247,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 241,
                "end": 247
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 250,
            "end": 257,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 250,
              "end": 255,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 252,
                "end": 255,
                "decorators": [],
                "name": "bar",
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
