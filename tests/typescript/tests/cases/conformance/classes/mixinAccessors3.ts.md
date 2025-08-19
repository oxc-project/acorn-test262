__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 14
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 35,
                        "end": 39
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 41,
                            "end": 44
                          },
                          "start": 41,
                          "end": 46
                        },
                        "start": 39,
                        "end": 46
                      },
                      "value": null,
                      "start": 32,
                      "end": 46
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 49,
                      "end": 51
                    },
                    "start": 47,
                    "end": 51
                  },
                  "start": 27,
                  "end": 51
                }
              ],
              "start": 25,
              "end": 53
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 53
          }
        ],
        "start": 14,
        "end": 54
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "superclass",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 68
              },
              "typeArguments": null,
              "start": 67,
              "end": 68
            },
            "start": 65,
            "end": 68
          },
          "start": 55,
          "end": 68
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "superclass",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 105
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 116,
                      "end": 120
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "",
                              "raw": "\"\"",
                              "start": 138,
                              "end": 140
                            },
                            "start": 131,
                            "end": 141
                          }
                        ],
                        "start": 123,
                        "end": 147
                      },
                      "expression": false,
                      "start": 120,
                      "end": 147
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 112,
                    "end": 147
                  }
                ],
                "start": 106,
                "end": 151
              },
              "abstract": false,
              "declare": false,
              "start": 81,
              "end": 151
            },
            "start": 74,
            "end": 152
          }
        ],
        "start": 70,
        "end": 154
      },
      "expression": false,
      "start": 0,
      "end": 154
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 171
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 184
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 188,
                      "end": 194
                    },
                    "start": 186,
                    "end": 194
                  },
                  "start": 185,
                  "end": 194
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 196,
                "end": 198
              },
              "expression": false,
              "start": 184,
              "end": 198
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 176,
            "end": 198
          }
        ],
        "start": 172,
        "end": 200
      },
      "abstract": false,
      "declare": false,
      "start": 156,
      "end": 200
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 224
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 233,
          "end": 238
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "BaseClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 248
          }
        ],
        "optional": false,
        "start": 233,
        "end": 249
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 263
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 279,
                      "end": 281
                    },
                    "start": 272,
                    "end": 282
                  }
                ],
                "start": 266,
                "end": 286
              },
              "expression": false,
              "start": 263,
              "end": 286
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 255,
            "end": 286
          }
        ],
        "start": 250,
        "end": 288
      },
      "abstract": false,
      "declare": false,
      "start": 211,
      "end": 288
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 288
}
```
