__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 212,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 46,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 46,
            "decorators": [],
            "name": "MyClassDecorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 46,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 32,
                "end": 46,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 46,
                  "decorators": [],
                  "name": "ClassDecorator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 96,
            "decorators": [],
            "name": "MyMethodDecorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 81,
                "end": 96,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 96,
                  "decorators": [],
                  "name": "MethodDecorator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 99,
      "end": 211,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 125,
        "end": 211,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 131,
            "end": 157,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 142,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 157,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 155,
                "end": 157,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 143,
                  "end": 153,
                  "decorators": [],
                  "name": "hi",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 145,
                    "end": 153,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 147,
                      "end": 153
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 162,
            "end": 209,
            "accessibility": null,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 162,
                "end": 180,
                "expression": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 180,
                  "decorators": [],
                  "name": "MyMethodDecorator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 191,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 191,
              "end": 209,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 207,
                "end": 209,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 192,
                  "end": 205,
                  "decorators": [],
                  "name": "there",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 197,
                    "end": 205,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 199,
                      "end": 205
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 99,
          "end": 116,
          "expression": {
            "type": "Identifier",
            "start": 100,
            "end": 116,
            "decorators": [],
            "name": "MyClassDecorator",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 124,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
