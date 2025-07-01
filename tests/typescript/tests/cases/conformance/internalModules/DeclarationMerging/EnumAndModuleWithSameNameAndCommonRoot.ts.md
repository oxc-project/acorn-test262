__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "enumdule",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 13
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
              "start": 20,
              "end": 23
            },
            "initializer": null,
            "computed": false,
            "start": 20,
            "end": 23
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Blue",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 29
            },
            "initializer": null,
            "computed": false,
            "start": 25,
            "end": 29
          }
        ],
        "start": 14,
        "end": 31
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "enumdule",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 48
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
                "start": 69,
                "end": 74
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
                      "start": 85,
                      "end": 96
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
                                "start": 107,
                                "end": 113
                              },
                              "start": 105,
                              "end": 113
                            },
                            "start": 104,
                            "end": 113
                          },
                          "readonly": false,
                          "static": false,
                          "start": 97,
                          "end": 113
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
                                "start": 125,
                                "end": 131
                              },
                              "start": 123,
                              "end": 131
                            },
                            "start": 122,
                            "end": 131
                          },
                          "readonly": false,
                          "static": false,
                          "start": 115,
                          "end": 131
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 133,
                        "end": 136
                      },
                      "expression": false,
                      "start": 96,
                      "end": 136
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 85,
                    "end": 136
                  }
                ],
                "start": 75,
                "end": 142
              },
              "abstract": false,
              "declare": false,
              "start": 63,
              "end": 142
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 56,
            "end": 142
          }
        ],
        "start": 49,
        "end": 144
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 33,
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
