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
          "name": "IKitty",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 109,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 41,
        "end": 109,
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 50,
          "name": "Cat",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 75,
          "end": 109,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 81,
              "end": 107,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 81,
                "end": 92,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 92,
                "end": 107,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 95,
                  "end": 107,
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
                "name": "CatType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 67,
                "end": 73,
                "typeName": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 73,
                  "name": "IKitty",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 111,
      "end": 198,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 118,
        "end": 198,
        "id": {
          "type": "Identifier",
          "start": 124,
          "end": 130,
          "name": "CatBag",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 131,
          "end": 198,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 137,
              "end": 196,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 137,
                "end": 148,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 148,
                "end": 196,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 149,
                    "end": 178,
                    "name": "cats",
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
                              "name": "barry",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                                  "name": "Cat",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                                        "name": "IKitty",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
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
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 180,
                  "end": 196,
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
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 206,
            "name": "cat",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 209,
            "end": 226,
            "callee": {
              "type": "Identifier",
              "start": 213,
              "end": 216,
              "name": "Cat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
                    "name": "IKitty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 232,
            "end": 240,
            "name": "catThing",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 254,
                  "name": "barry",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 259,
                  "name": "cat",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 273,
            "name": "catBag",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 276,
            "end": 296,
            "callee": {
              "type": "Identifier",
              "start": 280,
              "end": 286,
              "name": "CatBag",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 287,
                "end": 295,
                "name": "catThing",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
