__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 32,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 23,
          "decorators": [],
          "name": "IKitty",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 24,
          "end": 32,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 109,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 41,
        "end": 109,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 50,
          "decorators": [],
          "name": "Cat",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 50,
          "end": 74,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 51,
              "end": 73,
              "name": {
                "type": "Identifier",
                "start": 51,
                "end": 58,
                "decorators": [],
                "name": "CatType",
                "optional": false,
                "typeAnnotation": null
              },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 75,
          "end": 109,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 81,
              "end": 107,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 81,
                "end": 92,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 92,
                "end": 107,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 95,
                  "end": 107,
                  "body": []
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 111,
      "end": 198,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 118,
        "end": 198,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 124,
          "end": 130,
          "decorators": [],
          "name": "CatBag",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 131,
          "end": 198,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 137,
              "end": 196,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 137,
                "end": 148,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 148,
                "end": 196,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 157,
                              "end": 162,
                              "decorators": [],
                              "name": "barry",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 162,
                              "end": 175,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 164,
                                "end": 175,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 164,
                                  "end": 167,
                                  "decorators": [],
                                  "name": "Cat",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
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
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 180,
                  "end": 196,
                  "body": []
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 199,
      "end": 227,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 226,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 206,
            "decorators": [],
            "name": "cat",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 209,
            "end": 226,
            "callee": {
              "type": "Identifier",
              "start": 213,
              "end": 216,
              "decorators": [],
              "name": "Cat",
              "optional": false,
              "typeAnnotation": null
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            },
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 228,
      "end": 262,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 232,
          "end": 261,
          "id": {
            "type": "Identifier",
            "start": 232,
            "end": 240,
            "decorators": [],
            "name": "catThing",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 254,
                  "decorators": [],
                  "name": "barry",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 259,
                  "decorators": [],
                  "name": "cat",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 263,
      "end": 297,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 296,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 273,
            "decorators": [],
            "name": "catBag",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 276,
            "end": 296,
            "callee": {
              "type": "Identifier",
              "start": 280,
              "end": 286,
              "decorators": [],
              "name": "CatBag",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 287,
                "end": 295,
                "decorators": [],
                "name": "catThing",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
