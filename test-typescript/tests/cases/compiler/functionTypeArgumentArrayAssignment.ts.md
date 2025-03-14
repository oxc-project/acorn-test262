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
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 143,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 18,
            "end": 84,
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
                  "key": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 50,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 63,
                  "end": 78,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 69,
                    "decorators": [],
                    "name": "length",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 69,
                    "end": 77,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 71,
                      "end": 77
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 33,
              "decorators": [],
              "name": "Array",
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 33,
              "end": 36,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 34,
                  "end": 35,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 35,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 90,
            "end": 141,
            "async": false,
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 129,
                        "decorators": [],
                        "name": "ys",
                        "optional": false,
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
                                "decorators": [],
                                "name": "U",
                                "optional": false
                              }
                            }
                          }
                        }
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "start": 132,
                        "end": 134,
                        "elements": []
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 99,
              "end": 102,
              "decorators": [],
              "name": "map",
              "optional": false
            },
            "params": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 102,
              "end": 105,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 103,
                  "end": 104,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 104,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "test",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
