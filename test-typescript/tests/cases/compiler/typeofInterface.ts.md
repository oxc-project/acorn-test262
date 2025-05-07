__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 19,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 19,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 19,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 7,
                "end": 19,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 9,
                    "end": 18,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9,
                      "end": 10,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 10,
                      "end": 18,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 12,
                        "end": 18
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 71,
      "body": {
        "type": "TSInterfaceBody",
        "start": 34,
        "end": 71,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 40,
            "end": 50,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 43,
                "end": 49
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 55,
            "end": 69,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 58,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 68,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 60,
                "end": 68,
                "exprName": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 68,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 33,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 81,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 81,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 81,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 80,
                "end": 81,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 81,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 83,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 119,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 102,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 102,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 90,
                "end": 102,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 97,
                  "end": 102,
                  "left": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 98,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 99,
                    "end": 102,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 105,
            "end": 119,
            "properties": [
              {
                "type": "Property",
                "start": 107,
                "end": 117,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 108,
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
                  "type": "Literal",
                  "start": 110,
                  "end": 117,
                  "raw": "\"hello\"",
                  "value": "hello",
                  "regex": null,
                  "bigint": null
                }
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
