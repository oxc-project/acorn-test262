__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 252,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 111,
      "body": {
        "type": "TSModuleBlock",
        "start": 16,
        "end": 111,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 23,
            "end": 109,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 30,
              "end": 109,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 42,
                "end": 109,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 52,
                    "end": 103,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 63,
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
                      "start": 63,
                      "end": 103,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 100,
                        "end": 103,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 64,
                          "end": 80,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 71,
                            "end": 80,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 72,
                              "end": 80,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 74,
                                "end": 80
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 82,
                          "end": 98,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 89,
                            "end": 98,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 90,
                              "end": 98,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 92,
                                "end": 98
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
                "start": 36,
                "end": 41,
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
        "start": 7,
        "end": 15,
        "decorators": [],
        "name": "enumdule",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 113,
      "end": 144,
      "body": {
        "type": "TSEnumBody",
        "start": 127,
        "end": 144,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 133,
            "end": 136,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 133,
              "end": 136,
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 138,
            "end": 142,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 138,
              "end": 142,
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
        "start": 118,
        "end": 126,
        "decorators": [],
        "name": "enumdule",
        "optional": false,
        "typeAnnotation": null
      }
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
                "value": 0,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 249,
                "end": 250,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
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
