__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 282,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 28,
        "decorators": [],
        "name": "ITestEventInterval",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 29,
        "end": 51,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 49,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 40,
              "decorators": [],
              "name": "begin",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 48,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 42,
                "end": 48
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
      "type": "TSInterfaceDeclaration",
      "start": 53,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 80,
        "decorators": [],
        "name": "IIntervalTreeNode",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 81,
        "end": 154,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 87,
            "end": 116,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 95,
              "decorators": [],
              "name": "interval",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 115,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 97,
                "end": 115,
                "typeName": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 115,
                  "decorators": [],
                  "name": "ITestEventInterval",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 121,
            "end": 152,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 129,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 151,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 132,
                "end": 151,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 132,
                  "end": 149,
                  "typeName": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 149,
                    "decorators": [],
                    "name": "IIntervalTreeNode",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
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
      "type": "VariableDeclaration",
      "start": 156,
      "end": 233,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 232,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 185,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 164,
              "end": 185,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 166,
                "end": 185,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 166,
                  "end": 183,
                  "typeName": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 183,
                    "decorators": [],
                    "name": "IIntervalTreeNode",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 188,
            "end": 232,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 189,
                "end": 231,
                "properties": [
                  {
                    "type": "Property",
                    "start": 191,
                    "end": 213,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 199,
                      "decorators": [],
                      "name": "interval",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 201,
                      "end": 213,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 203,
                          "end": 211,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 203,
                            "end": 208,
                            "decorators": [],
                            "name": "begin",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 210,
                            "end": 211,
                            "value": 0,
                            "raw": "0"
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
                  },
                  {
                    "type": "Property",
                    "start": 215,
                    "end": 229,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 223,
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 225,
                      "end": 229,
                      "value": null,
                      "raw": "null"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
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
