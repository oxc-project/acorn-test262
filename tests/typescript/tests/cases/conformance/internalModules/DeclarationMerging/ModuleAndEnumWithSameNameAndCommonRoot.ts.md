__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "enumdule",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 15
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 41
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
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 52,
                      "end": 63
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
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 74,
                                "end": 80
                              },
                              "start": 72,
                              "end": 80
                            },
                            "start": 71,
                            "end": 80
                          },
                          "readonly": false,
                          "static": false,
                          "start": 64,
                          "end": 80
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 92,
                                "end": 98
                              },
                              "start": 90,
                              "end": 98
                            },
                            "start": 89,
                            "end": 98
                          },
                          "readonly": false,
                          "static": false,
                          "start": 82,
                          "end": 98
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 100,
                        "end": 103
                      },
                      "expression": false,
                      "start": 63,
                      "end": 103
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 52,
                    "end": 103
                  }
                ],
                "start": 42,
                "end": 109
              },
              "abstract": false,
              "declare": false,
              "start": 30,
              "end": 109
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 23,
            "end": 109
          }
        ],
        "start": 16,
        "end": 111
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 111
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "enumdule",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 126
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 136
            },
            "initializer": null,
            "computed": false,
            "start": 133,
            "end": 136
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Blue",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 142
            },
            "initializer": null,
            "computed": false,
            "start": 138,
            "end": 142
          }
        ],
        "start": 127,
        "end": 144
      },
      "const": false,
      "declare": false,
      "start": 113,
      "end": 144
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "enumdule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 153,
                  "end": 161
                },
                "typeArguments": null,
                "start": 153,
                "end": 161
              },
              "start": 151,
              "end": 161
            },
            "start": 150,
            "end": 161
          },
          "init": null,
          "definite": false,
          "start": 150,
          "end": 161
        }
      ],
      "declare": false,
      "start": 146,
      "end": 162
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 168
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "enumdule",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 179
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 183
            },
            "optional": false,
            "computed": false,
            "start": 171,
            "end": 183
          },
          "definite": false,
          "start": 167,
          "end": 183
        }
      ],
      "declare": false,
      "start": 163,
      "end": 184
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 195,
                      "end": 196
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 198,
                        "end": 204
                      },
                      "start": 196,
                      "end": 204
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 195,
                    "end": 205
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 206,
                      "end": 207
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 209,
                        "end": 215
                      },
                      "start": 207,
                      "end": 215
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 206,
                    "end": 215
                  }
                ],
                "start": 193,
                "end": 217
              },
              "start": 191,
              "end": 217
            },
            "start": 190,
            "end": 217
          },
          "init": null,
          "definite": false,
          "start": 190,
          "end": 217
        }
      ],
      "declare": false,
      "start": 186,
      "end": 218
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 224
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "enumdule",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 239
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 245
              },
              "optional": false,
              "computed": false,
              "start": 231,
              "end": 245
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 246,
                "end": 247
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 249,
                "end": 250
              }
            ],
            "start": 227,
            "end": 251
          },
          "definite": false,
          "start": 223,
          "end": 251
        }
      ],
      "declare": false,
      "start": 219,
      "end": 252
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 252
}
```
