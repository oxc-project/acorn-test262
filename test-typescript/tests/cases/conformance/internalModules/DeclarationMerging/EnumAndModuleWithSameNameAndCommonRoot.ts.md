__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 252,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 31,
      "body": {
        "type": "TSEnumBody",
        "start": 14,
        "end": 31,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 20,
            "end": 23,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 20,
              "end": 23,
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 25,
            "end": 29,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "decorators": [],
              "name": "Blue",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "decorators": [],
        "name": "enumdule",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 33,
      "end": 144,
      "body": {
        "type": "TSModuleBlock",
        "start": 49,
        "end": 144,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 56,
            "end": 142,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 63,
              "end": 142,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 75,
                "end": 142,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 85,
                    "end": 136,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 96,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 96,
                      "end": 136,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 133,
                        "end": 136,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 97,
                          "end": 113,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 104,
                            "end": 113,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 105,
                              "end": 113,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 107,
                                "end": 113
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 115,
                          "end": 131,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 122,
                            "end": 131,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 123,
                              "end": 131,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 125,
                                "end": 131
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 69,
                "end": 74,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 48,
        "decorators": [],
        "name": "enumdule",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 146,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 161,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 161,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 151,
              "end": 161,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 153,
                "end": 161,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 161,
                  "decorators": [],
                  "name": "enumdule",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 163,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 183,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 171,
            "end": 183,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 171,
              "end": 179,
              "decorators": [],
              "name": "enumdule",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 180,
              "end": 183,
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 186,
      "end": 218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 217,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 217,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 191,
              "end": 217,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 193,
                "end": 217,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 195,
                    "end": 205,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 195,
                      "end": 196,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 196,
                      "end": 204,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 198,
                        "end": 204
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 206,
                    "end": 215,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 206,
                      "end": 207,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 207,
                      "end": 215,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 209,
                        "end": 215
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 219,
      "end": 252,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 223,
          "end": 251,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 223,
            "end": 224,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 227,
            "end": 251,
            "arguments": [
              {
                "type": "Literal",
                "start": 246,
                "end": 247,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 249,
                "end": 250,
                "raw": "0",
                "value": 0
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 231,
              "end": 245,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 231,
                "end": 239,
                "decorators": [],
                "name": "enumdule",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 240,
                "end": 245,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
