__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 68,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 67,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 65,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 27,
              "end": 65,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 28,
                  "end": 56,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 29,
                    "end": 56,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 31,
                      "end": 56,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 32,
                          "end": 36,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 33,
                            "end": 36,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 35,
                              "end": 36,
                              "typeName": {
                                "type": "Identifier",
                                "start": 35,
                                "end": 36,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 38,
                        "end": 56,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 41,
                          "end": 56,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 43,
                              "end": 54,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 43,
                                "end": 44,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 44,
                                "end": 54,
                                "typeAnnotation": {
                                  "type": "TSTypeLiteral",
                                  "start": 46,
                                  "end": 54,
                                  "members": [
                                    {
                                      "type": "TSPropertySignature",
                                      "start": 48,
                                      "end": 52,
                                      "computed": false,
                                      "optional": false,
                                      "readonly": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 48,
                                        "end": 49,
                                        "name": "y",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 49,
                                        "end": 52,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 51,
                                          "end": 52,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 51,
                                            "end": 52,
                                            "name": "T",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        }
                                      },
                                      "accessibility": null,
                                      "static": false
                                    }
                                  ]
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 58,
                "end": 65,
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
        "start": 9,
        "end": 12,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
