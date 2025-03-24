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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
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
          "start": 31,
          "end": 37,
          "name": "key",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 34,
            "end": 37,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 36,
              "end": 37,
              "typeName": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 39,
          "end": 64,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 42,
            "end": 64,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 44,
              "end": 64,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 47,
                "end": 53,
                "name": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "name": "_",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 52,
                  "end": 53,
                  "typeName": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 53,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 56,
                "end": 62
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeReference",
                "start": 52,
                "end": 53,
                "typeName": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 53,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "key": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "name": "_",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "ObjectPattern",
                  "start": 78,
                  "end": 92,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 80,
                      "end": 90,
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 84,
                        "name": "key",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 87,
                        "end": 90,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 98,
                  "name": "obj",
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
            "type": "ExpressionStatement",
            "start": 205,
            "end": 209,
            "expression": {
              "type": "Identifier",
              "start": 205,
              "end": 208,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
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
                "id": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 268,
                  "name": "lorem",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 271,
                  "end": 279,
                  "object": {
                    "type": "Identifier",
                    "start": 271,
                    "end": 274,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 278,
                    "name": "key",
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
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 30,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 29,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 23,
              "end": 29
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
