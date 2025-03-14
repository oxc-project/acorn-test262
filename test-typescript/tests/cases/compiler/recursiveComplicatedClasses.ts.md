recursiveComplicatedClasses.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 391,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 68,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 68,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 22,
            "end": 66,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 39,
              "decorators": [],
              "name": "parameters",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 58,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 41,
                "end": 58,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 41,
                  "end": 56,
                  "typeName": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 56,
                    "decorators": [],
                    "name": "ParameterSymbol",
                    "optional": false
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "start": 61,
              "end": 65,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 15,
        "decorators": [],
        "name": "Signature",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 70,
      "end": 121,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 101,
        "end": 121,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 107,
            "end": 119,
            "argument": {
              "type": "Literal",
              "start": 114,
              "end": 118,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 89,
        "decorators": [],
        "name": "aEnclosesB",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 90,
          "end": 99,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 91,
            "end": 99,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 93,
              "end": 99,
              "typeName": {
                "type": "Identifier",
                "start": 93,
                "end": 99,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 123,
      "end": 253,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 136,
        "end": 253,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 142,
            "end": 164,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 154,
              "decorators": [],
              "name": "bound",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 163,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 156,
                "end": 163
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 169,
            "end": 250,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 183,
              "decorators": [],
              "name": "visible",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 183,
              "end": 250,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 186,
                "end": 250,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 196,
                    "end": 214,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 200,
                        "end": 213,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 213,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 201,
                            "end": 213,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 203,
                              "end": 213,
                              "typeName": {
                                "type": "Identifier",
                                "start": 203,
                                "end": 213,
                                "decorators": [],
                                "name": "TypeSymbol",
                                "optional": false
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
                    "type": "ReturnStatement",
                    "start": 223,
                    "end": 244,
                    "argument": {
                      "type": "CallExpression",
                      "start": 230,
                      "end": 243,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 241,
                          "end": 242,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 230,
                        "end": 240,
                        "decorators": [],
                        "name": "aEnclosesB",
                        "optional": false
                      },
                      "optional": false
                    }
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
        "start": 129,
        "end": 135,
        "decorators": [],
        "name": "Symbol",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 254,
      "end": 294,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 291,
        "end": 294,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 275,
        "decorators": [],
        "name": "InferenceSymbol",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 284,
        "end": 290,
        "decorators": [],
        "name": "Symbol",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 296,
      "end": 345,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 342,
        "end": 345,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 302,
        "end": 317,
        "decorators": [],
        "name": "ParameterSymbol",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 326,
        "end": 341,
        "decorators": [],
        "name": "InferenceSymbol",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 347,
      "end": 391,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 388,
        "end": 391,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 353,
        "end": 363,
        "decorators": [],
        "name": "TypeSymbol",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 372,
        "end": 387,
        "decorators": [],
        "name": "InferenceSymbol",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
