__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 102,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
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
          "start": 29,
          "end": 63,
          "name": "p0",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 63,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 33,
              "end": 63,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 36,
                "end": 44,
                "name": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 39,
                  "name": "key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 43,
                  "end": 44,
                  "typeName": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 44,
                    "name": "A",
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
                "type": "TSUnionType",
                "start": 47,
                "end": 61,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 47,
                    "end": 49,
                    "members": []
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 52,
                    "end": 61
                  }
                ]
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeReference",
                "start": 43,
                "end": 44,
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "key": {
                "type": "Identifier",
                "start": 36,
                "end": 39,
                "name": "key",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 65,
          "end": 70,
          "name": "p1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 67,
            "end": 70,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 69,
              "end": 70,
              "typeName": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "name": "A",
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
        "start": 72,
        "end": 102,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 78,
            "end": 100,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 84,
                "end": 99,
                "id": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 89,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 85,
                    "end": 89,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 87,
                      "end": 89,
                      "members": []
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSNonNullExpression",
                  "start": 92,
                  "end": 99,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 92,
                    "end": 98,
                    "object": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 94,
                      "name": "p0",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 97,
                      "name": "p1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": true,
                    "optional": false
                  }
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
        "start": 10,
        "end": 28,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 27,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 21,
              "end": 27
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
