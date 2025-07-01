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
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doThing",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 27
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 31,
                "end": 35
              },
              "start": 29,
              "end": 35
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 20,
            "end": 36
          }
        ],
        "start": 14,
        "end": 38
      },
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "cls",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 47
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 70
                },
                "typeArguments": null,
                "start": 67,
                "end": 70
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "doThing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 84
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 87,
                      "end": 90
                    },
                    "expression": false,
                    "start": 84,
                    "end": 90
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 77,
                  "end": 90
                }
              ],
              "start": 71,
              "end": 92
            },
            "abstract": false,
            "declare": false,
            "start": 50,
            "end": 92
          },
          "definite": false,
          "start": 44,
          "end": 92
        }
      ],
      "declare": false,
      "start": 40,
      "end": 92
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 92
}
```
