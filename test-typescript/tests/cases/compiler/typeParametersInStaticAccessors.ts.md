__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 99,
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
        "end": 99,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 61,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 33,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 33,
              "end": 61,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 61,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 47,
                    "end": 59,
                    "argument": {
                      "type": "Literal",
                      "start": 54,
                      "end": 58,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 35,
                "end": 44,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 37,
                  "end": 44,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 40,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 43,
                      "end": 44,
                      "typeName": {
                        "type": "Identifier",
                        "start": 43,
                        "end": 44,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 66,
            "end": 97,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 80,
              "name": "Bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 80,
              "end": 97,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 81,
                  "end": 92,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 82,
                    "end": 92,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 84,
                      "end": 92,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 86,
                          "end": 90,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 86,
                            "end": 87,
                            "name": "v",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 87,
                            "end": 90,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 89,
                              "end": 90,
                              "typeName": {
                                "type": "Identifier",
                                "start": 89,
                                "end": 90,
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
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 94,
                "end": 97,
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
