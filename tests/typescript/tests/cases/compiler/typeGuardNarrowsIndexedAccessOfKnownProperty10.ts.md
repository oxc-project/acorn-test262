__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 27,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 27,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 25,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 19,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 24,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 63,
            "decorators": [],
            "name": "bar",
            "optional": false,
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
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 42,
                        "end": 52,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 44,
                          "end": 52,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 46,
                            "end": 52
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 53,
                      "end": 61,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 55,
                        "end": 61
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 66,
            "end": 68,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 71,
      "end": 121,
      "directive": null,
      "expression": {
        "type": "ArrowFunctionExpression",
        "start": 71,
        "end": 121,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 85,
          "end": 121,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 88,
              "end": 98,
              "directive": null,
              "expression": {
                "type": "UpdateExpression",
                "start": 88,
                "end": 97,
                "argument": {
                  "type": "MemberExpression",
                  "start": 88,
                  "end": 95,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 91,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 94,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "operator": "++",
                "prefix": false
              }
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
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 108,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 111,
                    "end": 118,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 114,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 118,
                      "decorators": [],
                      "name": "bar",
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
        "expression": false,
        "generator": false,
        "id": null,
        "params": [
          {
            "type": "Identifier",
            "start": 72,
            "end": 80,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 80,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 77,
                "end": 80,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 80,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
