__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 301,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 43,
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
        "end": 43,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 41,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 35,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 35,
              "end": 41,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 41,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 61,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 53,
            "end": 60,
            "callee": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
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
      "start": 86,
      "end": 120,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 119,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 103,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 103,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 93,
                "end": 103,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 96,
                  "end": 103,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 99,
                    "end": 103
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 106,
            "end": 119,
            "object": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 108,
              "end": 119,
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
      "start": 122,
      "end": 210,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 130,
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
        "start": 131,
        "end": 210,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 137,
            "end": 170,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 158,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 158,
              "end": 170,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 159,
                  "end": 168,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 160,
                    "end": 168,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 162,
                      "end": 168
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
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 175,
            "end": 208,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 196,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 196,
              "end": 208,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 197,
                  "end": 203,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 198,
                    "end": 203,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 200,
                      "end": 203
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 205,
                "end": 208,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 212,
      "end": 230,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 229,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 218,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 221,
            "end": 229,
            "callee": {
              "type": "Identifier",
              "start": 225,
              "end": 227,
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
      "start": 256,
      "end": 301,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 260,
          "end": 300,
          "id": {
            "type": "Identifier",
            "start": 260,
            "end": 283,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 262,
              "end": 283,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 264,
                "end": 283,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 265,
                    "end": 274,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 266,
                      "end": 274,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 268,
                        "end": 274
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 276,
                  "end": 283,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 279,
                    "end": 283
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 286,
            "end": 300,
            "object": {
              "type": "Identifier",
              "start": 286,
              "end": 288,
              "decorators": [],
              "name": "c2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 289,
              "end": 300,
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
