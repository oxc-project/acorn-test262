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
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
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
              "key": {
                "type": "Identifier",
                "start": 36,
                "end": 39,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 43,
                "end": 44,
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
              "optional": false,
              "readonly": null
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
              "typeName": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 72,
        "end": 102,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 78,
            "end": 100,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 84,
                "end": 99,
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
                    "object": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 94,
                      "decorators": [],
                      "name": "p0",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 97,
                      "decorators": [],
                      "name": "p1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": true
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
