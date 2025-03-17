__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 144,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 143,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "name": "test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 143,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 18,
            "end": 84,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 33,
              "name": "Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 33,
              "end": 36,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 34,
                  "end": 35,
                  "name": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 35,
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
            "body": {
              "type": "TSInterfaceBody",
              "start": 37,
              "end": 84,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 47,
                  "end": 54,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 50,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 50,
                    "end": 53,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 52,
                      "end": 53,
                      "typeName": {
                        "type": "Identifier",
                        "start": 52,
                        "end": 53,
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
                },
                {
                  "type": "TSPropertySignature",
                  "start": 63,
                  "end": 78,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 69,
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 69,
                    "end": 77,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 71,
                      "end": 77
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 90,
            "end": 141,
            "id": {
              "type": "Identifier",
              "start": 99,
              "end": 102,
              "name": "map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 108,
              "end": 141,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 118,
                  "end": 135,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 122,
                      "end": 134,
                      "id": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 129,
                        "name": "ys",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 124,
                          "end": 129,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 126,
                            "end": 129,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 126,
                              "end": 127,
                              "typeName": {
                                "type": "Identifier",
                                "start": 126,
                                "end": 127,
                                "name": "U",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "start": 132,
                        "end": 134,
                        "elements": []
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 102,
              "end": 105,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 103,
                  "end": 104,
                  "name": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 104,
                    "name": "U",
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
            "returnType": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
