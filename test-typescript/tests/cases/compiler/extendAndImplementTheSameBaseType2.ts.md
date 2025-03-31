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
        "start": 11,
        "end": 72,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 28,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "name": "foo",
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
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 70,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 36,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 70,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "declare": false,
              "typeParameters": null,
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
      "type": "ClassDeclaration",
      "start": 73,
      "end": 137,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 80,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 89,
        "end": 90,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 137,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 126,
            "end": 135,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 129,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 129,
              "end": 135,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 132,
                "end": 135,
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
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 110,
          "end": 119,
          "expression": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
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
      "abstract": false,
      "declare": false,
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
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 147,
            "name": "d",
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
                  "name": "D",
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
          "init": {
            "type": "NewExpression",
            "start": 150,
            "end": 157,
            "callee": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "name": "D",
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
      "start": 159,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 180,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 172,
            "name": "r",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 164,
              "end": 172,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 166,
                "end": 172
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 175,
            "end": 180,
            "object": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 177,
              "end": 180,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 186,
            "end": 196,
            "name": "r2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 188,
              "end": 196,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 190,
                "end": 196
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 199,
            "end": 204,
            "object": {
              "type": "Identifier",
              "start": 199,
              "end": 200,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 201,
              "end": 204,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 221,
            "name": "r3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 213,
              "end": 221,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 215,
                "end": 221
              }
            },
            "decorators": [],
            "optional": false
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
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 226,
                "end": 229,
                "name": "bar",
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
      "start": 233,
      "end": 258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 237,
          "end": 257,
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 247,
            "name": "r4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 239,
              "end": 247,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 241,
                "end": 247
              }
            },
            "decorators": [],
            "optional": false
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
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 252,
                "end": 255,
                "name": "bar",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
