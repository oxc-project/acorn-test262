__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 35,
  "end": 373,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 35,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 53,
        "name": "Document",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 54,
        "end": 80,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 60,
            "end": 78,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 69,
              "name": "increment",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 135,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 159,
        "name": "CustomDocument",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 168,
          "end": 176,
          "expression": {
            "type": "Identifier",
            "start": 168,
            "end": 176,
            "name": "Document",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 177,
        "end": 180,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 182,
      "end": 372,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 189,
        "end": 372,
        "id": {
          "type": "Identifier",
          "start": 195,
          "end": 202,
          "name": "Example",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 229,
          "end": 372,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 235,
              "end": 327,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 235,
                "end": 246,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 246,
                "end": 327,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 249,
                  "end": 327,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 306,
                      "end": 321,
                      "expression": {
                        "type": "CallExpression",
                        "start": 306,
                        "end": 320,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 306,
                          "end": 315,
                          "object": {
                            "type": "ThisExpression",
                            "start": 306,
                            "end": 310
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 311,
                            "end": 315,
                            "name": "test",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 316,
                                "end": 317,
                                "name": "Z",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      "directive": null
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 333,
              "end": 370,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 340,
                "end": 344,
                "name": "test",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 344,
                "end": 370,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 367,
                  "end": 370,
                  "body": []
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 344,
                  "end": 364,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 345,
                      "end": 363,
                      "name": {
                        "type": "Identifier",
                        "start": 345,
                        "end": 346,
                        "name": "Z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 355,
                        "end": 363,
                        "typeName": {
                          "type": "Identifier",
                          "start": 355,
                          "end": 363,
                          "name": "Document",
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
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "public"
            }
          ]
        },
        "decorators": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 202,
          "end": 228,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 203,
              "end": 227,
              "name": {
                "type": "Identifier",
                "start": 203,
                "end": 204,
                "name": "Z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 213,
                "end": 227,
                "typeName": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 227,
                  "name": "CustomDocument",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
