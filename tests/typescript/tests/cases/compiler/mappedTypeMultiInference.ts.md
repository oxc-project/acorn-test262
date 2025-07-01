__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Style",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "typeParameters": null,
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
              "name": "flashy",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 28
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 30,
                "end": 33
              },
              "start": 28,
              "end": 33
            },
            "accessibility": null,
            "static": false,
            "start": 22,
            "end": 34
          }
        ],
        "start": 16,
        "end": 36
      },
      "declare": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mergeStyleSets",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 69
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 71
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 80,
              "end": 86
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 70,
            "end": 86
          }
        ],
        "start": 69,
        "end": 87
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "cssSets",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 103
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 108,
                  "end": 109
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 114
                  },
                  "typeArguments": null,
                  "start": 113,
                  "end": 114
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 123
                  },
                  "typeArguments": null,
                  "start": 118,
                  "end": 123
                },
                "optional": true,
                "readonly": null,
                "start": 105,
                "end": 125
              },
              "start": 105,
              "end": 127
            },
            "start": 103,
            "end": 127
          },
          "value": null,
          "start": 93,
          "end": 127
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 134
          },
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 139
            },
            "typeArguments": null,
            "start": 138,
            "end": 139
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Style",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 147
            },
            "typeArguments": null,
            "start": 142,
            "end": 147
          },
          "optional": false,
          "readonly": null,
          "start": 130,
          "end": 149
        },
        "start": 128,
        "end": 149
      },
      "body": null,
      "expression": false,
      "start": 38,
      "end": 150
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 229
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mergeStyleSets",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 246
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 252,
                "end": 254
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 270,
                      "end": 271
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "flashy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 275,
                            "end": 281
                          },
                          "value": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 283,
                            "end": 287
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 275,
                          "end": 287
                        }
                      ],
                      "start": 273,
                      "end": 289
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 270,
                    "end": 289
                  }
                ],
                "start": 260,
                "end": 296
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 312,
                      "end": 313
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "flashy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 317,
                            "end": 323
                          },
                          "value": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 325,
                            "end": 329
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 317,
                          "end": 329
                        }
                      ],
                      "start": 315,
                      "end": 331
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 312,
                    "end": 331
                  }
                ],
                "start": 302,
                "end": 338
              }
            ],
            "optional": false,
            "start": 232,
            "end": 341
          },
          "definite": false,
          "start": 228,
          "end": 341
        }
      ],
      "declare": false,
      "start": 224,
      "end": 341
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 341
}
```
