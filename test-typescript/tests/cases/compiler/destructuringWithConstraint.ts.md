destructuringWithConstraint.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 175,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 60,
      "body": {
        "type": "TSInterfaceBody",
        "start": 38,
        "end": 60,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 44,
            "end": 58,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 47,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 57,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 50,
                "end": 57
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 37,
        "decorators": [],
        "name": "Props",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 62,
      "end": 174,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 112,
        "end": 174,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 118,
            "end": 146,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 122,
                "end": 145,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 122,
                  "end": 137,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 124,
                      "end": 135,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 124,
                        "end": 127,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 124,
                        "end": 135,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 124,
                          "end": 127,
                          "decorators": [],
                          "name": "foo",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 130,
                          "end": 135,
                          "raw": "false",
                          "value": false
                        }
                      }
                    }
                  ]
                },
                "init": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 145,
                  "decorators": [],
                  "name": "props",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 151,
            "end": 172,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 169,
              "end": 172,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 155,
              "end": 167,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 155,
                "end": 158,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 163,
                "end": 167,
                "raw": "true",
                "value": true
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 74,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 92,
          "end": 110,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 97,
            "end": 110,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 99,
              "end": 110,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 107,
                "end": 110,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 108,
                    "end": 109,
                    "typeName": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 109,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 99,
                "end": 107,
                "decorators": [],
                "name": "Readonly",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 74,
        "end": 91,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 75,
            "end": 90,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 85,
              "end": 90,
              "typeName": {
                "type": "Identifier",
                "start": 85,
                "end": 90,
                "decorators": [],
                "name": "Props",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
