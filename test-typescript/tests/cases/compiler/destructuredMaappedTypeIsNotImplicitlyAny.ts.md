__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 282,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 282,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 66,
        "end": 282,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 72,
            "end": 99,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 78,
                "end": 98,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 78,
                  "end": 92,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 80,
                      "end": 90,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 84,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 87,
                        "end": 90,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 98,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 205,
            "end": 209,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 205,
              "end": 208,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 257,
            "end": 280,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 263,
                "end": 279,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 268,
                  "decorators": [],
                  "name": "lorem",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 271,
                  "end": 279,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 271,
                    "end": 274,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 278,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 31,
          "end": 37,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 34,
            "end": 37,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 36,
              "end": 37,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 39,
          "end": 64,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 42,
            "end": 64,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 44,
              "end": 64,
              "constraint": {
                "type": "TSTypeReference",
                "start": 52,
                "end": 53,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 53,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "nameType": null,
              "optional": null,
              "readonly": null,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 56,
                "end": 62
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 30,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 29,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 23,
              "end": 29
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
