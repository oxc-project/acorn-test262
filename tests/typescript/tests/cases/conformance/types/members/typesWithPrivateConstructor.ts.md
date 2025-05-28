__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 291,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 41,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 41,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 39,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 33,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 33,
              "end": 39,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 39,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 59,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 58,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 51,
            "end": 58,
            "callee": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "C",
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
      "start": 82,
      "end": 116,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 115,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 99,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 99,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 89,
                "end": 99,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 92,
                  "end": 99,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 95,
                    "end": 99
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 102,
            "end": 115,
            "object": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 104,
              "end": 115,
              "decorators": [],
              "name": "constructor",
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
      "type": "ClassDeclaration",
      "start": 118,
      "end": 202,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 126,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 127,
        "end": 202,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 133,
            "end": 164,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 152,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 152,
              "end": 164,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 153,
                  "end": 162,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 154,
                    "end": 162,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 156,
                      "end": 162
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 169,
            "end": 200,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 188,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 188,
              "end": 200,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 189,
                  "end": 195,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 190,
                    "end": 195,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 192,
                      "end": 195
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 197,
                "end": 200,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 222,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 221,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 210,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 213,
            "end": 221,
            "callee": {
              "type": "Identifier",
              "start": 217,
              "end": 219,
              "decorators": [],
              "name": "C2",
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
      "start": 246,
      "end": 291,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 290,
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 273,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 252,
              "end": 273,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 254,
                "end": 273,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 255,
                    "end": 264,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 256,
                      "end": 264,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 258,
                        "end": 264
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 266,
                  "end": 273,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 269,
                    "end": 273
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 276,
            "end": 290,
            "object": {
              "type": "Identifier",
              "start": 276,
              "end": 278,
              "decorators": [],
              "name": "c2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 279,
              "end": 290,
              "decorators": [],
              "name": "constructor",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
