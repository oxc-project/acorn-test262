__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 153,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 153,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 153,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 20,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 20,
          "end": 38,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 21,
              "end": 37,
              "name": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 31,
                "end": 37
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
            "type": "Identifier",
            "start": 39,
            "end": 58,
            "decorators": [],
            "name": "singletons",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 58,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 51,
                "end": 58,
                "elementType": {
                  "type": "TSTupleType",
                  "start": 51,
                  "end": 56,
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "start": 52,
                      "end": 55,
                      "literal": {
                        "type": "Literal",
                        "start": 52,
                        "end": 55,
                        "value": "a",
                        "raw": "\"a\""
                      }
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 60,
            "end": 64,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 64,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 63,
                "end": 64,
                "typeName": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 64,
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 66,
          "end": 153,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 70,
              "end": 102,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 76,
                  "end": 101,
                  "id": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 85,
                    "decorators": [],
                    "name": "singleton",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 88,
                    "end": 101,
                    "object": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 98,
                      "decorators": [],
                      "name": "singletons",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": true
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 105,
              "end": 135,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 111,
                  "end": 134,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 111,
                    "end": 122,
                    "decorators": [],
                    "elements": [
                      null,
                      {
                        "type": "RestElement",
                        "start": 114,
                        "end": 121,
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 121,
                          "decorators": [],
                          "name": "rest",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 134,
                    "decorators": [],
                    "name": "singleton",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ReturnStatement",
              "start": 139,
              "end": 151,
              "argument": {
                "type": "Identifier",
                "start": 146,
                "end": 150,
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
