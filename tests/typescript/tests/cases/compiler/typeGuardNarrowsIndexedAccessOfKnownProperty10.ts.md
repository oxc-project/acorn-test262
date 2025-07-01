__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              },
              "start": 19,
              "end": 24
            },
            "accessibility": null,
            "static": false,
            "start": 16,
            "end": 25
          }
        ],
        "start": 14,
        "end": 27
      },
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 46,
                            "end": 52
                          },
                          "start": 44,
                          "end": 52
                        },
                        "start": 42,
                        "end": 52
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 55,
                        "end": 61
                      },
                      "start": 53,
                      "end": 61
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 41,
                    "end": 61
                  }
                ],
                "start": 39,
                "end": 63
              },
              "start": 37,
              "end": 63
            },
            "start": 34,
            "end": 63
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 66,
            "end": 68
          },
          "definite": false,
          "start": 34,
          "end": 68
        }
      ],
      "declare": false,
      "start": 28,
      "end": 69
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "expression": false,
        "async": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 80
                },
                "typeArguments": null,
                "start": 77,
                "end": 80
              },
              "start": 75,
              "end": 80
            },
            "start": 72,
            "end": 80
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UpdateExpression",
                "operator": "++",
                "prefix": false,
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 88,
                    "end": 91
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 92,
                    "end": 94
                  },
                  "optional": false,
                  "computed": true,
                  "start": 88,
                  "end": 95
                },
                "start": 88,
                "end": 97
              },
              "directive": null,
              "start": 88,
              "end": 98
            },
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 106,
                    "end": 108
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 114
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 115,
                      "end": 118
                    },
                    "optional": false,
                    "computed": false,
                    "start": 111,
                    "end": 118
                  },
                  "definite": false,
                  "start": 106,
                  "end": 118
                }
              ],
              "declare": false,
              "start": 100,
              "end": 119
            }
          ],
          "start": 85,
          "end": 121
        },
        "id": null,
        "generator": false,
        "start": 71,
        "end": 121
      },
      "directive": null,
      "start": 71,
      "end": 121
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 121
}
```
