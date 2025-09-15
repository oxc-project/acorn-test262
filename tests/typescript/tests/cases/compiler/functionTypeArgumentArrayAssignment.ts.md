__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 36
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 37,
                    "end": 38
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 37,
                  "end": 38
                }
              ],
              "start": 36,
              "end": 39
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 50,
                    "end": 53
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 55,
                        "end": 56
                      },
                      "typeArguments": null,
                      "start": 55,
                      "end": 56
                    },
                    "start": 53,
                    "end": 56
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 50,
                  "end": 57
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 66,
                    "end": 72
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 74,
                      "end": 80
                    },
                    "start": 72,
                    "end": 80
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 66,
                  "end": 81
                }
              ],
              "start": 40,
              "end": 87
            },
            "declare": false,
            "start": 21,
            "end": 87
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 105
            },
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 106,
                    "end": 107
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 106,
                  "end": 107
                }
              ],
              "start": 105,
              "end": 108
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ys",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 129,
                                "end": 130
                              },
                              "typeArguments": null,
                              "start": 129,
                              "end": 130
                            },
                            "start": 129,
                            "end": 132
                          },
                          "start": 127,
                          "end": 132
                        },
                        "start": 125,
                        "end": 132
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 135,
                        "end": 137
                      },
                      "definite": false,
                      "start": 125,
                      "end": 137
                    }
                  ],
                  "declare": false,
                  "start": 121,
                  "end": 138
                }
              ],
              "start": 111,
              "end": 144
            },
            "expression": false,
            "start": 93,
            "end": 144
          }
        ],
        "start": 15,
        "end": 146
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 146
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 146
}
```
