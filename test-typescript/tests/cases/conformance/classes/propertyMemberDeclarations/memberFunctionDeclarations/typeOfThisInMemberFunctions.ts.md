__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 343,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 100,
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
        "end": 100,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 49,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 49,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 49,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 30,
                    "end": 43,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 34,
                        "end": 42,
                        "id": {
                          "type": "Identifier",
                          "start": 34,
                          "end": 35,
                          "name": "r",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 38,
                          "end": 42
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
            "start": 55,
            "end": 98,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 65,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 65,
              "end": 98,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 68,
                "end": 98,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 78,
                    "end": 92,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 82,
                        "end": 91,
                        "id": {
                          "type": "Identifier",
                          "start": 82,
                          "end": 84,
                          "name": "r2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 87,
                          "end": 91
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
      "type": "ClassDeclaration",
      "start": 102,
      "end": 215,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 113,
        "end": 215,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 119,
            "end": 124,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "name": "x",
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
              "start": 120,
              "end": 123,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 122,
                "end": 123,
                "typeName": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 129,
            "end": 164,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 132,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 132,
              "end": 164,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 135,
                "end": 164,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 145,
                    "end": 158,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 149,
                        "end": 157,
                        "id": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 150,
                          "name": "r",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 153,
                          "end": 157
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
            "start": 170,
            "end": 213,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 180,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 180,
              "end": 213,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 183,
                "end": 213,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 193,
                    "end": 207,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 197,
                        "end": 206,
                        "id": {
                          "type": "Identifier",
                          "start": 197,
                          "end": 199,
                          "name": "r2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 202,
                          "end": 206
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 109,
        "end": 112,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 110,
            "end": 111,
            "name": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
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
      "start": 217,
      "end": 343,
      "id": {
        "type": "Identifier",
        "start": 223,
        "end": 224,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 241,
        "end": 343,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 247,
            "end": 252,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "name": "x",
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
              "start": 248,
              "end": 251,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 250,
                "end": 251,
                "typeName": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 251,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 257,
            "end": 292,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 257,
              "end": 260,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 260,
              "end": 292,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 263,
                "end": 292,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 273,
                    "end": 286,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 277,
                        "end": 285,
                        "id": {
                          "type": "Identifier",
                          "start": 277,
                          "end": 278,
                          "name": "r",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 281,
                          "end": 285
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
            "start": 298,
            "end": 341,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 305,
              "end": 308,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 308,
              "end": 341,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 311,
                "end": 341,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 321,
                    "end": 335,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 325,
                        "end": 334,
                        "id": {
                          "type": "Identifier",
                          "start": 325,
                          "end": 327,
                          "name": "r2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 330,
                          "end": 334
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 224,
        "end": 240,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 225,
            "end": 239,
            "name": {
              "type": "Identifier",
              "start": 225,
              "end": 226,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 235,
              "end": 239,
              "typeName": {
                "type": "Identifier",
                "start": 235,
                "end": 239,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
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
