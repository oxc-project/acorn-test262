__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 136,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 41,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 39,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 38,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 21,
                "end": 38,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 22,
                    "end": 29,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 23,
                      "end": 29,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 25,
                        "end": 29
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 31,
                  "end": 38,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 34,
                    "end": 38
                  }
                }
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
      "type": "TSInterfaceDeclaration",
      "start": 43,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 54,
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 63,
          "end": 64,
          "expression": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 65,
        "end": 68,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 119,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 119,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 78,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 78,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 77,
                "end": 78,
                "typeName": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 81,
            "end": 119,
            "properties": [
              {
                "type": "Property",
                "start": 87,
                "end": 117,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 88,
                  "end": 117,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 92,
                    "end": 117,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 102,
                        "end": 111,
                        "argument": {
                          "type": "Identifier",
                          "start": 109,
                          "end": 110,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 121,
      "end": 136,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 135,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 129,
            "end": 135,
            "callee": {
              "type": "MemberExpression",
              "start": 129,
              "end": 132,
              "object": {
                "type": "Identifier",
                "start": 129,
                "end": 130,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 131,
                "end": 132,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
