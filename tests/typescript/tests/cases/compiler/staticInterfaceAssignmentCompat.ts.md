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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 78,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 76,
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
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 76,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 33,
                "end": 40,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 35,
                  "end": 40,
                  "typeName": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 40,
                    "decorators": [],
                    "name": "Shape",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
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
                      "callee": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 67,
                        "decorators": [],
                        "name": "Shape",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 80,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 102,
        "decorators": [],
        "name": "ShapeFactory",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 103,
        "end": 127,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 109,
            "end": 125,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 115,
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 124,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 119,
                "end": 124,
                "typeName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 124,
                  "decorators": [],
                  "name": "Shape",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 129,
      "end": 157,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 156,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 148,
                  "decorators": [],
                  "name": "ShapeFactory",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
