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
        "decorators": [],
        "name": "Style",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "flashy",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "mergeStyleSets",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
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
      "params": [
        {
          "type": "RestElement",
          "start": 93,
          "end": 127,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 96,
            "end": 103,
            "decorators": [],
            "name": "cssSets",
            "optional": false,
            "typeAnnotation": null
          },
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
                "key": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 109,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 113,
                  "end": 114,
                  "typeName": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 114,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
                    "decorators": [],
                    "name": "Style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "optional": true,
                "readonly": null
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
          "key": {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 138,
            "end": 139,
            "typeName": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
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
              "decorators": [],
              "name": "Style",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "optional": false,
          "readonly": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 224,
      "end": 341,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 228,
          "end": 341,
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
            "callee": {
              "type": "Identifier",
              "start": 232,
              "end": 246,
              "decorators": [],
              "name": "mergeStyleSets",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 271,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 275,
                            "end": 281,
                            "decorators": [],
                            "name": "flashy",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 283,
                            "end": 287,
                            "value": true,
                            "raw": "true"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 312,
                      "end": 313,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 317,
                            "end": 323,
                            "decorators": [],
                            "name": "flashy",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 325,
                            "end": 329,
                            "value": true,
                            "raw": "true"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
