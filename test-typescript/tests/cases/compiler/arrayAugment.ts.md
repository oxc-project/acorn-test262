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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Array",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 30,
              "name": "split",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 56,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 32,
                "end": 56,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 33,
                    "end": 46,
                    "name": "parts",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 38,
                      "end": 46,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 40,
                        "end": 46
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
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
      "start": 61,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 73,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
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
                "value": "",
                "raw": "''"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 83,
            "end": 93,
            "callee": {
              "type": "MemberExpression",
              "start": 83,
              "end": 90,
              "object": {
                "type": "Identifier",
                "start": 83,
                "end": 84,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 85,
                "end": 90,
                "name": "split",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 91,
                "end": 92,
                "value": 4,
                "raw": "4"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 112,
            "name": "y",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
