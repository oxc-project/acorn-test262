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
        "start": 43,
        "end": 51
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
                "start": 72,
                "end": 77
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
                      "start": 88,
                      "end": 99
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
                                "start": 110,
                                "end": 116
                              },
                              "start": 108,
                              "end": 116
                            },
                            "start": 107,
                            "end": 116
                          },
                          "readonly": false,
                          "static": false,
                          "start": 100,
                          "end": 116
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
                                "start": 128,
                                "end": 134
                              },
                              "start": 126,
                              "end": 134
                            },
                            "start": 125,
                            "end": 134
                          },
                          "readonly": false,
                          "static": false,
                          "start": 118,
                          "end": 134
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 136,
                        "end": 139
                      },
                      "expression": false,
                      "start": 99,
                      "end": 139
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 88,
                    "end": 139
                  }
                ],
                "start": 78,
                "end": 145
              },
              "abstract": false,
              "declare": false,
              "start": 66,
              "end": 145
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 59,
            "end": 145
          }
        ],
        "start": 52,
        "end": 147
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 33,
      "end": 147
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
                  "start": 156,
                  "end": 164
                },
                "typeArguments": null,
                "start": 156,
                "end": 164
              },
              "start": 154,
              "end": 164
            },
            "start": 153,
            "end": 164
          },
          "init": null,
          "definite": false,
          "start": 153,
          "end": 164
        }
      ],
      "declare": false,
      "start": 149,
      "end": 165
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
            "start": 170,
            "end": 171
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "enumdule",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 182
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 186
            },
            "optional": false,
            "computed": false,
            "start": 174,
            "end": 186
          },
          "definite": false,
          "start": 170,
          "end": 186
        }
      ],
      "declare": false,
      "start": 166,
      "end": 187
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
                      "start": 198,
                      "end": 199
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 201,
                        "end": 207
                      },
                      "start": 199,
                      "end": 207
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 198,
                    "end": 208
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
                      "start": 209,
                      "end": 210
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 212,
                        "end": 218
                      },
                      "start": 210,
                      "end": 218
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 209,
                    "end": 218
                  }
                ],
                "start": 196,
                "end": 220
              },
              "start": 194,
              "end": 220
            },
            "start": 193,
            "end": 220
          },
          "init": null,
          "definite": false,
          "start": 193,
          "end": 220
        }
      ],
      "declare": false,
      "start": 189,
      "end": 221
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
            "start": 226,
            "end": 227
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
                "start": 234,
                "end": 242
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 243,
                "end": 248
              },
              "optional": false,
              "computed": false,
              "start": 234,
              "end": 248
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 249,
                "end": 250
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 252,
                "end": 253
              }
            ],
            "start": 230,
            "end": 254
          },
          "definite": false,
          "start": 226,
          "end": 254
        }
      ],
      "declare": false,
      "start": 222,
      "end": 255
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 255
}
```
