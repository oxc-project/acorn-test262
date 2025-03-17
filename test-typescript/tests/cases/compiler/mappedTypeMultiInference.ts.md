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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Style",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 36,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 34,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 28,
              "name": "flashy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 33,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 30,
                "end": 33
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
      "type": "TSDeclareFunction",
      "start": 38,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 69,
        "name": "mergeStyleSets",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 93,
          "end": 127,
          "argument": {
            "type": "Identifier",
            "start": 96,
            "end": 103,
            "name": "cssSets",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 108,
                  "end": 114,
                  "name": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 109,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 113,
                    "end": 114,
                    "typeName": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 114,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 118,
                  "end": 123,
                  "typeName": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 123,
                    "name": "Style",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "optional": true,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 113,
                  "end": 114,
                  "typeName": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 114,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "key": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 109,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 69,
        "end": 87,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 70,
            "end": 86,
            "name": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 80,
              "end": 86
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 128,
        "end": 149,
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 130,
          "end": 149,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 133,
            "end": 139,
            "name": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 138,
              "end": 139,
              "typeName": {
                "type": "Identifier",
                "start": 138,
                "end": 139,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 142,
            "end": 147,
            "typeName": {
              "type": "Identifier",
              "start": 142,
              "end": 147,
              "name": "Style",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSTypeReference",
            "start": 138,
            "end": 139,
            "typeName": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "key": {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
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
          "id": {
            "type": "Identifier",
            "start": 228,
            "end": 229,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 232,
            "end": 341,
            "callee": {
              "type": "Identifier",
              "start": 232,
              "end": 246,
              "name": "mergeStyleSets",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 271,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 273,
                      "end": 289,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 275,
                          "end": 287,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 275,
                            "end": 281,
                            "name": "flashy",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 283,
                            "end": 287,
                            "value": true,
                            "raw": "true"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 312,
                      "end": 313,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 315,
                      "end": 331,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 317,
                          "end": 329,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 317,
                            "end": 323,
                            "name": "flashy",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 325,
                            "end": 329,
                            "value": true,
                            "raw": "true"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
