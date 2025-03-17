__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 195,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 28,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 28,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 26,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 52,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 37,
            "decorators": [],
            "name": "a",
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
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 40,
            "end": 52,
            "properties": [
              {
                "type": "Property",
                "start": 44,
                "end": 50,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 47,
                  "end": 50,
                  "raw": "123",
                  "value": 123
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 66,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 55,
        "end": 65,
        "argument": {
          "type": "MemberExpression",
          "start": 62,
          "end": 65,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 68,
      "end": 114,
      "body": {
        "type": "TSInterfaceBody",
        "start": 80,
        "end": 114,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 84,
            "end": 112,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 94,
                "end": 103,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 95,
                  "end": 103,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 97,
                    "end": 103
                  }
                }
              }
            ],
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 112,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 106,
                "end": 112
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 79,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 147,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 124,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 124,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 123,
                "end": 124,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 124,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 127,
            "end": 147,
            "properties": [
              {
                "type": "Property",
                "start": 131,
                "end": 145,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 131,
                  "end": 137,
                  "raw": "'test'",
                  "value": "test"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 139,
                  "end": 145,
                  "raw": "'test'",
                  "value": "test"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 150,
      "end": 167,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 150,
        "end": 166,
        "argument": {
          "type": "MemberExpression",
          "start": 157,
          "end": 166,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 157,
            "end": 158,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 159,
            "end": 165,
            "raw": "'test'",
            "value": "test"
          }
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 169,
      "end": 194,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 169,
        "end": 193,
        "argument": {
          "type": "MemberExpression",
          "start": 180,
          "end": 189,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 180,
            "end": 181,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 182,
            "end": 188,
            "raw": "'test'",
            "value": "test"
          }
        },
        "operator": "delete",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
