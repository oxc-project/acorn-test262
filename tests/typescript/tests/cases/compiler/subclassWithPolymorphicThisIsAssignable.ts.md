__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Document",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 53
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "increment",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 69
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 73,
                "end": 77
              },
              "start": 71,
              "end": 77
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 60,
            "end": 78
          }
        ],
        "start": 54,
        "end": 80
      },
      "declare": false,
      "start": 35,
      "end": 80
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CustomDocument",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 159
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Document",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 176
          },
          "typeArguments": null,
          "start": 168,
          "end": 176
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 177,
        "end": 180
      },
      "declare": false,
      "start": 135,
      "end": 180
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Example",
          "optional": false,
          "typeAnnotation": null,
          "start": 195,
          "end": 202
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 204
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CustomDocument",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 213,
                  "end": 227
                },
                "typeArguments": null,
                "start": 213,
                "end": 227
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 203,
              "end": 227
            }
          ],
          "start": 202,
          "end": 228
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 246
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 306,
                            "end": 310
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 311,
                            "end": 315
                          },
                          "optional": false,
                          "computed": false,
                          "start": 306,
                          "end": 315
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 316,
                                "end": 317
                              },
                              "typeArguments": null,
                              "start": 316,
                              "end": 317
                            }
                          ],
                          "start": 315,
                          "end": 318
                        },
                        "arguments": [],
                        "optional": false,
                        "start": 306,
                        "end": 320
                      },
                      "directive": null,
                      "start": 306,
                      "end": 321
                    }
                  ],
                  "start": 249,
                  "end": 327
                },
                "expression": false,
                "start": 246,
                "end": 327
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 235,
              "end": 327
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 340,
                "end": 344
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 345,
                        "end": 346
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Document",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 355,
                          "end": 363
                        },
                        "typeArguments": null,
                        "start": 355,
                        "end": 363
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 345,
                      "end": 363
                    }
                  ],
                  "start": 344,
                  "end": 364
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 367,
                  "end": 370
                },
                "expression": false,
                "start": 344,
                "end": 370
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 333,
              "end": 370
            }
          ],
          "start": 229,
          "end": 372
        },
        "abstract": false,
        "declare": false,
        "start": 189,
        "end": 372
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 182,
      "end": 372
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 372
}
```
