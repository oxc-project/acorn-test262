__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 341,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 36,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 36,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 34,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 28,
              "decorators": [],
              "name": "flashy",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 33,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 30,
                "end": 33
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Style",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 38,
      "end": 150,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 69,
        "decorators": [],
        "name": "mergeStyleSets",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 93,
          "end": 127,
          "argument": {
            "type": "Identifier",
            "start": 96,
            "end": 103,
            "decorators": [],
            "name": "cssSets",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 103,
            "end": 127,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 105,
              "end": 127,
              "elementType": {
                "type": "TSMappedType",
                "start": 105,
                "end": 125,
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 113,
                  "end": 114,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 114,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 109,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "nameType": null,
                "optional": true,
                "readonly": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 118,
                  "end": 123,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 123,
                    "decorators": [],
                    "name": "Style",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 128,
        "end": 149,
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 130,
          "end": 149,
          "constraint": {
            "type": "TSTypeReference",
            "start": 138,
            "end": 139,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "key": {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "nameType": null,
          "optional": false,
          "readonly": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 142,
            "end": 147,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 142,
              "end": 147,
              "decorators": [],
              "name": "Style",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 69,
        "end": 87,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 70,
            "end": 86,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 80,
              "end": 86
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "K",
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
      "start": 224,
      "end": 341,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 228,
          "end": 341,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 228,
            "end": 229,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 232,
            "end": 341,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 252,
                "end": 254,
                "properties": []
              },
              {
                "type": "ObjectExpression",
                "start": 260,
                "end": 296,
                "properties": [
                  {
                    "type": "Property",
                    "start": 270,
                    "end": 289,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 271,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 273,
                      "end": 289,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 275,
                          "end": 287,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 275,
                            "end": 281,
                            "decorators": [],
                            "name": "flashy",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 283,
                            "end": 287,
                            "raw": "true",
                            "value": true
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 302,
                "end": 338,
                "properties": [
                  {
                    "type": "Property",
                    "start": 312,
                    "end": 331,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 312,
                      "end": 313,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 315,
                      "end": 331,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 317,
                          "end": 329,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 317,
                            "end": 323,
                            "decorators": [],
                            "name": "flashy",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 325,
                            "end": 329,
                            "raw": "true",
                            "value": true
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 232,
              "end": 246,
              "decorators": [],
              "name": "mergeStyleSets",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
