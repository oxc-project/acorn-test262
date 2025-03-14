__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 138,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 59,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 59,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 25,
            "end": 57,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 30,
              "decorators": [],
              "name": "split",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 56,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 32,
                "end": 56,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 33,
                    "end": 46,
                    "decorators": [],
                    "name": "parts",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 38,
                      "end": 46,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 40,
                        "end": 46
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 48,
                  "end": 56,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 51,
                    "end": 56,
                    "elementType": {
                      "type": "TSArrayType",
                      "start": 51,
                      "end": 54,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 51,
                        "end": 52,
                        "typeName": {
                          "type": "Identifier",
                          "start": 51,
                          "end": 52,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
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
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Array",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 73,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 69,
            "end": 73,
            "elements": [
              {
                "type": "Literal",
                "start": 70,
                "end": 72,
                "raw": "''",
                "value": ""
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 93,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 83,
            "end": 93,
            "arguments": [
              {
                "type": "Literal",
                "start": 91,
                "end": 92,
                "raw": "4",
                "value": 4
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 83,
              "end": 90,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 83,
                "end": 84,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 85,
                "end": 90,
                "decorators": [],
                "name": "split",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 95,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 112,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 112,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 112,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 102,
                "end": 112,
                "elementType": {
                  "type": "TSArrayType",
                  "start": 102,
                  "end": 110,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 102,
                    "end": 108
                  }
                }
              }
            }
          },
          "init": null
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
