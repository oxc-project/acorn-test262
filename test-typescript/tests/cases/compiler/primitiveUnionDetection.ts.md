__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 218,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 58,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 31,
        "decorators": [],
        "name": "Kind",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 34,
        "end": 57,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 34,
            "end": 39,
            "literal": {
              "type": "Literal",
              "start": 34,
              "end": 39,
              "raw": "\"one\"",
              "value": "one"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 42,
            "end": 47,
            "literal": {
              "type": "Literal",
              "start": 42,
              "end": 47,
              "raw": "\"two\"",
              "value": "two"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 50,
            "end": 57,
            "literal": {
              "type": "Literal",
              "start": 50,
              "end": 57,
              "raw": "\"three\"",
              "value": "three"
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 60,
      "end": 161,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 99,
        "decorators": [],
        "name": "getInterfaceFromString",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 116,
          "end": 156,
          "decorators": [],
          "name": "options",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 124,
            "end": 156,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 126,
              "end": 156,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 126,
                  "end": 138,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 128,
                      "end": 136,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 132,
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": true,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 133,
                        "end": 136,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 135,
                          "end": 136,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 135,
                            "end": 136,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 141,
                  "end": 156,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 143,
                      "end": 154,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 143,
                        "end": 147,
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": true,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 148,
                        "end": 154,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 150,
                          "end": 154,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 150,
                            "end": 154,
                            "decorators": [],
                            "name": "Kind",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 157,
        "end": 160,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 159,
          "end": 160,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 159,
            "end": 160,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 99,
        "end": 115,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 100,
            "end": 114,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 110,
              "end": 114,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 110,
                "end": 114,
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 163,
      "end": 218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 217,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 175,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 178,
            "end": 217,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 201,
                "end": 216,
                "properties": [
                  {
                    "type": "Property",
                    "start": 203,
                    "end": 214,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 203,
                      "end": 207,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 209,
                      "end": 214,
                      "raw": "'two'",
                      "value": "two"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 178,
              "end": 200,
              "decorators": [],
              "name": "getInterfaceFromString",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
