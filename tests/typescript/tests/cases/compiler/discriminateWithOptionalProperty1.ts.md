__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 123,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 11,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 10,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 14,
        "end": 57,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 14,
            "end": 30,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 16,
                "end": 28,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 20,
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 21,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 23,
                    "end": 28,
                    "literal": {
                      "type": "Literal",
                      "start": 23,
                      "end": 28,
                      "value": false,
                      "raw": "false"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 33,
            "end": 57,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 35,
                "end": 46,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 39,
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 39,
                  "end": 45,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 41,
                    "end": 45,
                    "literal": {
                      "type": "Literal",
                      "start": 41,
                      "end": 45,
                      "value": true,
                      "raw": "true"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 47,
                "end": 55,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 52,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 52,
                  "end": 55,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 54,
                    "end": 55,
                    "typeName": {
                      "type": "Identifier",
                      "start": 54,
                      "end": 55,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 91,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 90,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 90,
            "decorators": [],
            "name": "box",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 90,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 79,
                "end": 90,
                "typeName": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 82,
                  "decorators": [],
                  "name": "Box",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 82,
                  "end": 90,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 83,
                      "end": 89
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 93,
      "end": 123,
      "test": {
        "type": "MemberExpression",
        "start": 97,
        "end": 105,
        "object": {
          "type": "Identifier",
          "start": 97,
          "end": 100,
          "decorators": [],
          "name": "box",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 101,
          "end": 105,
          "decorators": [],
          "name": "done",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 107,
        "end": 123,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 111,
            "end": 121,
            "expression": {
              "type": "MemberExpression",
              "start": 111,
              "end": 120,
              "object": {
                "type": "Identifier",
                "start": 111,
                "end": 114,
                "decorators": [],
                "name": "box",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 115,
                "end": 120,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
