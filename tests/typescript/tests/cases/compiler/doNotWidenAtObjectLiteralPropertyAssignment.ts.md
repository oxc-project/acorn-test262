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
        "name": "ITestEventInterval",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 28
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
              "name": "begin",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 40
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 42,
                "end": 48
              },
              "start": 40,
              "end": 48
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 49
          }
        ],
        "start": 29,
        "end": 51
      },
      "declare": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IIntervalTreeNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 80
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
              "name": "interval",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 95
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ITestEventInterval",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 115
                },
                "typeArguments": null,
                "start": 97,
                "end": 115
              },
              "start": 95,
              "end": 115
            },
            "accessibility": null,
            "static": false,
            "start": 87,
            "end": 116
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 129
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IIntervalTreeNode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 149
                  },
                  "typeArguments": null,
                  "start": 132,
                  "end": 149
                },
                "start": 132,
                "end": 151
              },
              "start": 130,
              "end": 151
            },
            "accessibility": null,
            "static": false,
            "start": 121,
            "end": 152
          }
        ],
        "start": 81,
        "end": 154
      },
      "declare": false,
      "start": 53,
      "end": 154
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
            "name": "test",
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
                    "name": "IIntervalTreeNode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 166,
                    "end": 183
                  },
                  "typeArguments": null,
                  "start": 166,
                  "end": 183
                },
                "start": 166,
                "end": 185
              },
              "start": 164,
              "end": 185
            },
            "start": 160,
            "end": 185
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "interval",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 191,
                      "end": 199
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
                            "name": "begin",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 203,
                            "end": 208
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 210,
                            "end": 211
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 203,
                          "end": 211
                        }
                      ],
                      "start": 201,
                      "end": 213
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 191,
                    "end": 213
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 215,
                      "end": 223
                    },
                    "value": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 225,
                      "end": 229
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 215,
                    "end": 229
                  }
                ],
                "start": 189,
                "end": 231
              }
            ],
            "start": 188,
            "end": 232
          },
          "definite": false,
          "start": 160,
          "end": 232
        }
      ],
      "declare": false,
      "start": 156,
      "end": 233
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 282
}
```
