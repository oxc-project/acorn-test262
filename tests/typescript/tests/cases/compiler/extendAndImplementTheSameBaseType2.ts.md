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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 72,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 28,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 70,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 36,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 70,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 73,
      "end": 137,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 80,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 89,
        "end": 90,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
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
            "optional": false,
            "typeAnnotation": null
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
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 137,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 126,
            "end": 135,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 129,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 129,
              "end": 135,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 132,
                "end": 135,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 158,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 157,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 150,
            "end": 157,
            "callee": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 181,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 180,
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
            "object": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 177,
              "end": 180,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 182,
      "end": 205,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 186,
          "end": 204,
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
            "object": {
              "type": "Identifier",
              "start": 199,
              "end": 200,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 201,
              "end": 204,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 207,
      "end": 232,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 231,
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
            "callee": {
              "type": "MemberExpression",
              "start": 224,
              "end": 229,
              "object": {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 226,
                "end": 229,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
      "start": 233,
      "end": 258,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 237,
          "end": 257,
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
            "callee": {
              "type": "MemberExpression",
              "start": 250,
              "end": 255,
              "object": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 252,
                "end": 255,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
