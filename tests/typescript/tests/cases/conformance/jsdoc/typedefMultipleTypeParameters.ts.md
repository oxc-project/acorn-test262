__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "tuvwx",
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 364
          },
          "init": null,
          "definite": false,
          "start": 359,
          "end": 364
        }
      ],
      "declare": false,
      "start": 355,
      "end": 365
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "wrong",
            "optional": false,
            "typeAnnotation": null,
            "start": 456,
            "end": 461
          },
          "init": null,
          "definite": false,
          "start": 456,
          "end": 461
        }
      ],
      "declare": false,
      "start": 452,
      "end": 462
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "insufficient",
            "optional": false,
            "typeAnnotation": null,
            "start": 510,
            "end": 522
          },
          "init": null,
          "definite": false,
          "start": 510,
          "end": 522
        }
      ],
      "declare": false,
      "start": 506,
      "end": 523
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 355,
  "end": 524
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "actually",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Everything",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 32
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 35,
                            "end": 36
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 38,
                              "end": 44
                            },
                            "start": 36,
                            "end": 44
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 35,
                          "end": 44
                        }
                      ],
                      "start": 33,
                      "end": 47
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 49,
                      "end": 58
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 62,
                            "end": 63
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 65,
                                "end": 66
                              },
                              "start": 65,
                              "end": 66
                            },
                            "start": 63,
                            "end": 66
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 62,
                          "end": 67
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "d",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 68,
                            "end": 69
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 71,
                                "end": 72
                              },
                              "start": 71,
                              "end": 72
                            },
                            "start": 69,
                            "end": 72
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 68,
                          "end": 72
                        }
                      ],
                      "start": 60,
                      "end": 74
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
                  ],
                  "start": 32,
                  "end": 91
                },
                "start": 22,
                "end": 91
              },
              "start": 20,
              "end": 91
            },
            "start": 12,
            "end": 91
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 91
        }
      ],
      "declare": true,
      "start": 0,
      "end": 92
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 92
}
```
