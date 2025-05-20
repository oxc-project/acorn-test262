__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 157,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 78,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 78,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 76,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 31,
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 76,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 41,
                "end": 76,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 51,
                    "end": 70,
                    "argument": {
                      "type": "NewExpression",
                      "start": 58,
                      "end": 69,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 67,
                        "decorators": [],
                        "name": "Shape",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 33,
                "end": 40,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 35,
                  "end": 40,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 40,
                    "decorators": [],
                    "name": "Shape",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 80,
      "end": 127,
      "body": {
        "type": "TSInterfaceBody",
        "start": 103,
        "end": 127,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 109,
            "end": 125,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 115,
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 124,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 119,
                "end": 124,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 124,
                  "decorators": [],
                  "name": "Shape",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 102,
        "decorators": [],
        "name": "ShapeFactory",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 129,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 156,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 148,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 136,
                "end": 148,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 148,
                  "decorators": [],
                  "name": "ShapeFactory",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 151,
            "end": 156,
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
