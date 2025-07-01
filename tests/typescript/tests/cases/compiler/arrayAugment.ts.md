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
        "name": "Array",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 17
          }
        ],
        "start": 15,
        "end": 18
      },
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
              "name": "split",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "parts",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 40,
                        "end": 46
                      },
                      "start": 38,
                      "end": 46
                    },
                    "start": 33,
                    "end": 46
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 51,
                          "end": 52
                        },
                        "typeArguments": null,
                        "start": 51,
                        "end": 52
                      },
                      "start": 51,
                      "end": 54
                    },
                    "start": 51,
                    "end": 56
                  },
                  "start": 48,
                  "end": 56
                },
                "start": 32,
                "end": 56
              },
              "start": 30,
              "end": 56
            },
            "accessibility": null,
            "static": false,
            "start": 25,
            "end": 57
          }
        ],
        "start": 19,
        "end": 59
      },
      "declare": false,
      "start": 0,
      "end": 59
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 66
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 70,
                "end": 72
              }
            ],
            "start": 69,
            "end": 73
          },
          "definite": false,
          "start": 65,
          "end": 73
        }
      ],
      "declare": false,
      "start": 61,
      "end": 74
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 80
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 84
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "split",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 90
              },
              "optional": false,
              "computed": false,
              "start": 83,
              "end": 90
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 91,
                "end": 92
              }
            ],
            "optional": false,
            "start": 83,
            "end": 93
          },
          "definite": false,
          "start": 79,
          "end": 93
        }
      ],
      "declare": false,
      "start": 75,
      "end": 94
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 102,
                    "end": 108
                  },
                  "start": 102,
                  "end": 110
                },
                "start": 102,
                "end": 112
              },
              "start": 100,
              "end": 112
            },
            "start": 99,
            "end": 112
          },
          "init": null,
          "definite": false,
          "start": 99,
          "end": 112
        }
      ],
      "declare": false,
      "start": 95,
      "end": 113
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 137
}
```
