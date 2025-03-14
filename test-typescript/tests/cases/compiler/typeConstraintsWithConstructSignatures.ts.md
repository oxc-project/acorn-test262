typeConstraintsWithConstructSignatures.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 277,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 44,
      "body": {
        "type": "TSInterfaceBody",
        "start": 24,
        "end": 44,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 30,
            "end": 42,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 41,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 38,
                "end": 41
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
      "start": 46,
      "end": 276,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 79,
        "end": 276,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 85,
            "end": 145,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 96,
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
              "start": 96,
              "end": 145,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 142,
                "end": 145,
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
                  "end": 111,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 111,
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 108,
                      "end": 111,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 110,
                        "end": 111,
                        "typeName": {
                          "type": "Identifier",
                          "start": 110,
                          "end": 111,
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
                  "start": 113,
                  "end": 140,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 140,
                    "decorators": [],
                    "name": "data2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 125,
                      "end": 140,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 127,
                        "end": 140,
                        "typeName": {
                          "type": "Identifier",
                          "start": 127,
                          "end": 140,
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
            "start": 150,
            "end": 274,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 156,
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
              "start": 156,
              "end": 274,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 159,
                "end": 274,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 169,
                    "end": 193,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 173,
                        "end": 192,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 174,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 177,
                          "end": 192,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 181,
                            "end": 190,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 181,
                              "end": 185
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 186,
                              "end": 190,
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
                    "start": 222,
                    "end": 248,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 226,
                        "end": 247,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 226,
                          "end": 228,
                          "decorators": [],
                          "name": "x2",
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 231,
                          "end": 247,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 235,
                            "end": 245,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 235,
                              "end": 239
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 240,
                              "end": 245,
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
        "start": 52,
        "end": 53,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 53,
        "end": 78,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 54,
            "end": 77,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 64,
              "end": 77,
              "typeName": {
                "type": "Identifier",
                "start": 64,
                "end": 77,
                "decorators": [],
                "name": "Constructable",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
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
