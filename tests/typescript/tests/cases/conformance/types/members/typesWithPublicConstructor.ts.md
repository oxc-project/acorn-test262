__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 61,
  "end": 304,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 61,
      "end": 101,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
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
        "start": 69,
        "end": 101,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 75,
            "end": 99,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 93,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 93,
              "end": 99,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 96,
                "end": 99,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 103,
      "end": 119,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 118,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 111,
            "end": 118,
            "callee": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
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
      "start": 120,
      "end": 154,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 153,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 137,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 137,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 127,
                "end": 137,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 130,
                  "end": 137,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 133,
                    "end": 137
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 140,
            "end": 153,
            "object": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 142,
              "end": 153,
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
      "start": 156,
      "end": 238,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 164,
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
        "start": 165,
        "end": 238,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 171,
            "end": 201,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 189,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 189,
              "end": 201,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 190,
                  "end": 199,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 191,
                    "end": 199,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 193,
                      "end": 199
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 206,
            "end": 236,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 213,
              "end": 224,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 224,
              "end": 236,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 225,
                  "end": 231,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 226,
                    "end": 231,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 228,
                      "end": 231
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 233,
                "end": 236,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 240,
      "end": 258,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 244,
          "end": 257,
          "id": {
            "type": "Identifier",
            "start": 244,
            "end": 246,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 249,
            "end": 257,
            "callee": {
              "type": "Identifier",
              "start": 253,
              "end": 255,
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
      "start": 259,
      "end": 304,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 263,
          "end": 303,
          "id": {
            "type": "Identifier",
            "start": 263,
            "end": 286,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 265,
              "end": 286,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 267,
                "end": 286,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 268,
                    "end": 277,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 269,
                      "end": 277,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 271,
                        "end": 277
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 279,
                  "end": 286,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 282,
                    "end": 286
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 289,
            "end": 303,
            "object": {
              "type": "Identifier",
              "start": 289,
              "end": 291,
              "decorators": [],
              "name": "c2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 292,
              "end": 303,
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
