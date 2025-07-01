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
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 37
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 47
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 50,
                "end": 57
              },
              "start": 48,
              "end": 57
            },
            "accessibility": null,
            "static": false,
            "start": 44,
            "end": 58
          }
        ],
        "start": 38,
        "end": 60
      },
      "declare": false,
      "start": 22,
      "end": 60
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 74
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 76
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 90
              },
              "typeArguments": null,
              "start": 85,
              "end": 90
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 75,
            "end": 90
          }
        ],
        "start": 74,
        "end": 91
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 107
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 108,
                      "end": 109
                    },
                    "typeArguments": null,
                    "start": 108,
                    "end": 109
                  }
                ],
                "start": 107,
                "end": 110
              },
              "start": 99,
              "end": 110
            },
            "start": 97,
            "end": 110
          },
          "start": 92,
          "end": 110
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 124,
                        "end": 127
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 124,
                          "end": 127
                        },
                        "right": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 130,
                          "end": 135
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 124,
                        "end": 135
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 124,
                      "end": 135
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 137
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 140,
                  "end": 145
                },
                "definite": false,
                "start": 122,
                "end": 145
              }
            ],
            "declare": false,
            "start": 118,
            "end": 146
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 158
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 163,
                "end": 167
              },
              "start": 155,
              "end": 167
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 169,
              "end": 172
            },
            "alternate": null,
            "start": 151,
            "end": 172
          }
        ],
        "start": 112,
        "end": 174
      },
      "expression": false,
      "start": 62,
      "end": 174
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 174
}
```
