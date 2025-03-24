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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "name": "enumdule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 20,
          "end": 23,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 23,
            "name": "Red",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 25,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 29,
            "name": "Blue",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 14,
        "end": 31,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 20,
            "end": 23,
            "id": {
              "type": "Identifier",
              "start": 20,
              "end": 23,
              "name": "Red",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 25,
            "end": 29,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "name": "Blue",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 33,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 48,
        "name": "enumdule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 49,
        "end": 144,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 56,
            "end": 142,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 63,
              "end": 142,
              "id": {
                "type": "Identifier",
                "start": 69,
                "end": 74,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 75,
                "end": 142,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 85,
                    "end": 136,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 96,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 96,
                      "end": 136,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
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
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 105,
                              "end": 113,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 107,
                                "end": 113
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                            "name": "y",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 123,
                              "end": 131,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 125,
                                "end": 131
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 133,
                        "end": 136,
                        "body": []
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
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
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 161,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 151,
              "end": 161,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 153,
                "end": 161,
                "typeName": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 161,
                  "name": "enumdule",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 171,
            "end": 183,
            "object": {
              "type": "Identifier",
              "start": 171,
              "end": 179,
              "name": "enumdule",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 180,
              "end": 183,
              "name": "Red",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 217,
            "name": "y",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 195,
                      "end": 196,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 196,
                      "end": 204,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 198,
                        "end": 204
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 206,
                    "end": 215,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 206,
                      "end": 207,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 207,
                      "end": 215,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 209,
                        "end": 215
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 223,
            "end": 224,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 227,
            "end": 251,
            "callee": {
              "type": "MemberExpression",
              "start": 231,
              "end": 245,
              "object": {
                "type": "Identifier",
                "start": 231,
                "end": 239,
                "name": "enumdule",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 240,
                "end": 245,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 246,
                "end": 247,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 249,
                "end": 250,
                "value": 0,
                "raw": "0"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
