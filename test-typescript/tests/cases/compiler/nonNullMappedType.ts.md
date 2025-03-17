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
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 89,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
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
                  }
                },
                "init": {
                  "type": "TSNonNullExpression",
                  "start": 92,
                  "end": 99,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 92,
                    "end": 98,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 94,
                      "decorators": [],
                      "name": "p0",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 97,
                      "decorators": [],
                      "name": "p1",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 29,
          "end": 63,
          "decorators": [],
          "name": "p0",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 63,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 33,
              "end": 63,
              "constraint": {
                "type": "TSTypeReference",
                "start": 43,
                "end": 44,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 36,
                "end": 39,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
              },
              "nameType": null,
              "optional": null,
              "readonly": null,
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
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 65,
          "end": 70,
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 67,
            "end": 70,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 69,
              "end": 70,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 28,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 27,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 21,
              "end": 27
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "A",
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
