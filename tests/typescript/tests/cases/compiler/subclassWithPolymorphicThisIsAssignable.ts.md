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
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 53,
        "decorators": [],
        "name": "Document",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "increment",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "CustomDocument",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 213,
                "end": 227,
                "typeName": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 227,
                  "decorators": [],
                  "name": "CustomDocument",
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
          "start": 229,
          "end": 372,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 235,
              "end": 327,
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
              "value": {
                "type": "FunctionExpression",
                "start": 246,
                "end": 327,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
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
                                "decorators": [],
                                "name": "Z",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        },
                        "arguments": [],
                        "optional": false
                      },
                      "directive": null
                    }
                  ]
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 333,
              "end": 370,
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
              "value": {
                "type": "FunctionExpression",
                "start": 344,
                "end": 370,
                "id": null,
                "generator": false,
                "async": false,
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
                        "decorators": [],
                        "name": "Z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 355,
                        "end": 363,
                        "typeName": {
                          "type": "Identifier",
                          "start": 355,
                          "end": 363,
                          "decorators": [],
                          "name": "Document",
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
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 367,
                  "end": 370,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
