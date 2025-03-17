__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 27,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 25,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 19,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 24,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
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
      "start": 28,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 68,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 63,
            "name": "bar",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 63,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 39,
                "end": 63,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 41,
                    "end": 61,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 42,
                        "end": 52,
                        "name": "id",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 44,
                          "end": 52,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 46,
                            "end": 52
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 53,
                      "end": 61,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 55,
                        "end": 61
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 66,
            "end": 68,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 71,
      "end": 121,
      "expression": {
        "type": "ArrowFunctionExpression",
        "start": 71,
        "end": 121,
        "id": null,
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 72,
            "end": 80,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 80,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 77,
                "end": 80,
                "typeName": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 80,
                  "name": "Foo",
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
          "start": 85,
          "end": 121,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 88,
              "end": 98,
              "expression": {
                "type": "UpdateExpression",
                "start": 88,
                "end": 97,
                "operator": "++",
                "prefix": false,
                "argument": {
                  "type": "MemberExpression",
                  "start": 88,
                  "end": 95,
                  "object": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 91,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 94,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                }
              },
              "directive": null
            },
            {
              "type": "VariableDeclaration",
              "start": 100,
              "end": 119,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 106,
                  "end": 118,
                  "id": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 108,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 111,
                    "end": 118,
                    "object": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 114,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 118,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
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
        "typeParameters": null,
        "returnType": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
