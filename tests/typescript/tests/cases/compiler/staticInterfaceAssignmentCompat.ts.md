__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 31
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Shape",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 35,
                    "end": 40
                  },
                  "typeArguments": null,
                  "start": 35,
                  "end": 40
                },
                "start": 33,
                "end": 40
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Shape",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 62,
                        "end": 67
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 58,
                      "end": 69
                    },
                    "start": 51,
                    "end": 70
                  }
                ],
                "start": 41,
                "end": 76
              },
              "expression": false,
              "start": 31,
              "end": 76
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 18,
            "end": 76
          }
        ],
        "start": 12,
        "end": 78
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 78
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ShapeFactory",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 102
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 115
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 124
                },
                "typeArguments": null,
                "start": 119,
                "end": 124
              },
              "start": 117,
              "end": 124
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 109,
            "end": 125
          }
        ],
        "start": 103,
        "end": 127
      },
      "declare": false,
      "start": 80,
      "end": 127
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ShapeFactory",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 148
                },
                "typeArguments": null,
                "start": 136,
                "end": 148
              },
              "start": 134,
              "end": 148
            },
            "start": 133,
            "end": 148
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 156
          },
          "definite": false,
          "start": 133,
          "end": 156
        }
      ],
      "declare": false,
      "start": 129,
      "end": 157
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 157
}
```
