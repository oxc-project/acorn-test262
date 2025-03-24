__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 35,
  "end": 372,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 35,
      "end": 80,
      "body": {
        "type": "TSInterfaceBody",
        "start": 54,
        "end": 80,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 60,
            "end": 78,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 69,
              "decorators": [],
              "name": "increment",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 77,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 73,
                "end": 77
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 53,
        "decorators": [],
        "name": "Document",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 135,
      "end": 180,
      "body": {
        "type": "TSInterfaceBody",
        "start": 177,
        "end": 180,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 168,
          "end": 176,
          "expression": {
            "type": "Identifier",
            "start": 168,
            "end": 176,
            "decorators": [],
            "name": "Document",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 159,
        "decorators": [],
        "name": "CustomDocument",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 182,
      "end": 372,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 189,
        "end": 372,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 229,
          "end": 372,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 235,
              "end": 327,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 235,
                "end": 246,
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
                "start": 246,
                "end": 327,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 249,
                  "end": 327,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 306,
                      "end": 321,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 306,
                        "end": 320,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 306,
                          "end": 315,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 306,
                            "end": 310
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 311,
                            "end": 315,
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 315,
                          "end": 318,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 316,
                              "end": 317,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 316,
                                "end": 317,
                                "decorators": [],
                                "name": "Z",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 333,
              "end": 370,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 340,
                "end": 344,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 344,
                "end": 370,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 367,
                  "end": 370,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 344,
                  "end": 364,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 345,
                      "end": 363,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 355,
                        "end": 363,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 355,
                          "end": 363,
                          "decorators": [],
                          "name": "Document",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 345,
                        "end": 346,
                        "decorators": [],
                        "name": "Z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 195,
          "end": 202,
          "decorators": [],
          "name": "Example",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 202,
          "end": 228,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 203,
              "end": 227,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 213,
                "end": 227,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 227,
                  "decorators": [],
                  "name": "CustomDocument",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 203,
                "end": 204,
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
