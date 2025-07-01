__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 20
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 22
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 31,
                "end": 37
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 21,
              "end": 37
            }
          ],
          "start": 20,
          "end": 38
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "singletons",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 52,
                        "end": 55
                      },
                      "start": 52,
                      "end": 55
                    }
                  ],
                  "start": 51,
                  "end": 56
                },
                "start": 51,
                "end": 58
              },
              "start": 49,
              "end": 58
            },
            "start": 39,
            "end": 58
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 64
                },
                "typeArguments": null,
                "start": 63,
                "end": 64
              },
              "start": 61,
              "end": 64
            },
            "start": 60,
            "end": 64
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "singleton",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 85
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "singletons",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 88,
                      "end": 98
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 99,
                      "end": 100
                    },
                    "optional": false,
                    "computed": true,
                    "start": 88,
                    "end": 101
                  },
                  "definite": false,
                  "start": 76,
                  "end": 101
                }
              ],
              "declare": false,
              "start": 70,
              "end": 102
            },
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      null,
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rest",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 117,
                          "end": 121
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null,
                        "start": 114,
                        "end": 121
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 111,
                    "end": 122
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "singleton",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 125,
                    "end": 134
                  },
                  "definite": false,
                  "start": 111,
                  "end": 134
                }
              ],
              "declare": false,
              "start": 105,
              "end": 135
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 150
              },
              "start": 139,
              "end": 151
            }
          ],
          "start": 66,
          "end": 153
        },
        "expression": false,
        "start": 7,
        "end": 153
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 153
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 153
}
```
