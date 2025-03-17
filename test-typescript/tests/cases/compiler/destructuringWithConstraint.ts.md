__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 37,
        "name": "Props",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 47,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 57,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 50,
                "end": 57
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
      "type": "FunctionDeclaration",
      "start": 62,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 74,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 92,
          "end": 110,
          "name": "props",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 97,
            "end": 110,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 99,
              "end": 110,
              "typeName": {
                "type": "Identifier",
                "start": 99,
                "end": 107,
                "name": "Readonly",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "ObjectPattern",
                  "start": 122,
                  "end": 137,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 124,
                      "end": 135,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 124,
                        "end": 127,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 124,
                        "end": 135,
                        "left": {
                          "type": "Identifier",
                          "start": 124,
                          "end": 127,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 130,
                          "end": 135,
                          "value": false,
                          "raw": "false"
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 145,
                  "name": "props",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 151,
            "end": 172,
            "test": {
              "type": "BinaryExpression",
              "start": 155,
              "end": 167,
              "left": {
                "type": "Identifier",
                "start": 155,
                "end": 158,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 163,
                "end": 167,
                "value": true,
                "raw": "true"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 169,
              "end": 172,
              "body": []
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 74,
        "end": 91,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 75,
            "end": 90,
            "name": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 85,
              "end": 90,
              "typeName": {
                "type": "Identifier",
                "start": 85,
                "end": 90,
                "name": "Props",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
