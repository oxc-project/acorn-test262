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
      "body": {
        "type": "TSInterfaceBody",
        "start": 29,
        "end": 51,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 49,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 40,
              "decorators": [],
              "name": "begin",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 48,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 42,
                "end": 48
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
        "end": 28,
        "decorators": [],
        "name": "ITestEventInterval",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 53,
      "end": 154,
      "body": {
        "type": "TSInterfaceBody",
        "start": 81,
        "end": 154,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 87,
            "end": 116,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 95,
              "decorators": [],
              "name": "interval",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 115,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 97,
                "end": 115,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 115,
                  "decorators": [],
                  "name": "ITestEventInterval",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 121,
            "end": 152,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 129,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 149,
                    "decorators": [],
                    "name": "IIntervalTreeNode",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 80,
        "decorators": [],
        "name": "IIntervalTreeNode",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 232,
          "definite": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 183,
                    "decorators": [],
                    "name": "IIntervalTreeNode",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 199,
                      "decorators": [],
                      "name": "interval",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 201,
                      "end": 213,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 203,
                          "end": 211,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 203,
                            "end": 208,
                            "decorators": [],
                            "name": "begin",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 210,
                            "end": 211,
                            "raw": "0",
                            "value": 0,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 215,
                    "end": 229,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 223,
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 225,
                      "end": 229,
                      "raw": "null",
                      "value": null,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
