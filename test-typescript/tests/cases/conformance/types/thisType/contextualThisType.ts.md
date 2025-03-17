__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 137,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "p",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 23,
                      "end": 29,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 25,
                        "end": 29
                      }
                    },
                    "decorators": [],
                    "optional": false
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
        "name": "Y",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 63,
          "end": 64,
          "expression": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 119,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 78,
            "name": "x",
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
                  "name": "Y",
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
          "init": {
            "type": "ObjectExpression",
            "start": 81,
            "end": 119,
            "properties": [
              {
                "type": "Property",
                "start": 87,
                "end": 117,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 88,
                  "end": 117,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 121,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 135,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 131,
                "end": 132,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
