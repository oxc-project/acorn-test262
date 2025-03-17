__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 154,
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
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 39,
            "end": 58,
            "name": "singletons",
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
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 60,
            "end": 64,
            "name": "i",
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
                  "name": "N",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 66,
          "end": 153,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 70,
              "end": 102,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 76,
                  "end": 101,
                  "id": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 85,
                    "name": "singleton",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 88,
                    "end": 101,
                    "object": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 98,
                      "name": "singletons",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "name": "i",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": true,
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 105,
              "end": 135,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 111,
                  "end": 134,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 111,
                    "end": 122,
                    "elements": [
                      null,
                      {
                        "type": "RestElement",
                        "start": 114,
                        "end": 121,
                        "argument": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 121,
                          "name": "rest",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 134,
                    "name": "singleton",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "const",
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
                "name": "rest",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ]
        },
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
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
