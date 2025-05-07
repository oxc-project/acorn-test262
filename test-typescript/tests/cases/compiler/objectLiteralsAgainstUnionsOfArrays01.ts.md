__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 117,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 37,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 37,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 35,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 34,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 23,
                "end": 34,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 23,
                    "end": 26,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 23,
                      "end": 26,
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 29,
                    "end": 34,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 29,
                      "end": 32,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 29,
                        "end": 32,
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
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
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 39,
      "end": 72,
      "body": {
        "type": "TSInterfaceBody",
        "start": 53,
        "end": 72,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 57,
            "end": 70,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 61,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 69,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 63,
                "end": 69
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 52,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 117,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 86,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 86,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 81,
                "end": 86,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 81,
                  "end": 84,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 84,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 89,
            "end": 117,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 93,
                "end": 115,
                "properties": [
                  {
                    "type": "Property",
                    "start": 95,
                    "end": 113,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 98,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 100,
                      "end": 113,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 102,
                          "end": 111,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 102,
                            "end": 106,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 108,
                            "end": 111,
                            "raw": "100",
                            "value": 100,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ]
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
