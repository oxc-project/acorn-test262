genericTypeWithCallableMembers.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 287,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 54,
      "body": {
        "type": "TSInterfaceBody",
        "start": 24,
        "end": 54,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 30,
            "end": 52,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 51,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 38,
                "end": 51,
                "typeName": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 51,
                  "decorators": [],
                  "name": "Constructable",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 23,
        "decorators": [],
        "name": "Constructable",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 286,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 90,
        "end": 286,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 96,
            "end": 156,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 107,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 107,
              "end": 156,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 153,
                "end": 156,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 108,
                  "end": 122,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 122,
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 119,
                      "end": 122,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 121,
                        "end": 122,
                        "typeName": {
                          "type": "Identifier",
                          "start": 121,
                          "end": 122,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 124,
                  "end": 151,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 151,
                    "decorators": [],
                    "name": "data2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 136,
                      "end": 151,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 138,
                        "end": 151,
                        "typeName": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 151,
                          "decorators": [],
                          "name": "Constructable",
                          "optional": false
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 161,
            "end": 284,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 161,
              "end": 167,
              "decorators": [],
              "name": "create",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 167,
              "end": 284,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 170,
                "end": 284,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 180,
                    "end": 204,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 184,
                        "end": 203,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 184,
                          "end": 185,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 188,
                          "end": 203,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 192,
                            "end": 201,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 192,
                              "end": 196
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 197,
                              "end": 201,
                              "decorators": [],
                              "name": "data",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 225,
                    "end": 251,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 229,
                        "end": 250,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 229,
                          "end": 231,
                          "decorators": [],
                          "name": "x2",
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 234,
                          "end": 250,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 238,
                            "end": 248,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 238,
                              "end": 242
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 243,
                              "end": 248,
                              "decorators": [],
                              "name": "data2",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 64,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 64,
        "end": 89,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 65,
            "end": 88,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 75,
              "end": 88,
              "typeName": {
                "type": "Identifier",
                "start": 75,
                "end": 88,
                "decorators": [],
                "name": "Constructable",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
