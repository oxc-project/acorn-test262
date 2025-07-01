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
        "start": 7,
        "end": 11
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
              "start": 28,
              "end": 33
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
                    "start": 34,
                    "end": 35
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 34,
                  "end": 35
                }
              ],
              "start": 33,
              "end": 36
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
                    "start": 47,
                    "end": 50
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
                        "start": 52,
                        "end": 53
                      },
                      "typeArguments": null,
                      "start": 52,
                      "end": 53
                    },
                    "start": 50,
                    "end": 53
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 47,
                  "end": 54
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
                    "start": 63,
                    "end": 69
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 71,
                      "end": 77
                    },
                    "start": 69,
                    "end": 77
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 63,
                  "end": 78
                }
              ],
              "start": 37,
              "end": 84
            },
            "declare": false,
            "start": 18,
            "end": 84
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 102
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
                    "start": 103,
                    "end": 104
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 103,
                  "end": 104
                }
              ],
              "start": 102,
              "end": 105
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
                                "start": 126,
                                "end": 127
                              },
                              "typeArguments": null,
                              "start": 126,
                              "end": 127
                            },
                            "start": 126,
                            "end": 129
                          },
                          "start": 124,
                          "end": 129
                        },
                        "start": 122,
                        "end": 129
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 132,
                        "end": 134
                      },
                      "definite": false,
                      "start": 122,
                      "end": 134
                    }
                  ],
                  "declare": false,
                  "start": 118,
                  "end": 135
                }
              ],
              "start": 108,
              "end": 141
            },
            "expression": false,
            "start": 90,
            "end": 141
          }
        ],
        "start": 12,
        "end": 143
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 143
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 143
}
```
