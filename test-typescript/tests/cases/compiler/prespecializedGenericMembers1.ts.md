prespecializedGenericMembers1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 297,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 32,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 32,
        "body": {
          "type": "TSInterfaceBody",
          "start": 24,
          "end": 32,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 23,
          "decorators": [],
          "name": "IKitty",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 109,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 41,
        "end": 109,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 75,
          "end": 109,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 81,
              "end": 107,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 81,
                "end": 92,
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
                "start": 92,
                "end": 107,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 95,
                  "end": 107,
                  "body": []
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
          "start": 47,
          "end": 50,
          "decorators": [],
          "name": "Cat",
          "optional": false
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 50,
          "end": 74,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 51,
              "end": 73,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 67,
                "end": 73,
                "typeName": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 73,
                  "decorators": [],
                  "name": "IKitty",
                  "optional": false
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 51,
                "end": 58,
                "decorators": [],
                "name": "CatType",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 111,
      "end": 198,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 118,
        "end": 198,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 131,
          "end": 198,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 137,
              "end": 196,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 137,
                "end": 148,
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
                "start": 148,
                "end": 196,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 180,
                  "end": 196,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 149,
                    "end": 178,
                    "decorators": [],
                    "name": "cats",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 153,
                      "end": 178,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 155,
                        "end": 178,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 157,
                            "end": 176,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 157,
                              "end": 162,
                              "decorators": [],
                              "name": "barry",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 162,
                              "end": 175,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 164,
                                "end": 175,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 167,
                                  "end": 175,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 168,
                                      "end": 174,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 168,
                                        "end": 174,
                                        "decorators": [],
                                        "name": "IKitty",
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 164,
                                  "end": 167,
                                  "decorators": [],
                                  "name": "Cat",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 124,
          "end": 130,
          "decorators": [],
          "name": "CatBag",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 199,
      "end": 227,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 226,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 206,
            "decorators": [],
            "name": "cat",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 209,
            "end": 226,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 213,
              "end": 216,
              "decorators": [],
              "name": "Cat",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 216,
              "end": 224,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 217,
                  "end": 223,
                  "typeName": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 223,
                    "decorators": [],
                    "name": "IKitty",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 228,
      "end": 262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 232,
          "end": 261,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 232,
            "end": 240,
            "decorators": [],
            "name": "catThing",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 243,
            "end": 261,
            "properties": [
              {
                "type": "Property",
                "start": 249,
                "end": 259,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 254,
                  "decorators": [],
                  "name": "barry",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 259,
                  "decorators": [],
                  "name": "cat",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 263,
      "end": 297,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 296,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 273,
            "decorators": [],
            "name": "catBag",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 276,
            "end": 296,
            "arguments": [
              {
                "type": "Identifier",
                "start": 287,
                "end": 295,
                "decorators": [],
                "name": "catThing",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 280,
              "end": 286,
              "decorators": [],
              "name": "CatBag",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
