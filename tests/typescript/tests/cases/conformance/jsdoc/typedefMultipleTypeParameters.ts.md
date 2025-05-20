__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 355,
  "end": 524,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 355,
      "end": 365,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 364,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 364,
            "decorators": [],
            "name": "tuvwx",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 452,
      "end": 462,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 456,
          "end": 461,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 456,
            "end": 461,
            "decorators": [],
            "name": "wrong",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 506,
      "end": 523,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 510,
          "end": 522,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 510,
            "end": 522,
            "decorators": [],
            "name": "insufficient",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 92,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 92,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 91,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 91,
            "decorators": [],
            "name": "actually",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 91,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 22,
                "end": 91,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 32,
                  "end": 91,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 33,
                      "end": 47,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 35,
                          "end": 44,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 35,
                            "end": 36,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 36,
                            "end": 44,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 38,
                              "end": 44
                            }
                          }
                        }
                      ]
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 49,
                      "end": 58
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 60,
                      "end": 74,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 62,
                          "end": 67,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 62,
                            "end": 63,
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 63,
                            "end": 66,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 65,
                              "end": 66,
                              "literal": {
                                "type": "Literal",
                                "start": 65,
                                "end": 66,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 68,
                          "end": 72,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 68,
                            "end": 69,
                            "decorators": [],
                            "name": "d",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 69,
                            "end": 72,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 71,
                              "end": 72,
                              "literal": {
                                "type": "Literal",
                                "start": 71,
                                "end": 72,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          }
                        }
                      ]
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 76,
                      "end": 82
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 84,
                      "end": 90
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 32,
                  "decorators": [],
                  "name": "Everything",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
