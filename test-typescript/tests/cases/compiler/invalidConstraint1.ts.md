__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 61,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 36,
        "end": 61,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 42,
            "end": 59,
            "argument": {
              "type": "Identifier",
              "start": 49,
              "end": 58,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 33,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 32,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 24,
              "end": 32,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 26,
                  "end": 30,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
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
                    "start": 27,
                    "end": 30,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 29,
                      "end": 30,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 29,
                        "end": 30,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 89,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 62,
        "end": 88,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 62,
          "end": 63,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 63,
          "end": 86,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 64,
              "end": 70
            },
            {
              "type": "TSTypeLiteral",
              "start": 72,
              "end": 85,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 74,
                  "end": 83,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 75,
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
                    "start": 75,
                    "end": 83,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 77,
                      "end": 83
                    }
                  }
                }
              ]
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
